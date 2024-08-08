
// Subject: Éducation Physique et Sportive
// Topic: Sports de raquette
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Sports de raquette', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle raquette est utilisée dans le badminton?",
    "options": ["Raquette en bois", "Raquette de tennis", "Raquette de badminton", "Raquette de squash"],
    "correctAnswer": 2
  },
  {
    "question": "Quel sport se joue avec des balles et des raquettes et se joue sur un terrain en plein air?",
    "options": ["Tennis", "Badminton", "Squash", "Ping-pong"],
    "correctAnswer": 0
  },
  {
    "question": "Combien de joueurs sont impliqués dans un match de tennis en simple?",
    "options": ["2", "4", "6", "1"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le score nécessaire pour gagner un set au tennis?",
    "options": ["4 points", "6 jeux", "7 jeux", "10 jeux"],
    "correctAnswer": 1
  },
  {
    "question": "Lequel de ces sports de raquette se joue à l'intérieur?",
    "options": ["Tennis", "Badminton", "Squash", "Tous les trois"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'appelle-t-on le coup gagnant au badminton?",
    "options": ["Smash", "Drop", "Clear", "Drive"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom de l'aire de jeu au tennis?",
    "options": ["Court", "Terrain", "Stade", "Parc"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de raquette est principalement utilisé pour le squash?",
    "options": ["Raquette en aluminium", "Raquette en carbone", "Raquette en acier", "Raquette classique"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la hauteur du filet de badminton au centre?",
    "options": ["1,55 m", "1,40 m", "1,50 m", "1,20 m"],
    "correctAnswer": 1
  },
  {
    "question": "Qui est le joueur de tennis masculin le plus titré de l'histoire?",
    "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la distance d'un service au squash?",
    "options": ["2 mètres", "3 mètres", "5 mètres", "1 mètre"],
    "correctAnswer": 0
  },
  {
    "question": "Quel sport utilise un volant?",
    "options": ["Tennis", "Badminton", "Squash", "Ping-pong"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le nom de la zone où le joueur sert au tennis?",
    "options": ["Zone de service", "Zone de jeu", "Touche", "Area de jeu"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la durée d'un match de badminton?",
    "options": ["11 points", "15 points", "21 points", "30 points"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le format du match au tennis en double?",
    "options": ["1 set", "2 sets", "3 sets", "4 sets"],
    "correctAnswer": 2
  }
];
