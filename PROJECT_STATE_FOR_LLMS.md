# PROJECT_STATE_FOR_LLMS

## 1. Resume du projet

FLE Commons Lab est un projet open source experimental pour enseignants de francais langue etrangere. Il prepare une forge ouverte de ressources pedagogiques FLE: structurees, classees, versionnees, reutilisables, ameliorables et documentees par des retours d'usage.

Le projet est aussi oriente nouvelles technologies et IA, mais la v0.2 ne declenche aucun appel IA reel.

## 2. Etat actuel du depot

Le depot contient une application locale Vite + React + TypeScript.

Fonctionnalites presentes:

- accueil;
- page Demo / Etat du projet;
- bibliotheque de 18 ressources de demonstration;
- recherche texte;
- filtres pedagogiques, numeriques et IA;
- fiches detail;
- collections locales et pages detail de collection;
- propositions d'amelioration simulees dans certaines fiches;
- retours d'usage simules mieux visibles;
- page Communaute;
- page Espace de contribution conceptuel;
- page Gabarits pedagogiques;
- page Format Markdown;
- page Vision;
- page Technologies et IA;
- page Documentation;
- templates GitHub pour issues et pull requests.
- rapport Antigravity `docs/conversion-experiments.md`;
- exemples de ressources Markdown dans `examples/resources-markdown/`.
- validateur local minimal des exemples Markdown via `npm run validate:resources`.
- documentation de deploiement Vercel dans `docs/deployment.md`.
- audit de synchronisation GitHub / local / Vercel dans `docs/git-sync-audit.md`.
- guide permanent des agents IA dans `AGENTS.md`.
- documentation des roles contributeurs futurs et de l'espace de contribution conceptuel.
- journal chronologique dans `docs/project-journal.md`.
- journal des d√©cisions structurantes dans `docs/decision-log.md`.
- mod√®le de rapport dans `docs/change-report-template.md`.
- r√®gles de prompting dans `docs/prompting-rules.md`.
- documentation conceptuelle des acc√®s et de la soutenabilit√© dans `docs/access-and-sustainability-model.md`.

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
- Roles reels et permissions reelles.
- Upload.
- Stockage de fichiers.
- Import automatique Markdown ou `.docx`.
- Parser YAML complet.
- Appels OpenAI, Claude, Gemini ou autre IA.
- Embeddings.
- Recherche vectorielle.
- Notifications.
- Chat.
- Forum.
- Paiement.
- Restriction r√©elle d'acc√®s.
- Abonnement ou mon√©tisation active.
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
    ProjectStatusPage.tsx
    ResourcePage.tsx
    CollectionsPage.tsx
    CollectionPage.tsx
    CommunityPage.tsx
    ContributionSpacePage.tsx
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
  types/community.ts
  types/access.ts
scripts/
  validate-markdown-resources.mjs
  validate-markdown-resources.test.mjs
docs/
  access-and-sustainability-model.md
  agent-workflow.md
  change-report-template.md
  community-model.md
  collections.md
  contribution-workflow-v0.md
  contribution-space-concept.md
  contributor-roles.md
  conversion-experiments.md
  conversion-workflow.md
  deployment.md
  decision-log.md
  git-sync-audit.md
  markdown-resource-format.md
  project-journal.md
  prompting-rules.md
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
AGENTS.md
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
- `ContributorRole`
- `ContributorProfile`
- `ContributionStatus`
- `ResourceEditorialStatus`
- `ContributionReviewLevel`
- `AccessLevel`
- `MonetizationStatus`
- `MembershipTier`

Les champs IA sont descriptifs. Ils servent a documenter des usages pedagogiques possibles, pas a appeler un service.

Le format Markdown + frontmatter YAML est documente comme format source futur. Il n'est pas importe automatiquement.

Le validateur local v√©rifie seulement une conformit√© minimale des exemples Markdown: frontmatter, champs obligatoires, sections attendues et valeurs contr√¥l√©es simples.

Les champs d'acc√®s et de soutenabilit√© sont conceptuels et facultatifs: `accessLevel`, `monetizationStatus`, `visibilityNotes`, `licenseNotes`. Ils ne cr√©ent aucune restriction r√©elle.

