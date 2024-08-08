
// Subject: Mathématiques
// Topic: Fractions et décimaux
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Fractions et décimaux', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la fraction équivalente à 0,75 ?",
    "options": ["3/4", "2/3", "1/2", "4/5"],
    "correctAnswer": 0
  },
  {
    "question": "Convertir 2/5 en décimal ?",
    "options": ["0,2", "0,4", "0,5", "0,25"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la somme de 1/4 et 1/2 ?",
    "options": ["3/4", "1/4", "1/2", "2/4"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le résultat de 3/8 - 1/4 ?",
    "options": ["1/8", "2/8", "3/8", "4/8"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la multiplication de 2/3 et 3/5 ?",
    "options": ["1/2", "2/5", "3/5", "6/15"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle fraction représente 0,1 ?",
    "options": ["1/10", "1/5", "1/4", "1/2"],
    "correctAnswer": 0
  },
  {
    "question": "Convertir 3,5 en fraction ?",
    "options": ["7/2", "3/5", "14/5", "1/3"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la fraction simplifiée de 8/12 ?",
    "options": ["2/3", "4/6", "1/2", "3/4"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la valeur décimale de 5/8 ?",
    "options": ["0,625", "0,5", "0,75", "0,8"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le résultat de 4/5 + 1/5 ?",
    "options": ["1", "3/5", "5/5", "4/5"],
    "correctAnswer": 2
  },
  {
    "question": "Convertir 7/4 en décimal ?",
    "options": ["1,75", "1,25", "1,5", "2"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la valeur de 0,8 sous forme de fraction ?",
    "options": ["4/5", "5/4", "1/4", "8/10"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la différence entre 1 et 0,25 ?",
    "options": ["0,75", "0,5", "0,25", "0,1"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le produit de 1/6 et 6 ?",
    "options": ["1", "2", "3", "0,5"],
    "correctAnswer": 0
  },
  {
    "question": "Combien de fois 2/4 est contenu dans 1 ?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 0
  }
];
