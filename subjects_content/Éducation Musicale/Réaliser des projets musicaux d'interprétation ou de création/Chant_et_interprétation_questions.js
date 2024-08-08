
// Subject: Éducation Musicale
// Topic: Chant et interprétation
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Chant et interprétation', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le terme utilisé pour décrire l'expression émotionnelle dans le chant ?",
    "options": ["Dynamique", "Interprétation", "Techniques vocales", "Vibrato"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le rôle de l'intonation dans l'interprétation d'une chanson ?",
    "options": ["Rendre la chanson plus rapide", "Ajouter des notes supplémentaires", "Exprimer des émotions", "Modifier les paroles"],
    "correctAnswer": 2
  },
  {
    "question": "Quel élément est crucial pour une bonne respiration en chant ?",
    "options": ["La posture", "Les chaussures", "Le volume", "La vitesse"],
    "correctAnswer": 0
  },
  {
    "question": "Qu'est-ce que le ‘phrasing’ en musique ?",
    "options": ["Une technique de voix", "La manière de structurer des phrases", "Un rythme spécifique", "L'expression des mots mélodiquement"],
    "correctAnswer": 3
  },
  {
    "question": "Comment appelle-t-on un chant sans accompagnement instrumental ?",
    "options": ["Chant a cappella", "Chant harmonisé", "Chant orchestré", "Chant en solo"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle technique permet de projeter la voix sans forcer ?",
    "options": ["Le bel canto", "La technique de souffle", "Le chant guttural", "Le chant produit"],
    "correctAnswer": 1
  },
  {
    "question": "Quel genre de musique utilise souvent des improvisations vocales ?",
    "options": ["Classique", "Jazz", "Pop", "Folk"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce qui define le style d'une interprétation musicale ?",
    "options": ["Le tempo", "La couleur vocale", "Les paroles", "La structure"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'impact de l'émotion sur une performance chantée ?",
    "options": ["Rien", "Elle peut rendre la performance moins crédible", "Elle enrichit l'interpretation", "Elle empêche de chanter juste"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qu'un 'cover' en musique ?",
    "options": ["Une nouvelle version d'une chanson", "Un album", "Une partition", "Un concert"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est l'importance de la diction en chant ?",
    "options": ["Pour chanter plus fort", "Pour que les paroles soient compréhensibles", "Pour améliorer le rythme", "Pour enrichir la mélodie"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de micro est souvent utilisé pour les performances live ?",
    "options": ["Micro à condensateur", "Micro dynamique", "Micro piezo", "Micro à ruban"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce qu'un 'vibrato' ?",
    "options": ["Une note prolongée", "Une technique de chant", "Une sorte de rythme", "Un genre musical"],
    "correctAnswer": 1
  },
  {
    "question": "À quel moment est-il important de faire une pause en chant ?",
    "options": ["Jamais", "Avant de changer de ton", "À la fin de chaque phrase", "Lorsque l'on a besoin de respirer"],
    "correctAnswer": 3
  },
  {
    "question": "Quel est le but de l'échauffement vocal ?",
    "options": ["Éviter de chanter", "Préparer la voix pour le chant", "Tester les nouvelles chansons", "Améliorer le volume"],
    "correctAnswer": 1
  }
];
