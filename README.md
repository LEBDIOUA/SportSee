# SportSee - Plateforme dédiée au coaching sportif

## Description

SportSee est un projet réalisé dans le cadre d'une formation avec OpenClassrooms. Il s'agit d'une plateforme web dédiée à l'entreprise SportSee, spécialisée dans le coaching sportif.
En pleine croissance, la startup lancera une nouvelle version de la page de profil utilisateur.

## L'objectif du projet

Le but de ce projet est de développer une nouvelle version de la page de profil utilisateur, en intégrant des éléments graphiques. Il s'agit d'une application développée avec React et React Router, avec le style CSS généré à l'aide de Sass. Les données à afficher sont récupérées soit d'un service API, soit d'un fichier JSON

## Prérequis

Avant d'exécuter ce projet localement, assurez-vous d'avoir installé les éléments suivants sur votre machine:

- [Node.js](https://nodejs.org/en) - Runtime JavaScript
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) - Gestionnaire de paquets JavaScript

## Installation && Configuration

### Installation

1- Clonez ce dépôt sur votre machine locale en utilisant la commande suivante :
`git clone <URL_DU_REPO`

2- Accédez au répertoire du projet :
`cd NOM_DU_REP`

3- Installez les dépendances du projet en exécutant la commande suivante :
`npm install`
ou
`yarn install`

### Exécution - Démarrage du serveur Web

Dans ce projet, vous trouverez deux sous-dossiers:
- Front-End : Inclut des éléments visuels permettant à l'utilisateur d'interagir avec l'application.
- Back-End : Côté serveur - Micro API -

#### Démarage du API et serveur

Accèdez au dossier Back-End
`cd Back-End`

Choisissez et exécutez la ligne de commande qui vous convient
`npm run dev`
ou
`yarn dev`

Cette commande démarre le serveur API sur le port 3000

Accèdez au dossier Front-End
`cd Front-End`

Choisissez et exécutez la ligne de commande qui vous convient
`npm run dev`
ou
`yarn dev`

Cette commande démarre le serveur sur le port 5173.
Vous pourrez accéder à l'application en ouvrant votre navigateur et en visitant l'URL suivante : http://localhost:5173/user/12 ou http://localhost:5173/user/18, selon les données disponibles dans l'API ou le fichier JSON.

<b>Actuellement seuls deux utilisateurs ont été simulés. Ils ont respectivement les identifiants 12 et 18.</b>

### Outils Utilisés

Ce projet a été développé en utilisant les technologies suivantes :

- <b>Vite</b> - Un outil de build rapide pour les applications web modernes.
- <b>React.js</b> - Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- <b>JavaScript (ES6+)</b> - La version moderne de JavaScript pour écrire du code côté client.
- <b>HTML</b> - Le langage de balisage standard pour la création de pages web et d'applications web interactives.
- <b>CSS (Sass)</b> - Un préprocesseur CSS pour faciliter l'écriture de feuilles de style.
- <b>Recharts</b> - Une bibliothèque utilisée pour créer des graphiques pour React JS.

## Architecture du projet

Dans ce projet, j'ai adopté une approche de découpage des <b>composants</b> visant à favoriser la **_réutilisation_** et la **_maintenabilité_** du code. Pour ce faire, j'ai structuré l'application de manière à séparer les parties communes de celles spécifiques à chaque page. 

Au niveau de la structure globale, j'ai maintenu un fichier principal, **index.html**, qui appelle **main.jsx**. Ce dernier remplit le composant racine avec le contenu de **App.jsx**, qui agit comme le conteneur principal de l'application. 

Dans App.jsx, j'ai intégré des composants globaux tels que le **header** et le **menu horizontal**, qui sont présents sur toutes les pages. De plus, j'ai utilisé **_<BrowserRouter>_** et **_<Routes>_** pour gérer la navigation entre les différentes pages de manière efficace. Ainsi, chaque page spécifique se concentre uniquement sur son* contenu unique*, tandis que les _éléments communs_ sont _réutilisés_ de manière transparente à travers toute l'application.

