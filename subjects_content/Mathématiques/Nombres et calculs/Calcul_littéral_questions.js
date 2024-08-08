
// Subject: Mathématiques
// Topic: Calcul littéral
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Calcul littéral', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Que signifie le terme 'variable' en calcul littéral ?",
    "options": ["Une constante", "Une lettre qui représente un nombre", "Un calcul complexe", "Un nombre entier"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la forme développée de l'expression (x + 3)(x - 2) ?",
    "options": ["x^2 + x - 6", "x^2 + x + 6", "x^2 - 6", "x^2 + 5x - 6"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le coefficient de x dans l'expression 5x + 3 ?",
    "options": ["3", "5", "1", "0"],
    "correctAnswer": 1
  },
  {
    "question": "Simplifiez l'expression 3(x + 4) - 2(x - 1).",
    "options": ["x + 14", "x + 10", "5x + 12", "5x + 10"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la valeur de 2x + 4 lorsque x = 3 ?",
    "options": ["10", "12", "8", "14"],
    "correctAnswer": 1
  },
  {
    "question": "L'expression 7y - 2y + 3 est équivalente à :",
    "options": ["5y + 3", "9y + 3", "7y - 3", "5y - 2"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le résultat de 4a + 2b lorsque a = 2 et b = 3 ?",
    "options": ["10", "14", "12", "8"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est l'expression simplifiée de 2(x + 5) + 3(x - 1) ?",
    "options": ["5x + 7", "5x + 8", "5x + 10", "5x + 5"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la forme factorisée de l'expression x^2 - 9 ?",
    "options": ["(x + 3)(x - 3)", "(x + 1)(x - 1)", "(x - 3)(x + 3)", "(x^2 - 3)"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la somme de 3a + 4b et 2a + 5b ?",
    "options": ["5a + 9b", "6a + 5b", "5a + 7b", "6a + 9b"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le produit de (x + 2) et (x - 2) ?",
    "options": ["x^2 - 4", "x^2 + 4", "2x + 4", "x^2 - 2"],
    "correctAnswer": 0
  },
  {
    "question": "Transformez l'expression 8x - 4 dans sa forme factorisée.",
    "options": ["4(2x - 1)", "2(4x - 2)", "8(x - 1/2)", "2(2x - 1)"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la valeur de l'expression 5 + 3(2x - 4) lorsque x = 2 ?",
    "options": ["-1", "7", "11", "5"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'équivalent de 12y + 10y ?",
    "options": ["22y", "10y", "12y", "15y"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'opposé de l'expression 5a - 3 ?",
    "options": ["-5a + 3", "5a + 3", "-5a - 3", "-5a + 3"],
    "correctAnswer": 0
  }
];
