import streamlit as st
import os
import json
import random
import time
from streamlit_extras.colored_header import colored_header
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import auth

st.set_page_config(layout="wide")

# Initialize session state
if 'user' not in st.session_state:
    st.session_state.user = None
if 'is_admin' not in st.session_state:
    st.session_state.is_admin = False

# # Initialiser Firebase
# if not firebase_admin._apps:
#     try:
#         #cred = credentials.Certificate("learn-anything-431809-ab5f545a36ca.json")
#         cred = credentials.Certificate("hello-world-b0740-67a1f70f7c51.json")
#         firebase_admin.initialize_app(cred)
#     except Exception as e:
#         st.error(f"Erreur lors de l'initialisation de Firebase : {str(e)}")
#         st.stop()

import streamlit as st
import firebase_admin
from firebase_admin import credentials, firestore

def initialize_firebase():
    try:
        # Check if the Firebase app is already initialized
        if not firebase_admin._apps:
            # Access the Firebase credentials from Streamlit secrets
            firebase_creds = st.secrets.get("firebase")
            if firebase_creds:
                # Initialize Firebase with the credentials from secrets
                cred = credentials.Certificate(firebase_creds)
                firebase_admin.initialize_app(cred)
            else:
                # Fallback to loading from a local JSON file
                cred = credentials.Certificate("hello-world-b0740-67a1f70f7c51.json")
                firebase_admin.initialize_app(cred)
    except Exception as e:
        st.error(f"Error initializing Firebase: {str(e)}")
        st.stop()

# Initialize Firebase
initialize_firebase()

# Now you can use Firebase services
db = firestore.client()

# Fonction pour créer un nouvel utilisateur
def create_user(email, password, is_admin=False):
    try:
        user = auth.create_user(email=email, password=password)
        if is_admin:
            auth.set_custom_user_claims(user.uid, {'admin': True})
        return user.uid
    except auth.EmailAlreadyExistsError:
        st.error("Cet email est déjà utilisé.")
        return None

# Fonction pour vérifier si un utilisateur est admin
def is_admin(user_id):
    user = auth.get_user(user_id)
    return user.custom_claims and user.custom_claims.get('admin', False)

# Créer l'utilisateur admin s'il n'existe pas déjà
try:
    admin_user = auth.get_user_by_email("admin@gmail.com")
except auth.UserNotFoundError:
    admin_uid = create_user("admin@gmail.com", "administrator", is_admin=True)
    if admin_uid:
        st.success("Utilisateur admin créé avec succès!")

# Fonction pour obtenir ou créer les préférences de l'utilisateur
def get_or_create_preferences(user_id):
    pref_ref = db.collection("user_preferences").document(user_id)
    pref = pref_ref.get()
    if not pref.exists:
        pref_ref.set({
            "age": None,
            "langue": "Français",
            "ton": "Formel"
        })
    preferences = pref_ref.get().to_dict()
    if preferences.get("ton") not in ["Formel", "Informel", "Amical"]:
        preferences["ton"] = "Formel"
        pref_ref.set(preferences)
    return preferences

# Fonction pour mettre à jour les préférences de l'utilisateur
def update_preferences(user_id, preferences):
    db.collection("user_preferences").document(user_id).set(preferences)

def get_user_sessions(user_id):
    sessions_ref = db.collection("user_sessions").where("user_id", "==", user_id)
    sessions = [doc.to_dict() for doc in sessions_ref.stream()]
    return sorted(sessions, key=lambda x: x.get('date', 0), reverse=True)

def save_session(user_id, score, game_type, sub_type, json_data, file_path):
    db.collection("user_sessions").add({
        "user_id": user_id,
        "date": firestore.SERVER_TIMESTAMP,
        "score": score,
        "game_type": game_type,
        "sub_type": sub_type,
        "json_data": json_data,
        "file_path": file_path
    })

# Interface Streamlit
st.title("Application Client V2 avec Préférences")

# Inscription / Connexion
auth_option = st.sidebar.radio("Choisissez une option", ["Inscription", "Connexion"])

if auth_option == "Inscription":
    with st.sidebar:
        email = st.text_input("Email")
        password = st.text_input("Mot de passe", type="password")
        if st.button("S'inscrire"):
            uid = create_user(email, password)
            if uid:
                st.success(f"Utilisateur créé avec succès! UID: {uid}")
                st.session_state.user_id = uid
                st.session_state.is_admin = is_admin(uid)
