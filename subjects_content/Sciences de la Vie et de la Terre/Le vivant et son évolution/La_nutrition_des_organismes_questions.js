
// Subject: Sciences de la Vie et de la Terre
// Topic: La nutrition des organismes
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'La nutrition des organismes', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce que la nutrition?",
    "options": ["Le processus d'absorption des nutriments", "L'activité physique", "La reproduction", "L'étude des animaux"],
    "correctAnswer": 0
  },
  {
    "question": "Quels sont les trois macronutriments principaux?",
    "options": ["Glucides, protéines, lipides", "Vitamines, minéraux, eau", "Fibres, antioxydants, acides gras", "Sucres, sels, alcalins"],
    "correctAnswer": 0
  },
  {
    "question": "Quel nutriment est la principale source d'énergie pour l'organisme?",
    "options": ["Protéines", "Glucides", "Vitamines", "Eau"],
    "correctAnswer": 1
  },
  {
    "question": "Quel rôle jouent les protéines dans le corps?",
    "options": ["Fournir de l'énergie", "Construire et réparer les tissus", "Stocker des graisses", "Augmenter la vitesse"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle vitamine est particulièrement importante pour la santé des os?",
    "options": ["Vitamine A", "Vitamine B12", "Vitamine C", "Vitamine D"],
    "correctAnswer": 3
  },
  {
    "question": "Quel aliment est riche en fibres?",
    "options": ["Pain blanc", "Fruits et légumes", "Viande", "Produits laitiers"],
    "correctAnswer": 1
  },
  {
    "question": "Quel minéral est essentiel pour la santé des dents et des os?",
    "options": ["Fer", "Calcium", "Sodium", "Potassium"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un effet d'une mauvaise nutrition?",
    "options": ["Augmentation de l'énergie", "Amélioration de la concentration", "Obésité", "Croissance rapide"],
    "correctAnswer": 2
  },
  {
    "question": "Comment appelle-t-on un régime qui exclut les produits d'origine animale?",
    "options": ["Végétalien", "Végétarien", "Omnivore", "Cétogène"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de lipides est le plus bénéfique pour la santé?",
    "options": ["Graisses saturées", "Graisses trans", "Acides gras insaturés", "Acides gras polyinsaturés"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'effet de l'hydratation sur le corps?",
    "options": ["Augmente la fatigue", "Aide à la digestion", "Diminue l'énergie", "Provoque la déshydratation"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le rôle des antioxydants?",
    "options": ["Renforcer les os", "Protéger les cellules contre le stress oxydatif", "Fournir de l'énergie", "Accélérer la digestion"],
    "correctAnswer": 1
  },
  {
    "question": "Pourquoi est-il important de manger des fruits et légumes?",
    "options": ["Ils sont riches en calories", "Ils contiennent des vitamines et des minéraux", "Ils n'ont pas de goût", "Ils sont très chers"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le principal risque lié à une consommation excessive de sucre?",
    "options": ["Perte de poids", "Caries dentaires", "Amélioration de la santé cardiovasculaire", "Augmentation de la force musculaire"],
    "correctAnswer": 1
  },
  {
    "question": "Quel aliment est souvent considéré comme une 'superfood'?",
    "options": ["Pomme de terre", "Quinoa", "Pâtes", "Bonbons"],
    "correctAnswer": 1
  }
];
