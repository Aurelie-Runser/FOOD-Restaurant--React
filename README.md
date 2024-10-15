# FOOD Restaurant - React

Projet personnel de refonte d'un projet existant afin d'apprendre **React.js** et de m'améliorer en **TypeScript**.
<br/>
<br/>
J'ai essayé d'utiliser différents hooks pour apprendre à les utiliser dans des contextes adaptés à chacun.

- **useState** pour tous les éléments ayant une interaction ou changement divers 
  - barre de recherche :
  - input d'email
  - grille des recettes
  - des reviews
  - ...
- **useEffect** pour tous les changements d'élément initiés par un autre élément :
  - notification
  - récupération de la liste des recettes
  - filtrage des recettes
  - l'enregistrement du panier dans le local storage
- **useCallback** pour mémoriser une fonction et ne plus avoir besoin de la redéfinir :
  - pour afficher la notification lors de l'inscription à la news letters
- **useReducer** pour gérer des états complexes :
  - le filtrage des recettes
- **useContext** pour avoir des variables globales :
  - gérer le panier
- **lazy** et **Suspense** pour charger les pages seulements lorsqu'elles sont visités :
  - la page Menu
  - les fiches des recettes
  - le panier

## Lien vers le site : https://restaurant-react.aurelierunser.fr
