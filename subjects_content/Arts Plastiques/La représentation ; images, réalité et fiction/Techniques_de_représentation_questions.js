
// Subject: Arts Plastiques
// Topic: Techniques de représentation
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Techniques de représentation', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [  
  {  
    "question": "Quelle technique de représentation graphique utilise des barres pour montrer des données ?",  
    "options": ["Diagramme circulaire", "Graphique à barres", "Histogramme", "Nuage de points"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Quel type de graphique est le plus approprié pour représenter des proportions ?",  
    "options": ["Graphique linéaire", "Diagramme circulaire", "Graphique à barres", "Histogramme"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Quel graphique est le mieux adapté pour montrer des tendances au fil du temps ?",  
    "options": ["Graphique à barres", "Diagramme circulaire", "Graphique linéaire", "Histogramme"],  
    "correctAnswer": 2  
  },  
  {  
    "question": "Comment appelle-t-on une représentation schématique d'un nombre sur une ligne ?",  
    "options": ["Diagramme", "Ligne de nombre", "Graphique", "Tableau"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Quel graphique montre la distribution des données ?",  
    "options": ["Diagramme circulaire", "Graphique à barres", "Histogramme", "Graphique linéaire"],  
    "correctAnswer": 2  
  },  
  {  
    "question": "Quelle technique permet de représenter les données sous forme de segments de cercle ?",  
    "options": ["Histogramme", "Graphique linéaire", "Diagramme circulaire", "Graphique à barres"],  
    "correctAnswer": 2  
  },  
  {  
    "question": "Quel type de diagramme est souvent utilisé pour comparer plusieurs catégories de données ?",  
    "options": ["Histogramme", "Graphique à barres", "Graphique linéaire", "Nuage de points"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Dans quel cas utilises-tu un graphique en nuage de points ?",  
    "options": ["Pour des données catégoriques", "Pour des données temporelles", "Pour montrer la corrélation entre deux variables", "Pour des proportions"],  
    "correctAnswer": 2  
  },  
  {  
    "question": "Quelle option est la meilleure pour représenter une grande quantité de données numériques ?",  
    "options": ["Diagramme circulaire", "Histogramme", "Graphique à barres", "Graphique linéaire"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Quel est l'objectif principal d'un diagramme ?",  
    "options": ["Organiser des données", "Créer des décorations", "Compter des objets", "Collecter des informations"],  
    "correctAnswer": 0  
  },  
  {  
    "question": "Quelle technique de représentation est utilisée pour comparer des parties d'un tout ?",  
    "options": ["Histogramme", "Diagramme circulaire", "Graphique linéaire", "Graphique à barres"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Lorsque tu veux représenter des données continues, quel type de graphique devrais-tu utiliser ?",  
    "options": ["Graphique à barres", "Diagramme circulaire", "Graphique linéaire", "Histogramme"],  
    "correctAnswer": 2  
  },  
  {  
    "question": "Quel type de graphique est le plus approprié pour des comparaisons entre catégories distinctes ?",  
    "options": ["Graphique linéaire", "Histogramme", "Diagramme circulaire", "Graphique à barres"],  
    "correctAnswer": 3  
  },  
  {  
    "question": "Quel graphique permet de visualiser les relations entre plusieurs ensembles de données ?",  
    "options": ["Diagramme de Venn", "Graphique à barres", "Diagramme circulaire", "Graphique linéaire"],  
    "correctAnswer": 0  
  },  
  {  
    "question": "Dans un histogramme, l'axe vertical représente généralement :",  
    "options": ["La fréquence", "La catégorie", "Le temps", "La valeur"],  
    "correctAnswer": 0  
  }  
];
