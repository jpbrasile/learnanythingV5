
// Subject: Mathématiques
// Topic: Figures planes
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Figures planes', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le nom d'un polygone à quatre côtés ?",
    "options": ["Triangle", "Carré", "Pentagone", "Hexagone"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le périmètre d'un carré de côté 5 cm ?",
    "options": ["10 cm", "15 cm", "20 cm", "25 cm"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type de triangle a tous ses côtés de longueurs différentes ?",
    "options": ["Équilatéral", "Isocèle", "Scalène", "Rectangle"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la somme des angles d'un triangle ?",
    "options": ["90 degrés", "180 degrés", "270 degrés", "360 degrés"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le nom d'un cercle dont le centre est à l'origine du repère ?",
    "options": ["Cercle directeur", "Cercle trigonométrique", "Cercle inscrit", "Cercle circonscrit"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'appelle-t-on un quadrilatère dont les côtés opposés sont parallèles ?",
    "options": ["Trapèze", "Rectangle", "Losange", "Parallélogramme"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle figure a 8 côtés ?",
    "options": ["Hexagone", "Heptagone", "Octogone", "Nonagone"],
    "correctAnswer": 2
  },
  {
    "question": "Comment appelle-t-on un triangle avec un angle droit ?",
    "options": ["Triangle équilatéral", "Triangle isocèle", "Triangle rectangle", "Triangle obtusangle"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le rayon d'un cercle dont le diamètre est de 10 cm ?",
    "options": ["2 cm", "5 cm", "10 cm", "15 cm"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'aire d'un rectangle de longueur 8 cm et de largeur 3 cm ?",
    "options": ["11 cm²", "24 cm²", "32 cm²", "48 cm²"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la définition d'un polygone ?",
    "options": ["Une figure à trois dimensions", "Une figure fermée avec des segments de droite", "Une figure ouverte", "Une courbe"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle figure a des angles tous égaux ?",
    "options": ["Rectangle", "Losange", "Carré", "Triangle"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le nom de la distance du centre d'un cercle à un point sur le cercle ?",
    "options": ["Diamètre", "Circonférence", "Rayon", "Aire"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qu'un trapèze ?",
    "options": ["Un quadrilatère avec 4 côtés égaux", "Un quadrilatère avec un angle droit", "Un quadrilatère avec au moins une paire de côtés parallèles", "Un polygone à 5 côtés"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le volume d'un cube de 3 cm de côté ?",
    "options": ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
    "correctAnswer": 2
  }
];
