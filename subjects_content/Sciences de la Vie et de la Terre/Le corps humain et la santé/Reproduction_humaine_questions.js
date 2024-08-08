
// Subject: Sciences de la Vie et de la Terre
// Topic: Reproduction humaine
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Reproduction humaine', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quelle est la principale fonction des organes reproducteurs chez l'homme ?",
    "options": ["Produire des spermatozoïdes", "Produire des ovules", "Produire des hormones", "Aucune de ces réponses"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le terme utilisé pour désigner le processus par lequel un spermatozoïde et un ovule se rejoignent ?",
    "options": ["Fécondation", "Ovulation", "Gémination", "Maturation"],
    "correctAnswer": 0
  },
  {
    "question": "À quel moment le corps féminin libère-t-il un ovule ?",
    "options": ["Lors de la grossesse", "Pendant la menstruation", "Pendant l'ovulation", "À la puberté"],
    "correctAnswer": 2
  },
  {
    "question": "Quel organe produit les spermatozoïdes chez l'homme ?",
    "options": ["Testicules", "Prostate", "Pénis", "Urètre"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom de la cellule reproductive féminine ?",
    "options": ["Spermatozoïde", "Ovule", "Zygote", "Embryon"],
    "correctAnswer": 1
  },
  {
    "question": "Quels sont les chromosomes sexuels d'une femme ?",
    "options": ["XY", "YY", "XX", "XZ"],
    "correctAnswer": 2
  },
  {
    "question": "Combien de chromosomes un spermatozoïde ou un ovule contient-ils ?",
    "options": ["23", "46", "22", "44"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le nom de la période durant laquelle le corps se prépare à une éventuelle grossesse ?",
    "options": ["Cycle menstruel", "Ovulation", "Gestation", "Puberté"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle hormone est principalement responsable de l'ovulation ?",
    "options": ["Estrogène", "Testostérone", "Progestérone", "LH"],
    "correctAnswer": 3
  },
  {
    "question": "Quel est le rôle de l'utérus dans la reproduction ?",
    "options": ["Stocker les ovules", "Héberger le fœtus", "Produire des spermatozoïdes", "Aucun de ces réponses"],
    "correctAnswer": 1
  },
  {
    "question": "Qu'est-ce qu'un zygote ?",
    "options": ["Un spermatozoïde", "Un ovule fécondé", "Un embryon", "Une cellule de la peau"],
    "correctAnswer": 1
  },
  {
    "question": "Combien de temps dure généralement la grossesse humaine ?",
    "options": ["3 mois", "6 mois", "9 mois", "12 mois"],
    "correctAnswer": 2
  },
  {
    "question": "Quel est un moyen de contraception couramment utilisé ?",
    "options": ["Pilule contraceptive", "Accouchement", "Ovulation", "Spermatozoïde"],
    "correctAnswer": 0
  },
  {
    "question": "Quelle est la première étape de la reproduction humaine ?",
    "options": ["Fécondation", "Gémination", "Ovulation", "Accouchement"],
    "correctAnswer": 2
  },
  {
    "question": "Quel terme désigne l'ensemble des changements physiques et émotionnels chez un adolescent ?",
    "options": ["Puberté", "Adolescence", "Maturation", "Développement"],
    "correctAnswer": 0
  }
];
