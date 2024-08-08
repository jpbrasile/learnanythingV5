
// Subject: Éducation Physique et Sportive
// Topic: Athlétisme
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Athlétisme', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le nom de la course de vitesse de 100 mètres ?",
    "options": ["Sprint", "Marathon", "Haies", "Relais"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le saut le plus pratiqué en athlétisme ?",
    "options": ["Saut en hauteur", "Saut à la perche", "Saut en longueur", "Triple saut"],
    "correctAnswer": 2
  },
  {
    "question": "Quel âge minimum est requis pour participer aux compétitions d'athlétisme junior ?",
    "options": ["12 ans", "14 ans", "16 ans", "18 ans"],
    "correctAnswer": 12
  },
  {
    "question": "Quel est le nom de la compétition internationale d'athlétisme la plus prestigieuse ?",
    "options": ["Jeux Olympiques", "Championnats du Monde", "Coupe du Monde", "Européens"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le résultat du saut en longueur mesuré à partir de quel point ?",
    "options": ["Du bord de la planche de saut", "Du dernier pied posé", "Du premier saut", "De la ligne d'arrivée"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la distance d'un marathon en kilomètres ?",
    "options": ["21 km", "42 km", "58 km", "64 km"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type d'équipement est indispensable pour le lancer de poids ?",
    "options": ["Une perche", "Un poids", "Des chaussures de course", "Une balle"],
    "correctAnswer": 1
  },
  {
    "question": "Qui détient le record mondial du 100 mètres chez les hommes (à l'heure actuelle) ?",
    "options": ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Florence Griffith-Joyner"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'objectif principal du relais 4 x 100 mètres ?",
    "options": ["Sauter le plus loin", "Passer le témoin", "Lancer le poids", "Courir le plus vite"],
    "correctAnswer": 1
  },
  {
    "question": "Quel athlète est connu pour ses performances en decathlon ?",
    "options": ["Usain Bolt", "Oscar Pistorius", "Katarina Johnson-Thompson", "Daley Thompson"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est la hauteur standard de la barre pour le saut en hauteur chez les hommes ?",
    "options": ["1,80 m", "2,00 m", "2,40 m", "2,60 m"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'élément le plus important au départ d'une course de sprint ?",
    "options": ["La vitesse", "Le départ", "La stratégie", "L'endurance"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le but du lancer de disque ?",
    "options": ["Jeter le disque le plus loin possible", "Jeter le disque le plus haut", "Faire tourner le disque", "Courir avec le disque"],
    "correctAnswer": 0
  },
  {
    "question": "Qui a remporté le plus de médailles d'or aux Jeux Olympiques dans les épreuves d'athlétisme ?",
    "options": ["Paavo Nurmi", "Usain Bolt", "Carl Lewis", "Jesse Owens"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'élément technique le plus difficile dans le saut à la perche ?",
    "options": ["Le saut", "L'élan", "Le positionnement", "La réception"],
    "correctAnswer": 1
  }
];