else:
    with st.sidebar:
        email = st.text_input("Email")
        password = st.text_input("Mot de passe", type="password")
        if st.button("Se connecter"):
            try:
                user = auth.get_user_by_email(email)
                st.success("Connexion réussie!")
                st.session_state.user_id = user.uid
                st.session_state.is_admin = is_admin(user.uid)
            except auth.UserNotFoundError:
                st.error("Utilisateur non trouvé.")

# Nouvelle fonction pour le jeu contre le robot
def play_against_robot(questions, robot_expertise):
    st.title("Jeu contre le Robot")
    
    if 'competition_started' not in st.session_state:
        st.session_state.competition_started = False
    
    if not st.session_state.competition_started:
        if st.button("Démarrer la compétition"):
            st.session_state.competition_started = True
            st.session_state.player_progress = 0
            st.session_state.robot_progress = 0
            st.session_state.current_question = 0
            random.shuffle(questions)
            st.rerun()
        return

    robot_accuracy = {
        "Débutant": 0.2,
        "Intermédiaire": 0.6,
        "Expert": 0.8
    }[robot_expertise]

    st.write(f"Vous jouez contre un robot {robot_expertise}")
    
    # Barres de progression
    st.write("Votre progression :")
    st.progress(st.session_state.player_progress / 10)
    st.write("Progression du robot :")
    st.progress(st.session_state.robot_progress / 10)

    if st.session_state.current_question < len(questions):
        question = questions[st.session_state.current_question]
        st.write(f"Question {st.session_state.current_question + 1} sur {len(questions)}")
        st.write(question['question'])
        
        answer = st.radio("Choisissez la bonne réponse:", question['options'], key=f"q_{st.session_state.current_question}")
        
        if st.button("Valider"):
            # Réponse du joueur
            if question['options'].index(answer) == question['correctAnswer']:
                st.success("Bonne réponse!")
                st.balloons()
                st.session_state.player_progress = min(10, st.session_state.player_progress + 1)
            else:
                correct_answer = question['options'][question['correctAnswer']]
                st.error(f"Mauvaise réponse. La bonne réponse était : {correct_answer}")
                st.session_state.player_progress = max(0, st.session_state.player_progress - 1)

            # Réponse du robot
            if random.random() < robot_accuracy:
                st.session_state.robot_progress = min(10, st.session_state.robot_progress + 1)
            else:
                st.session_state.robot_progress = max(0, st.session_state.robot_progress - 1)

            st.session_state.current_question += 1
            time.sleep(2)
            st.rerun()
    else:
        st.write("Jeu terminé!")
        if st.session_state.player_progress > st.session_state.robot_progress:
            st.success("Félicitations! Vous avez battu le robot!")
        elif st.session_state.player_progress < st.session_state.robot_progress:
            st.error("Le robot a gagné. Essayez encore!")
        else:
            st.info("Match nul!")
        
        # Sauvegarder la session
        sub_type = os.path.basename(st.session_state.selected_file).replace('.js', '')
        json_data = {
            "robot_expertise": robot_expertise,
            "player_progress": st.session_state.player_progress,
            "robot_progress": st.session_state.robot_progress
        }
        save_session(st.session_state.user_id, st.session_state.player_progress, "Jeu contre le Robot", sub_type, json_data, st.session_state.selected_file)
        
        if st.button("Rejouer"):
            st.session_state.competition_started = False
            st.rerun()

def load_js_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        # Extraire le contenu JSON de la chaîne JavaScript
        start = content.index('[')
        end = content.rindex(']') + 1
        json_content = content[start:end]
        return json.loads(json_content)