![Architecture Generale](https://github.com/LEBDIOUA/SportSee/blob/main/Front-End/public/ArchitectureGenerale.png)

![Architecture Dashboard](https://github.com/LEBDIOUA/SportSee/blob/main/Front-End/public/ArchitectureDashboard.png)

## La récupération des données

![Récupération de données](https://github.com/LEBDIOUA/SportSee/blob/main/Front-End/public/RecuperationDonnes.png)

Avant de récupérer les données j’ai déclaré une variable user initialisé à null et une variable USE_API qui aide à choisir la méthode de récupération de données entre le service API et le fichier JSON. Comme elle est initialisée à true, la récupération des données sera faite par le service API.
La méthode renderDataAPI gère de la récupération de données, renvoyant apiData, pour les données, apiErr en cas d’erreur interrompant la récupération et apiUserFound pour confirmer l’existence de données à récupérer. Si aucune erreur n’est survenue et que les données ont été récupérées avec succès , j’instancie l’objet User. En cas d’erreur, aucune instanciation de l’objet n’a lieu.
Dans ce cas, les données sont récupérées via le fichier JSON en suivant les mêmes étapes.En cas d’erreur, la variable user prendra la valeur « introuvable ».
Si l’on choisit de récupérer les données directement du fichier JSON, il suffit d’initialiser USE_API à false.

## Les graphiques utilisés

### Graphique à Barres - DailyActivityBarGraph -

![Graphique à barres](https://github.com/LEBDIOUA/SportSee/blob/main/Front-End/public/BarGraph.png)

Ce graphique est destiné à afficher l'activité quotidienne. Il montre les informations relatives au poids et aux calories brûlées. L’axe des abscisses correspond aux jours du mois courant. Un tooltip apparaît au survol.

### Graphique Linéaire - AverageSessionDurationLineGraph -

![Graphique linéaire](https://github.com/LEBDIOUA/SportSee/blob/main/Front-End/public/LineGraph.png)

Ce graphique est destiné à afficher la durée moyenne des sessions. L’axe des abscisses correspond à la durée moyenne des sessions. Un tooltip apparaît au survol.

### Graphique Radar - ActivityTypeRadarGraph -

![Graphique radar](https://github.com/LEBDIOUA/SportSee/blob/main/Front-End/public/RadarGraph.png)

Ce graphique est destiné à afficher les types d’activités réalisées.

### Graphique à Barres Radiales - ScoreRadialGraph -

![Graphique à barres radiales](https://github.com/LEBDIOUA/SportSee/blob/main/Front-End/public/RadialGraph.png)

Ce graphique est destiné à afficher le score moyen.

## Responsive

Conformément aus=x exigences, le projet se concentre sur la partie desktop. L'important pour l'instant est que le projet soit lisible sur les écrans d’au moins 1024 par 780 pixels.

## Points de terminaison (Endpoints)

### Points de terminaison possibles

Ce projet comprend quatre points de terminaison qu'on peut utiliser :

- http://localhost:3000/user/${userId} - récupère les informations d'un utilisateur. Ce premier point de terminaison inclut l'identifiant de l'utilisateur, les informations de l'utilisateur (prénom, nom et âge), le score du jour en cours (todayScore) et les données clés (calories, macronutriments, etc.).

- http://localhost:3000/user/${userId}/activity - récupère l'activité d'un utilisateur jour après jour avec les kilogrammes et les calories.

- http://localhost:3000/user/${userId}/average-sessions - récupère les sessions moyennes d'un utilisateur par jour. La semaine commence le lundi.

- http://localhost:3000/user/${userId}/performance - récupère les performances d'un utilisateur (énergie, endurance, etc.).


<b>Actuellement seuls deux utilisateurs ont été simulés. Ils ont respectivement les identifiants 12 et 18.</b>

### Exemples de requêtes

- http://localhost:3000/user/12/performance - Récupère les performances de l'utilisateur avec l'identifiant 12.

- http://localhost:3000/user/18 - Récupère les principales informations de l'utilisateur 18.
