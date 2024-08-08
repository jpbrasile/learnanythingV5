
// Subject: Histoire-Géographie
// Topic: La chrétienté et l'islam au Moyen Âge
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'La chrétienté et l'islam au Moyen Âge', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel événement a marqué le début des croisades?",
    "options": ["La découverte de l'Amérique", "La conquête de Jérusalem", "L'appel à la croisade de 1095", "La chute de Constantinople"],
    "correctAnswer": 2
  },
  {
    "question": "Quel roi français a dirigé la troisième croisade?",
    "options": ["Philippe II", "Louis IX", "Richard Coeur de Lion", "Jean sans Terre"],
    "correctAnswer": 2
  },
  {
    "question": "Quel était le but principal des croisades?",
    "options": ["Convertir les musulmans", "Établir des routes commerciales", "Récupérer des terres saintes", "Établir la paix en Europe"],
    "correctAnswer": 2
  },
  {
    "question": "La quelle de ces religions a établi des relations avec l'Empire byzantin?",
    "options": ["La chrétienté", "L'hindouisme", "Le bouddhisme", "Le zoroastrisme"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom du livre saint de l'islam?",
    "options": ["La Bible", "Le Coran", "La Torah", "Les Vedas"],
    "correctAnswer": 1
  },
  {
    "question": "Qui est le prophète fondateur de l'islam?",
    "options": ["Moïse", "Jésus", "Mahomet", "Bouddha"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle caractéristique est commune au christianisme et à l'islam?",
    "options": ["La réincarnation", "Le monothéisme", "La polytheisme", "Le culte des ancêtres"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la période durant laquelle l'Église catholique a exercé une forte influence en Europe?",
    "options": ["Le Moyen Âge", "La Renaissance", "L'Antiquité", "Le Siècle des Lumières"],
    "correctAnswer": 0
  },
  {
    "question": "Quel terme désigne le voyage des musulmans vers La Mecque?",
    "options": ["La Hijra", "Le Jihad", "Le Hadj", "La Pèlerinage"],
    "correctAnswer": 2
  },
  {
    "question": "Pourquoi les pèlerinages étaient-ils importants pour les chrétiens au Moyen Âge?",
    "options": ["Pour découvrir de nouveaux territoires", "Pour payer moins d'impôts", "Pour obtenir des indulgences", "Pour rencontrer des rois"],
    "correctAnswer": 2
  },
  {
    "question": "Quel pouvoir avait l'Église sur la vie quotidienne au Moyen Âge?",
    "options": ["Aucun pouvoir", "Un pouvoir économique immense", "Un pouvoir politique limité", "Un pouvoir spirituel dominant"],
    "correctAnswer": 3
  },
  {
    "question": "Qui était le calife au Moyen Âge?",
    "options": ["Un roi chrétien", "Un gouverneur islamique", "Un empereur byzantin", "Un pape"],
    "correctAnswer": 1
  },
  {
    "question": "Quel événement a provoqué la chute de Constantinople en 1453?",
    "options": ["L'invasion mongole", "La guerre de Cent Ans", "La conquête ottomane", "La découverte de l'Amérique"],
    "correctAnswer": 2
  },
  {
    "question": "Quel rôle la Sainte Inquisition a-t-elle joué dans le christianisme?",
    "options": ["Démolir des églises", "Chasser les musulmans", "Évaluer l'hérésie", "Promouvoir l'éducation"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle ville était un centre majeur de la culture islamique au Moyen Âge?",
    "options": ["Bagdad", "Rome", "Paris", "Londres"],
    "correctAnswer": 0
  }
];
