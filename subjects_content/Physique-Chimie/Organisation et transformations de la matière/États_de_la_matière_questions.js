
// Subject: Physique-Chimie
// Topic: États de la matière
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'États de la matière', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quels sont les trois états de la matière les plus courants ?",
    "options": ["Solide", "Liquide", "Gazeux", "Plasma"],
    "correctAnswer": 0
  },
  {
    "question": "Quel état de la matière a une forme définie ?",
    "options": ["Solide", "Liquide", "Gazeux", "Tous les états"],
    "correctAnswer": 0
  },
  {
    "question": "Dans quel état de la matière les particules sont-elles le plus éloignées les unes des autres ?",
    "options": ["Solide", "Liquide", "Gazeux", "Plasma"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la principale caractéristique des liquides ?",
    "options": ["Ils prennent la forme de leur contenant", "Ils ont une forme fixe", "Ils sont compressibles", "Ils sont incolores"],
    "correctAnswer": 0
  },
  {
    "question": "Qu'est-ce qui se passe lors du changement d'état de fusion ?",
    "options": ["Solide à liquide", "Liquide à solide", "Gazeux à solide", "Plasma à liquide"],
    "correctAnswer": 0
  },
  {
    "question": "Quel état de la matière peut être ionisé pour former un plasma ?",
    "options": ["Solide", "Liquide", "Gazeux", "Tous les états"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la méthode de changement d'état du liquide à gaz ?",
    "options": ["Condensation", "Évaporation", "Fusion", "Sublimation"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la température de fusion de l'eau ?",
    "options": ["0°C", "100°C", "50°C", "25°C"],
    "correctAnswer": 0
  },
  {
    "question": "Quel état de la matière ne possède ni forme ni volume fixes ?",
    "options": ["Solide", "Liquide", "Gazeux", "Tous"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la transformation de l'état solide directement à l'état gazeux ?",
    "options": ["Condensation", "Fusion", "Sublimation", "Évaporation"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qu'un plasma ?",
    "options": ["Un gaz froid", "Un liquide en ébullition", "Un gaz ionisé", "Un solide cristallin"],
    "correctAnswer": 2
  },
  {
    "question": "À quelle température l'eau s'évapore-t-elle à pression normale ?",
    "options": ["0°C", "100°C", "50°C", "25°C"],
    "correctAnswer": 1
  },
  {
    "question": "Quel état de la matière est le plus dense en général ?",
    "options": ["Solide", "Liquide", "Gazeux", "Plasma"],
    "correctAnswer": 0
  },
  {
    "question": "Lors de la condensation, quel changement d'état se produit ?",
    "options": ["Gazeux à liquide", "Liquide à solide", "Solide à gaz", "Gazeux à solide"],
    "correctAnswer": 0
  },
  {
    "question": "Quel phénomène rend un solide ductile ?",
    "options": ["Pression", "Température", "Chaleur", "Vitesse"],
    "correctAnswer": 1
  }
];
