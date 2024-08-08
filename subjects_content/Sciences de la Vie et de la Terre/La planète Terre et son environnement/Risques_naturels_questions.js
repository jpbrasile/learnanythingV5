
// Subject: Sciences de la Vie et de la Terre
// Topic: Risques naturels
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Risques naturels', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [
  {
    "question": "Quel est le principal gaz à effet de serre responsable du changement climatique ?",
    "options": ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de risque naturel est causé par le mouvement des plaques tectoniques ?",
    "options": ["Inondation", "Tsunami", "Séisme", "Éruption volcanique"],
    "correctAnswer": 2
  },
  {
    "question": "Quel phénomène naturel peut provoquer une montée rapide du niveau de la mer ?",
    "options": ["Tornade", "Cyclone", "Tsunami", "Sécheresse"],
    "correctAnswer": 2
  },
  {
    "question": "Quelles conditions peuvent causer un incendie de forêt ?",
    "options": ["Pluie abondante", "Sécheresse et chaleur", "Températures froides", "Vent faible"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le principal effet des ouragans sur les régions côtières ?",
    "options": ["Sécheresse", "Inondations", "Tempêtes de neige", "Tremblements de terre"],
    "correctAnswer": 1
  },
  {
    "question": "Comment appelle-t-on une série de vagues géantes causées par un déplacement soudain du fond marin ?",
    "options": ["Tremblement de terre", "Tsunami", "Cyclone", "Vague de tempête"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de risque est causé par une concentration excessive de pluie en peu de temps ?",
    "options": ["Glissement de terrain", "Séisme", "Tornade", "Gel"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le phénomène résultant de la fusion de la glace en raison de l'augmentation des températures ?",
    "options": ["Érosion", "Inondation", "Avalanche", "Sismique"],
    "correctAnswer": 1
  },
  {
    "question": "Quel type de volcan produit des éruptions explosives et des cendres ?",
    "options": ["Volcan bouclier", "Volcan stratifié", "Volcan effusif", "Volcan fissural"],
    "correctAnswer": 1
  },
  {
    "question": "Quel est le principal facteur qui aggrave les risques d'inondation en milieu urbain ?",
    "options": ["Construction excessive", "Végétation abondante", "Rivères navigables", "Sol sec"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est un moyen de prévenir les dommages causés par les tremblements de terre ?",
    "options": ["Éviter les régions à risque", "Construire des bâtiments flexibles", "Ignorer les alertes", "Continuer à vivre normalement"],
    "correctAnswer": 1
  },
  {
    "question": "Quel animal est souvent utilisé pour prédire les séismes avant qu'ils ne se produisent ?",
    "options": ["Chien", "Chat", "Oiseau", "Poisson"],
    "correctAnswer": 0
  },
  {
    "question": "Qu'est-ce qui est généralement le premier signe d'une inondation imminente ?",
    "options": ["Pluie forte prolongée", "Tremblement de terre", "Chaleur extrême", "Forte diminution de l'humidité"],
    "correctAnswer": 0
  },
  {
    "question": "Quel est le principal impact des changements climatiques sur les ressources en eau ?",
    "options": ["Augmentation du stockage", "Diminution de la qualité", "Accroissement de la disponibilité", "Augmentation des tempêtes"],
    "correctAnswer": 1
  },
  {
    "question": "Comment s'appelle le risque naturel caractérisé par une chute soudaine de roches ou de terre ?",
    "options": ["Tsunami", "Séisme", "Glissement de terrain", "Érosion"],
    "correctAnswer": 2
  }
];
