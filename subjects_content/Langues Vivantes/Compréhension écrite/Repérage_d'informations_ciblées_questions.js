
// Subject: Langues Vivantes
// Topic: Repérage d'informations ciblées
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Repérage d'informations ciblées', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la capitale de la France ?",
    "options": ["Paris", "Londres", "Madrid", "Berlin"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le plus grand océan du monde ?",
    "options": ["Atlantique", "Indien", "Arctique", "Pacifique"],
    "correctAnswer": 3
  },
  {
    "question": "Qui a écrit 'Les Misérables' ?",
    "options": ["Victor Hugo", "Émile Zola", "Gustave Flaubert", "Molière"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'élément chimique dont le symbole est O ?",
    "options": ["Or", "Oxygène", "Hydrogène", "Carbone"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la formule de l'eau ?",
    "options": ["H2O", "O2", "CO2", "NaCl"],
    "correctAnswer": 0
  },
  {
    "question": "Quel événement a marqué le début de la Révolution française ?",
    "options": ["La prise de la Bastille", "La déclaration des droits de l'homme", "L'exécution de Louis XVI", "Le couronnement de Napoléon"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la monnaie utilisée au Japon ?",
    "options": ["Yen", "Won", "Dollar", "Euro"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'auteur de 'Le Petit Prince' ?",
    "options": ["Antoine de Saint-Exupéry", "Jules Verne", "Marcel Proust", "Albert Camus"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la distance moyenne entre la Terre et la Lune ?",
    "options": ["384 400 km", "500 000 km", "1 000 000 km", "150 000 km"],
    "correctAnswer": 0
  },
  {
    "question": "Combien de continents y a-t-il sur Terre ?",
    "options": ["5", "6", "7", "4"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le résultat de 8 fois 7 ?",
    "options": ["54", "56", "58", "60"],
    "correctAnswer": 1
  },
  {
    "question": "Qui est le président de la France en 2023 ?",
    "options": ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Marine Le Pen"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la capitale de l'Espagne ?",
    "options": ["Madrid", "Lisbonne", "Rome", "Berlin"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le symbole chimique du fer ?",
    "options": ["F", "Fe", "Ir", "Au"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'instrument utilisé pour mesurer la température ?",
    "options": ["Baromètre", "Thermomètre", "Hygromètre", "Lavomètre"],
    "correctAnswer": 1
  },
  {
    "question": "Qui a peint la Mona Lisa ?",
    "options": ["Vincent van Gogh", "Pablo Picasso", "Léonard de Vinci", "Claude Monet"],
    "correctAnswer": 2
  }
];
