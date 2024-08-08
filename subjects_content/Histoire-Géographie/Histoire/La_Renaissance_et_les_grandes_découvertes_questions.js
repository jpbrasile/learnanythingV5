
// Subject: Histoire-Géographie
// Topic: La Renaissance et les grandes découvertes
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'La Renaissance et les grandes découvertes', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel artiste est célèbre pour ses peintures de la Renaissance, notamment la 'Mona Lisa'?",
    "options": ["Vincent van Gogh", "Leonard de Vinci", "Pablo Picasso", "Claude Monet"],
    "correctAnswer": 1
  },
  {
    "question": "En quelle année Christophe Colomb a-t-il traversé l'Atlantique?",
    "options": ["1492", "1500", "1488", "1510"],
    "correctAnswer": 0
  },
  {
    "question": "Quel pays a vu naître la Renaissance?",
    "options": ["France", "Espagne", "Italie", "Angleterre"],
    "correctAnswer": 2
  },
  {
    "question": "Qui a sculpté la statue de David à Florence?",
    "options": ["Donatello", "Michel-Ange", "Raphaël", "Botticelli"],
    "correctAnswer": 1
  },
  {
    "question": "Quel inventeur a créé l'imprimerie moderne autour de 1440?",
    "options": ["Johannes Kepler", "Johannes Gutenberg", "Galilée", "Leonard de Vinci"],
    "correctAnswer": 1
  },
  {
    "question": "Quel navigateur portugais a été un pionnier des explorations maritimes au XVe siècle?",
    "options": ["Ferdinand Magellan", "Vasco de Gama", "Jean Cabot", "Hernán Cortés"],
    "correctAnswer": 1
  },
  {
    "question": "Quel mouvement artistique a émergé durant la Renaissance?",
    "options": ["Impressionnisme", "Cubisme", "Surréalisme", "Humanisme"],
    "correctAnswer": 3
  },
  {
    "question": "Quel explorateur a découvert le Brésil en 1500?",
    "options": ["Cristóvão Colombo", "Pedro Álvares Cabral", "Ferdinand Magellan", "Hernán Cortés"],
    "correctAnswer": 1
  },
  {
    "question": "Lequel de ces pays a colonisé l'Amérique du Sud?",
    "options": ["Angleterre", "France", "Espagne", "Pays-Bas"],
    "correctAnswer": 2
  },
  {
    "question": "Qui a peint le plafond de la chapelle Sixtine?",
    "options": ["Raphaël", "Michel-Ange", "Titien", "Caravage"],
    "correctAnswer": 1
  },
  {
    "question": "Quel écrivain a écrit 'Le Prince', un manuel sur la politique et le pouvoir?",
    "options": ["Boccace", "Machiavel", "Dante", "Petrarque"],
    "correctAnswer": 1
  },
  {
    "question": "Quel phénomène a permis de diffuser les idées de la Renaissance à travers l'Europe?",
    "options": ["La guerre de Cent Ans", "L'imprimerie", "La Réforme", "La peste noire"],
    "correctAnswer": 1
  },
  {
    "question": "Qui a découvert le passage vers l'Inde en contournant l'Afrique?",
    "options": ["Ferdinand Magellan", "Vasco de Gama", "Jacques Cartier", "Bartolomeu Dias"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le terme utilisé pour désigner le renouveau des arts et des lettres durant cette période?",
    "options": ["Révolution", "Renaissance", "Baroque", "Romantisme"],
    "correctAnswer": 1
  },
  {
    "question": "Quel était le principal objectif des grandes découvertes?",
    "options": ["Trouver un nouveau continent", "Établir des routes commerciales", "Coloniser l'Afrique", "Évangéliser les populations"],
    "correctAnswer": 1
  }
];
