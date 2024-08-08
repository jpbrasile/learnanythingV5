
// Subject: Mathématiques
// Topic: Aires et volumes
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Aires et volumes', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la formule pour calculer l'aire d'un rectangle ?",
    "options": ["Longueur x Largeur", "2 x (Longueur + Largeur)", "π x (Rayon)^2", "Longueur x Largeur x Hauteur"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le volume d'un cube dont le côté mesure 3 cm ?",
    "options": ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la formule pour calculer l'aire d'un cercle ?",
    "options": ["2πr", "πr²", "πd", "πr³"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la formule pour calculer le volume d'un prisme rectangulaire ?",
    "options": ["Aire de la base x Hauteur", "Longueur x Largeur", "2 x (Longueur x Hauteur)", "Longueur + Largeur + Hauteur"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le volume d'une sphère de rayon 2 cm ? (Utilisez π ≈ 3.14)",
    "options": ["8.38 cm³", "23.76 cm³", "33.51 cm³", "50.24 cm³"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est l'aire d'un triangle avec une base de 4 cm et une hauteur de 3 cm ?",
    "options": ["6 cm²", "12 cm²", "7 cm²", "10 cm²"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le volume d'une pyramide dont la base est un carré de 4 cm de côté et la hauteur est de 3 cm ?",
    "options": ["12 cm³", "16 cm³", "8 cm³", "24 cm³"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la formule pour calculer l'aire d'un trapèze ?",
    "options": ["(Base1 + Base2) x Hauteur / 2", "Base1 x Base2", "Hauteur x Base", "Base1 + Base2 + Hauteur"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le volume d'un cylindre de rayon 3 cm et de hauteur 5 cm ? (Utilisez π ≈ 3.14)",
    "options": ["94.2 cm³", "141.3 cm³", "47.1 cm³", "28.26 cm³"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est l'aire d'un carré dont le côté mesure 5 cm ?",
    "options": ["10 cm²", "15 cm²", "25 cm²", "20 cm²"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le volume d'une boîte rectangulaire de dimensions 4 cm x 3 cm x 2 cm ?",
    "options": ["12 cm³", "24 cm³", "36 cm³", "48 cm³"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la formule pour calculer le volume d'une boule ?",
    "options": ["4/3 x π x (Rayon)^3", "π x (Rayon)^2 x Hauteur", "2/3 x π x (Rayon)^3", "π x (Diamètre)^2"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le périmètre d'un cercle de rayon 4 cm ? (Utilisez π ≈ 3.14)",
    "options": ["12.56 cm", "25.12 cm", "20.72 cm", "15.28 cm"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le volume d'un cône de rayon 2 cm et de hauteur 5 cm ? (Utilisez π ≈ 3.14)",
    "options": ["6.28 cm³", "12.56 cm³", "20.94 cm³", "33.33 cm³"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est l'aire d'un losange dont la diagonale 1 mesure 6 cm et la diagonale 2 mesure 8 cm ?",
    "options": ["24 cm²", "48 cm²", "30 cm²", "36 cm²"],
    "correctAnswer": 0
  }
];
