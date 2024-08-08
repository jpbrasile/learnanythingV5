
// Subject: Langues Vivantes
// Topic: Lecture de textes variés
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Lecture de textes variés', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le thème principal du texte ?",
    "options": ["L'amitié", "L'environnement", "La technologie", "L'histoire"],
    "correctAnswer": 1
  },
  {
    "question": "Quel personnage est le narrateur ?",
    "options": ["Personnage A", "Personnage B", "Personnage C", "Personnage D"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est l'intention de l'auteur dans ce texte ?",
    "options": ["Informer", "Divertir", "Persuader", "Éduquer"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la modalité du texte ?",
    "options": ["Narratif", "Descriptif", "Argumentatif", "Poétique"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le point de vue du narrateur ?",
    "options": ["Premier personne", "Deuxième personne", "Troisième personne", "Inconnu"],
    "correctAnswer": 0
  },
  {
    "question": "Quel sentiment le texte cherche-t-il à transmettre ?",
    "options": ["Joie", "Tristesse", "Colère", "Peine"],
    "correctAnswer": 1
  },
  {
    "question": "Quel événement clé est mentionné dans le texte ?",
    "options": ["Événement A", "Événement B", "Événement C", "Événement D"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le public cible du texte ?",
    "options": ["Enfants", "Adolescents", "Adultes", "Seniors"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le ton du texte ?",
    "options": ["Sérieux", "Humoristique", "Émotionnel", "Neutre"],
    "correctAnswer": 3
  },
  {
    "question": "Quels mots-clés sont importants dans le texte ?",
    "options": ["Mot A", "Mot B", "Mot C", "Mot D"],
    "correctAnswer": 2
  },
  {
    "question": "Comment le texte se termine-t-il ?",
    "options": ["Avec une conclusion", "Avec une question", "Avec un événement", "Avec une citation"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la structure générale du texte ?",
    "options": ["Introduction, Développement, Conclusion", "Prologue, Chapitre, Épilogue", "Thèse, Antithèse, Synthèse", "Liste de points"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de texte est-il ?",
    "options": ["Article", "Poème", "Roman", "Essai"],
    "correctAnswer": 1
  },
  {
    "question": "Qui est l'auteur du texte ?",
    "options": ["Auteur A", "Auteur B", "Auteur C", "Auteur D"],
    "correctAnswer": 3
  },
  {
    "question": "Quel message l'auteur souhaite-t-il faire passer ?",
    "options": ["Message A", "Message B", "Message C", "Message D"],
    "correctAnswer": 1
  }
];
