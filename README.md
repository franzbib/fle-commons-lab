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
- Pages Accueil, Demo, Bibliotheque, Collections, Detail ressource, Communaute, Gabarits, Vision, Technologies et IA, Documentation.
- Page conceptuelle Espace de contribution.
- Page Format pour expliquer la logique Markdown + YAML.
- Guide `AGENTS.md` pour les agents IA.
- Documentation des roles contributeurs futurs.
- Exemples Markdown dans `examples/resources-markdown/`.
- Validateur local minimal des exemples Markdown.
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
npm run validate:resources
npm run build
git status
```

## Deploiement Vercel

La v0 est deployable comme site statique Vite.

- Build command: `npm run build`
- Output directory: `dist`
- Variables d'environnement obligatoires: aucune
- URL publique connue: `https://fle-commons-lab.vercel.app`
- Branche attendue: `main`

Ne jamais ajouter de secret dans Vercel sans documentation et decision explicite. La demo publique fonctionne avec des donnees locales statiques, sans collecte de donnees utilisateur et sans appel IA reel.

Voir aussi `docs/deployment.md` et `docs/git-sync-audit.md` pour verifier la coherence entre local, GitHub et Vercel.

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
- Le validateur Markdown ne crée aucune ressource dans l'application.

## Documentation utile

- `AGENTS.md`
- `docs/resource-model.md`
- `docs/agent-workflow.md`
- `docs/community-model.md`
- `docs/contributor-roles.md`
- `docs/contribution-space-concept.md`
- `docs/collections.md`
- `docs/contribution-workflow-v0.md`
- `docs/markdown-resource-format.md`
- `docs/conversion-workflow.md`
- `docs/conversion-experiments.md`
- `docs/technology-and-ai.md`
- `docs/deployment.md`
- `docs/git-sync-audit.md`
- `docs/environment.md`
- `PROJECT_STATE_FOR_LLMS.md`

## Prochaines etapes possibles

- Relire les ressources de demonstration avec des enseignants FLE.
- Stabiliser le modele communautaire avant toute base de donnees.
- Convertir de vrais supports libres ou internes.
- Prototyper plus tard un petit validateur local de frontmatter.
- Améliorer ensuite ce validateur sans en faire un importeur automatique.
- Definir une charte de contribution et de validation.
- Stabiliser la gouvernance des agents et contributeurs avant toute authentification.
- Documenter un futur schema Supabase sans l'implementer.
- Prototyper plus tard un audit IA manuel, jamais automatique par defaut.

## Git

Voir `docs/git-workflow.md` pour initialiser Git, verifier le remote GitHub et eviter de committer des fichiers `.env`.
