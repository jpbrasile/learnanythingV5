
// Subject: Français
// Topic: Maîtrise de l'orthographe
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Maîtrise de l'orthographe', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la forme correcte du verbe 'manger' à la première personne du singulier au futur ?",
    "options": ["je mange", "je mangerai", "je mangera", "je mangé"],
    "correctAnswer": 1
  },
  {
    "question": "Comment écrit-on le participe passé du verbe 'finir' ?",
    "options": ["finis", "finie", "fini", "finit"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la bonne orthographe pour le pluriel de 'cheval' ?",
    "options": ["chevals", "chevales", "chevaux", "chevalux"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la bonne écriture pour l'adjectif au féminin de 'heureux' ?",
    "options": ["heureux", "heureuze", "heureuse", "heureuxse"],
    "correctAnswer": 2
  },
  {
    "question": "Comment écrit-on la contraction de 'le' et 'a' ?",
    "options": ["la", "l'a", "le'a", "l'"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'orthographe correcte pour désigner un groupe d'hommes et de femmes ?",
    "options": ["les étudiants", "les étudiantes", "les etudiants", "les étudiant"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la forme correcte du superlatif de 'grand' ?",
    "options": ["le plus grand", "le plus grande", "grandier", "grande"],
    "correctAnswer": 0
  },
  {
    "question": "Comment s'appelle l'accent sur la lettre 'e' dans le mot 'été' ?",
    "options": ["accent aigu", "accent grave", "tréma", "cédille"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la bonne orthographe pour le pluriel de 'pou' ?",
    "options": ["poux", "pous", "pouxs", "pu"],
    "correctAnswer": 0
  },
  {
    "question": "Comment écrit-on le féminin de 'acteur' ?",
    "options": ["actrice", "acteure", "acteous", "acteuse"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle orthographe est correcte pour le mot signifiant 'luxueux' au féminin ?",
    "options": ["luxueuse", "luxueus", "luxuer", "luxueuses"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le bon pluriel pour 'œuf' ?",
    "options": ["œufs", "œufs", "oeufs", "oeuf"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la bonne orthographe pour décrire une grande quantité ?",
    "options": ["beaucoup", "beaucoups", "beaucou", "beauxoup"],
    "correctAnswer": 0
  },
  {
    "question": "Comment écrit-on le mot signifiant 'à l'heure actuelle' ?",
    "options": ["actuellement", "actuelment", "actuellent", "actuällement"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est l'orthographe correcte du mot signifiant 'aujourd'hui' ?",
    "options": ["aujourd'hui", "aujour'hui", "aujourd'ui", "aujourd'hu"],
    "correctAnswer": 0
  }
];
