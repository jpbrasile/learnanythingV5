
// Subject: Physique-Chimie
// Topic: Conversions d'énergie
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Conversions d'énergie', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est l'unité de mesure de l'énergie dans le système international ?",
    "options": ["Newton", "Joule", "Watt", "Kilogramme"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle formule représente l'énergie cinétique ?",
    "options": ["E = mc²", "E = 1/2 mv²", "E = Fd", "E = Pt"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle forme d'énergie est liée à la position d'un objet ?",
    "options": ["Énergie cinétique", "Énergie potentielle", "Énergie thermique", "Énergie chimique"],
    "correctAnswer": 1
  },
  {
    "question": "Si un objet d'une masse de 2 kg tombe, quelle est son énergie potentielle à 10 m de hauteur ? (g = 9,81 m/s²)",
    "options": ["20 J", "19,62 J", "39,24 J", "9,81 J"],
    "correctAnswer": 1
  },
  {
    "question": "Quels sont les deux types principaux d'énergie renouvelable ?",
    "options": ["Énergie éolienne et biomasse", "Énergie fossile et nucléaire", "Énergie thermique et chimique", "Énergie cinétique et potentielle"],
    "correctAnswer": 0
  },
  {
    "question": "Quel appareil transforme l'énergie électrique en énergie lumineuse ?",
    "options": ["Batterie", "Ampoule", "Chauffage", "Ventilateur"],
    "correctAnswer": 1
  },
  {
    "question": "Lorsqu'un véhicule freine, quelle forme d'énergie est principalement transformée ?",
    "options": ["Énergie thermique", "Énergie cinétique", "Énergie potentielle", "Énergie chimique"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la source d'énergie utilisée dans les centrales nucléaires ?",
    "options": ["Pétrole", "Charbon", "Uranium", "Solaire"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle énergie est produite par la chaleur du Soleil ?",
    "options": ["Énergie électrique", "Énergie nucléaire", "Énergie solaire", "Énergie chimique"],
    "correctAnswer": 2
  },
  {
    "question": "Comment appelle-t-on l'énergie stockée dans les aliments ?",
    "options": ["Énergie chimique", "Énergie mécanique", "Énergie électromagnétique", "Énergie thermique"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type d'énergie est généré par le mouvement de l'eau ?",
    "options": ["Énergie thermique", "Énergie hydroélectrique", "Énergie cinétique", "Énergie électrique"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle forme d'énergie est libérée lors d'une réaction chimique ?",
    "options": ["Énergie mécanique", "Énergie sonore", "Énergie chimique", "Énergie nucléaire"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle unité mesure la puissance ?",
    "options": ["Joule", "Watt", "Coulomb", "Ohm"],
    "correctAnswer": 1
  },
  {
    "question": "Que se passe-t-il avec l'énergie dans un système fermé ?",
    "options": ["Elle augmente", "Elle diminue", "Elle est conservée", "Elle disparaît"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type d'énergie est utilisé pour faire fonctionner une voiture électrique ?",
    "options": ["Énergie thermique", "Énergie solaire", "Énergie cinétique", "Énergie électrique"],
    "correctAnswer": 3
  }
];
