# FLE Commons Lab

FLE Commons Lab est un projet open source experimental pour enseignants de francais langue etrangere.

Le projet prepare une forge ouverte de ressources pedagogiques FLE: structurees, classees, versionnees, reutilisables, ameliorables et adaptees aux pratiques numeriques contemporaines.

La v0.2 reste volontairement locale. Elle donne a voir des fondations communautaires sans backend, sans authentification, sans Supabase et sans appel IA reel.

## Orientation

Le projet prepare:

- une bibliotheque de ressources FLE;
- un modele de ressource riche;
- une taxonomie pedagogique, numerique et IA;
- des versions simulees;
- des retours d'usage simules;
- des collections locales;
- des propositions d'amelioration simulees;
- une future logique de contribution ouverte.
- un futur format source Markdown avec frontmatter YAML.

L'IA est documentee et anticipee, mais aucune API IA n'est appelee par l'application.

## Etat actuel

- Application locale Vite + React + TypeScript.
- Donnees locales TypeScript.
- 18 ressources de demonstration.
- Bibliotheque filtrable et recherche texte.
- Pages Accueil, Bibliotheque, Collections, Detail ressource, Communaute, Gabarits, Vision, Technologies et IA, Documentation.
- Page Format pour expliquer la logique Markdown + YAML.
- Exemples Markdown dans `examples/resources-markdown/`.
- Tests Vitest sur les filtres et les collections.
- Templates GitHub pour bugs, suggestions de ressources, propositions d'amelioration et pull requests.

## Stack

- Vite
- React
- TypeScript
- CSS simple
- Vitest pour tests unitaires legers

Aucun backend, aucune base de donnees, aucun Supabase actif, aucune authentification, aucun upload et aucun stockage de fichiers.

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
  App.tsx
  components/
  data/demoResources.ts
  pages/
  styles/global.css
  types/resource.ts
  utils/
docs/
examples/resources-markdown/
.github/
PROJECT_STATE_FOR_LLMS.md
```

## Limites de la v0.2

- Aucune variable d'environnement obligatoire.
- Aucun appel IA reel.
- Aucune cle API.
- Aucun backend.
- Aucun Supabase installe.
- Aucun systeme de contribution persistant.
- Aucun commentaire persistant.
- Aucun chat, forum ou messagerie.
- Aucun stockage de PDF ou upload.
- Aucun import automatique de fichiers Markdown.

## Documentation utile

- `docs/resource-model.md`
- `docs/community-model.md`
- `docs/collections.md`
- `docs/contribution-workflow-v0.md`
- `docs/markdown-resource-format.md`
- `docs/conversion-workflow.md`
- `docs/conversion-experiments.md`
- `docs/technology-and-ai.md`
- `docs/environment.md`
- `PROJECT_STATE_FOR_LLMS.md`

## Prochaines etapes possibles

- Relire les ressources de demonstration avec des enseignants FLE.
- Stabiliser le modele communautaire avant toute base de donnees.
- Convertir de vrais supports libres ou internes.
- Prototyper plus tard un petit validateur local de frontmatter.
- Definir une charte de contribution et de validation.
- Documenter un futur schema Supabase sans l'implementer.
- Prototyper plus tard un audit IA manuel, jamais automatique par defaut.

## Git

Voir `docs/git-workflow.md` pour initialiser Git, verifier le remote GitHub et eviter de committer des fichiers `.env`.
