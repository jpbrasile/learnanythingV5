
// Subject: Sciences de la Vie et de la Terre
// Topic: La reproduction
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'La reproduction', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce que la reproduction sexuée ?",
    "options": ["Un processus sans gamètes", "Une fusion de gamètes", "Une division cellulaire", "Un mode de vie"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le rôle des ovules dans la reproduction ?",
    "options": ["Fournir de l'énergie", "Participer à la fécondation", "Produire des hormones", "Aider à la digestion"],
    "correctAnswer": 1
  },
  {
    "question": "Quels organismes se reproduisent par fission binaire ?",
    "options": ["Plantes", "Animaux", "Bactéries", "Champignons"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le type de reproduction des abeilles ?",
    "options": ["Sexuée", "ASEXUÉE", "Par bourgeonnement", "Par fragmentation"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le produit de la fécondation ?",
    "options": ["Une cellule œuf", "Un embryon", "Un spermatozoïde", "Un ovule"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la principale différence entre reproduction sexuée et asexuée ?",
    "options": ["Gamètes impliqués", "Environnement requis", "Vitesse de reproduction", "Besoin de partenaire"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le rôle des spermatozoïdes dans la reproduction ?",
    "options": ["Fertiliser l'ovule", "Produire des hormones", "Développer l'embryon", "Transmettre des gènes"],
    "correctAnswer": 0
  },
  {
    "question": "Quels sont les avantages de la reproduction sexuée ?",
    "options": ["Variété génétique", "Rapidité", "Moins d'énergie", "Pas besoin de partenaire"],
    "correctAnswer": 0
  },
  {
    "question": "Dans quelle partie du corps humain se fait la fécondation ?",
    "options": ["Utérus", "Trompes de Fallope", "Ovaire", "Vagin"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un exemple de reproduction asexuée chez les plantes ?",
    "options": ["Bouturage", "Pollinisation", "Fécondation", "Germination"],
    "correctAnswer": 0
  },
  {
    "question": "Comment s'appelle la première cellule formée après la fécondation ?",
    "options": ["Zygote", "Embryon", "Gamète", "Ovule"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de reproduction implique le stade larvaire ?",
    "options": ["Reproduction sexuée", "Reproduction asexuée", "Reproduction par sporulation", "Reproduction par fragmentation"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom du cycle reproducteur des mammifères ?",
    "options": ["Cycle menstruel", "Cycle de reproduction", "Cycle de vie", "Cycle de croissance"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle réussite est propre aux organismes à reproduction asexuée ?",
    "options": ["Génération rapide", "Diversité génétique", "Énergie élevée", "Besoin de partenaires"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'organe reproducteur principal des fleurs ?",
    "options": ["Pétales", "Sépales", "Étamines", "Pistil"],
    "correctAnswer": 3
  }
];
