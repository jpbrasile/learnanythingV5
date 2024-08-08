
// Subject: Langues Vivantes
// Topic: Compréhension de consignes et instructions
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Compréhension de consignes et instructions', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la première étape pour résoudre ce problème mathématique : 5 + 3 ?",
    "options": ["Écrire l'expression", "Ajouter les deux nombres", "Répondre 8", "Vérifier la réponse"],
    "correctAnswer": 0
  },
  {
    "question": "Si la consigne demande d'écrire un texte de 100 mots, que faut-il faire ?",
    "options": ["Écrire 50 mots", "Écrire 100 mots", "Écrire 150 mots", "Ne rien écrire"],
    "correctAnswer": 1
  },
  {
    "question": "Que signifie 'ne pas utiliser de dictionnaire' dans cette consigne ?",
    "options": ["Utiliser un dictionnaire", "Réaliser l'exercice sans aide", "Contacter un enseignant", "Demander à un camarade"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le but de la consigne : 'lire attentivement le texte avant de répondre' ?",
    "options": ["Répondre rapidement", "Comprendre le texte", "Ignorer le texte", "Utiliser internet"],
    "correctAnswer": 1
  },
  {
    "question": "Que devez-vous faire si une consigne n'est pas claire ?",
    "options": ["Suivre la consigne", "Demander des précisions", "Ignorer la consigne", "Faire à votre façon"],
    "correctAnswer": 1
  },
  {
    "question": "Dans l'instruction 'soulivez les mots en gras', quelle action devez-vous réaliser ?",
    "options": ["Écrire les mots en gras", "Colorier les mots", "Souligner les mots", "Ne rien faire"],
    "correctAnswer": 2
  },
  {
    "question": "Si un exercice dit 'trouvez l'erreur', que cherchez-vous à identifier ?",
    "options": ["Une couleur", "Un concept", "Une erreur", "Une solution"],
    "correctAnswer": 2
  },
  {
    "question": "La consigne 'travail en groupe' signifie que vous devez :",
    "options": ["Travailler seul", "Former des équipes", "Demander à l'enseignant", "Changer de place"],
    "correctAnswer": 1
  },
  {
    "question": "Que sous-entend la phrase 'écrire en lettres et en chiffres' ?",
    "options": ["Écrire les nombres deux fois", "Écrire des mots et des mathématiques", "Utiliser un stylo et un crayon", "Ne rien écrire"],
    "correctAnswer": 0
  },
  {
    "question": "Si l'instruction demande de 'faire une présentation', quel type de travail est attendu ?",
    "options": ["Écrire un texte", "Faire un exposé oral", "Chanter une chanson", "Dessiner"],
    "correctAnswer": 1
  },
  {
    "question": "En lisant la consigne 'comparez les deux images', que devez-vous faire ?",
    "options": ["Regarder rapidement", "Noter les différences", "Dessiner des images", "Aucune action"],
    "correctAnswer": 1
  },
  {
    "question": "Que signifie 'préparer un plan' pour un exposé ?",
    "options": ["Faire un dessin", "Faire un plan de travail", "Écrire sans idées", "Demander à d'autres"],
    "correctAnswer": 1
  },
  {
    "question": "Si on vous demande de 'classer ces mots par ordre alphabétique', quelle est l'action à réaliser ?",
    "options": ["Écrire les mots", "Classer les mots", "Lire les mots", "Ignorer les mots"],
    "correctAnswer": 1
  },
  {
    "question": "Que faire si l'instruction de l'exercice n'est pas respectée ?",
    "options": ["Recommencer l'exercice", "Ignorer les consignes", "Demander des précisions", "Attendre la fin de l'exercice"],
    "correctAnswer": 2
  },
  {
    "question": "Si un devoir demande de 'répondre par une phrase complète', comment devez-vous répondre ?",
    "options": ["Avec un mot", "Avec une phrase complète", "Avec un dessin", "Répondre par oui ou non"],
    "correctAnswer": 1
  }
];
