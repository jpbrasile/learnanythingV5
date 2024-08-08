
// Subject: Langues Vivantes
// Topic: Interaction orale
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Interaction orale', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est ton film préféré et pourquoi ?",
    "options": ["Film A", "Film B", "Film C", "Film D"],
    "correctAnswer": 0
  },
  {
    "question": "Si tu pouvais voyager n'importe où, où irais-tu ?",
    "options": ["Paris", "New York", "Tokyo", "Sydney"],
    "correctAnswer": 1
  },
  {
    "question": "Qui est ton héros ou héroïne et quelles sont ses qualités ?",
    "options": ["Personne A", "Personne B", "Personne C", "Personne D"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est ton hobby préféré ?",
    "options": ["Lire", "Jouer au sport", "Dessiner", "Écouter de la musique"],
    "correctAnswer": 3
  },
  {
    "question": "Que ferais-tu si tu gagnais à la loterie ?",
    "options": ["Voyager", "Acheter une maison", "Aider les autres", "Économiser"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est ton plat préféré et que contient-il ?",
    "options": ["Pizza", "Sushi", "Plat végétarien", "Hamburger"],
    "correctAnswer": 0
  },
  {
    "question": "Comment décrirais-tu ta meilleure amie ou ton meilleur ami ?",
    "options": ["Gentil(le)", "Amusant(e)", "Intelligent(e)", "Soutenant(e)"],
    "correctAnswer": 1
  },
  {
    "question": "Quelles sont tes matières préférées à l'école ?",
    "options": ["Mathématiques", "Sciences", "Histoire", "Langues"],
    "correctAnswer": 0
  },
  {
    "question": "Si tu pouvais rencontrer une personnalité célèbre, qui choisirais-tu ?",
    "options": ["Artiste", "Scientifique", "Athlète", "Politicien"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est ton animal préféré et pourquoi ?",
    "options": ["Chien", "Chat", "Oiseau", "Poisson"],
    "correctAnswer": 0
  },
  {
    "question": "Comment préfères-tu passer ton temps libre ?",
    "options": ["Se promener", "Regarder des films", "Faire du sport", "Jouer aux jeux vidéo"],
    "correctAnswer": 3
  },
  {
    "question": "Que veux-tu faire comme métier plus tard ?",
    "options": ["Médecin", "Ingénieur", "Artiste", "Enseignant"],
    "correctAnswer": 2
  },
  {
    "question": "Quelles sont les qualités d'un bon leader ?",
    "options": ["Écoute", "Confiance", "Charisme", "Organisation"],
    "correctAnswer": 1
  },
  {
    "question": "Quel événement historique t'intéresse le plus et pourquoi ?",
    "options": ["Révolution française", "Seconde Guerre mondiale", "Époque romaine", "Renaissance"],
    "correctAnswer": 0
  },
  {
    "question": "Quel genre de musique préfères-tu et pourquoi ?",
    "options": ["Pop", "Rock", "Classique", "Rap"],
    "correctAnswer": 2
  }
];
