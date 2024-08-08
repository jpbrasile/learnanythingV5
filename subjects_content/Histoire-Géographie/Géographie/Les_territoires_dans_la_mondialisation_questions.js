
// Subject: Histoire-Géographie
// Topic: Les territoires dans la mondialisation
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Les territoires dans la mondialisation', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est l'impact de la mondialisation sur les économies locales ?",
    "options": ["Renforcement des économies locales", "Aucune influence", "Création de déséquilibres", "Augmentation des prix"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle organisation internationale soutient le commerce mondial ?",
    "options": ["UNESCO", "OMC", "OTAN", "FMI"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un effet positif de la mondialisation ?",
    "options": ["Augmentation des inégalités", "Accès à de nouveaux marchés", "Perte de cultures locales", "Diminution des emplois"],
    "correctAnswer": 1
  },
  {
    "question": "Comment les technologies de communication influencent-elles la mondialisation ?",
    "options": ["Elles n'ont pas d'impact", "Elles créent des emplois locaux", "Elles facilitent les échanges d'informations", "Elles augmentent les frontières"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qu'un 'flux migratoire' ?",
    "options": ["Déplacement temporaire de personnes", "Échange de marchandises", "Transfert de capitaux", "Émigration définitive"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la conséquence de la délocalisation des usines ?", 
    "options": ["Augmentation des emplois dans le pays d'origine", "Baisse des coûts de production", "Amélioration des conditions de travail", "Réduction des exportations"],
    "correctAnswer": 1
  },
  {
    "question": "Quel continent est le plus connecté au niveau de la mondialisation ?",
    "options": ["Afrique", "Amérique", "Europe", "Océanie"],
    "correctAnswer": 2
  },
  {
    "question": "Le réseau internet a-t-il un effet sur la mondialisation ?",
    "options": ["Non, c'est sans impact", "Oui, il connecte les gens", "Oui, il crée des barrières", "Non, c'est temporaire"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un danger de la mondialisation pour les cultures ?",
    "options": ["Conservation des langues", "Érosion des cultures locales", "Augmentation de la diversité culturelle", "Soutien aux traditions"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce que l'économie de marché mondiale ?",
    "options": ["Économie uniquement locale", "Économie régulée par l'État", "Économie interconnectée entre plusieurs pays", "Économie basée sur le troc"],
    "correctAnswer": 2
  },
  {
    "question": "Quel rôle jouent les multinationales dans la mondialisation ?",
    "options": ["Elles freinent le commerce", "Elles s'installent uniquement dans un pays", "Elles créent des emplois dans les pays d'accueil", "Elles n'ont pas d'impact"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est un effet des échanges internationaux ?",
    "options": ["Réduction des échanges culturels", "Augmentation de la rareté des ressources", "Accès à des produits diversifiés", "Isolement des économies"],
    "correctAnswer": 2
  },
  {
    "question": "Quels critères définissent un espace de mondialisation ?",
    "options": ["Richesse uniquement", "Interactions économiques, culturelles et politiques", "Taille géographique", "Population uniquement"],
    "correctAnswer": 1
  },
  {
    "question": "Quel secteur est le plus touché par la mondialisation ?",
    "options": ["Agriculture", "Industrie", "Services", "Éducation"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le lien entre mondialisation et développement durable ?",
    "options": ["Aucun lien", "La mondialisation nuit au développement durable", "La mondialisation favorise le développement durable", "Cela dépend des pays"],
    "correctAnswer": 1
  }
];
