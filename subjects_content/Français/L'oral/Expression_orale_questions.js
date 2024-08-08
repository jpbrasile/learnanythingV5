
// Subject: Français
// Topic: Expression orale
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Expression orale', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce que l'expression orale ?",
    "options": ["Une forme d'écriture", "La capacité à parler", "Un style de peinture", "Un exercice de mathématiques"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un élément essentiel de l'expression orale ?",
    "options": ["La grammaire", "La clarté", "La longueur", "La couleur"],
    "correctAnswer": 1
  },
  {
    "question": "Comment peut-on améliorer sa diction ?",
    "options": ["En chantant", "En écrivant", "En écoutant", "En dormant"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est une bonne pratique lors d'une présentation ?",
    "options": ["Parler rapidement", "Regarder le sol", "Maintenir le contact visuel", "Utiliser un volume bas"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qui peut distraire l'auditoire pendant une présentation ?",
    "options": ["Une bonne posture", "Un langage corporel positif", "Des gestes excessifs", "Une voix claire"],
    "correctAnswer": 2
  },
  {
    "question": "Pourquoi est-il important de connaître son sujet ?",
    "options": ["Pour impressionner le public", "Pour rester confus", "Pour répondre aux questions", "Pour parler sans notes"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est un bon moyen de pratiquer l'expression orale ?",
    "options": ["Lire à haute voix", "Regarder la télévision", "Dessiner", "Écrire des histoires"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle technique peut aider à gérer le stress avant de parler en public ?",
    "options": ["Ignorer l'audience", "Prendre de grandes respirations", "Parler encore plus vite", "Regarder son téléphone"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le rôle du langage corporel dans la communication ?",
    "options": ["Il n'est pas important", "Il renforce le message", "Il doit être un mystère", "Il doit être évité"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de voix est conseillé pour l'expression orale ?",
    "options": ["Une voix monotone", "Une voix forte et claire", "Une voix chuchotée", "Une voix trop aiguë"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un bon moyen de capter l'attention du public ?",
    "options": ["Commencer par une blague", "Parler sans introduction", "Utiliser des mots compliqués", "Éviter les anecdotes"],
    "correctAnswer": 0
  },
  {
    "question": "Comment structurer une présentation efficacement ?",
    "options": ["Sans plan précis", "Avec une introduction, un corps et une conclusion", "En sautant des idées", "Uniquement par des graphiques"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est une bonne manière de conclure une présentation ?",
    "options": ["Ne pas conclure", "Récapituler les points clés", "Poser des questions ouvertes", "Raconter une autre histoire"],
    "correctAnswer": 1
  },
  {
    "question": "Pourquoi est-il important d'écouter les retours après une présentation ?",
    "options": ["Pour se sentir triste", "Pour éviter de s'améliorer", "Pour savoir ce qui a bien fonctionné", "Pour ignorer les critiques"],
    "correctAnswer": 2
  },
  {
    "question": "Quel impact a la confiance en soi sur l'expression orale ?",
    "options": ["Elle n'a aucun impact", "Elle diminue la clarté", "Elle aide à être plus crédible", "Elle rend la présentation moins efficace"],
    "correctAnswer": 2
  }
];
