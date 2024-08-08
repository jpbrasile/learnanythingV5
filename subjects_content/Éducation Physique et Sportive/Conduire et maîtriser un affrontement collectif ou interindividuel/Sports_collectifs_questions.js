
// Subject: Éducation Physique et Sportive
// Topic: Sports collectifs
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Sports collectifs', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel sport collectif se joue avec un ballon rond sur un terrain en herbe ?",
    "options": ["Basket-ball", "Handball", "Football", "Rugby"],
    "correctAnswer": 2
  },
  {
    "question": "Combien de joueurs y a-t-il dans une équipe de basket-ball sur le terrain ?",
    "options": ["5", "7", "9", "11"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'objectif principal du rugby ?",
    "options": ["Marquer des paniers", "Marquer des essais", "Marquer des buts", "Marquer des points"],
    "correctAnswer": 1
  },
  {
    "question": "Dans quel sport collectif les joueurs utilisent-ils un casque et des protège-épaules ?",
    "options": ["Football américain", "Basket-ball", "Cricket", "Baseball"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nombre minimum de joueurs pour former une équipe de volley-ball ?",
    "options": ["4", "6", "7", "8"],
    "correctAnswer": 1
  },
  {
    "question": "Dans quel sport collectif doit-on faire passer un disque à travers des poteaux ?",
    "options": ["Ultimate frisbee", "Hockey sur glace", "Handball", "Football"],
    "correctAnswer": 0
  },
  {
    "question": "Quel sport collectif se joue sur un terrain rectangulaire avec des lignes de touche et de but ?",
    "options": ["Football", "Basket-ball", "Volleyball", "Hockey"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le but du handball ?",
    "options": ["Tirer dans une cage", "Marquer des paniers", "Faire des passes", "Avoir moins de fautes"],
    "correctAnswer": 0
  },
  {
    "question": "Dans quel sport y a-t-il une équipe de gardiens de but ?",
    "options": ["Basket-ball", "Football", "Volleyball", "Rugby"],
    "correctAnswer": 1
  },
  {
    "question": "Quel sport collectif mélange football et rugby ?",
    "options": ["Handball", "Football américain", "Basket-ball", "Frisbee"],
    "correctAnswer": 1
  },
  {
    "question": "Qui peut toucher le ballon avec les mains en football ?",
    "options": ["Defenseurs", "Milieux de terrain", "Attaquants", "Gardien de but"],
    "correctAnswer": 3
  },
  {
    "question": "Quels sont les points marqués lorsque l'on réussit un tir dans un panier de basket d'une certaine distance ?",
    "options": ["3 points", "2 points", "1 point", "4 points"],
    "correctAnswer": 0
  },
  {
    "question": "Quel sport collectif est joué sur un terrain de sable avec des équipes de deux joueurs ?",
    "options": ["Volleyball de plage", "Basket-ball", "Football", "Hockey"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le temps de jeu standard d'un match de handball ?",
    "options": ["30 minutes", "40 minutes", "60 minutes", "90 minutes"],
    "correctAnswer": 2
  },
  {
    "question": "Quel sport consiste à marquer des buts en frappant un ballon avec un bâton ?",
    "options": ["Golf", "Hockey sur gazon", "Rugby", "Football"],
    "correctAnswer": 1
  }
];
