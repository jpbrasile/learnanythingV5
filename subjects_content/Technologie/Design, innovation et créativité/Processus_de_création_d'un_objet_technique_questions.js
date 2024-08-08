
// Subject: Technologie
// Topic: Processus de création d'un objet technique
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Processus de création d'un objet technique', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce qu'un objet technique ?",
    "options": ["Un objet conçu pour un usage particulier", "Un objet naturel", "Un dessin", "Une émotion"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le premier étape du processus de création d'un objet technique ?",
    "options": ["La conception", "L'analyse du besoin", "La fabrication", "La commercialisation"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce qu'un cahier des charges ?",
    "options": ["Un document qui décrit les contraintes et exigences", "Un manuel d'utilisation", "Un plan de marketing", "Une liste de prix"],
    "correctAnswer": 0
  },
  {
    "question": "Quel outil est souvent utilisé pour la conception d'objets techniques ?",
    "options": ["Un ordinateur", "Un livre", "Un tableau noir", "Un marteau"],
    "correctAnswer": 0
  },
  {
    "question": "Lors de l'analyse du besoin, quel aspect n'est pas pris en compte ?",
    "options": ["Les besoins des utilisateurs", "Le budget", "Les loisirs des concepteurs", "Les contraintes techniques"],
    "correctAnswer": 2
  },
  {
    "question": "À quoi sert un prototype ?",
    "options": ["Tester la fonctionnalité", "Vendre immédiatement", "Remplacer le produit final", "Frustrer les concepteurs"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle étape suit la conception d'un objet technique ?",
    "options": ["Le prototypage", "L'analyse du marché", "La commercialisation", "La recherche scientifique"],
    "correctAnswer": 0
  },
  {
    "question": "Quel élément n'est pas essentiel à la fabrication d'un objet technique ?",
    "options": ["Matériaux", "Outils", "Emplacement de vente", "Main-d'œuvre"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'impact du design sur la création d'un objet technique ?",
    "options": ["Nul", "Exclusivement esthétique", "Fonctionne comme un élément clé", "Limite les idées"],
    "correctAnswer": 2
  },
  {
    "question": "Que doit-on considérer lors de la commercialisation d'un objet technique ?",
    "options": ["Le prix", "La cible de marché", "La concurrence", "Toutes les réponses ci-dessus"],
    "correctAnswer": 3
  },
  {
    "question": "Quel est le but de l'évaluation d'un prototype ?",
    "options": ["Établir des partenariats", "Vérifier la conformité aux besoins", "Rédiger les documents", "Réduire les coûts"],
    "correctAnswer": 1
  },
  {
    "question": "Pourquoi est-il important d'améliorer un objet technique après sa création ?",
    "options": ["Pour répondre aux évolutions des besoins", "Pour gagner de l'argent", "Pour copier d'autres objets", "Pour faire plaisir aux concepteurs"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type d'objet technique est un smartphone ?",
    "options": ["Un outil", "Un produit de consommation", "Une œuvre d'art", "Un jouet"],
    "correctAnswer": 1
  },
  {
    "question": "Un designer doit avoir des compétences en :",
    "options": ["Arts plastiques", "Sciences", "Informatique", "Toutes les compétences mentionnées"],
    "correctAnswer": 3
  },
  {
    "question": "Quel est l'objectif principal de la création d'un objet technique ?",
    "options": ["Répondre à un besoin", "Amuser les gens", "Créer de l'art", "Produire en masse"],
    "correctAnswer": 0
  }
];
