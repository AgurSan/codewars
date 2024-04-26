# Codewars TypeScript Playground

Ce référentiel est un espace dédié à la résolution de problèmes Codewars en TypeScript, accompagnée de tests Jest pour valider les solutions.

## Structure

```bash
- codewars/
  - problem1/
    - problem1.ts
    - problem1.test.ts
    - jest.config.cjs
  - problem2/
    - problem2.ts
    - problem2.test.ts
    - jest.config.cjs
  - problem3/
    - problem3.ts
    - problem3.test.ts
    - jest.config.cjs
- jest.config.js
- tsconfig.json
- package.json
```

codewars/ : Ce répertoire contient les solutions aux problèmes Codewars. Chaque sous-dossier représente un problème individuel. À l'intérieur de chaque sous-dossier, tu trouveras un fichier TypeScript pour résoudre le problème et un fichier de test Jest pour valider la solution.
jest.config.js : Ce fichier contient la configuration Jest pour exécuter les tests.
tsconfig.json : Ce fichier contient la configuration TypeScript pour le projet.
package.json : Ce fichier décrit les dépendances du projet et contient des scripts pour exécuter des tâches comme lancer les tests.

## Configuration

1. Installer les dépendances : Assure-toi d'avoir Node.js et npm installés sur ta machine. Exécute npm install pour installer les dépendances du projet.

2. Exécuter les tests : Utilise la commande npx jest à la racine pour exécuter tous les tests Jest dans le projet. Sinon rends toi dans le répertoire du problème que tu veux tester et réitères le npx jest.
