
// Subject: Physique-Chimie
// Topic: Caractérisation d'un mouvement
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Caractérisation d'un mouvement', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce qu'un mouvement rectiligne uniforme ?",
    "options": ["Mouvement en ligne droite avec accélération", "Mouvement en ligne droite sans accélération", "Mouvement circulaire", "Mouvement oscillatoire"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'impact de la force sur un objet en mouvement ?",
    "options": ["Elle n'a aucun impact", "Elle change sa vitesse", "Elle change sa direction", "Tout cela"],
    "correctAnswer": 3
  },
  {
    "question": "Comment définit-on la vitesse ?",
    "options": ["Distance parcourue par unité de temps", "Changement de position", "Variation de la vitesse", "Force appliquée"],
    "correctAnswer": 0
  },
  {
    "question": "Un mouvement circulaire est caractérisé par quoi ?",
    "options": ["Une vitesse constante", "Une trajectoire en ligne droite", "Une distance parcourue", "Un changement constant de direction"],
    "correctAnswer": 3
  },
  {
    "question": "Quel effet produit un frottement sur un mouvement ?",
    "options": ["Accélère le mouvement", "Diminue la vitesse", "Ne change rien", "Ralentit le mouvement"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle est l'unité de mesure de la vitesse ?",
    "options": ["m/s", "km/h", "cm/s", "Toutes les réponses ci-dessus"],
    "correctAnswer": 3
  },
  {
    "question": "Qu'est-ce que l'accélération ?",
    "options": ["Changement de vitesse", "Changement de direction", "Distance parcourue", "Force exercée sur un objet"],
    "correctAnswer": 0
  },
  {
    "question": "Dans quel type de mouvement la vitesse reste constante ?",
    "options": ["Mouvement rectiligne uniformément accéléré", "Mouvement rectiligne uniforme", "Mouvement circulaire", "Aucun de ces mouvements"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de mouvement décrit une balle lancée en l'air ?",
    "options": ["Mouvement rectiligne", "Mouvement circulaire", "Mouvement parabolique", "Mouvement oscillatoire"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle est la différence entre distance et déplacement ?",
    "options": ["Distance est un scalaire, déplacement est un vecteur", "Les deux sont la même chose", "Distance est toujours plus grande que déplacement", "Déplacement est mesuré en heures"],
    "correctAnswer": 0
  },
  {
    "question": "Quand dit-on qu'un objet est en mouvement ?",
    "options": ["Quand il change de position par rapport à un point de référence", "Quand il reste immobile", "Quand il devient chaud", "Quand il est poussé"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le mouvement parabolique d'une projectile ?",
    "options": ["Mouvement horizontal", "Mouvement vertical", "Mouvement à la surface", "Mouvement avec un chemin courbé"],
    "correctAnswer": 3
  },
  {
    "question": "Lorsqu'un véhicule freine, qu'arrivons-nous à observer ?",
    "options": ["Déceleration", "Accélération", "Vitesse constante", "Mouvement circulaire"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'effet de la gravité sur un objet en chute libre ?",
    "options": ["Accélération", "Vitesse constante", "Changement de direction", "Force équilibrée"],
    "correctAnswer": 0
  },
  {
    "question": "Comment représente-t-on un vecteur mouvement dans un graphique ?",
    "options": ["Par une flèche", "Par un point", "Par une ligne continue", "Par une courbe"],
    "correctAnswer": 0
  }
];
