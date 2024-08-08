
// Subject: Technologie
// Topic: Simulation numérique
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Simulation numérique', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce qu'une simulation numérique ?",
    "options": ["Un modèle physique", "Une méthode de calcul", "Une expérience de laboratoire", "Une représentation visuelle"],
    "correctAnswer": 1
  },
  {
    "question": "Lequel des éléments suivants est essentiel pour une simulation numérique ?",
    "options": ["Des données précises", "Un logiciel spécifique", "Un langage de programmation", "Un rapport écrit"],
    "correctAnswer": 0
  },
  {
    "question": "Quel outil est couramment utilisé pour la simulation numérique ?",
    "options": ["Word", "Excel", "MATLAB", "PowerPoint"],
    "correctAnswer": 2
  },
  {
    "question": "Dans une simulation, que représente un 'modèle' ?",
    "options": ["Un ensemble d'instructions", "Une collection de données", "Une abstraction de la réalité", "Un appareil physique"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le principal avantage de la simulation numérique ?",
    "options": ["Elle est toujours exacte", "Elle permet d'explorer des scénarios impossibles à tester", "Elle nécessite peu de ressources", "Elle remplace les expériences physiques"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle discipline utilise souvent la simulation numérique ?",
    "options": ["La littérature", "L'histoire", "La physique", "La géographie"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type de données est typiquement utilisé dans une simulation ?",
    "options": ["Données historiques", "Données en temps réel", "Données théoriques", "Toutes les réponses ci-dessus"],
    "correctAnswer": 3
  },
  {
    "question": "Quel est l'objectif principal d'une simulation ?",
    "options": ["Comprendre le passé", "Prédire des résultats futurs", "Apprendre de nouvelles compétences", "Tester des connaissances"],
    "correctAnswer": 1
  },
  {
    "question": "Quel pourrait être un exemple de simulation numérique dans la vie réelle ?",
    "options": ["Une maquette de maison", "Un jeu vidéo", "Un exercice sportif", "Une étude de cas"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce qu'une 'variable' dans une simulation ?",
    "options": ["Un résultat attendu", "Un paramètre qui peut changer", "Une mesure constante", "Une hypothèse"],
    "correctAnswer": 1
  },
  {
    "question": "Comment les résultats d'une simulation peuvent-ils être analysés ?",
    "options": ["En les comparant à des résultats théoriques", "En les exposant à l'ensemble de la classe", "En les transformant en graphique", "En les envoyant par e-mail"],
    "correctAnswer": 0
  },
  {
    "question": "Quel facteur peut influencer la précision d'une simulation ?",
    "options": ["Le choix du logiciel", "La qualité des données", "Le temps consacré à la simulation", "Tous les facteurs ci-dessus"],
    "correctAnswer": 3
  },
  {
    "question": "Quel terme décrit une simulation qui imite un processus réel ?",
    "options": ["Simulation parallèle", "Simulation à l'échelle", "Simulation réelle", "Simulation abstraite"],
    "correctAnswer": 2
  },
  {
    "question": "Les simulations numériques peuvent-elles remplacer des expériences physiques ?",
    "options": ["Oui, toujours", "Non, jamais", "Cela dépend du contexte", "Uniquement dans les sciences sociales"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qui est souvent enregistré lors d'une simulation ?",
    "options": ["Les décisions personnelles", "Les résultats et statistiques", "Les émotions des participants", "Les commentaires des spectateurs"],
    "correctAnswer": 1
  }
];
