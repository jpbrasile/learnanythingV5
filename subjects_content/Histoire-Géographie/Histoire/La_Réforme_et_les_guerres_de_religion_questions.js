
// Subject: Histoire-Géographie
// Topic: La Réforme et les guerres de religion
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'La Réforme et les guerres de religion', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qui est considéré comme le principal initiateur de la Réforme protestante ?",
    "options": ["Jean Calvin", "Martin Luther", "Henri VIII", "Érasme"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle était la principale critique de Martin Luther à l'égard de l'Église catholique ?",
    "options": ["La vente des indulgences", "Le culte des saints", "L'autorité du pape", "La liturgie en latin"],
    "correctAnswer": 0
  },
  {
    "question": "Quel document a été publié par Martin Luther en 1517 ?",
    "options": ["Les 95 thèses", "Le Catéchisme", "Le Confessionnal", "La Bible"],
    "correctAnswer": 0
  },
  {
    "question": "Quel roi de France a été assassiné en 1610, marquant une période de tensions religieuses ?",
    "options": ["François Ier", "Henri IV", "Louis XIII", "Charles IX"],
    "correctAnswer": 1
  },
  {
    "question": "Quel était le nom des guerres civiles en France entre catholiques et protestants ?",
    "options": ["Les Guerres de Cent Ans", "Les Guerres de Religion", "Les Guerres Napoléoniennes", "Les Guerres de la Révolution"],
    "correctAnswer": 1
  },
  {
    "question": "Quel édit a permis aux protestants français de pratiquer leur foi en 1598 ?",
    "options": ["L'édit de Nantes", "L'édit de Fontainebleau", "L'édit de Tessé", "L'édit de Saint-Germain"],
    "correctAnswer": 0
  },
  {
    "question": "Laquelle des options suivantes était une conséquence de la Réforme ?",
    "options": ["L'unification de l'Europe sous le catholicisme", "L'augmentation du pouvoir des rois", "La fin de l'Église anglicane", "Le démantèlement du Saint-Empire romain"],
    "correctAnswer": 1
  },
  {
    "question": "Quel mouvement a suivi la Réforme catholique ?",
    "options": ["Le Rationalisme", "La Contre-Réforme", "Le Réalisme", "Le Baroque"],
    "correctAnswer": 1
  },
  {
    "question": "Qui a fondé la Compagnie de Jésus (Jésuites) dans le cadre de la Contre-Réforme ?",
    "options": ["Saint François de Sales", "Ignace de Loyola", "Pierre Canisius", "Robert Bellarmin"],
    "correctAnswer": 1
  },
  {
    "question": "Quel événement a marqué le début des guerres de religion en France ?",
    "options": ["Le massacre de la Saint-Barthélemy", "La bataille de Saint-Denis", "Le traité de Cateau-Cambrésis", "L'édit de Nantes"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle était la position de Henri IV concernant la religion ?",
    "options": ["Il était protestant", "Il était catholique", "Il était indifférent", "Il a changé de religion plusieurs fois"],
    "correctAnswer": 3
  },
  {
    "question": "Quel était le principal objectif du Concile de Trente (1545-1563) ?",
    "options": ["Renforcer la foi catholique", "Promouvoir le protestantisme", "Établir l'indifférence religieuse", "Soutenir les sciences"],
    "correctAnswer": 0
  },
  {
    "question": "Quel roi anglais a rompu avec l'Église catholique pour pouvoir divorcer ?",
    "options": ["Charles Ier", "Édouard VI", "Henri VIII", "Jacques Ier"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle était la conséquence de la guerre de Trente Ans ?",
    "options": ["La paix religieuse en Europe", "L'essor du protestantisme", "La domination catholique totale", "La réduction de la population allemande"],
    "correctAnswer": 3
  },
  {
    "question": "Quel était le nom de la reine de France qui était mariée à Henri IV et qui était catholique ?",
    "options": ["Marie de Médicis", "Catherine de Médicis", "Anne d'Autriche", "Élisabeth"],
    "correctAnswer": 1
  }
];
