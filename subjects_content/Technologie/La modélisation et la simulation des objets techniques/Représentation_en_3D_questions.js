
// Subject: Technologie
// Topic: Représentation en 3D
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Représentation en 3D', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le nom de la forme géométrique à six faces carrées ?",
    "options": ["Cube", "Cylindre", "Pyramide", "Prisme"],
    "correctAnswer": 0
  },
  {
    "question": "Combien de faces a une sphère ?",
    "options": ["1", "2", "3", "0"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le volume d'un cube dont le côté mesure 3 cm ?",
    "options": ["9 cm³", "27 cm³", "18 cm³", "12 cm³"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la formule pour calculer le volume d'un cylindre ?",
    "options": ["πr²h", "2πrh", "3πr²", "πr² + 2r"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle forme est obtenue en tournant un rectangle autour d'un de ses côtés ?",
    "options": ["Cône", "Cylindre", "Sphère", "Prisme"],
    "correctAnswer": 1
  },
  {
    "question": "Comment appelle-t-on une figure à quatre faces ?",
    "options": ["Carre", "Tetraèdre", "Hexagone", "Cube"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la différence entre un prisme et une pyramide ?",
    "options": ["Le prisme a des faces parallèles", "La pyramide a une face de moins", "Les deux sont identiques", "Le prisme a un sommet"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nombre total de faces sur un cube ?",
    "options": ["4", "6", "8", "12"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de figure est une pyramide à base carrée ?",
    "options": ["2D", "3D", "1D", "Hololithique"],
    "correctAnswer": 1
  },
  {
    "question": "Comment appelle-t-on la ligne où deux faces d'un polyèdre se rejoignent ?",
    "options": ["Arête", "Sommet", "Face", "Surface"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom de la projection 3D utilisée dans l'architecture ?",
    "options": ["Projection orthogonale", "Projection isométrique", "Projection stéréographique", "Projection conique"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle forme géométrique a le plus de faces ?",
    "options": ["Cube", "Tetraèdre", "Dodecaèdre", "Prisme"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le volume d'un prisme rectangulaire de base 4 cm, 5 cm et de hauteur 3 cm ?",
    "options": ["60 cm³", "20 cm³", "12 cm³", "30 cm³"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est la caractéristique principale d'un solid polygonal ?",
    "options": ["Aucune face plane", "Toutes les faces sont planes", "Un seul sommet", "Aucune arête"],
    "correctAnswer": 1
  },
  {
    "question": "Quel outil utilise-t-on souvent pour visualiser des objets en 3D ?",
    "options": ["Règle", "Compas", "Modélisation 3D", "Couteau"],
    "correctAnswer": 2
  }
];
