
// Subject: Langues Vivantes
// Topic: Rédaction de courts textes
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Rédaction de courts textes', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle phrase commence par une majuscule ?",
    "options": ["bonjour, comment ça va ?", "Aujourd'hui, il fait beau.", "je vais à l'école.", "il est tard."],
    "correctAnswer": 1
  },
  {
    "question": "Quel mot est un adjectif ?",
    "options": ["rapide", "courir", "voiture", "jouer"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le temps du verbe dans cette phrase : 'Ils jouent au football.' ?",
    "options": ["passé", "présent", "futur", "imparfait"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la principale caractéristique d'un texte descriptif ?",
    "options": ["Raconter une histoire", "Donner des explications", "Décrire des personnes, lieux ou objets", "Exprimer des émotions"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type de texte est destiné à convaincre le lecteur ?",
    "options": ["Un texte narratif", "Un texte argumentatif", "Un texte descriptif", "Un texte informatif"],
    "correctAnswer": 1
  },
  {
    "question": "Quel mot peut remplacer 'beaucoup' dans une phrase ?",
    "options": ["peu", "abondamment", "quelques", "rarement"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle phrase est un exemple de dialogue ?",
    "options": ["Marie a dit : 'J'aime la glace.'", "Il fait beau aujourd'hui.", "Les fleurs sont belles.", "Je vais au parc."],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'objectif principal d'un texte narratif ?",
    "options": ["Raconter des événements", "Présenter des informations", "Décrire des caractéristiques", "Exprimer des sentiments"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle phrase contient une erreur d'accord ?",
    "options": ["Les filles dansent.", "Le chat et le chien sont amis.", "Les enfant jouent dans le parc.", "Les arbres sont verts."],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'élément essentiel d'une introduction ?",
    "options": ["La conclusion", "La thèse", "Le développement", "Un exemple"],
    "correctAnswer": 1
  },
  {
    "question": "Quel terme décrit une phrase qui exprime un sentiment ?",
    "options": ["Narrative", "Descriptive", "Émotionnelle", "Fictionnelle"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle structure est typiquement utilisée dans un récit ?",
    "options": ["Introduction, développement, conclusion", "Exposition, nœud, dénouement", "Proposition, argument, conclusion", "Thèse, antithèse, synthèse"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un synonyme de 'content' ?",
    "options": ["Triste", "Heureux", "Fâché", "Neutre"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de texte fournit des instructions ?",
    "options": ["Texte narratif", "Texte descriptif", "Texte explicatif", "Texte argumentatif"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est un bon moyen de capter l'attention du lecteur dès le début ?",
    "options": ["Commencer par une citation", "Écrire une longue introduction", "Énumérer des faits", "Raconter un rêve"],
    "correctAnswer": 0
  }
];
