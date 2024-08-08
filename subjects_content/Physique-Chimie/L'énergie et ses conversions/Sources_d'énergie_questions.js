
// Subject: Physique-Chimie
// Topic: Sources d'énergie
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Sources d'énergie', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la principale source d'énergie renouvelable ?",
    "options": ["Énergie nucléaire", "Énergie solaire", "Énergie fossile", "Énergie géothermique"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de source d'énergie est le charbon ?",
    "options": ["Renouvelable", "Non renouvelable", "Biomasse", "Énergie hydraulique"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle source d'énergie utilise la force du vent ?",
    "options": ["Énergie solaire", "Énergie éolienne", "Énergie hydraulique", "Énergie biomasse"],
    "correctAnswer": 1
  },
  {
    "question": "Quel gaz à effet de serre est principalement émis par la combustion des énergies fossiles ?",
    "options": ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle source d'énergie est considérée comme la plus propre ?",
    "options": ["Énergie fossile", "Énergie nucléaire", "Énergie solaire", "Énergie éolienne"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce que la biomasse ?",
    "options": ["Énergie provenant des déchets", "Énergie solaire", "Énergie hydraulique", "Énergie éolienne"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la principale source d'énergie utilisée pour produire de l'électricité dans le monde ?",
    "options": ["Énergie solaire", "Énergie éolienne", "Énergie éolienne", "Énergie fossile"],
    "correctAnswer": 3
  },
  {
    "question": "Qu'est-ce que l'énergie géothermique ?",
    "options": ["Énergie provenant de la chaleur terrestre", "Énergie du soleil", "Énergie du vent", "Énergie des vagues"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est une caractéristique de l'énergie hydraulique ?",
    "options": ["Dépend du soleil", "Peut causer des inondations", "Est illimitée", "Ne nécessite pas d'infrastructure"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un inconvénient de l'énergie nucléaire ?",
    "options": ["Sources inépuisables", "Risques d'accidents", "Pollution sonore", "Coûts d'installation faibles"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle source d'énergie est la principale responsable de la déforestation ?",
    "options": ["Énergie solaire", "Énergie éolienne", "Biomasse", "Énergie hydraulique"],
    "correctAnswer": 2
  },
  {
    "question": "Quel pays produit le plus d'énergie solaire ?",
    "options": ["États-Unis", "Allemagne", "Chine", "France"],
    "correctAnswer": 2
  },
  {
    "question": "L'énergie marémotrice utilise :",
    "options": ["Le mouvement de l'eau et des vagues", "La chaleur de la Terre", "La force du vent", "Les marées"],
    "correctAnswer": 3
  },
  {
    "question": "Quel type de carburant est le pétrole ?",
    "options": ["Renouvelable", "Non renouvelable", "Énergie propre", "Énergie durable"],
    "correctAnswer": 1
  },
  {
    "question": "L'énergie éolienne dépend de :",
    "options": ["Le soleil", "La chaleur de la terre", "Le mouvement de l'air", "L'eau"],
    "correctAnswer": 2
  }
];
