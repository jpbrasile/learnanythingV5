
// Subject: Éducation Physique et Sportive
// Topic: Course d'orientation
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Course d'orientation', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce qu'une course d'orientation ?",
    "options": ["Une compétition de course à pied", "Un jeu de société", "Une activité de balades en forêt", "Une discipline de navigation"],
    "correctAnswer": 0
  },
  {
    "question": "Quel outil est souvent utilisé en course d'orientation ?",
    "options": ["Une boussole", "Un GPS", "Un chronomètre", "Un jeu de cartes"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle couleur représente souvent les chemins sur une carte ?",
    "options": ["Vert", "Rouge", "Bleu", "Jaune"],
    "correctAnswer": 3
  },
  {
    "question": "Quel est l'objectif principal d'une course d'orientation ?",
    "options": ["Trouver des balises dans le bon ordre", "Être le plus rapide", "Collecter des points", "Faire le moins de pas possible"],
    "correctAnswer": 0
  },
  {
    "question": "Pourquoi est-il important de savoir lire une carte ?",
    "options": ["Pour dessiner", "Pour naviguer efficacement", "Pour informer les autres", "Pour passer le temps"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de terrain est généralement utilisé pour une course d'orientation ?",
    "options": ["Urbain", "Montagneux", "Forests et parcs", "Plage"],
    "correctAnswer": 2
  },
  {
    "question": "Quel symbole est souvent utilisé pour représenter une balise sur une carte ?",
    "options": ["Un triangle", "Un cercle", "Un carré", "Une étoile"],
    "correctAnswer": 1
  },
  {
    "question": "Quel équipement est essentiel pour une course d'orientation ?",
    "options": ["Des jumelles", "Une boussole", "Un téléphone", "Une gourde"],
    "correctAnswer": 1
  },
  {
    "question": "Comment s'appelle la carte utilisée en course d'orientation ?",
    "options": ["Carte topographique", "Carte routière", "Carte maritime", "Carte scolaire"],
    "correctAnswer": 0
  },
  {
    "question": "La course d'orientation se pratique généralement en :",
    "options": ["Individuel", "Équipe", "Les deux", "En famille"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le terme pour le point de départ d'une course d'orientation ?",
    "options": ["Point de contrôle", "Point de départ", "Zone de départ", "Balise de départ"],
    "correctAnswer": 1
  },
  {
    "question": "Que signifie 'O-Ringen' ?",
    "options": ["Un type de balise", "Une compétition de course d'orientation", "Un type de carte", "Un équipement"],
    "correctAnswer": 1
  },
  {
    "question": "Comment désigne-t-on une personne qui pratique la course d'orientation ?",
    "options": ["O-Runner", "Orientiste", "Cartographe", "Coureur"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le principal défi en course d'orientation ?",
    "options": ["La vitesse", "La stratégie de navigation", "Le choix des vêtements", "L'endurance"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de balise est généralement utilisé pour les courses d'orientation ?",
    "options": ["Balise électronique", "Balise lumineuse", "Balise en papier", "Balise en métal"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est l'importance de la préparation avant une course d'orientation ?",
    "options": ["Pour se stresser", "Pour mieux comprendre le terrain", "Pour se montrer aux autres", "Pour s'amuser"],
    "correctAnswer": 1
  }
];
