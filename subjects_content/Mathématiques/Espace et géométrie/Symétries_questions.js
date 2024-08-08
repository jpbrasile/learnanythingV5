
// Subject: Mathématiques
// Topic: Symétries
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Symétries', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel type de symétrie a une figure identique lorsqu'on la plie en deux?",
    "options": ["Symétrie axiale", "Symétrie centrale", "Symétrie de rotation", "Symétrie miroir"],
    "correctAnswer": 0
  },
  {
    "question": "Une étoile à cinq branches possède une symétrie rotative de quel ordre?",
    "options": ["1", "2", "5", "10"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle figure a une symétrie centrale?",
    "options": ["Un carré", "Un rectangle", "Un cercle", "Une demi-lune"],
    "correctAnswer": 2
  },
  {
    "question": "La figure suivante possède quelle type de symétrie? (Cochez la bonne option)",
    "options": ["Pas de symétrie", "Symétrie axiale", "Symétrie centrale", "Symétrie de glissement"],
    "correctAnswer": 1
  },
  {
    "question": "La symétrie axiale se réfère à quelle opération?",
    "options": ["Rotation autour d'un point", "Réflexion par rapport à un axe", "Translation", "Dilatisation"],
    "correctAnswer": 1
  },
  {
    "question": "Un triangle équilatéral a combien d'axes de symétrie?",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": 2
  },
  {
    "question": "Une figure qui s'obtient en retournant une autre figure par rapport à un axe est appelée:",
    "options": ["Symétrie", "Rotation", "Translation", "Réflexion"],
    "correctAnswer": 3
  },
  {
    "question": "Si un rectangle a une symétrie axiale, quel est le nombre de ses axes de symétrie?",
    "options": ["1", "2", "4", "0"],
    "correctAnswer": 1
  },
  {
    "question": "Une symétrie de translation peut être décrite comme:",
    "options": ["Déplacement d'une figure sans la déformer", "Changement de taille", "Changement de couleur", "Rotation d'une figure"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle figure n'a pas de symétrie axiale?",
    "options": ["Cercle", "Rectangle", "Triangle scalène", "Carré"],
    "correctAnswer": 2
  },
  {
    "question": "Dans un carré, chaque angle peut être décomposé par rapport à quel type de symétrie?",
    "options": ["Symétrie axiale", "Symétrie centrée", "Symétrie de translation", "Aucune"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle transformation géométrique est utilisée pour dessiner l'image miroir d'une figure?",
    "options": ["Translation", "Réflexion", "Rotation", "None"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de symétrie est représenté par une fleur avec des pétales identiques répartis autour de son centre?",
    "options": ["Symétrie axiale", "Symétrie de rotation", "Symétrie miroir", "Aucune"],
    "correctAnswer": 1
  },
  {
    "question": "Un losange a combien d'axes de symétrie?",
    "options": ["0", "1", "2", "4"],
    "correctAnswer": 2
  },
  {
    "question": "La symétrie centrale se produit autour de quel point?",
    "options": ["Un axe", "Un plan", "Un centre", "Aucune"],
    "correctAnswer": 2
  }
];;
