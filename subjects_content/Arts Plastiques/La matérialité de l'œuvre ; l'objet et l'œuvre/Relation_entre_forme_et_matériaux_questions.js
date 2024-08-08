
// Subject: Arts Plastiques
// Topic: Relation entre forme et matériaux
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Relation entre forme et matériaux', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel matériau est le plus couramment utilisé pour fabriquer des constructions en briques?",
    "options": ["Bois", "Acier", "Brique", "Verre"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle forme est généralement utilisée pour optimiser la résistance des structures?",
    "options": ["Cylindre", "Cube", "Pyramide", "Cône"],
    "correctAnswer": 2
  },
  {
    "question": "Quel matériau est idéal pour des fenêtres en raison de sa transparence?",
    "options": ["Plastique", "Métal", "Verre", "Béton"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type de structure offre une grande stabilité grâce à sa forme triangulaire?",
    "options": ["Toit en pente", "Pont suspendu", "Pont en arc", "Bâtiment rectangulaire"],
    "correctAnswer": 1
  },
  {
    "question": "Quel matériau est léger et utilisé pour les constructions temporaires?",
    "options": ["Acier", "Béton", "Bois", "Plastique"],
    "correctAnswer": 3
  },
  {
    "question": "Quel matériau est idéal pour les conduits en raison de sa résistance à la corrosion?",
    "options": ["Bois", "Acier inoxydable", "Brique", "Tôle"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle forme permet de maximiser l'espace intérieur des bâtiments?",
    "options": ["Carré", "Rectangulaire", "Circulaire", "Triangulaire"],
    "correctAnswer": 2
  },
  {
    "question": "Quel matériau est souvent utilisé pour l'isolation thermique?",
    "options": ["Concrète", "Papier", "Laine de verre", "Acier"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type de forme est utilisé pour créer des toitures solides?",
    "options": ["Plate", "Arquée", "Ronde", "Angulaire"],
    "correctAnswer": 1
  },
  {
    "question": "Quel matériau est souvent employé pour construire des ponts en raison de sa solidité?",
    "options": ["Bambou", "Acier", "Papier", "Fibre de verre"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle forme est privilégiée pour une résistance maximale dans les structures géodésiques?",
    "options": ["Cylindre", "Triangle", "Carré", "Hexagone"],
    "correctAnswer": 1
  },
  {
    "question": "Quel matériau est couramment utilisé pour les murs en raison de ses propriétés isolantes?",
    "options": ["Verre", "Béton", "Brique", "Plastique"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle forme est généralement adoptée pour le design des meubles afin d'assurer confort et ergonomie?",
    "options": ["Anguleuse", "Circulaire", "Rectangulaire", "Étriquée"],
    "correctAnswer": 1
  },
  {
    "question": "Quel matériau est principalement utilisé dans la construction moderne pour sa légèreté et sa résistance?",
    "options": ["Aluminium", "Béton", "Verre", "Pierre"],
    "correctAnswer": 0
  },
  {
    "question": "Pour quel type de structure les matériaux composites sont-ils principalement utilisés?",
    "options": ["Routes", "Voitures", "Bâtiments", "Aqueducs"],
    "correctAnswer": 1
  }
];
