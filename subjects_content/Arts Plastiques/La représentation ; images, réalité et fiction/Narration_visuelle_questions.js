
// Subject: Arts Plastiques
// Topic: Narration visuelle
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Narration visuelle', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la principale caractéristique de la narration visuelle ?",
    "options": ["Utilisation de la parole", "Utilisation d'images", "Utilisation de la musique", "Utilisation de la danse"],
    "correctAnswer": 1
  },
  {
    "question": "Quel élément est souvent utilisé pour transmettre une émotion dans une image ?",
    "options": ["Couleur", "Texte", "Mouvement", "Son"],
    "correctAnswer": 0
  },
  {
    "question": "Dans une bande dessinée, quel est le rôle des bulles de dialogue ?",
    "options": ["Montrer des actions", "Présenter des pensées", "Indiquer des conversations", "Décrire le cadre"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type de perspective renforce la profondeur d'une image ?",
    "options": ["Perspective à vol d'oiseau", "Perspective linéaire", "Perspective isométrique", "Perspective subjective"],
    "correctAnswer": 1
  },
  {
    "question": "Quel effet peut produire un contraste élevé dans une image ?",
    "options": ["Rendre l'image plus douce", "Créer un impact visuel fort", "Rendre l'image plus monotone", "Éclaircir l'image"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est l'importance de la composition dans une narration visuelle ?",
    "options": ["Elle rend l'image belle", "Elle guide l'œil du spectateur", "Elle remplace la narration", "Elle est secondaire"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le rôle d'un photographe au sein d'une narration visuelle ?",
    "options": ["Écrire le scénario", "Capturer des moments", "Monter des vidéos", "Créer des personnages"],
    "correctAnswer": 1
  },
  {
    "question": "Quel outil peut-être utilisé pour créer une animation ?",
    "options": ["Un styliste", "Un logiciel de montage", "Un tableau", "Un livre"],
    "correctAnswer": 1
  },
  {
    "question": "Le choix des couleurs dans une narration visuelle peut affecter quoi ?",
    "options": ["Le goût", "L'émotion", "La texture", "Le son"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'impact d'un cadrage serré sur une image ?",
    "options": ["Il montre le contexte", "Il accentue les détails", "Il rend l'image floue", "Il dégage l'arrière-plan"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle technique aide à raconter une histoire à travers plusieurs images ?",
    "options": ["Le collage", "La séquence chronologique", "Le flou", "La répétition"],
    "correctAnswer": 1
  },
  {
    "question": "La lumière dans une image peut influencer quelle perception ?",
    "options": ["La taille", "La forme", "L'atmosphère", "La couleur"],
    "correctAnswer": 2
  },
  {
    "question": "Un storyboard est utilisé pour quoi dans la narration visuelle ?",
    "options": ["Dessiner des personnages", "Planifier des scènes", "Choisir des couleurs", "Écrire des dialogues"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce qui peut rendre une image évocatrice selon son contexte ?",
    "options": ["La technique utilisée", "L'histoire derrière", "Les éléments graphiques", "Les couleurs choisies"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de narration visuelle utilise des images en mouvement ?",
    "options": ["Photographie", "Bande dessinée", "Cinéma", "Peinture"],
    "correctAnswer": 2
  }
];
