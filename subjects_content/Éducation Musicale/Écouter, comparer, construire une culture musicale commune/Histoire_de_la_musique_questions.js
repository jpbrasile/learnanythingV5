
// Subject: Éducation Musicale
// Topic: Histoire de la musique
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Histoire de la musique', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qui est considéré comme le père de la musique classique?",
    "options": ["Johann Sebastian Bach", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Frédéric Chopin"],
    "correctAnswer": 2
  },
  {
    "question": "Quel instrument est souvent associé au jazz?",
    "options": ["Piano", "Guitare", "Saxophone", "Violoncelle"],
    "correctAnswer": 2
  },
  {
    "question": "Quel genre musical est né dans les années 1950 aux États-Unis?",
    "options": ["Blues", "Rap", "Rock and Roll", "Reggae"],
    "correctAnswer": 2
  },
  {
    "question": "Qui a composé la Cinquième Symphonie?",
    "options": ["Pyotr Ilyich Tchaikovsky", "Antonio Vivaldi", "Ludwig van Beethoven", "Gustav Mahler"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle chanteuse est connue sous le nom de 'Reine de la Pop'?",
    "options": ["Beyoncé", "Madonna", "Lady Gaga", "Adele"],
    "correctAnswer": 1
  },
  {
    "question": "Quel événement musical se déroule à Woodstock en 1969?",
    "options": ["Festival de Jazz", "Festival de Rock", "Festival de Musique Classique", "Festival Pop"],
    "correctAnswer": 1
  },
  {
    "question": "Quel compositeur est célèbre pour ses opéras, y compris 'La Flûte enchantée'?",
    "options": ["Giuseppe Verdi", "Wolfgang Amadeus Mozart", "Richard Wagner", "Giacomo Puccini"],
    "correctAnswer": 1
  },
  {
    "question": "Quel era englobe la période baroque?",
    "options": ["1600-1750", "1750-1820", "1820-1900", "1900-2000"],
    "correctAnswer": 0
  },
  {
    "question": "Qui a popularisé le reggae à l'international?",
    "options": ["Jimmy Cliff", "Bob Marley", "Peter Tosh", "Burning Spear"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'instrument principal du Concerto brandebourgeois de Bach?",
    "options": ["Violoncelle", "Clavier", "Violon", "Flûte"],
    "correctAnswer": 2
  },
  {
    "question": "Quel terme désigne une pièce de musique écrite pour un groupe de plusieurs instruments?",
    "options": ["Sonate", "Symphonie", "Concerto", "Chanson"],
    "correctAnswer": 1
  },
  {
    "question": "Qui est le musicien derrière le célèbre album 'Thriller'?",
    "options": ["Prince", "Elton John", "Michael Jackson", "David Bowie"],
    "correctAnswer": 2
  },
  {
    "question": "Quel style musical est caractérisé par des rythmes syncopés et des improvisations?",
    "options": ["Classique", "Jazz", "Blues", "Pop"],
    "correctAnswer": 1
  },
  {
    "question": "Quel pays est le berceau du flamenco?",
    "options": ["France", "Espagne", "Italie", "Portugal"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le nom du festival de musique qui a eu lieu à Monterey en 1967?",
    "options": ["Monterey Jazz Festival", "Monterey Pop Festival", "Monterey Rock Festival", "Monterey World Festival"],
    "correctAnswer": 1
  }
];
