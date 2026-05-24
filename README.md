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
- un format source Markdown avec frontmatter YAML et generation statique vers l'interface.
- un Atelier IA & FLE statique avec mini-tutoriels et prompts copiables.

L'IA est documentee et anticipee, mais aucune API IA n'est appelee par l'application.

## Etat actuel

- Application locale Vite + React + TypeScript.
- Donnees locales TypeScript.
- 18 ressources de demonstration, dont un lot aligne sur l'usage enseignant: copier, imprimer, adapter, contribuer.
- Bibliotheque filtrable et recherche texte.
- Pages Accueil, Demo, Bibliotheque, Collections, Detail ressource, Communaute, Gabarits, Vision, Technologies et IA, Atelier IA & FLE, Documentation.
- Accueil organise autour de deux portes d'entree: ressources FLE et Atelier IA & FLE.
- Page Atelier IA & FLE statique: mini-tutoriels, prompts commentes et garde-fous pour enseignants, sans appel IA ni collecte.
- Fiches ressources copiables et imprimables pour un usage enseignant immédiat.
- Page conceptuelle Espace de contribution.
- Prototype non persistant de proposition de ressource brute.
- Page Format pour expliquer la logique Markdown + YAML.
- Guide `AGENTS.md` pour les agents IA.
- Documentation des roles contributeurs futurs.
- Documentation conceptuelle des accès et de la soutenabilité.
- Première couche d'identité visuelle "Laboratoire Typographique".
- Interface de bibliothèque organisée par divulgation progressive: cartes allégées, filtres avancés repliables et détails experts consultables à la demande.
- 9 exemples Markdown fictifs ou normalises dans `examples/resources-markdown/`.
- Analyse du corpus Drive documentée comme référence de conception, sans import ni copie des documents originaux.
- Validateur local minimal des exemples Markdown via `npm run validate:resources`.
- Generation statique des ressources Markdown affichees via `npm run generate:resources`.
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
npm run generate:resources
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
- Aucun paiement, abonnement ou restriction réelle d'accès.
- Aucun stockage de PDF ou upload.
- Aucun import dynamique de fichiers Markdown dans le navigateur.
- Les fichiers Markdown valides peuvent etre convertis en donnees statiques affichees via `npm run generate:resources`.
- Aucun import Google Drive.
- Aucun stockage des donnees saisies dans le prototype de contribution.
- Le validateur Markdown ne crée aucune ressource dans l'application; la generation statique est une commande separee.
- Les champs IA, accès et soutenabilité restent descriptifs ou conceptuels.

## Documentation utile

- `AGENTS.md`
- `PROJECT_STATE_FOR_LLMS.md`
- `docs/project-journal.md`
- `docs/decision-log.md`
- `docs/change-report-template.md`
- `docs/prompting-rules.md`
- `docs/branding-directions.md`
- `docs/visual-identity-v0.md`
- `docs/ui-implementation-notes.md`
- `docs/ux-progressive-disclosure.md`
- `docs/ux-information-architecture.md`
- `docs/access-and-sustainability-model.md`
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
- `docs/drive-corpus-analysis.md`
- `docs/raw-resource-intake-form-spec.md`
- `docs/editorial-copy-audit.md`
- `docs/technology-and-ai.md`
- `docs/ai-workshop-section-concept.md`
- `docs/ai-workshop-implementation.md`
- `docs/deployment.md`
- `docs/git-sync-audit.md`
- `docs/environment.md`

## Documentation du projet

Les fichiers de reprise et de traçabilité sont:

- `PROJECT_STATE_FOR_LLMS.md`: état actuel pour agents IA.
- `AGENTS.md`: règles permanentes pour agents IA.
- `docs/project-journal.md`: journal chronologique des interventions.
- `docs/decision-log.md`: décisions structurantes.
- `docs/change-report-template.md`: modèle de bilan d'intervention.
- `docs/prompting-rules.md`: règles pour rédiger les prompts Codex, Antigravity et autres LLM.

## Prochaines etapes possibles

- Relire les ressources de demonstration avec des enseignants FLE.
- Tester les contenus statiques de l'Atelier IA & FLE avec des enseignants debutants et confirmer que les prompts restent comprehensibles hors du site.
- Stabiliser le modele communautaire avant toute base de donnees.
- Convertir de vrais supports libres ou internes.
- Améliorer le validateur local sans en faire un importeur automatique.
- Definir une charte de contribution et de validation.
- Stabiliser la gouvernance des agents et contributeurs avant toute authentification.
- Étudier les scénarios d'accès réservé seulement après stabilisation pédagogique et juridique.
- Documenter un futur schema Supabase sans l'implementer.
- Prototyper plus tard un audit IA manuel, jamais automatique par defaut.

## Git

Voir `docs/git-workflow.md` pour initialiser Git, verifier le remote GitHub et eviter de committer des fichiers `.env`.
