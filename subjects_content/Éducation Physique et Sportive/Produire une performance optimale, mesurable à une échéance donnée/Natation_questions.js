
// Subject: Éducation Physique et Sportive
// Topic: Natation
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Natation', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le style de nage le plus rapide?",
    "options": ["Papillon", "Brasse", "Dos", "Crawl"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle discipline olympique mêle natation et plongeon?",
    "options": ["Water-polo", "Natation artistique", "Triathlon", "Surf"],
    "correctAnswer": 1
  },
  {
    "question": "Combien de longueurs fait généralement une piscine de compétition?",
    "options": ["25 mètres", "50 mètres", "100 mètres", "75 mètres"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle technique est utilisée pour nager en brasse?",
    "options": ["Frog kick", "Flutter kick", "Dolphin kick", "Scissor kick"],
    "correctAnswer": 0
  },
  {
    "question": "Quelles sont les deux positions de départ en nage synchronisée?",
    "options": ["Ligne droite et cercle", "Cercle et vagues", "Cercle et horizontale", "Horizontal et vertical"],
    "correctAnswer": 2
  },
  {
    "question": "Quel équipement est essentiel pour éviter de couler lors de la natation?",
    "options": ["Palmes", "Bouée", "Lunettes", "Sifflet"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la distance standard d'une course de nage libre aux Jeux Olympiques?",
    "options": ["50 mètres", "100 mètres", "200 mètres", "400 mètres"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le nom du célèbre nageur américain avec 23 médailles d'or?",
    "options": ["Ryan Lochte", "Michael Phelps", "Mark Spitz", "Ian Thorpe"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle partie du corps est principalement utilisée lors de la nage papillon?",
    "options": ["Jambes", "Bras", "Épaules", "Tous les précédents"],
    "correctAnswer": 3
  },
  {
    "question": "À quelle fréquence les nageurs de compétition doivent-ils s'entraîner?",
    "options": ["1 fois par semaine", "2-3 fois par semaine", "5-6 fois par semaine", "Tous les jours"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est la température idéale de l'eau pour la natation?",
    "options": ["10-15°C", "20-25°C", "26-28°C", "30-32°C"],
    "correctAnswer": 2
  },
  {
    "question": "Combien de mètres fait un tour dans une piscine de 50 mètres?",
    "options": ["25 mètres", "50 mètres", "100 mètres", "200 mètres"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle technique de respiration est utilisée pendant la nage crawl?",
    "options": ["Inspirer par la bouche en nageant", "Inspirer par le nez", "Ne pas respirer", "Inspirer puis expirer sous l'eau"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'objectif principal du water-polo?",
    "options": ["Marquer des buts", "Nager le plus vite possible", "Synchroniser les mouvements", "Éviter le contact"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la première chose à faire avant de plonger?",
    "options": ["Rester debout", "Vérifier la profondeur de l'eau", "Faire une roulade", "Crier 'plouf'"],
    "correctAnswer": 1
  }
];
