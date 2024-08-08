
// Subject: Histoire-Géographie
// Topic: La répartition de la population mondiale
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'La répartition de la population mondiale', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la population approximative de la planète en 2023 ?",
    "options": ["7 milliards", "8 milliards", "9 milliards", "10 milliards"],
    "correctAnswer": 1
  },
  {
    "question": "Quel pays a la plus grande population ?",
    "options": ["États-Unis", "Inde", "Chine", "Brésil"],
    "correctAnswer": 2
  },
  {
    "question": "Dans quel continent se trouve la majorité de la population mondiale ?",
    "options": ["Afrique", "Amérique", "Europe", "Asie"],
    "correctAnswer": 3
  },
  {
    "question": "Quelle ville est considérée comme la plus peuplée du monde ?",
    "options": ["Tokyo", "Delhi", "Shanghai", "São Paulo"],
    "correctAnswer": 0
  },
  {
    "question": "Quel pourcentage de la population mondiale vit en milieu urbain ?",
    "options": ["30%", "50%", "55%", "60%"],
    "correctAnswer": 2
  },
  {
    "question": "Quel pays a connu la plus forte croissance démographique au cours des 10 dernières années ?",
    "options": ["Nigeria", "Japon", "Allemagne", "Canada"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la principale cause de la croissance démographique dans le monde ?",
    "options": ["L'augmentation de l'espérance de vie", "Les migrations", "La baisse de la natalité", "Les guerres"],
    "correctAnswer": 0
  },
  {
    "question": "Quel pays a une population en déclin ?",
    "options": ["Inde", "Chine", "Éthiopie", "Philippines"],
    "correctAnswer": 1
  },
  {
    "question": "Profitons-nous d'une répartition égale de la population sur la Terre ?",
    "options": ["Oui", "Non", "Cela dépend", "En partie"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle région du monde a la densité de population la plus élevée ?",
    "options": ["Nord de l'Afrique", "Asie de l'Est", "Europe de l'Ouest", "Amérique du Sud"],
    "correctAnswer": 1
  },
  {
    "question": "Quelle est la principale métropole en Afrique par sa population ?",
    "options": ["Le Caire", "Lagos", "Nairobi", "Johannesburg"],
    "correctAnswer": 1
  },
  {
    "question": "Quel phénomène contribue à l'urbanisation dans les pays en développement ?",
    "options": ["La guerre", "La pauvreté", "L'industrialisation", "La santé"],
    "correctAnswer": 2
  },
  {
    "question": "Qui est généralement responsable de la répartition géographique de la population ?",
    "options": ["Les gouvernements", "Les ressources naturelles", "Les entreprises", "Les ONG"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est l'impact du changement climatique sur la répartition de la population ?",
    "options": ["Aucun impact", "Déplacement de populations", "Augmentation de la population", "Réduction des naissances"],
    "correctAnswer": 1
  },
  {
    "question": "Quel continent a la croissance démographique la plus rapide ?",
    "options": ["Asie", "Europe", "Amérique du Nord", "Afrique"],
    "correctAnswer": 3
  }
];
