
// Subject: Mathématiques
// Topic: Angles
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Angles', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est l'angle droit en degrés ?",
    "options": ["90", "180", "45", "360"],
    "correctAnswer": 0
  },
  {
    "question": "Un angle obtus mesure plus de :",
    "options": ["90 degrés", "180 degrés", "360 degrés", "45 degrés"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type d'angle mesure moins de 90 degrés ?",
    "options": ["Obtus", "Aigu", "Droit", "Plat"],
    "correctAnswer": 1
  },
  {
    "question": "Si deux angles sont complémentaires, la somme de leurs mesures est :",
    "options": ["90 degrés", "180 degrés", "360 degrés", "270 degrés"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'angle supplémentaire d'un angle de 30 degrés ?",
    "options": ["60 degrés", "90 degrés", "120 degrés", "150 degrés"],
    "correctAnswer": 2
  },
  {
    "question": "Quels angles sont égaux dans un triangle équilatéral ?",
    "options": ["0", "30", "60", "90"],
    "correctAnswer": 2
  },
  {
    "question": "Convertissez l'angle 1/2 tour en degrés.",
    "options": ["90", "180", "270", "360"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la somme des angles d'un triangle ?",
    "options": ["90 degrés", "180 degrés", "360 degrés", "270 degrés"],
    "correctAnswer": 1
  },
  {
    "question": "Quel angle est formé par les aiguilles d'une montre à 3 heures ?",
    "options": ["90 degrés", "180 degrés", "270 degrés", "360 degrés"],
    "correctAnswer": 0
  },
  {
    "question": "Qu'appelle-t-on un angle plein ?",
    "options": ["0 degrés", "90 degrés", "180 degrés", "360 degrés"],
    "correctAnswer": 3
  },
  {
    "question": "Deux angles adjacents sont :",
    "options": ["Complémentaires", "Séquents", "Consécutifs", "Opposés"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'angle au sommet formé par deux droites qui se croisent ?",
    "options": ["Aigu", "Obtus", "Droit", "Plat"],
    "correctAnswer": 0
  },
  {
    "question": "Si un angle mesure 45 degrés, quel est son complément ?",
    "options": ["45 degrés", "135 degrés", "90 degrés", "180 degrés"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qu'un angle aigu ?",
    "options": ["Moins de 90 degrés", "De 90 à 180 degrés", "Plus de 180 degrés", "Exactement 90 degrés"],
    "correctAnswer": 0
  },
  {
    "question": "Quel angle mesure un quart de tour ?",
    "options": ["90", "180", "270", "360"],
    "correctAnswer": 0
  }
];
