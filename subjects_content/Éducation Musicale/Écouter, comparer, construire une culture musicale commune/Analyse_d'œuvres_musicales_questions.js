
// Subject: Éducation Musicale
// Topic: Analyse d'œuvres musicales
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Analyse d'œuvres musicales', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel instrument est caractéristique de l'orchestre symphonique ?",
    "options": ["Piano", "Guitare", "Trompette", "Violon"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est la forme musicale d'un morceau divisé en trois sections (ABA) ?",
    "options": ["Sonate", "Rondeau", "Thème et variations", "Menuet"],
    "correctAnswer": 1
  },
  {
    "question": "Qui a composé 'La Flûte Enchantée' ?",
    "options": ["Mozart", "Beethoven", "Bach", "Chopin"],
    "correctAnswer": 0
  },
  {
    "question": "Dans la musique classique, que signifie le terme 'pp' ?",
    "options": ["Fortissimo", "Piano", "Pianissimo", "Mezzo-forte"],
    "correctAnswer": 2
  },
  {
    "question": "Quel mouvement musical est associé à la période romantique ?",
    "options": ["Baroque", "Classique", "Impressionnisme", "Romantique"],
    "correctAnswer": 3
  },
  {
    "question": "Quel est l'élément central de l'analyse d'une œuvre musicale ?",
    "options": ["Harmonie", "Mélodie", "Rythme", "Instrumentation"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle technique musicale consiste à répéter une phrase avec des variations ?",
    "options": ["Canon", "Variations", "Imitation", "Répétition"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de musique utilise souvent des chants grégoriens ?",
    "options": ["Musique classique", "Musique jazz", "Musique pop", "Musique folklorique"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle caractéristique distingue le jazz des autres genres musicaux ?",
    "options": ["Écriture stricte", "Improvisation", "Rythmes réguliers", "Chants polyphoniques"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le père de la musique moderne ?",
    "options": ["Debussy", "Stravinsky", "Berlioz", "Bach"],
    "correctAnswer": 1
  },
  {
    "question": "Quel élément évoque le mouvement d'une pièce musicale ?",
    "options": ["Tempo", "Dynamique", "Tonalité", "Harmonie"],
    "correctAnswer": 0
  },
  {
    "question": "Quel compositeur est connu pour son utilisation de l'impressionnisme ?",
    "options": ["Debussy", "Brahms", "Vivaldi", "Tchaïkovski"],
    "correctAnswer": 0
  },
  {
    "question": "Dans quelle période la musique baroque a-t-elle prospéré ?",
    "options": ["1600-1750", "1750-1820", "1820-1900", "1900-1950"],
    "correctAnswer": 0
  },
  {
    "question": "Quel instrument est au centre d'un concerto ?",
    "options": ["Orchestre", "Piano", "Saxophone", "Guitare"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de musique est généralement associé aux danses de cour ?",
    "options": ["Classique", "Baroque", "Folk", "Pop"],
    "correctAnswer": 1
  }
];
