
// Subject: Sciences de la Vie et de la Terre
// Topic: Fonctionnement du système nerveux
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Fonctionnement du système nerveux', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le rôle principal des neurones dans le système nerveux?",
    "options": ["Réguler la circulation sanguine", "Transmettre des signaux électriques", "Produire des hormones", "Fournir de l'énergie"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le nom de l'enveloppe protectrice des neurones?",
    "options": ["Axone", "Dendrite", "Myéline", "Synapse"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle partie du système nerveux est responsable des réflexes?",
    "options": ["Système nerveux central", "Système nerveux périphérique", "Système nerveux autonome", "Système nerveux somatique"],
    "correctAnswer": 0
  },
  {
    "question": "Comment s'appelle la connexion entre deux neurones?",
    "options": ["Synapse", "Récepteurs", "Impulsion", "Nerf"],
    "correctAnswer": 0
  },
  {
    "question": "Quel organe est considéré comme le centre de contrôle du système nerveux?",
    "options": ["Cerveau", "Coeur", "Foie", "Estomac"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de neurone transmet des signaux de l'environnement au système nerveux central?",
    "options": ["Neurones moteurs", "Neurones sensitifs", "Neurones intermédiaires", "Neurones réflexes"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la fonction principale de la moelle épinière?",
    "options": ["Réguler la température", "Transmettre des signaux entre le cerveau et le corps", "Produire des neurotransmetteurs", "Contrôler les muscles"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le rôle des neurotransmetteurs?",
    "options": ["Transporter l'oxygène", "Transmettre des signaux entre neurones", "Protéger les neurones", "Multiplier les neurones"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le système responsable de la réponse 'combat ou fuite'?",
    "options": ["Système nerveux central", "Système nerveux parasympathique", "Système nerveux sympathique", "Système nerveux autonome"],
    "correctAnswer": 2
  },
  {
    "question": "Quel organe détecte les stimuli sensoriels?",
    "options": ["Cerveau", "Yeux", "Cervelet", "Moelle épinière"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de cellules soutient et protège les neurones?",
    "options": ["Cellules gliales", "Cellules musculaires", "Cellules sanguines", "Cellules épithéliales"],
    "correctAnswer": 0
  },
  {
    "question": "Quel processus permet aux neurones de communiquer entre eux?",
    "options": ["Mouvement", "Propagation", "Transmission nerveuse", "Réflexion"],
    "correctAnswer": 2
  },
  {
    "question": "Comment s'appelle la partie du cerveau responsable de l'équilibre et de la coordination?",
    "options": ["Cortex", "Cervelet", "Bulbe rachidien", "Thalamus"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le rôle du système nerveux autonome?",
    "options": ["Contrôler les actions volontaires", "Réguler les fonctions involontaires", "Gérer les réflexes", "Coordonner les mouvements"],
    "correctAnswer": 1
  },
  {
    "question": "Les réflexes sont des réponses...",
    "options": ["Conscientes", "Volontaires", "Inconscientes", "Programmées"],
    "correctAnswer": 2
  }
];
