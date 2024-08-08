
// Subject: Mathématiques
// Topic: Statistiques
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Statistiques', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le mode de cette série de nombres : 2, 3, 5, 3, 8, 3, 7 ?",
    "options": ["2", "3", "5", "8"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la médiane de la série : 7, 1, 4, 9, 6 ?",
    "options": ["4", "6", "7", "9"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le chiffre moyen de cette série : 10, 20, 30, 40 ?",
    "options": ["20", "25", "30", "35"],
    "correctAnswer": 1
  },
  {
    "question": "Si le score des tests est noté SR, combien de résultats sont supérieurs à 75 ? (SR : 76, 89, 67, 55, 90, 45)",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": 2
  },
  {
    "question": "Quel pourcentage de la classe a eu un score positif ? (Scores : 45, 50, 0, 20, 35)",
    "options": ["20%", "40%", "60%", "80%"],
    "correctAnswer": 1
  },
  {
    "question": "Dans un échantillon de 50 élèves, 30 aiment le chocolat. Quel est le pourcentage d'élèves qui aiment le chocolat ?",
    "options": ["30%", "60%", "70%", "50%"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le minimum de la série suivante : 12, 8, 19, 4, 6 ?",
    "options": ["4", "6", "8", "12"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la plage des données suivantes : 3, 8, 6, 1, 10 ?",
    "options": ["7", "8", "9", "10"],
    "correctAnswer": 0
  },
  {
    "question": "Si un groupe de 20 étudiants a un score total de 1 500, quel est leur score moyen ?",
    "options": ["70", "75", "80", "85"],
    "correctAnswer": 1
  },
  {
    "question": "Lequel de ces énoncés est vrai concernant un histogramme ?",
    "options": ["Il représente des données discrètes.", "Il montre des données continues.", "Il ne peut pas avoir d'espaces entre les barres.", "Il est toujours en 3D."],
    "correctAnswer": 2
  },
  {
    "question": "Dans une série de test où 5 élèves ont obtenu les scores suivants : 12, 15, 15, 10, 18, quel est le mode ?",
    "options": ["10", "12", "15", "18"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type de graphique utiliseriez-vous pour représenter des catégories de données ?",
    "options": ["Histogramme", "Diagramme circulaire", "Graphique linéaire", "Graphique en barres"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est l'intervalle de classe si on a les valeurs : 15-20, 21-25, 26-30 ?",
    "options": ["5", "7", "10", "15"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la variance des nombres suivants : 2, 4, 6 ?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 1
  },
  {
    "question": "Dans une classe de 30 élèves, si 18 sont des garçons, combien de filles y a-t-il ?",
    "options": ["12", "10", "8", "14"],
    "correctAnswer": 0
  }
];