def display_quiz(questions):
    quiz_name = os.path.basename(st.session_state.selected_file).replace('_questions.js', '')
    st.title(f"Quiz : {quiz_name}")
    
    # Initialiser l'état du quiz s'il n'existe pas dans la session ou si le quiz vient de démarrer
    if 'quiz_state' not in st.session_state:
        st.session_state.quiz_state = {
            'current_question': 0,
            'score': 0,
            'total_questions': len(questions),
            'progress': 0,
            'answers': []
        }
        random.shuffle(questions)
    
    # Récupérer l'état du quiz depuis la session
    quiz_state = st.session_state.quiz_state

    # Vérifier si le quiz a démarré
    if not st.session_state.get('start_quiz', False):
        st.write("Cliquez sur 'Démarrer le quiz' pour commencer.")
        return

    # Réinitialiser l'état du quiz si start_quiz vient d'être activé
    if st.session_state.get('start_quiz') and 'quiz_state' not in st.session_state:
        st.session_state.quiz_state = {
            'current_question': 0,
            'score': 0,
            'total_questions': len(questions),
            'progress': 0,
            'answers': []
        }
        random.shuffle(questions)

    # Afficher la barre de progression
    progress_color = "#FF9933"  # Orange fun
    st.progress(quiz_state['progress'] / 10, text=f"Progression: {quiz_state['progress']}/10")
    
    # Afficher le score en temps réel
    colored_header(label=f"Score actuel : {quiz_state['score']}/{quiz_state['total_questions']}", 
                   description="", 
                   color_name="yellow-80")

    if quiz_state['current_question'] < quiz_state['total_questions']:
        question = questions[quiz_state['current_question']]
        st.write(f"Question {quiz_state['current_question'] + 1} sur {quiz_state['total_questions']}")
        st.write(question['question'])
        
        answer = st.radio("Choisissez la bonne réponse:", question['options'], key=f"q_{quiz_state['current_question']}")
        
        if st.button("Valider"):
            feedback_placeholder = st.empty()
            correct_answer = question['options'][question['correctAnswer']]
            is_correct = question['options'].index(answer) == question['correctAnswer']
            
            if is_correct:
                feedback_placeholder.success("Bonne réponse! Continuez comme ça!")
                st.balloons()
                quiz_state['score'] += 1
                quiz_state['progress'] = min(10, quiz_state['progress'] + 1)
            else:
                feedback_placeholder.error(f"Pas tout à fait. La bonne réponse était : {correct_answer}")
                feedback_placeholder.info(f"Ne vous découragez pas ! Chaque erreur est une opportunité d'apprendre. La bonne réponse était : {correct_answer}. Vous ferez mieux la prochaine fois !")
                quiz_state['progress'] = max(0, quiz_state['progress'] - 1)
            
            # Ajout d'un délai pour s'assurer que le feedback est visible
            time.sleep(2)
        
            # Enregistrer la réponse de l'utilisateur et la bonne réponse
            quiz_state['answers'].append({
                'question': question['question'],
                'user_answer': answer,
                'correct_answer': correct_answer,
                'is_correct': is_correct
            })
        
            quiz_state['current_question'] += 1
        
            # Mettre à jour l'état dans la session
            st.session_state.quiz_state = quiz_state
        
            # Utiliser st.rerun() pour recharger la page
            st.rerun()
    else:
        st.write(f"Quiz terminé! Votre score final : {quiz_state['score']}/{quiz_state['total_questions']}")
        if quiz_state['progress'] == 10:
            st.balloons()
            st.success("Félicitations ! Vous avez atteint l'objectif de 10 questions justes !")
        elif quiz_state['score'] == quiz_state['total_questions']:
            st.balloons()
            st.success("Félicitations ! Vous avez obtenu un score parfait !")
        elif quiz_state['score'] >= quiz_state['total_questions'] * 0.7:
            st.success("Excellent travail ! Vous avez très bien réussi !")
        elif quiz_state['score'] >= quiz_state['total_questions'] * 0.5:
            st.info("Bon travail ! Il y a encore de la place pour l'amélioration.")
        else:
            st.info("Continuez à pratiquer ! Chaque essai vous rapproche de la maîtrise.")
        
        # Afficher la note finale basée sur la progression
        note = (quiz_state['progress'] / 10) * 20
        st.write(f"Votre note finale : {note:.1f}/20")
        
        # Sauvegarder la session
        sub_type = os.path.basename(st.session_state.selected_file).replace('.js', '')
        json_data = {
            "total_questions": quiz_state['total_questions'],
            "progress": quiz_state['progress'],
            "note": note,
            "answers": quiz_state['answers']
        }
        save_session(st.session_state.user_id, quiz_state['score'], "Quiz", sub_type, json_data, st.session_state.selected_file)
        
        if st.button("Recommencer le quiz"):
            # Réinitialiser l'état dans la session
            st.session_state.quiz_state = {
                'current_question': 0,
                'score': 0,
                'total_questions': len(questions),
                'progress': 0
            }
            random.shuffle(questions)
            st.rerun()

def display_directory_structure(path, base_path="", level=0):
    if base_path == "":
        base_path = path
    
    name = os.path.basename(path)
    indent = "  " * level
    
    if os.path.isdir(path):
        if st.checkbox(f"{indent}📁 {name}", key=path):
            for item in sorted(os.listdir(path)):
                item_path = os.path.join(path, item)
                display_directory_structure(item_path, base_path, level + 1)
    else:
        if st.button(f"{indent}📄 {name}", key=path):
            relative_path = os.path.relpath(path, base_path)
            st.session_state.selected_file = path
            st.info(f"Fichier sélectionné : {relative_path}")

