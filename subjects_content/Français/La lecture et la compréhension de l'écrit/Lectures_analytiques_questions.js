
// Subject: Français
// Topic: Lectures analytiques
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Lectures analytiques', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le thème principal de l'œuvre 'Le Petit Prince'?",
    "options": ["L'amitié", "La guerre", "L'amour", "L'aventure"],
    "correctAnswer": 0
  },
  {
    "question": "Qui est le narrateur de '1984' de George Orwell?",
    "options": ["Winston Smith", "O'Brien", "Julia", "Big Brother"],
    "correctAnswer": 0
  },
  {
    "question": "Dans 'Germinal', quel est le métier principal d'Émile Zola?",
    "options": ["Mineur", "Agriculteur", "Industrie", "Politicien"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le genre littéraire de 'Le Cid' de Corneille?",
    "options": ["Comédie", "Tragédie", "Roman", "Poésie"],
    "correctAnswer": 1
  },
  {
    "question": "Qui a écrit 'Les Fables'?",
    "options": ["Victor Hugo", "Jean de La Fontaine", "Molière", "Racine"],
    "correctAnswer": 1
  },
  {
    "question": "Quel personnage principal affronte un monstre marin dans 'Moby Dick'?",
    "options": ["Ishmael", "Captain Ahab", "Queequeg", "Starbuck"],
    "correctAnswer": 1
  },
  {
    "question": "Dans 'Roméo et Juliette', quelle est la cause principale du conflit?",
    "options": ["Un amour impossible", "Une guerre", "Une malédiction", "Une rivalité familiale"],
    "correctAnswer": 3
  },
  {
    "question": "Quel symbole est associé à la liberté dans 'Les Misérables'?",
    "options": ["La lampe", "La fleur de lys", "Le drapeau", "Le cadenas"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le principal message de 'L'Étranger' d'Albert Camus?",
    "options": ["L'absurdité de la vie", "L'amour", "La guerre", "La justice"],
    "correctAnswer": 0
  },
  {
    "question": "Dans quelle période littéraire se situe 'Les Trois Mousquetaires'?",
    "options": ["Romantisme", "Classicisme", "Réalisme", "Baroque"],
    "correctAnswer": 1
  },
  {
    "question": "Quel auteur est connu pour ses romans sur la condition humaine, notamment 'La Peste'?",
    "options": ["Émile Zola", "Albert Camus", "Marcel Proust", "Gustave Flaubert"],
    "correctAnswer": 1
  },
  {
    "question": "Quel événement historique est le cadre principal de 'La Débâcle' de Zola?",
    "options": ["La Révolution française", "La guerre de 1870", "La Première Guerre mondiale", "La guerre d'Algérie"],
    "correctAnswer": 1
  },
  {
    "question": "Dans 'Le Rouge et le Noir', quel est le rêve de Julien Sorel?",
    "options": ["Devenir prêtre", "Devenir riche", "Devenir écrivain", "Devenir soldat"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le personnage principal de 'Cyrano de Bergerac'?",
    "options": ["Christian", "Roxane", "Cyrano", "Le comte de Guiche"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le ton général de 'Les Contemplations' de Victor Hugo?",
    "options": ["Léger", "Triste", "Ironique", "Sombre"],
    "correctAnswer": 1
  }
];
