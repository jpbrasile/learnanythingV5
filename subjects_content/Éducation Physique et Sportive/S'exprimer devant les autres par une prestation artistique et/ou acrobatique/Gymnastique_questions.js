
// Subject: Éducation Physique et Sportive
// Topic: Gymnastique
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Gymnastique', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est l'élément de base en gymnastique?",
    "options": ["Équilibre", "Saut", "Gymnastique rythmique", "Acrobaties"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom de l'appareil utilisé pour les barres asymétriques?",
    "options": ["Barre fixe", "Barre asymétrique", "Saut de cheval", "Tapis"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de gymnastique se pratique avec des rubans et des cerceaux?",
    "options": ["Gymnastique artistique", "Gymnastique rythmique", "Gymnastique acrobatique", "Gymnastique de loisir"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'objectif principal d'un saut de cheval?",
    "options": ["Atterrir en douceur", "Exécuter des figures", "Gagner de la hauteur", "Effectuer des pirouettes"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom de l'épreuve où les gymnastes effectuent des mouvements au sol?",
    "options": ["Tumble", "Sol", "Barre fixe", "Saut"],
    "correctAnswer": 1
  },
  {
    "question": "À quelle hauteur se trouvent généralement les barres asymétriques?",
    "options": ["1 mètre", "2,5 mètres", "1,5 mètres", "1,2 mètres"],
    "correctAnswer": 1
  },
  {
    "question": "Quel muscle est principalement sollicité lors des mouvements de rondades?",
    "options": ["Biceps", "Abdominaux", "Pectoraux", "Jambes"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le terme utilisé pour désigner un enchaînement de mouvements en gymnastique?",
    "options": ["Routine", "Figure", "Exercice", "Performance"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le score maximum qu'un gymnaste peut obtenir lors d'une compétition?",
    "options": ["10", "20", "30", "100"],
    "correctAnswer": 0
  },
  {
    "question": "Qui est souvent considéré comme le père de la gymnastique moderne?",
    "options": ["Johann Friedrich GutsMuths", "Hans Von Hohenstein", "Pierre de Coubertin", "Carl Diem"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle figure est connue sous le nom de 'chandelle' en gymnastique?",
    "options": ["Une rotation en arrière", "Un équilibre sur les épaules", "Une souplesse", "Un saut périlleux"],
    "correctAnswer": 1
  },
  {
    "question": "Quel appareil de gymnastique nécessite le plus de force pour être manié?",
    "options": ["Barre fixe", "Tapis de sol", "Saut de cheval", "Trampoline"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est l'une des principales compétitions internationales de gymnastique?",
    "options": ["Les Jeux Olympiques", "La Coupe du Monde", "Le Championnat d'Europe", "Le Tournoi des 6 Nations"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'âge minimum requis pour participer aux compétitions de gymnastique artistique aux JO?",
    "options": ["14 ans", "16 ans", "18 ans", "10 ans"],
    "correctAnswer": 1
  },
  {
    "question": "Le terme ‘difficulté’ en gymnastique fait référence à:",
    "options": ["La qualité d'exécution", "Le niveau de maîtrise des mouvements", "Le nombre de mouvements exécutés", "La hauteur des sauts"],
    "correctAnswer": 1
  }
];
