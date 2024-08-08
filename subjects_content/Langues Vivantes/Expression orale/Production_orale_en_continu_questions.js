
// Subject: Langues Vivantes
// Topic: Production orale en continu
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Production orale en continu', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le sujet principal de votre exposé ?",
    "options": ["Mon animal préféré", "Une machine", "Un livre", "Une ville"],
    "correctAnswer": 0
  },
  {
    "question": "Comment commencez-vous votre présentation ?",
    "options": ["Bonjour", "Salut à tous", "Je m'appelle...", "Je vais parler de..."],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est une bonne technique pour capter l'attention de l'auditoire ?",
    "options": ["Raconter une blague", "Parler trop rapidement", "Ne pas faire de pause", "Lire un texte"],
    "correctAnswer": 0
  },
  {
    "question": "Que devez-vous faire à la fin de votre exposé ?",
    "options": ["Remercier l'auditoire", "Parler encore plus", "Ne rien dire", "Lire à nouveau votre texte"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est un mot de liaison utile pour présenter une idée ?",
    "options": ["Premièrement", "Ouais", "Alors", "Enfin"],
    "correctAnswer": 0
  },
  {
    "question": "Pourquoi est-il important de pratiquer avant de présenter ?",
    "options": ["Pour être stressé", "Pour connaître son texte", "Pour se fatiguer", "Pour éviter de parler"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un bon conseil pour gérer le trac ?",
    "options": ["Ne pas penser au public", "Respirer profondément", "Parler plus fort", "Regarder le sol"],
    "correctAnswer": 1
  },
  {
    "question": "Comment structurer un exposé oral ?",
    "options": ["Introduction, corps, conclusion", "Une seule idée", "Commencer par des exemples", "Parler sans pause"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est un élément clé à inclure dans l'introduction ?",
    "options": ["Un historique", "Un résumé", "Un questionnement", "Une blague"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la valeur des supports visuels dans une présentation ?",
    "options": ["Ils distraient", "Ils aident à comprendre", "Ils rendent les gens fatigués", "Ils ne servent à rien"],
    "correctAnswer": 1
  },
  {
    "question": "Comment conclure efficacement une présentation ?",
    "options": ["Rappeler les points principaux", "Dire merci et partir", "Parler de ses vacances", "Ne pas dire grand-chose"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle attitude est importante lors de la présentation ?",
    "options": ["Être rigide", "Être détendu", "Être trop sérieux", "Être indifférent"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de langage privilégier dans un exposé ?",
    "options": ["Langage technique uniquement", "Langage familier", "Langage clair et compréhensible", "Langage très compliqué"],
    "correctAnswer": 2
  },
  {
    "question": "Pourquoi est-il bon d'interagir avec le public ?",
    "options": ["Pour les distraire", "Pour les impliquer", "Pour les ennuyer", "Pour ne pas parler"],
    "correctAnswer": 1
  },
  {
    "question": "Comment préparer une réponse à une question du public ?",
    "options": ["Ne pas écouter les questions", "Prendre son temps pour réfléchir", "Répondre tout de suite sans réfléchir", "Ignorer les questions"],
    "correctAnswer": 1
  }
];