if 'selected_file' not in st.session_state:
    st.session_state.selected_file = None

# Panneau latéral gauche
with st.sidebar:
    st.title("Structure du répertoire")
    root_dir = "subjects_content"  # Assurez-vous que ce chemin est correct
    display_directory_structure(root_dir)

# Contenu principal
if 'user_id' in st.session_state:
    user = auth.get_user(st.session_state.user_id)
    st.title(f"Bienvenue, {user.email}")
    st.write("Bienvenue sur votre dashboard !")

    # Options de jeu
    options = ["Dashboard", "Quiz", "Jeu contre le Robot", "Préférences", "Historique"]
    if st.session_state.is_admin:
        options.append("Administration")
    game_option = st.selectbox("Que voulez-vous faire ?", options)

    if game_option == "Dashboard":
        st.write("Voici votre tableau de bord.")
        # Ajoutez ici les éléments de votre tableau de bord existant

    elif game_option == "Quiz":
        if st.session_state.selected_file and st.session_state.selected_file.endswith('.js'):
            st.write(f"Quiz sélectionné : {os.path.basename(st.session_state.selected_file)}")
            questions = load_js_content(st.session_state.selected_file)
            if 'start_quiz' not in st.session_state:
                st.session_state.start_quiz = False
            if st.button("Démarrer le quiz"):
                st.session_state.start_quiz = True
                if 'quiz_state' in st.session_state:
                    del st.session_state.quiz_state
                st.rerun()
            if st.session_state.start_quiz:
                display_quiz(questions)
                if 'quiz_state' in st.session_state and st.session_state.quiz_state['current_question'] >= st.session_state.quiz_state['total_questions']:
                    st.session_state.start_quiz = False
            else:
                st.write("Cliquez sur 'Démarrer le quiz' pour commencer.")
        else:
            st.write("Sélectionnez un fichier JS dans le panneau de gauche pour commencer un quiz.")

    elif game_option == "Jeu contre le Robot":
        if st.session_state.selected_file and st.session_state.selected_file.endswith('.js'):
            questions = load_js_content(st.session_state.selected_file)
            robot_expertise = st.selectbox("Choisissez le niveau du robot", ["Débutant", "Intermédiaire", "Expert"])
            play_against_robot(questions, robot_expertise)
        else:
            st.write("Sélectionnez un fichier JS dans le panneau de gauche pour commencer le jeu contre le robot.")
    
    elif game_option == "Préférences":
        st.subheader("Gérer vos préférences")
        preferences = get_or_create_preferences(st.session_state.user_id)
        new_age = st.number_input("Âge", value=preferences.get("age", 0))
        new_langue = st.selectbox("Langue préférée", ["Français", "Anglais", "Espagnol"], index=["Français", "Anglais", "Espagnol"].index(preferences.get("langue", "Français")))
        new_ton = st.selectbox("Ton préféré", ["Formel", "Informel", "Amical"], index=["Formel", "Informel", "Amical"].index(preferences.get("ton", "Formel")))
        
        if st.button("Sauvegarder les préférences"):
            update_preferences(st.session_state.user_id, {
                "age": new_age,
                "langue": new_langue,
                "ton": new_ton
            })
            st.success("Préférences mises à jour avec succès!")

    elif game_option == "Historique":
        st.subheader("Historique des sessions")
        sessions = get_user_sessions(st.session_state.user_id)
        for session in sessions:
            sub_type = session.get('sub_type', 'Non spécifié')
            file_path = session.get('file_path', '')
            directory, subdirectory = os.path.split(os.path.dirname(file_path))
            directory = os.path.basename(directory)
            st.write(f"Date: {session['date']}, Score: {session['score']}, Jeu: {session['game_type']}, Répertoire: {directory}, Sous-répertoire: {subdirectory}, Sujet: {sub_type}")

    elif game_option == "Administration" and st.session_state.is_admin:
        st.subheader("Panel d'administration")
        # Ici, vous pouvez ajouter des fonctionnalités d'administration
        # Par exemple, afficher tous les utilisateurs, modifier leurs données, etc.
        st.write("Fonctionnalités d'administration à implémenter.")

    if st.button("Se déconnecter"):
        del st.session_state.user_id
        del st.session_state.is_admin
        st.rerun()
else:
    st.title("Mon Dashboard Streamlit")
    st.write("Veuillez vous connecter ou vous inscrire pour accéder au contenu.")
