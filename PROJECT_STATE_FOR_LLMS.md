# PROJECT_STATE_FOR_LLMS

## 1. Resume du projet

FLE Commons Lab est un projet open source experimental pour enseignants de francais langue etrangere. Il prepare une forge ouverte de ressources pedagogiques FLE: structurees, classees, versionnees, reutilisables, ameliorables et documentees par des retours d'usage.

Le projet est aussi oriente nouvelles technologies et IA, mais la v0.2 ne declenche aucun appel IA reel.

## 2. Etat actuel du depot

Le depot contient une application locale Vite + React + TypeScript.

Fonctionnalites presentes:

- accueil;
- bibliotheque de 18 ressources de demonstration;
- recherche texte;
- filtres pedagogiques, numeriques et IA;
- fiches detail;
- collections locales et pages detail de collection;
- propositions d'amelioration simulees dans certaines fiches;
- retours d'usage simules mieux visibles;
- page Communaute;
- page Gabarits pedagogiques;
- page Format Markdown;
- page Vision;
- page Technologies et IA;
- page Documentation;
- templates GitHub pour issues et pull requests.
- rapport Antigravity `docs/conversion-experiments.md`;
- exemples de ressources Markdown dans `examples/resources-markdown/`.

Le dossier local est un depot Git rattache a:

```text
origin https://github.com/franzbib/fle-commons-lab.git
```

## 3. Stack utilisee

- Vite
- React
- TypeScript
- CSS simple
- Vitest pour tests unitaires legers

Dependances runtime: `react`, `react-dom`.

## 4. Fonctionnalites volontairement absentes

- Supabase.
- Firebase.
- Prisma.
- Base de donnees.
- Backend.
- Authentification.
- Upload.
- Stockage de fichiers.
- Import automatique Markdown ou `.docx`.
- Parser YAML actif.
- Appels OpenAI, Claude, Gemini ou autre IA.
- Embeddings.
- Recherche vectorielle.
- Notifications.
- Chat.
- Forum.
- Paiement.
- Commentaires persistants.
- Workflow communautaire reel.

## 5. Structure des fichiers importants

```text
src/
  App.tsx
  main.tsx
  components/
    Layout.tsx
    ResourceCard.tsx
    ResourceDetail.tsx
    ResourceFilters.tsx
  data/demoResources.ts
  pages/
    HomePage.tsx
    LibraryPage.tsx
    ResourcePage.tsx
    CollectionsPage.tsx
    CollectionPage.tsx
    CommunityPage.tsx
    TemplatesPage.tsx
    ResourceFormatPage.tsx
    AboutPage.tsx
    TechnologyAndAiPage.tsx
    DocumentationPage.tsx
  styles/global.css
  types/resource.ts
  utils/
    filters.ts
    filters.test.ts
    collections.ts
    collections.test.ts
    formatters.ts
  types/resourceMarkdown.ts
docs/
  community-model.md
  collections.md
  contribution-workflow-v0.md
  conversion-experiments.md
  conversion-workflow.md
  markdown-resource-format.md
  resource-model.md
  technology-and-ai.md
  environment.md
  git-workflow.md
.github/
  ISSUE_TEMPLATE/
  pull_request_template.md
examples/
  resources-markdown/
README.md
PROJECT_STATE_FOR_LLMS.md
```

## 6. Modele de donnees

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
- `ResourceFrontmatter`

Les champs IA sont descriptifs. Ils servent a documenter des usages pedagogiques possibles, pas a appeler un service.

Le format Markdown + frontmatter YAML est documente comme format source futur. Il n'est pas importe automatiquement.

## 7. Decisions importantes

- Navigation par hash route, sans React Router.
- Donnees locales avant toute base.
- Collections et contributions simulees pour visualiser le modele communautaire.
- CSS simple, pas de librairie UI.
- Aucun `.env` requis.
- IA et Supabase anticipes uniquement par types, taxonomie et documentation.
- Tests unitaires legers avec Vitest.
- Markdown + frontmatter YAML retenu comme format de contribution lisible et versionnable.
- Validation enseignante obligatoire pour niveau, consignes, corriges, droits et licences.

## 8. Variables d'environnement

La v0.2 fonctionne sans variable.

Ne jamais creer ni committer `.env.local`.

`.gitignore` doit ignorer:

- `.env`
- `.env.local`
- `.env.*.local`
- `node_modules`
- `dist`
- `.vite`

Variables futures documentees mais inutilisees:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GEMINI_API_KEY`

Les cles serveur ne doivent jamais etre exposees cote frontend. Les futurs appels IA devront passer par un backend ou une edge function, jamais directement depuis React avec une cle privee.

## 9. Commandes utiles

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

## 10. Prochaines etapes recommandees

1. Relire les collections et propositions simulees avec des enseignants FLE.
2. Stabiliser les statuts de contribution avant toute persistance.
3. Construire un petit validateur local de frontmatter, sans import automatique lourd.
4. Ajouter quelques supports libres convertis en ressources structurees.
5. Preciser une charte de validation pedagogique.
6. Documenter un schema Supabase futur sans installer Supabase.
7. Definir une charte d'usage IA avant tout prototype actif.

## 11. A ne pas faire sans validation explicite

- Installer Supabase ou Firebase.
- Ajouter une authentification.
- Ajouter un appel IA reel.
- Creer une cle API ou `.env.local`.
- Ajouter une base de donnees.
- Ajouter upload ou stockage de fichiers.
- Ajouter un import automatique Markdown ou `.docx`.
- Ajouter une dependance YAML sans decision explicite.
- Ajouter un chat, forum ou messagerie.
- Ajouter un vrai workflow communautaire persistant.
- Exposer une cle serveur cote frontend.
- Rendre le projet dependant d'un fournisseur IA.
