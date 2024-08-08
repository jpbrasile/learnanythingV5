
// Subject: Éducation Physique et Sportive
// Topic: Danse
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Danse', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la forme de danse qui combine jazz et ballet ?",
    "options": ["Hip-hop", "Contemporain", "Jazz", "Danse classique"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est un élément essentiel de la danse contemporaine ?",
    "options": ["Les sauts", "L'improvisation", "Les costumes", "Les claquettes"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle danse est originaire d'Argentine ?",
    "options": ["Samba", "Tango", "Hip-hop", "Ballet"],
    "correctAnswer": 1
  },
  {
    "question": "Quel style de danse utilise souvent des mouvements rapides et des shakes ?",
    "options": ["Jazz", "Salsa", "Danse folklorique", "Contemporain"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le principal objectif de la danse classique ?",
    "options": ["S'amuser", "Exprimer des émotions", "Raconter une histoire", "La technique et la forme"],
    "correctAnswer": 3
  },
  {
    "question": "Qui est une célèbre danseuse étoile du ballet ?",
    "options": ["Martha Graham", "Misty Copeland", "Pina Bausch", "Sylvie Guillem"],
    "correctAnswer": 3
  },
  {
    "question": "Quel mouvement de danse est caractérisé par des changements rapides de direction et de niveaux ?",
    "options": ["Déplacements", "Transitions", "Percussif", "Rythmique"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle danse est généralement associée à la musique country ?",
    "options": ["Samba", "Valse", "Line dance", "Bachata"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le rôle principal d'un chorégraphe ?",
    "options": ["Réaliser les costumes", "Créer des chorégraphies", "Enseigner aux élèves", "Gérer la musique"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle danse africaniste est populaire dans les cultures afro-américaines ?",
    "options": ["Ballet", "Krump", "Danse de salon", "Folklorique"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle danse est connue pour ses mouvements en solo et ses défis improvisés ?",
    "options": ["Tango", "Breakdance", "Salsa", "Valse"],
    "correctAnswer": 1
  },
  {
    "question": "Dans la danse de salon, quel couple danse en tête-à-tête ?",
    "options": ["Bélier", "Tango", "Samba", "Chacha"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un terme utilisé pour décrire une performance de danse ?",
    "options": ["Ballet", "Numéro", "Discours", "Réplique"],
    "correctAnswer": 1
  },
  {
    "question": "Quel accessoire est souvent utilisé dans la danse orientale ?",
    "options": ["Écharpe", "Bâton", "Tambour", "Ceinture de hanches"],
    "correctAnswer": 3
  },
  {
    "question": "Quel type de danse est conçu pour être exécuté en groupe ?",
    "options": ["Solo", "Duet", "Chorégraphie de groupe", "Partie improvisée"],
    "correctAnswer": 2
  }
];
