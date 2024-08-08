
// Subject: Français
// Topic: Écoute et compréhension de l'oral
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Écoute et compréhension de l'oral', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la principale idée du texte entendu ?",
    "options": ["Idée A", "Idée B", "Idée C", "Idée D"],
    "correctAnswer": 1
  },
  {
    "question": "Qui sont les personnages principaux dans le récit ?",
    "options": ["Personnage 1", "Personnage 2", "Personnage 3", "Personnage 4"],
    "correctAnswer": 0
  },
  {
    "question": "Quel événement a déclenché l'histoire ?",
    "options": ["Événement A", "Événement B", "Événement C", "Événement D"],
    "correctAnswer": 2
  },
  {
    "question": "Quel sentiment le narrateur ressent-il ?",
    "options": ["Joie", "Tristesse", "Colère", "Indifférence"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la solution proposée dans le dialogue ?",
    "options": ["Solution A", "Solution B", "Solution C", "Solution D"],
    "correctAnswer": 3
  },
  {
    "question": "Quel est le ton général de l'extrait ?",
    "options": ["Humoristique", "Sérieux", "Tragique", "Nostalgique"],
    "correctAnswer": 1
  },
  {
    "question": "Quels détails soutiennent l'argument principal ?",
    "options": ["Détail 1", "Détail 2", "Détail 3", "Détail 4"],
    "correctAnswer": 2
  },
  {
    "question": "Quel message l'auteur souhaite-t-il transmettre ?",
    "options": ["Message A", "Message B", "Message C", "Message D"],
    "correctAnswer": 0
  },
  {
    "question": "Comment le paysage est-il décrit ?",
    "options": ["Description A", "Description B", "Description C", "Description D"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle métaphore est utilisée dans le discours ?",
    "options": ["Métaphore 1", "Métaphore 2", "Métaphore 3", "Métaphore 4"],
    "correctAnswer": 3
  },
  {
    "question": "Que se passe-t-il à la fin de l'histoire ?",
    "options": ["Fin A", "Fin B", "Fin C", "Fin D"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle question le narrateur pose-t-il ?",
    "options": ["Question A", "Question B", "Question C", "Question D"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la réaction des autres personnages face à la situation ?",
    "options": ["Réaction A", "Réaction B", "Réaction C", "Réaction D"],
    "correctAnswer": 0
  },
  {
    "question": "Quel terme est le mieux associé à l'ambiance du texte ?",
    "options": ["Terme A", "Terme B", "Terme C", "Terme D"],
    "correctAnswer": 3
  },
  {
    "question": "Quelles émotions sont évoquées dans le passage ?",
    "options": ["Émotion A", "Émotion B", "Émotion C", "Émotion D"],
    "correctAnswer": 2
  }
];
