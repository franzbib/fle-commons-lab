# PROJECT_STATE_FOR_LLMS

## Finalité Du Projet

FLE Commons Lab est un projet open source expérimental pour enseignants de français langue étrangère. Il prépare une forge ouverte de ressources pédagogiques FLE: structurées, classées, versionnées, réutilisables et améliorables.

Le projet vise aussi une orientation nouvelles technologies et IA, mais la v0 ne déclenche aucun appel IA.

## État Du Dépôt

Application locale Vite + React + TypeScript.

Fonctionnalités présentes:

- Accueil.
- Bibliothèque de 18 ressources de démonstration.
- Recherche texte.
- Filtres pédagogiques: niveau, compétence, type, gabarit, thème, statut.
- Filtres numériques: usage numérique oui/non, usage IA oui/non.
- Pages détail.
- Page Vision.
- Page Technologies et IA.
- Page Documentation.

Le dossier local est maintenant initialisé comme dépôt Git.

Remote configuré:

```text
origin https://github.com/franzbib/fle-commons-lab.git
```

Aucun push n’a été tenté depuis cette consolidation.

## Stack

- Vite
- React
- TypeScript
- CSS simple
- Données locales TypeScript

Dépendances runtime: `react`, `react-dom`.

## Modèle De Ressource

Fichier principal: `src/types/resource.ts`.

Types principaux:

- `Resource`
- `ResourceContent`
- `ResourceVersion`
- `UsageFeedback`
- `ResourceReviewSummary`
- `TechMetadata`
- `AiMetadata`
- `ContributionSuggestion`
- `Collection`

Le modèle contient une taxonomie pédagogique, une taxonomie numérique et une taxonomie IA. Les champs IA sont descriptifs et ne branchent aucun service.

## Orientation Technologies Et IA

Le projet peut documenter:

- usages numériques;
- outils possibles;
- formats interactifs;
- difficulté technique;
- précautions de confidentialité;
- usages IA possibles;
- risques et garde-fous;
- niveau d’assistance IA;
- contrôle enseignant requis.

Important: une ressource peut documenter un usage IA sans que la plateforme appelle une API IA.

## Fonctionnalités Volontairement Absentes

- Supabase.
- Firebase.
- Prisma.
- Base de données.
- Backend.
- Authentification.
- Upload.
- Stockage de fichiers.
- Appels OpenAI, Claude, Gemini ou autre IA.
- Embeddings.
- Recherche vectorielle.
- Notifications.
- Chat.
- Forum.
- Paiement.
- Commentaires persistants.
- Workflow communautaire réel.

## Structure

```text
src/
  App.tsx
  main.tsx
  components/
  data/demoResources.ts
  pages/
  styles/global.css
  types/resource.ts
  utils/
docs/
  architecture-v0.md
  contribution-guide-draft.md
  editorial-guidelines.md
  environment.md
  git-workflow.md
  non-regression-checklist.md
  resource-model.md
  roadmap-v0.md
  technology-and-ai.md
  vision.md
README.md
PROJECT_STATE_FOR_LLMS.md
```

## Décisions De Sobriété

- Navigation par hash route, sans React Router.
- Données locales avant toute base.
- CSS simple, pas de librairie UI.
- Aucun `.env` requis.
- IA et Supabase anticipés uniquement par types et documentation.
- Tests unitaires légers avec Vitest pour `filterResources` (`src/utils/filters.test.ts`, 12 tests).

## Variables D’Environnement

La v0 fonctionne sans variable.

Ne jamais créer ni committer `.env.local`.

`.gitignore` doit ignorer:

- `.env`
- `.env.local`
- `.env.*.local`
- `node_modules`
- `dist`
- `.vite`

Variables futures documentées mais inutilisées:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GEMINI_API_KEY`

Les clés serveur ne doivent jamais être exposées côté frontend. Les futurs appels IA devront passer par un backend ou une edge function, pas directement par React.

## Commandes

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
git status
git remote -v
```

## Prochaines Étapes Recommandées

1. Relire les 18 ressources avec des enseignants FLE.
2. Faire le premier commit local puis pousser vers GitHub si l’authentification est prête.
3. Convertir quelques supports libres ou internes.
4. Stabiliser la taxonomie avant toute base.
5. Documenter un schéma Supabase futur sans installer Supabase.
6. Définir une charte d’usage IA avant tout prototype actif.

## À Ne Pas Faire Sans Validation Explicite

- Installer Supabase ou Firebase.
- Ajouter une authentification.
- Ajouter un appel IA réel.
- Créer une clé API ou `.env.local`.
- Ajouter une base de données.
- Ajouter upload ou stockage de fichiers.
- Ajouter un vrai workflow communautaire.
- Exposer une clé serveur côté frontend.
- Rendre le projet dépendant d’un fournisseur IA.
