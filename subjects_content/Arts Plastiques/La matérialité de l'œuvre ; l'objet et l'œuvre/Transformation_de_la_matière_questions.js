
// Subject: Arts Plastiques
// Topic: Transformation de la matière
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Transformation de la matière', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la méthode pour séparer un mélange de sable et de sel?",
    "options": ["Filtration", "Evaporation", "Distillation", "Centrifugation"],
    "correctAnswer": 0
  },
  {
    "question": "Quel changement de l'état de la matière se produit lorsque l'eau gèle?",
    "options": ["Solidification", "Fusion", "Vaporisation", "Sublimation"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le terme utilisé pour décrire un changement chimique?",
    "options": ["Evaporation", "Réaction", "Condensation", "Dissolution"],
    "correctAnswer": 1
  },
  {
    "question": "Que se passe-t-il lors de la distillation du vin?",
    "options": ["Il devient solide", "Il perd de l'eau", "Il s'évapore", "Il fermente"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la forme de l'eau à l'état gazeux?",
    "options": ["Vapeur", "Glace", "Liquéfaction", "Brouillard"],
    "correctAnswer": 0
  },
  {
    "question": "Dans quel état la matière a une forme définie et un volume fixe?",
    "options": ["Solide", "Liquide", "Gazeux", "Plasma"],
    "correctAnswer": 0
  },
  {
    "question": "Quel processus transforme un solide directement en gaz?",
    "options": ["Condensation", "Sublimation", "Fusion", "Evaporation"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle solution est utilisée pour déceler la présence de l'amidon?",
    "options": ["Solution de Lugol", "Eau distillée", "Acide chlorhydrique", "Alcool"],
    "correctAnswer": 0
  },
  {
    "question": "Lors de l'ébullition, quel est le changement d'état de l'eau?",
    "options": ["Fusion", "Condensation", "Vaporisation", "Sublimation"],
    "correctAnswer": 2
  },
  {
    "question": "Quel phénomène est associé à un changement d'énergie?",
    "options": ["Evaporation", "Mélange", "Condensation", "Sublimation"],
    "correctAnswer": 0
  },
  {
    "question": "À quelle température l'eau gèle-t-elle sous pression atmosphérique normale?",
    "options": ["0°C", "100°C", "50°C", "-10°C"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la substance principale dans la formation des nuages?",
    "options": ["Vapeur d'eau", "Glace", "Nitrogène", "Oxygène"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle transformation survient lors de la cuisson d'un œuf?",
    "options": ["Changement physique", "Changement chimique", "Evaporation", "Condensation"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le principal facteur qui affecte la vitesse d'évaporation?",
    "options": ["Température", "Poids", "Couleur", "Texture"],
    "correctAnswer": 0
  },
  {
    "question": "Pourquoi l'eau salée a un point d'ébullition plus élevé que l'eau douce?",
    "options": ["Densité", "Composition", "Impuretés", "Pression"],
    "correctAnswer": 1
  }
];
