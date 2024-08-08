
// Subject: Langues Vivantes
// Topic: Écoute de documents authentiques
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Écoute de documents authentiques', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le sujet principal du document audio ?",
    "options": ["Un événement historique", "Une recette de cuisine", "Un voyage", "Un film"],
    "correctAnswer": 0
  },
  {
    "question": "Qui est le locuteur principal dans le document ?",
    "options": ["Un expert", "Un enfant", "Un étudiant", "Un professeur"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle émotion le locuteur exprime-t-il ?",
    "options": ["Joie", "Tristesse", "Colère", "Peu importe"],
    "correctAnswer": 0
  },
  {
    "question": "Quel était l'objectif de la présentation ?",
    "options": ["Informer", "Divertir", "Critiquer", "Vendre"],
    "correctAnswer": 0
  },
  {
    "question": "Quel type de document est-ce ?",
    "options": ["Podcast", "Vidéo", "Interview", "Discours"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la durée approximative du document ?",
    "options": ["Moins de 5 minutes", "5-10 minutes", "10-20 minutes", "Plus de 20 minutes"],
    "correctAnswer": 0
  },
  {
    "question": "Quel problème est abordé dans le document ?",
    "options": ["Environnement", "Éducation", "Santé", "Sport"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le ton du document ?",
    "options": ["Sérieux", "Humoristique", "Pédagogique", "Urgent"],
    "correctAnswer": 0
  },
  {
    "question": "Quel public est visé par ce document ?",
    "options": ["Enfants", "Adolescents", "Adultes", "Professionnels"],
    "correctAnswer": 0
  },
  {
    "question": "Quelles informations étaient les plus importantes ?",
    "options": ["Chiffres", "Témoignages", "Opinions", "Faits"],
    "correctAnswer": 0
  },
  {
    "question": "Quel espace géographique est mentionné dans le document ?",
    "options": ["Europe", "Asie", "Amérique", "Afrique"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle action est suggérée par le locuteur ?",
    "options": ["Agir", "Réfléchir", "Attendre", "Discuter"],
    "correctAnswer": 0
  },
  {
    "question": "Quel outil ou support est utilisé dans le document ?",
    "options": ["Diapositive", "Carte", "Graphique", "Tableau"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle question le document soulève-t-il ?",
    "options": ["Pourquoi ?", "Comment ?", "Quand ?", "Où ?"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la conclusion du locuteur ?",
    "options": ["Optimiste", "Pessimiste", "Neutre", "Ambiguë"],
    "correctAnswer": 0
  }
];
