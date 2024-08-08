
// Subject: Technologie
// Topic: Impact sur la société et l'environnement
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Impact sur la société et l'environnement', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est une des principales causes du changement climatique ?",
    "options": ["Déforestation", "Utilisation des smartphones", "Énergie solaire", "Peinture des murs"],
    "correctAnswer": 0
  },
  {
    "question": "Quel gaz à effet de serre est principalement émis par les voitures ?",
    "options": ["Oxygène", "Dioxyde de carbone", "Hydrogène", "Azote"],
    "correctAnswer": 1
  },
  {
    "question": "Pourquoi le recyclage est-il important pour l'environnement ?",
    "options": ["Il réduit les déchets", "Il augmente la pollution", "Il consomme plus d'énergie", "Il n'a aucun impact"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est l'impact de la surpêche sur les océans ?",
    "options": ["Augmentation de la biodiversité", "Équilibre des écosystèmes", "Destruction des habitats marins", "Aucune conséquence"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce que l'énergie renouvelable ?",
    "options": ["Énergie provenant de sources non épuisables", "Énergie fossile", "Énergie nucléaire", "Énergie thermique"],
    "correctAnswer": 0
  },
  {
    "question": "Quel produit est considéré comme non biodégradable ?",
    "options": ["Papier", "Plastique", "Verre", "Métal"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un effet direct du changement climatique sur les espèces animales ?",
    "options": ["Augmentation de leur population", "Modification de leurs habitats", "Amélioration de leur santé", "Aucune variation"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce qui contribue le plus à la pollution de l'air en milieu urbain ?",
    "options": ["Véhicules", "Arbres", "Rivières", "Parcs"],
    "correctAnswer": 0
  },
  {
    "question": "Que pouvons-nous faire pour réduire notre empreinte carbone ?",
    "options": ["Utiliser plus d'appareils électriques", "Prendre les transports en commun", "Jeter plus de déchets", "Consommer des produits transformés"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est un effet de la déforestation ?",
    "options": ["Augmentation des précipitations", "Perte de biodiversité", "Renforcement des sols", "Aucune influence"],
    "correctAnswer": 1
  },
  {
    "question": "Pourquoi est-il important de protéger les ressources en eau ?",
    "options": ["Pour augmenter la population", "Pour préserver la biodiversité", "Pour réduire les coûts d'énergie", "Pour aucun but"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce que le développement durable ?",
    "options": ["Développement sans limites", "Développement qui répond aux besoins du présent sans compromettre ceux des futures générations", "Accroissement rapide de la production", "Épuisement des ressources naturelles"],
    "correctAnswer": 1
  },
  {
    "question": "Quel produit peut souvent être recyclé ?",
    "options": ["Batteries", "Plastique", "Papier", "Déchets alimentaires"],
    "correctAnswer": 2
  },
  {
    "question": "Quel risque pose la pollution des rivières ?",
    "options": ["Amélioration de la qualité de l'eau", "Menace pour la faune aquatique", "Aucun effet", "Croissance de l'algue"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'objectif principal des énergies renouvelables ?",
    "options": ["Épuise les ressources", "Réduire la dépendance aux combustibles fossiles", "Augmenter la pollution", "Rien de tout cela"],
    "correctAnswer": 1
  }
];
