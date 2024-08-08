
// Subject: Physique-Chimie
// Topic: Actions mécaniques
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Actions mécaniques', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le principe fondamental des actions mécaniques ?",
    "options": ["La loi de la gravitation", "La conservation de l'énergie", "La réaction des forces", "Le mouvement des planètes"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est l'unité de mesure de la force ?",
    "options": ["Joule", "Newton", "Pascal", "Watt"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'appelle-t-on la force de gravité ?",
    "options": ["La force qui attire les objets vers le centre de la Terre", "La force qui oppose un mouvement", "La force exercée par un ressort", "La force de frottement"],
    "correctAnswer": 0
  },
  {
    "question": "Si un objet est en équilibre, quelles sont les forces qui agissent sur lui ?",
    "options": ["Une seule force", "Aucune force", "Deux forces opposées de même intensité", "Plusieurs forces de même direction"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle force s'oppose au mouvement d'un objet sur une surface ?",
    "options": ["La force normale", "La force de gravité", "La force de frottement", "La force centripète"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le travail effectué par une force ?",
    "options": ["Force multipliée par la distance parcourue dans la direction de la force", "Force multipliée par la vitesse", "Force divisée par le temps", "Force moins la résistance"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom de la force exercée par un ressort ?",
    "options": ["Force de tension", "Force de compression", "Force de rappel", "Force d'élasticité"],
    "correctAnswer": 3
  },
  {
    "question": "Laquelle des affirmations suivantes est correcte concernant la deuxième loi de Newton ?",
    "options": ["F=ma indique que la force est égale à la masse multipliée par l'accélération", "La vitesse d'un objet reste constante", "Un objet en mouvement ne peut pas être arrêté", "La force inertielle est toujours égale à zéro"],
    "correctAnswer": 0
  },
  {
    "question": "Quel rôle joue la friction dans les actions mécaniques ?",
    "options": ["Elle augmente la vitesse", "Elle réduit la vitesse", "Elle n'a aucun effet", "Elle change la direction"],
    "correctAnswer": 1
  },
  {
    "question": "Quel terme désigne la force qui attire les objets vers la Terre ?",
    "options": ["Électromagnétisme", "Gravité", "Force nucléaire", "Force de friction"],
    "correctAnswer": 1
  },
  {
    "question": "Comment appelle-t-on un mouvement avec une vitesse constante ?",
    "options": ["Mouvement uniforme", "Mouvement accéléré", "Mouvement circulaire", "Mouvement alternatif"],
    "correctAnswer": 0
  },
  {
    "question": "Le moment d'une force est lié à quoi ?",
    "options": ["Son intensité et sa direction", "Son intensité et sa distance au point de pivot", "Son angle uniquement", "Sa direction uniquement"],
    "correctAnswer": 1
  },
  {
    "question": "Quel effet a une force d'un mètre de long sur un levier ?",
    "options": ["Amplifie la force", "Réduit la force", "Ne change rien", "Inverse la direction"],
    "correctAnswer": 0
  },
  {
    "question": "Que produit un mouvement circulaire ?",
    "options": ["Une force centripète", "Une force de frottement", "Une force de gravité", "Une force d'inertie"],
    "correctAnswer": 0
  },
  {
    "question": "Comment se nomme la force qui maintient un objet en mouvement circulaire ?",
    "options": ["Force centrifuge", "Force centripète", "Force de gravité", "Force normale"],
    "correctAnswer": 1
  }
];
