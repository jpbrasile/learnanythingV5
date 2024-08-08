
// Subject: Français
// Topic: Étude de la langue
// Adapted Prompt: Créez une page HTML unique pour des exercices interactifs sur 'Étude de la langue', destinés aux élèves de collège. La page doit présenter une série d'exercices de difficulté croissante, avec un champ de saisie pour la réponse de l'utilisateur, une vérification immédiate, et des options pour obtenir des indices ou voir la solution complète. Implémentez un suivi des progrès de l'utilisateur. Utilisez HTML5, CSS3 et JavaScript (ES6+) pour créer cette expérience interactive. Assurez-vous que la page est responsive, utilise un design attrayant et encourageant. Le code doit être modulaire, bien commenté et inclure un système de stockage local pour sauvegarder les progrès.

export const initialQuestions = [  
  {  
    "question": "Quelle est la fonction du sujet dans une phrase ?",  
    "options": ["Compléter le verbe", "Indiquer qui fait l'action", "Qualifier un nom", "Exprimer une opinion"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Quel mot est un adjectif dans la phrase : 'Le chat noir dort.' ?",  
    "options": ["chat", "noir", "dort", "le"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Quel est le synonyme du mot 'rapide' ?",  
    "options": ["Vite", "Lent", "Ajusté", "Précis"],  
    "correctAnswer": 0  
  },  
  {  
    "question": "Comment appelle-t-on une phrase qui exprime une question ?",  
    "options": ["Phrase exclamative", "Phrase déclarative", "Phrase interrogative", "Phrase imperative"],  
    "correctAnswer": 2  
  },  
  {  
    "question": "Quel est le temps verbal de 'Je mange' ?",  
    "options": ["Passé", "Présent", "Futur", "Conditionnel"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Dans la phrase : 'Marie et Paul vont au cinéma', quel est le sujet ?",  
    "options": ["Marie", "Paul", "Marie et Paul", "cinéma"],  
    "correctAnswer": 2  
  },  
  {  
    "question": "Quel est le pluriel du mot 'cheval' ?",  
    "options": ["Chevals", "Chevaux", "Chevals", "Chevales"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Quel est le féminin de 'acteur' ?",  
    "options": ["Actrice", "Acteuse", "Acteure", "Acitrice"],  
    "correctAnswer": 0  
  },  
  {  
    "question": "Quelle est la préposition dans la phrase : 'Il va à l'école' ?",  
    "options": ["Il", "va", "à", "l'école"],  
    "correctAnswer": 2  
  },  
  {  
    "question": "Quel est l'antonyme du mot 'heureux' ?",  
    "options": ["Joyeux", "Triste", "Content", "Satisfait"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Dans la phrase 'Les fleurs odorantes poussent en été', quel est l'adverbe ?",  
    "options": ["Les", "odorantes", "poussent", "en"],  
    "correctAnswer": 3  
  },  
  {  
    "question": "Quelle est la forme correcte du verbe : 'nous (être)' ?",  
    "options": ["sont", "sommes", "suis", "es"],  
    "correctAnswer": 1  
  },  
  {  
    "question": "Quelle est la fonction de l'adjectif dans la phrase 'Un grand arbre' ?",  
    "options": ["Déterminer le nom", "Compléter le verbe", "Remplacer le nom", "Expliquer l'action"],  
    "correctAnswer": 0  
  },  
  {  
    "question": "Quel type de mot est 'rapidement' ?",  
    "options": ["Nom", "Adjectif", "Verbe", "Adverbe"],  
    "correctAnswer": 3  
  },  
  {  
    "question": "Quel est le participe passé du verbe 'manger' ?",  
    "options": ["Mange", "Manger", "Mangés", "Mangé"],  
    "correctAnswer": 3  
  }  
]  ;
