
// Subject: Français
// Topic: Lectures cursives
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Lectures cursives', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le genre principal de 'Le Petit Prince' de Antoine de Saint-Exupéry?",
    "options": ["Roman", "Poésie", "Théâtre", "Essai"],
    "correctAnswer": 0
  },
  {
    "question": "Qui est l'auteur de 'Les Fables'?",
    "options": ["Victor Hugo", "Jean de La Fontaine", "Molière", "Albert Camus"],
    "correctAnswer": 1
  },
  {
    "question": "Dans 'Les Misérables', quel personnage est un ancien forçat?",
    "options": ["Javert", "Valjean", "Fantine", "Cosette"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le thème principal de 'Germinal' de Émile Zola?",
    "options": ["L'amour", "Le travail", "La guerre", "La famille"],
    "correctAnswer": 1
  },
  {
    "question": "Quel roman met en avant la vie de jeunes don Quichotte?",
    "options": ["Le Rouge et le Noir", "Don Quichotte", "Le comte de Monte-Cristo", "Les Trois Mousquetaires"],
    "correctAnswer": 1
  },
  {
    "question": "Qui a écrit 'Le Cid'?",
    "options": ["Racine", "Corneille", "Molière", "Hugo"],
    "correctAnswer": 1
  },
  {
    "question": "Quel personnage principal de 'La Peste' est médecin?",
    "options": ["Tarrou", "Rieux", "Paneloux", "Othon"],
    "correctAnswer": 1
  },
  {
    "question": "Dans quel livre trouve-t-on la phrase 'Je pense, donc je suis'?",
    "options": ["Discours de la méthode", "Le Monde", "Les Pensées", "L'Esprit des lois"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le pays d'origine de l'écrivain Gabriel Garcia Marquez?",
    "options": ["Argentine", "Colombie", "Chili", "Mexique"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la morale de la fable 'La Cigale et la Fourmi'?",
    "options": ["Il faut profiter de la vie", "Le travail paie", "Les amis sont précieux", "Le temps change tout"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le surnom de l'auteur de 'À la recherche du temps perdu'?",
    "options": ["Proust", "Modiano", "Zola", "Hugo"],
    "correctAnswer": 0
  },
  {
    "question": "Qui est le protagoniste de '1984' de George Orwell?",
    "options": ["Winston Smith", "Juliet", "O'Brien", "Parsons"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle œuvre célèbre parle de la guerre de 14-18?",
    "options": ["Les champs d'honneur", "Le Grand Meaulnes", "Le Silence de la mer", "Germinal"],
    "correctAnswer": 0
  },
  {
    "question": "Dans quelle œuvre trouve-t-on le personnage de Mademoiselle de Scudéry?",
    "options": ["Les Liaisons dangereuses", "Bel-Ami", "Le Rouge et le Noir", "La Princes de Clèves"],
    "correctAnswer": 3
  },
  {
    "question": "Qui écrit le roman 'Jane Eyre'?",
    "options": ["Charlotte Brontë", "Emily Brontë", "Mary Shelley", "Virginia Woolf"],
    "correctAnswer": 0
  }
];