## 7. Decisions importantes

- Navigation par hash route, sans React Router.
- Donnees locales avant toute base.
- Collections et contributions simulees pour visualiser le modele communautaire.
- CSS simple, pas de librairie UI.
- Aucun `.env` requis.
- IA et Supabase anticipes uniquement par types, taxonomie et documentation.
- Tests unitaires legers avec Vitest.
- Markdown + frontmatter YAML retenu comme format de contribution lisible et versionnable.
- Le validateur Markdown est autonome en Node et n'ajoute aucune d√©pendance YAML.
- Le projet est deployable sur Vercel comme site statique Vite: build `npm run build`, sortie `dist`.
- URL Vercel publique v√©rifi√©e: `https://fle-commons-lab.vercel.app`.
- Synchronisation v√©rifi√©e: `HEAD` local = `origin/main` = `3b038c16bbc04be9145ebb79e2faa95a37217d81` au moment de l'audit du 2026-05-23.
- Le d√©p√¥t GitHub public affiche bien les fichiers du projet sur la branche `main`.
- La demo publique ne collecte pas de donnees utilisateur.
- Les roles contributeurs sont purement descriptifs dans `src/types/community.ts`.
- Les niveaux d'acc√®s futurs sont purement descriptifs dans `src/types/access.ts`.
- Aucun paiement, abonnement, Stripe, restriction r√©elle, auth ou backend n'est actif.
- `AGENTS.md` est le guide de travail prioritaire pour Codex, ChatGPT, Antigravity et autres LLM.
- Toute intervention significative doit maintenir la documentation de tra√ßabilit√©: `PROJECT_STATE_FOR_LLMS.md`, `docs/project-journal.md`, `docs/decision-log.md` si n√©cessaire.
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
npm run validate:resources
npm run build
git status
git remote -v
git log --oneline --decorate -5
git ls-remote origin refs/heads/main
```

Pour Vercel:

```text
Build command: npm run build
Output directory: dist
Variables obligatoires: aucune
```

## 10. Prochaines etapes recommandees

1. Relire les collections et propositions simulees avec des enseignants FLE.
2. Stabiliser les statuts de contribution avant toute persistance.
3. Relire la doctrine `docs/access-and-sustainability-model.md` avant toute discussion d'acc√®s r√©serv√©.
4. Utiliser `docs/change-report-template.md` comme format standard de bilan.
5. Relire `AGENTS.md` avec les pratiques reelles du projet.
6. Am√©liorer le validateur local si de nouveaux exemples Markdown apparaissent.
7. Ajouter quelques supports libres convertis en ressources structurees.
8. Preciser une charte de validation pedagogique.
9. Documenter un schema Supabase futur sans installer Supabase.
10. Definir une charte d'usage IA avant tout prototype actif.

## 11. A ne pas faire sans validation explicite

- Installer Supabase ou Firebase.
- Ajouter une authentification.
- Ajouter des roles reels ou permissions reelles.
- Ajouter Stripe, paiement, abonnement ou restriction r√©elle d'acc√®s.
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

## Direction StratÈgique ConfirmÈe : RÈciprocitÈ Contributive et Sas de Normalisation

**¿ L'ATTENTION DE TOUS LES AGENTS (Codex, Antigravity, etc.) :**
Le projet s'oriente vers un modËle de *rÈciprocitÈ contributive* (accËs en l'Èchange de contributions) et intËgre le concept de *sas de normalisation* pour ingÈrer des ressources brutes.

Cependant, dans la v0 actuelle :
- Ne **PAS** dÈvelopper ou implÈmenter Supabase, Clerk, NextAuth, ou tout systËme de base de donnÈes backend.
- Ne **PAS** mettre en place de restriction rÈelle d'accËs ou de murs payants dans l'application.
- Garder la contribution conceptuellement accessible (pas de jargon de dÈveloppeur).
- Nous nous contentons de prÈparer les concepts, les types optionnels TypeScript (NormalizationStatus, ContributorStatus) et la documentation.
La prioritÈ reste la v0 statique et documentaire.
