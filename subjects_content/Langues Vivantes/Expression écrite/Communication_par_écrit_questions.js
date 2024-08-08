
// Subject: Langues Vivantes
// Topic: Communication par écrit
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Communication par écrit', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le but principal d'une lettre formelle ?",
    "options": ["Faire des blagues", "Exprimer des remerciements", "Demander quelque chose", "Partager des nouvelles personnelles"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle phrase est appropriée pour commencer un email professionnel ?",
    "options": ["Salut !", "Bonjour, J'espère que vous allez bien.", "Yo !", "Salut tout le monde,"],
    "correctAnswer": 1
  },
  {
    "question": "Comment doit-on signer une lettre formelle ?",
    "options": ["Amicalement", "Cordialement", "Bisous", "À plus"],
    "correctAnswer": 1
  },
  {
    "question": "Quel élément ne devrait pas manquer dans un email professionnel ?",
    "options": ["Un emoji", "Objet", "Bandeau décoratif", "Langage familier"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est l'importance de la ponctuation dans un texte écrit ?",
    "options": ["Elle n'est pas importante", "Elle aide à structurer le texte", "Elle rend le texte plus coloré", "Elle ne sert qu'à exister"],
    "correctAnswer": 1
  },
  {
    "question": "Que signifie l'acronyme CV ?",
    "options": ["Candidature Volontaire", "Curriculum Vitae", "Contrat de Vente", "Carte de Visite"],
    "correctAnswer": 1
  },
  {
    "question": "Dans quel contexte utilise-t-on le langage informel ?",
    "options": ["Dans un rapport d'entreprise", "Dans un email à un ami", "Dans une lettre de réclamation", "Dans une dissertation"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le ton idéal pour une lettre de motivation ?",
    "options": ["Familier", "Humoristique", "Formel", "Indifférent"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qu'une abréviation ?",
    "options": ["Un type de texte", "Un raccourci pour un mot ou une phrase", "Une méthode d'écriture", "Un style de poésie"],
    "correctAnswer": 1
  },
  {
    "question": "Pourquoi est-il important de relire avant d'envoyer un message écrit ?",
    "options": ["Pour vérifier les fautes d'orthographe", "Pour ajouter plus d'emoji", "Pour changer le ton", "Pour changer le sujet"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la caractéristique d'un bon paragraphe ?",
    "options": ["Long et ennuyeux", "Court et sans rapport", "Clair et structuré", "Rempli de jargon"],
    "correctAnswer": 2
  },
  {
    "question": "Quel type de textes nécessite une introduction, un développement et une conclusion ?",
    "options": ["Un poème", "Une lettre", "Une dissertation", "Un email"],
    "correctAnswer": 2
  },
  {
    "question": "Quel mot est un synonyme de 'écrire' ?",
    "options": ["Lire", "Noter", "Dire", "Téléphoner"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'effet d'un bon titre sur un texte ?",
    "options": ["Il est inutile", "Il attire l'attention du lecteur", "Il rend le texte ennuyeux", "Il complique le texte"],
    "correctAnswer": 1
  },
  {
    "question": "Que doit-on éviter dans un email professionnel ?",
    "options": ["Une ligne d'objet", "Des fautes d'orthographe", "Une formule de politesse", "Un contenu clair"],
    "correctAnswer": 1
  }
];
