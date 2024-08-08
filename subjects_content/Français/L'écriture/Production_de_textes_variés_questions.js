
// Subject: Français
// Topic: Production de textes variés
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Production de textes variés', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le but d'un texte narratif ?",
    "options": ["Raconter une histoire", "Donner des informations", "Exprimer un opinion", "Décrire un lieu"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de texte vise à convaincre le lecteur ?",
    "options": ["Texte descriptif", "Texte narratif", "Texte argumentatif", "Texte poétique"],
    "correctAnswer": 2
  },
  {
    "question": "Dans un poème, quel élément est souvent utilisé pour créer des images ?",
    "options": ["Métaphores", "Chiffres", "Faits", "Graphiques"],
    "correctAnswer": 0
  },
  {
    "question": "Quelles sont les caractéristiques d'un texte informatif ?",
    "options": ["Subjectivité", "Faits et données", "Narration", "Dialogue"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le format habituel d'une lettre formelle ?",
    "options": ["Introduction, développement, conclusion", "Salutation, corps, formule de politesse", "Titre, titre, titre", "Liste, liste, liste"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de texte utilise souvent des dialogues ?",
    "options": ["Texte narratif", "Texte descriptif", "Texte argumentatif", "Texte informatif"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la fonction d'un chapeau dans un article ?",
    "options": ["Introduire le sujet", "Fournir une conclusion", "Expliquer les données", "Dresser un portrait"],
    "correctAnswer": 0
  },
  {
    "question": "Quel style est souvent utilisé dans un texte poétique ?",
    "options": ["Formel", "Familier", "Élevé", "Classique"],
    "correctAnswer": 2
  },
  {
    "question": "Dans une description, quel élément est essentiel ?",
    "options": ["Les émotions", "Les chiffres", "Les détails sensoriels", "Les dialogues"],
    "correctAnswer": 2
  },
  {
    "question": "Comment appelle-t-on un récit basé sur des faits réels ?",
    "options": ["Fiction", "Documentaire", "Biographie", "Roman"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'objectif d'un texte explicatif ?",
    "options": ["Informé", "Émouvoir", "Raconter", "Décrire"],
    "correctAnswer": 0
  },
  {
    "question": "Pour établir un bon contraste dans un texte, il est important d'utiliser quoi ?",
    "options": ["Des synonymes", "Des antithèses", "Des compléments", "Des listes"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'élément principal d'une fable ?",
    "options": ["Une morale", "Une analyse", "Une définition", "Une offre"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de texte est généralement court et percutant ?",
    "options": ["Essai", "Poème", "Article", "Nouvelle"],
    "correctAnswer": 1
  },
  {
    "question": "Laquelle des options suivantes est un indicateur d’argumentation ?",
    "options": ["Premièrement", "Il était une fois", "En conclusion", "Par conséquent"],
    "correctAnswer": 3
  }
];
