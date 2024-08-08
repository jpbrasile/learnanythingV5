
// Subject: Sciences de la Vie et de la Terre
// Topic: Phénomènes géologiques
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Phénomènes géologiques', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel phénomène géologique est causé par le mouvement des plaques tectoniques ?",
    "options": ["Tremblement de terre", "Volcan", "Érosion", "Glissement de terrain"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de volcan est le plus commun ?",
    "options": ["Volcan bouclier", "Volcan composite", "Volcan strato", "Volcan explosif"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le processus de transformation des roches sédimentaires en roches métamorphiques ?",
    "options": ["Érosion", "Sédimentation", "Métamorphisme", "Fusion"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le principal gaz libéré lors d'une éruption volcanique ?",
    "options": ["Oxygène", "Dioxyde de carbone", "Vapeur d'eau", "Dioxyde de soufre"],
    "correctAnswer": 3
  },
  {
    "question": "Quel terme décrit le mouvement des roches et des sols en pente ?",
    "options": ["Érosion", "Glissement de terrain", "Sédimentation", "Tremblement de terre"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la couche la plus externe de la Terre ?",
    "options": ["Le noyau", "Le manteau", "La croûte", "Le magma"],
    "correctAnswer": 2
  },
  {
    "question": "Quel phénomène est causé par la pression accumulée entre les plaques tectoniques ?",
    "options": ["Éruption volcanique", "Tremblement de terre", "Erosion", "Glissement de terrain"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de roche se forme à partir de la solidification du magma ?",
    "options": ["Roche sédimentaire", "Roche métamorphique", "Roche ignée", "Roche fragmentaire"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'outil utilisé pour mesurer les tremblements de terre ?",
    "options": ["Sismographe", "Thermomètre", "Baromètre", "Anémomètre"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de sédiments se dépose lorsque l'eau s'évapore ?",
    "options": ["Silt", "Argile", "Sel", "Gravier"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le plus grand volcan actif du monde ?",
    "options": ["Mauna Loa", "Kilimandjaro", "Vésuve", "Mont Saint Helens"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de plaque tectonique se rencontre au niveau des dorsales océaniques ?",
    "options": ["Plates convergentes", "Plates divergentes", "Plates transformantes", "Plates stagnantes"],
    "correctAnswer": 1
  },
  {
    "question": "Quel phénomène crée des tsunamis ?",
    "options": ["Un tremblement de terre sous-marin", "Un cyclone", "Une inondation", "Un volcan"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le principal agent responsable de l'érosion des roches ?",
    "options": ["Le vent", "L'eau", "Le gel", "Les racines des plantes"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de roche se forme par accumulation de débris organiques ?",
    "options": ["Roche magmatique", "Roche sédimentaire", "Roche métamorphique", "Roche volcanique"],
    "correctAnswer": 1
  }
];
