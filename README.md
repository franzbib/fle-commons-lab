# FLE Commons Lab

FLE Commons Lab est un projet open source expérimental pour enseignants de français langue étrangère.

Il vise à devenir une forge ouverte de ressources pédagogiques FLE: structurées, classées, versionnées, réutilisables, améliorables et adaptées aux pratiques numériques contemporaines.

La v0 ne construit pas la plateforme finale. Elle pose un socle local, documenté et extensible.

## Orientation

Le projet prépare:

- une bibliothèque de ressources FLE;
- un modèle de ressource riche;
- une taxonomie pédagogique;
- une taxonomie technologies et IA;
- des versions simulées;
- des retours d’usage simulés;
- une future capacité d’audit ou de contribution.

L’IA est documentée et anticipée, mais aucun appel IA réel n’existe en v0.

## État Actuel

- Application locale Vite + React + TypeScript.
- Données locales TypeScript.
- 18 ressources de démonstration.
- Filtres pédagogiques, numériques et IA.
- Pages Accueil, Bibliothèque, Détail, Vision, Technologies et IA, Documentation.

## Stack

- Vite
- React
- TypeScript
- CSS simple

Aucun backend, aucune base de données, aucun Supabase actif, aucune authentification, aucun upload, aucun stockage de fichiers.

## Installation

```bash
npm install
npm run dev
```

## Commandes

```bash
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
git status
```

## Structure

```text
src/
  components/
  data/
  pages/
  styles/
  types/
  utils/
docs/
PROJECT_STATE_FOR_LLMS.md
```

## Limites De La V0

- Aucune variable d’environnement obligatoire.
- Aucun appel IA réel.
- Aucune clé API.
- Aucun backend.
- Aucun Supabase installé.
- Aucun système de contribution réel.
- Aucun commentaire persistant.
- Aucun stockage de PDF ou upload.

## Prochaines Étapes Possibles

- Relire les ressources de démonstration avec des enseignants FLE.
- Étendre prudemment les tests légers sur les filtres.
- Convertir de vrais supports libres ou internes.
- Stabiliser le modèle avant toute base de données.
- Documenter un futur schéma Supabase sans l’implémenter.
- Prototyper plus tard un audit IA manuel, jamais automatique par défaut.

## Git

Voir `docs/git-workflow.md` pour initialiser Git, vérifier le remote GitHub et éviter de committer des fichiers `.env`.
