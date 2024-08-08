
// Subject: Technologie
// Topic: Innovations technologiques
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Innovations technologiques', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est l'invention qui a permis la communication instantanée à distance ?",
    "options": ["Télégraphe", "Téléphone", "Ordinateur", "Radio"],
    "correctAnswer": 1
  },
  {
    "question": "Quel appareil utilise des signaux radio pour transmettre des informations ?",
    "options": ["Micro-ondes", "Ordinateur", "Smartphone", "Tablette"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle technologie est à la base des voitures autonomes ?",
    "options": ["Intelligence Artificielle", "Énergie solaire", "Biotechnologie", "Robotique"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'impact principal de l'Internet des objets (IdO) ?",
    "options": ["Amélioration de la communication", "Automatisation des tâches", "Accès à l'information", "Augmentation du télétravail"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le principal avantage des imprimantes 3D ?",
    "options": ["Création de modèles physiques", "Impression couleur", "Faible coût de production", "Impression instantanée"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle technologie est utilisée pour les paiements sans contact ?",
    "options": ["Bluetooth", "Wi-Fi", "NFC", "SSH"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qu'un smartphone ?",
    "options": ["Un téléphone intelligent", "Une tablette", "Un ordinateur portable", "Un appareil photo"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est une utilisation moderne de la réalité augmentée ?",
    "options": ["Filtres sur les photos", "Navigation GPS", "Téléchargement de films", "Transcription de documents"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le rôle principal de l’intelligence artificielle ?",
    "options": ["Améliorer les performances humaines", "Automatiser les industries", "Rassembler les données", "Prendre des décisions autonomes"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle innovation a révolutionné le stockage des données ?",
    "options": ["Disques durs", "Clés USB", "Cloud computing", "CD-ROM"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est un exemple d'innovation technologique dans le domaine médical ?",
    "options": ["Imagerie par résonance magnétique", "Télévision", "Téléphone fixe", "Machine à écrire"],
    "correctAnswer": 0
  },
  {
    "question": "Qu'est-ce qu'une application mobile ?",
    "options": ["Un logiciel pour ordinateurs", "Un site web", "Un programme pour smartphones et tablettes", "Un jeu vidéo"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'objectif principal des technologies vertes ?",
    "options": ["Rendre les entreprises plus rentables", "Réduire l'impact environnemental", "Créer de nouveaux emplois", "Améliorer les infrastructures"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle innovation a permis le développement de l'énergie renouvelable ?",
    "options": ["Panneaux solaires", "Fours à micro-ondes", "Lampes à incandescence", "Radiateurs électriques"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le principal avantage du télétravail rendu possible par la technologie ?",
    "options": ["Plus de temps de trajet", "Augmentation de la productivité", "Réduction des heures de travail", "Moins de réunions"],
    "correctAnswer": 1
  }
];
