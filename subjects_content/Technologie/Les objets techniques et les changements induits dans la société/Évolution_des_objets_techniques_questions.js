
// Subject: Technologie
// Topic: Évolution des objets techniques
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Évolution des objets techniques', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est l'objet technique qui a permis de mesurer le temps avec précision au Moyen Âge ?",
    "options": ["Sundial", "Horloge à farine", "Montre mécanique", "Clepsydre"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle invention a révolutionné le transport au 19ème siècle ?",
    "options": ["La voiture", "Le train à vapeur", "L'avion", "Le vélo"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le principe de fonctionnement d'un levier ?",
    "options": ["Friction", "Pousser", "Équilibre des forces", "Traction"],
    "correctAnswer": 2
  },
  {
    "question": "Quel objet technique a d'abord été utilisé pour moulin à eau ?",
    "options": ["Turbine", "Moulin à vent", "Système de poulies", "Pelle"],
    "correctAnswer": 0
  },
  {
    "question": "Quel matériau a permis le développement des objets techniques modernes ?",
    "options": ["Bois", "Métal", "Plastique", "Verre"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est l'origine de l'imprimerie ?",
    "options": ["Chine", "Allemagne", "France", "Italie"],
    "correctAnswer": 0
  },
  {
    "question": "Quel objet technique est considéré comme le précurseur de l'ordinateur ?",
    "options": ["La calculatrice", "Le boulier", "La machine analytique", "Le télégraphe"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type d'énergie est principalement utilisée par les éoliennes ?",
    "options": ["Énergie solaire", "Énergie cinétique", "Énergie hydraulique", "Énergie géothermique"],
    "correctAnswer": 1
  },
  {
    "question": "Quels sont les principaux composants d'un circuit électrique ?",
    "options": ["Capteurs, Processeurs", "Fusibles, Batteries", "Résistances, Condensateurs", "Câbles, Prises"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle découverte a permis le développement des télécommunications modernes ?",
    "options": ["Le téléphone", "Le code Morse", "L'Internet", "Le télégraphe"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est la fonction d'un moteur ?",
    "options": ["Transformer l'énergie", "Fournir de la chaleur", "Stocker de l'énergie", "Produire du mouvement"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle civilisation a inventé la roue ?",
    "options": ["Sumériens", "Égyptiens", "Grecs", "Roms"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle invention a permis la photosensibilité des papiers ?",
    "options": ["L'appareil photo", "Le scanner", "Le paragraphe", "Le photocopieur"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'impact des objets techniques sur l'environnement ?",
    "options": ["Aucun", "Positif", "Négatif", "Variable"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle technique de construction a évolué au fil des siècles ?",
    "options": ["Murs en briques", "Structures en métal", "Toits en chaume", "Routes en pierre"],
    "correctAnswer": 1
  }
];
