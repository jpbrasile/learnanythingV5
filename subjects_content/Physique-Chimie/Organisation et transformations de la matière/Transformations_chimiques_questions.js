
// Subject: Physique-Chimie
// Topic: Transformations chimiques
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Transformations chimiques', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce qu'une réaction chimique ?",
    "options": [
      "Un changement d'état de la matière",
      "Une transformation des réactifs en produits",
      "Un mélange de deux liquides",
      "Une réaction physique"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le produit de la combustion du carbone ?",
    "options": [
      "Oxygène",
      "Dioxyde de carbone",
      "Monoxyde de carbone",
      "Eau"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Quels facteurs peuvent influencer la vitesse d'une réaction chimique ?",
    "options": [
      "La température",
      "La concentration des réactifs",
      "La surface de contact",
      "Toutes les réponses ci-dessus"
    ],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est la somme des masses des réactifs dans une réaction chimique ?",
    "options": [
      "Inférieure à la somme des produits",
      "Égal à la masse des produits",
      "Supérieure à la masse des produits",
      "Variable selon la type de réaction"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de réaction est la photosynthèse ?",
    "options": [
      "Endothermique",
      "Exothermique",
      "Catalytique",
      "Oxydante"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Que se produit lors d'une réaction de neutralisation ?",
    "options": [
      "Un acide et un base réagissent pour former un sel et de l'eau",
      "Deux acides réagissent ensemble",
      "Deux bases réagissent ensemble",
      "Un gaz est produit"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la formule chimique de l'eau ?",
    "options": [
      "O2",
      "H2O",
      "CO2",
      "H2O2"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la loi de conservation de la masse ?",
    "options": [
      "La masse se crée",
      "La masse est détruite",
      "La masse reste constante",
      "La masse change durant une réaction"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'indicateur de pH qui devient rouge dans un milieu acide ?",
    "options": [
      "Bleu de bromothymol",
      "Phénolphtaline",
      "Tournesol",
      "Indicateur universel"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Quels types de réactions sont les combustions ?",
    "options": [
      "Exothermiques",
      "Endothermiques",
      "Acido-basiques",
      "Redox"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Lorsqu'un métal réagit avec un acide, quel gaz est souvent libéré ?",
    "options": [
      "Hydrogène",
      "Oxygène",
      "Dioxyde de carbone",
      "Azote"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Quelle transformation est un exemple de réaction chimique ?",
    "options": [
      "L'eau qui gèle",
      "Du papier qui brûle",
      "Un glaçon qui fond",
      "Du sel qui se dissout dans l'eau"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Que signifie la notation d'un réactif sous forme de solide (s) ?",
    "options": [
      "L'état liquide",
      "L'état gazeux",
      "L'état solide",
      "L'état de solution"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qu'un catalyseur ?",
    "options": [
      "Une substance qui augmente la vitesse d'une réaction chimique sans être consommée",
      "Une substance qui ralentit la réaction",
      "Un produit de la réaction",
      "Un réactif"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Quel symbole représente l'élément fer dans le tableau périodique ?",
    "options": [
      "F",
      "Fe",
      "Ir",
      "Fr"
    ],
    "correctAnswer": 1
  }
];
