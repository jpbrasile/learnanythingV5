
// Subject: Français
// Topic: Réécriture et révision
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Réécriture et révision', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Choisissez la phrase correctement révisée : \"Il y a beaucoup de gens qui ont besoin de de l'aide\".",
    "options": ["Il y a beaucoup de gens qui ont besoin d'aide.", "Il y a beaucoup de gens qui ont besoin des aide.", "Il y a beaucoup de gens qui ont besoin de l'aide.", "Des gens ont besoin d'aide."],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le synonyme du mot 'content' ?",
    "options": ["heureux", "triste", "colère", "déçu"],
    "correctAnswer": 0
  },
  {
    "question": "Réécrivez cette phrase à la voix passive : \"Le chat a attrapé la souris\".",
    "options": ["La souris a été attrapée par le chat.", "Le chat a été attrapé par la souris.", "La souris attrape le chat.", "Attraper la souris par le chat."],
    "correctAnswer": 0
  },
  {
    "question": "Quelle phrase utilise correctement la ponctuation ?",
    "options": ["Bonjour comment ça va", "Bonjour! Comment ça va?", "Bonjour. Comment ça va!", "Bonjour, comment ça va?"],
    "correctAnswer": 3
  },
  {
    "question": "Choisissez la meilleure reformulation : \"Il était très chaud dehors\"",
    "options": ["Il faisait très chaud à l'extérieur.", "Il s'est très chaud dehors.", "La chaleur devenait insupportable dehors.", "Il était une journée chaude."],
    "correctAnswer": 0
  },
  {
    "question": "Comment transformer cette phrase directe en indirecte ? \"Il dit, 'je viens demain'\".",
    "options": ["Il dit qu'il vient demain.", "Il dit qu'il viendra demain.", "Il a dit qu'il est venu demain.", "Il a dit, 'je viendrai demain'."],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'antonyme du mot 'arriver' ?",
    "options": ["partir", "venir", "rester", "revenir"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle version est correcte ? \"Les enfants jouent dans le parc\" ou \"Les enfants joues dans le parc\".",
    "options": ["Les enfants jouent dans le parc.", "Les enfants joues dans le parc.", "Les enfant jouent dans le parc.", "L'enfant joue dans le parc."],
    "correctAnswer": 0
  },
  {
    "question": "Réécrivez la phrase en utilisant un adverbe : \"Il court vite.\"",
    "options": ["Il court avec rapidité.", "Il court rapidement.", "Il court rapide.", "Il court vit."],
    "correctAnswer": 1
  },
  {
    "question": "Quelle phrase est correcte ? \"Elle a dit de venez ici\".",
    "options": ["Elle a dit de venir ici.", "Elle a dit venir ici.", "Elle a dit venons ici.", "Elle dis venir ici."],
    "correctAnswer": 0
  },
  {
    "question": "Choisissez la bonne reformulation : \"Il est triste\".",
    "options": ["Il est dans la tristesse.", "Il est de mauvaise humeur.", "Il éprouve de la tristesse.", "Il ressent de la tristesse."],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la forme correcte du verbe ? \"Ils _____ (aller) au cinéma.\"",
    "options": ["allaient", "ont allé", "sont allés", "allé"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'infinitif de 'décide' ?",
    "options": ["décider", "décis", "décidé", "décisoire"],
    "correctAnswer": 0
  },
  {
    "question": "Réécrivez : \"Elle mangea un gâteau\" en utilisant le temps présent.",
    "options": ["Elle mange un gâteau.", "Elle a mangé un gâteau.", "Elle va manger un gâteau.", "Elle mangera un gâteau."],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la bonne version ? \"C'est un chien qui aboi\" ou \"C'est un chien qui aboie\".",
    "options": ["C'est un chien qui aboi.", "C'est un chien qui aboie.", "C'est des chiens qui aboient.", "C'est un chien aboyant."],
    "correctAnswer": 1
  }
];
