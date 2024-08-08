
// Subject: Éducation Physique et Sportive
// Topic: Escalade
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Escalade', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est l'équipement de base nécessaire pour l'escalade?",
    "options": ["Corde", "Bâton de ski", "Vélo", "Raquettes"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le but principal de l'escalade?",
    "options": ["Atteindre le sommet", "Descendre rapidement", "Rester au sol", "Faire des sauts"],
    "correctAnswer": 0
  },
  {
    "question": "Comment appelle-t-on la technique de grimper sans équipement?",
    "options": ["Escalade sportive", "Escalade libre", "Escalade traditionnelle", "Escalade en salle"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la première chose à vérifier avant de commencer à grimper?",
    "options": ["Les ancrages", "Le chrono", "Le temps", "Le niveau de fatigue"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'effet du baudrier?",
    "options": ["Sécuriser le grimpeur", "Augmenter la vitesse", "Réduire le poids", "Faciliter la descente"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est l'importance de la communication entre le grimpeur et l'assureur?",
    "options": ["Il n'y en a pas", "Pour éviter les accidents", "Pour se distraire", "Pour gagner du temps"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le nom de la corde utilisée pour l'escalade?",
    "options": ["Corde de pêche", "Corde d'escalade", "Corde de jardin", "Corde à sauter"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un exemple de technique de grimpe?",
    "options": ["Le saut", "Le rappel", "La danse", "La marche"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la fonction des chaussons d'escalade?",
    "options": ["Protéger les pieds", "Augmenter l'adhérence", "Rendre la grimpe plus facile", "Avoir du style"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle surface est souvent utilisée pour l'escalade en salle?",
    "options": ["Terrain de rugby", "Mur artificiel", "Plage", "Parc"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la principale source de danger en escalade?",
    "options": ["Les insectes", "Les chutes", "Les rochers glissants", "Les autres grimpeurs"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le terme utilisé pour la descente contrôlée d'une voie d'escalade?",
    "options": ["Ascension", "Rappel", "Chute", "Aterrissage"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type d'escalade utilise des prises naturelles sur des falaises?",
    "options": ["Escalade artificielle", "Escalade libre", "Escalade sportive", "Escalade traditionnelle"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est l'importance de la taille des prises?",
    "options": ["Elles ne comptent pas", "Elles aident à grimper", "Elles rendent l'escalade plus difficile", "Elles sont une source de distraction"],
    "correctAnswer": 1
  },
  {
    "question": "Quel équipement est essentiel pour l'escalade en extérieur?",
    "options": ["Sac à dos", "Réchaud", "Casque", "Boussole"],
    "correctAnswer": 2
  }
];
