
// Subject: Histoire-Géographie
// Topic: Les ressources et leur gestion
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Les ressources et leur gestion', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Qu'est-ce qu'une ressource renouvelable ?",
    "options": ["Une ressource qui peut être utilisée plusieurs fois", "Une ressource qui ne peut pas être remplacée", "Une ressource naturelle", "Une ressource épuisable"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est un exemple d'énergie renouvelable ?",
    "options": ["Pétrole", "Charbon", "Énergie solaire", "Gaz naturel"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle ressource est considérée comme non renouvelable ?",
    "options": ["L'eau", "Le vent", "Le charbon", "Le bois"],
    "correctAnswer": 2
  },
  {
    "question": "Pourquoi est-il important de gérer les ressources ?",
    "options": ["Pour éviter le gaspillage", "Pour augmenter la pollution", "Pour créer de nouvelles ressources", "Pour réduire les coûts"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est un impact de la surexploitation des ressources ?",
    "options": ["Amélioration de la biodiversité", "Installation de nouvelles technologies", "Diminution de la qualité de l'air", "Épuisement des ressources"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle pratique aide à conserver l'eau ?",
    "options": ["Arroser pendant la chaleur", "Utiliser des dispositifs économes en eau", "Laver la voiture tous les jours", "Prendre des douches longues"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est une source d'énergie fossile ?",
    "options": ["Le solaire", "L'hydraulique", "Le gaz naturel", "La géothermie"],
    "correctAnswer": 2
  },
  {
    "question": "Qu'est-ce qui peut réduire les déchets ?",
    "options": ["Recycler", "Jeter des choses", "Utiliser des plastiques à usage unique", "Ignorer le tri des déchets"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est un exemple de ressource naturelle ?",
    "options": ["Papier", "Fer", "Sable", "Plastique"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est le principal gaz à effet de serre produit par les activités humaines ?",
    "options": ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle action contribue à la gestion durable des ressources ?",
    "options": ["Surexploitation", "Déforestation", "Réduction des déchets", "Utilisation excessive de l'eau"],
    "correctAnswer": 2
  },
  {
    "question": "Quelle énergie est issue de la chaleur de la terre ?",
    "options": ["Énergie éolienne", "Énergie géothermique", "Énergie solaire", "Énergie de la biomasse"],
    "correctAnswer": 1
  },
  {
    "question": "Quel phénomène peut être causé par la déforestation ?",
    "options": ["Augmentation de la biodiversité", "Érosion des sols", "Réduction de la pollution", "Stabilisation du climat"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce que l'agriculture durable ?",
    "options": ["Une agriculture intensive", "Une agriculture qui maximise les rendements à court terme", "Une agriculture qui prend soin de l'environnement", "Une agriculture sans limites"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est l'objectif de la gestion des ressources ?",
    "options": ["Augmenter leur consommation", "Assurer leur disponibilité future", "Ignorer les besoins environnementaux", "Maximiser le profit à court terme"],
    "correctAnswer": 1
  }
];
