
// Subject: Éducation Musicale
// Topic: Création musicale
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Création musicale', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel instrument est considéré comme un instrument à cordes?",
    "options": ["Piano", "Batterie", "Guitare", "Flûte"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la valeur d'une ronde en mesures?",
    "options": ["1 mesure", "2 mesures", "4 mesures", "8 mesures"],
    "correctAnswer": 2
  },
  {
    "question": "Quel symbole représente un silence de deux temps?",
    "options": ["Ronde", "Blanche", "Noire", "Silence de blanche"],
    "correctAnswer": 3
  },
  {
    "question": "Comment s'appelle le processus d'écriture d'une chanson?",
    "options": ["Composition", "Improvisation", "Arrangements", "Interprétation"],
    "correctAnswer": 0
  },
  {
    "question": "Quel genre musical est caractérisé par des improvisations sur des progressions d'accords?",
    "options": ["Classique", "Jazz", "Rock", "Pop"],
    "correctAnswer": 1
  },
  {
    "question": "Dans quelle mesure la clef de sol est-elle utilisée?",
    "options": ["Pour les instruments à vent", "Pour les percussions", "Pour les instruments à cordes", "Pour la voix"],
    "correctAnswer": 3
  },
  {
    "question": "Quel terme décrit la rapidité d'une pièce musicale?",
    "options": ["Tempo", "Dynamique", "Harmonie", "Mélodie"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type d'accord a trois notes?",
    "options": ["Dissonance", "Accord majeur", "Accord parfait", "Accord diminué"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le rôle du metronome?",
    "options": ["Augmenter le volume", "Baisser le ton", "Indiquer le tempo", "Changer de clé"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le nom de la première note de la gamme de do majeur?",
    "options": ["Ré", "Mi", "Fa", "Do"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est la différence entre la musique vocale et instrumentale?",
    "options": ["La musique vocale utilise des voix", "La musique instrumentale utilise des paroles", "La musique vocale est plus rapide", "La musique instrumentale a plus d'instruments"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'élément fondamental de la musique?",
    "options": ["Les paroles", "Les harmonies", "La mélodie", "Le rythme"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le terme pour un changement de ton dans une pièce musicale?",
    "options": ["Modulation", "Répétition", "Variation", "Transposition"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle forme musicale est souvent utilisée dans les symphonies?",
    "options": ["Sonate", "Suite", "Thème et variations", "Chanson"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de rythme est utilisé pour les danses?",
    "options": ["Lent", "Allegro", "Moderato", "Adagio"],
    "correctAnswer": 1
  }
];
