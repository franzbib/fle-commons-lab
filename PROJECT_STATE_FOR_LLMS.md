# PROJECT_STATE_FOR_LLMS

## 1. Resume du projet

FLE Commons Lab est un projet open source experimental pour enseignants de francais langue etrangere. Il prepare une forge ouverte de ressources pedagogiques FLE: structurees, classees, versionnees, reutilisables, ameliorables et documentees par des retours d'usage.

Le projet est aussi oriente nouvelles technologies et IA, mais la v0.2 ne declenche aucun appel IA reel.

## 2. Etat actuel du depot

Le depot contient une application locale Vite + React + TypeScript.

Fonctionnalites presentes:

- accueil oriente autour de deux portes d'entree: bibliotheque de ressources FLE et Atelier IA & FLE;
- page Demo / Etat du projet;
- bibliotheque de 18 ressources de demonstration;
- ressources de demonstration realignees progressivement sur la doctrine enseignant: copier, imprimer, adapter et contribuer sans competence technique;
- recherche texte;
- filtres pedagogiques, numeriques et IA;
- fiches detail avec actions de copie et impression;
- fiches detail organisees en onglets: vue d'ensemble, contenu apprenant, corriges & notes prof;
- actions locales de copie et d'impression pour le contenu apprenant et les notes professeur, sans generation de PDF/Word;
- alertes pratiques de preparation enseignant dans la vue d'ensemble et les notes prof, jamais dans le contenu apprenant;
- collections locales et pages detail de collection;
- propositions d'amelioration simulees dans certaines fiches;
- retours d'usage simules mieux visibles;
- page Communaute;
- page Espace de contribution conceptuel avec prototype non persistant de proposition de ressource brute;
- page Gabarits pedagogiques;
- page Format Markdown;
- page Vision;
- page Technologies et IA;
- page Atelier IA & FLE statique avec mini-tutoriels, parcours d'initiation, prompts modeles et exemples remplis copiables;
- page Documentation reorganisee par grands blocs;
- templates GitHub pour issues et pull requests.
- rapport Antigravity `docs/conversion-experiments.md`;
- 8 exemples de ressources Markdown fictifs et originaux dans `examples/resources-markdown/`.
- validateur local minimal des exemples Markdown via `npm run validate:resources`.
- documentation de deploiement Vercel dans `docs/deployment.md`.
- audit de synchronisation GitHub / local / Vercel dans `docs/git-sync-audit.md`.
- guide permanent des agents IA dans `AGENTS.md`.
- documentation des roles contributeurs futurs et de l'espace de contribution conceptuel.
- journal chronologique dans `docs/project-journal.md`.
- journal des decisions structurantes dans `docs/decision-log.md`.
- modele de rapport dans `docs/change-report-template.md`.
- regles de prompting dans `docs/prompting-rules.md`.
- documentation conceptuelle des acces et de la soutenabilite dans `docs/access-and-sustainability-model.md`.
- direction visuelle "Laboratoire Typographique" documentee dans `docs/branding-directions.md` et `docs/visual-identity-v0.md`.
- premiere couche UI appliquee dans `src/styles/global.css` avec notes dans `docs/ui-implementation-notes.md`.
- rapport Antigravity `docs/ux-progressive-disclosure.md` et documentation d'architecture d'information dans `docs/ux-information-architecture.md`.
- divulgation progressive appliquee a l'interface: cartes ressource allegees, filtres avances repliables et sections de detail consultables a la demande.
- separation apprenant / enseignant documentee dans `docs/ux-resource-tabs.md`; le contenu apprenant masque les corriges, notes professeur, retours d'usage et audit simule.
- styles d'impression dedies pour rendre les fiches ressources plus lisibles sur papier.
- notes QA impression dans `docs/print-qa-notes.md` pour les ressources longues et les limites de `window.print`.
- documentation des alertes de preparation enseignant dans `docs/teacher-preparation-alerts.md`.
- trace d'absence du rapport `docs/teacher-quick-test-report.md` dans `docs/teacher-quick-test-report-missing.md`; les corrections prioritaires connues ont ete traitees par `178cf04`.
- analyse exploratoire d'un corpus Google Drive dans `docs/drive-corpus-analysis.md`, a utiliser comme reference de conception et non comme source publiable par defaut.
- document produit `docs/horizon-reception-product-consequences.md`, qui formalise les consequences de l'horizon de reception FLE : infrastructure technique invisible, priorite au copier-coller, aux exports, a l'impression propre, aux formulaires simples et a la contribution non technique.
- audit editorial transversal dans `docs/editorial-copy-audit.md` pour aligner les pages visibles et la documentation sur l'etat reel du projet.
- notes de qualite editoriale des ressources demo dans `docs/editorial-quality-notes.md`.
- specification du formulaire de depot brut dans `docs/raw-resource-intake-form-spec.md`; le composant visible reste une maquette locale non connectee.
- cadrage Antigravity de l'Atelier IA & FLE dans `docs/ai-workshop-section-concept.md`, relecture dans `docs/ai-workshop-review.md`, implementation statique dans `docs/ai-workshop-implementation.md` et regles de redaction dans `docs/ai-workshop-copy-guidelines.md`.

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
- Import automatique depuis Google Drive.
- Parser YAML complet.
- Appels OpenAI, Claude, Gemini ou autre IA.
- Assistant IA integre, chatbot, correction automatique ou envoi de prompts utilisateur vers un service externe.
- Embeddings.
- Recherche vectorielle.
- Notifications.
- Chat.
- Forum.
- Paiement.
- Restriction reelle d'acces.
- Abonnement ou monetisation active.
- Commentaires persistants.
- Workflow communautaire reel.
- Collecte de donnees utilisateur via le prototype de contribution.

## 5. Structure des fichiers importants

```text
src/
  App.tsx
  main.tsx
  components/
    Layout.tsx
    CopyPromptButton.tsx
    ResourceCard.tsx
    ResourceDetail.tsx
    ResourceDetailTabs.tsx
    TeacherPreparationAlerts.tsx
    ResourceFilters.tsx
    CollapsibleSection.tsx
    CompactTagList.tsx
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
    AiWorkshopPage.tsx
    DocumentationPage.tsx
  styles/global.css
  types/resource.ts
  types/aiWorkshop.ts
  utils/
    filters.ts
    filters.test.ts
    collections.ts
    collections.test.ts
    formatters.ts
    resourceText.ts
  types/resourceMarkdown.ts
  types/community.ts
  types/access.ts
  data/aiWorkshop.ts
scripts/
  validate-markdown-resources.mjs
  validate-markdown-resources.test.mjs
docs/
  access-and-sustainability-model.md
  ai-workshop-section-concept.md
  ai-workshop-implementation.md
  ai-workshop-copy-guidelines.md
  ai-workshop-review.md
  agent-workflow.md
  branding-directions.md
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
  export-and-print-strategy.md
  drive-corpus-analysis.md
  editorial-copy-audit.md
  editorial-quality-notes.md
  git-sync-audit.md
  horizon-reception-product-consequences.md
  markdown-resource-format.md
  project-journal.md
  print-qa-notes.md
  prompting-rules.md
  raw-resource-intake-form-spec.md
  resource-model.md
  technology-and-ai.md
  teacher-preparation-alerts.md
  teacher-quick-test-report-missing.md
  ui-implementation-notes.md
  ux-information-architecture.md
  ux-progressive-disclosure.md
  ux-resource-tabs.md
  visual-identity-v0.md
  environment.md
  git-workflow.md
.github/
  ISSUE_TEMPLATE/
  pull_request_template.md
examples/
  resources-markdown/
assets/
  branding/
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
- `PreparationAlert`
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
- `AiTutorial`
- `PromptRecipe`
- `AiWorkshopCategory`
- `AiRiskLevel`
- `AiDifficultyLevel`

Les champs IA sont descriptifs. Ils servent a documenter des usages pedagogiques possibles, pas a appeler un service.

Les types de l'Atelier IA & FLE servent uniquement a afficher des contenus statiques: tutoriels, parcours d'initiation, prompts commentes et exemples remplis. Les boutons de copie copient un prompt local ou un exemple local dans le presse-papiers; ils ne stockent rien et n'appellent aucun fournisseur IA.

Le format Markdown + frontmatter YAML est documente comme format source futur. Il n'est pas importe automatiquement.

Le validateur local verifie seulement une conformite minimale des exemples Markdown: frontmatter, champs obligatoires, sections attendues et valeurs controlees simples. Il ne cree aucune ressource affichee, ne remplace pas la relecture enseignante et ne verifie pas juridiquement les licences.

Les champs d'acces et de soutenabilite sont conceptuels et facultatifs: `accessLevel`, `monetizationStatus`, `visibilityNotes`, `licenseNotes`. Ils ne creent aucune restriction reelle.

L'analyse du corpus Drive recommande de documenter ou d'etudier plus tard trois notions supplementaires avant tout import: `pedagogicalCompleteness`, `rightsStatus` et `referenceUse`. Ces notions sont documentees dans `docs/resource-model.md` mais ne sont pas encore ajoutees au type TypeScript.

## 7. Decisions importantes

- Navigation par hash route, sans React Router.
- Donnees locales avant toute base.
- Collections et contributions simulees pour visualiser le modele communautaire.
- CSS simple, pas de librairie UI.
- Aucun `.env` requis.
- IA et Supabase anticipes uniquement par types, taxonomie et documentation.
- Tests unitaires legers avec Vitest.
- Markdown + frontmatter YAML retenu comme format de contribution lisible et versionnable.
- Les gabarits issus de l'analyse Drive peuvent inspirer des structures et exemples fictifs, jamais une copie de contenu.
- Le validateur Markdown est autonome en Node et n'ajoute aucune dependance YAML.
- Le projet est deployable sur Vercel comme site statique Vite: build `npm run build`, sortie `dist`.
- URL Vercel publique verifiee: `https://fle-commons-lab.vercel.app`.
- Synchronisation verifiee: `HEAD` local = `origin/main` = `3b038c16bbc04be9145ebb79e2faa95a37217d81` au moment de l'audit du 2026-05-23.
- Le depot GitHub public affiche bien les fichiers du projet sur la branche `main`.
- La demo publique ne collecte pas de donnees utilisateur.
- Les roles contributeurs sont purement descriptifs dans `src/types/community.ts`.
- Les niveaux d'acces futurs sont purement descriptifs dans `src/types/access.ts`.
- Aucun paiement, abonnement, Stripe, restriction reelle, auth ou backend n'est actif.
- L'identite visuelle appliquee reste une v0 sobre: tokens CSS, logo temporaire, favicon, badges typographiques et cartes type fiche d'index.
- L'interface suit une lecture progressive: carte = decision rapide; fiche detail = prise en main puis blocs experts repliables.
- Les fiches detail utilisent des onglets locaux pour separer la decision rapide, le contenu projetable aux apprenants et l'espace enseignant avec corriges, notes, retours et audit.
- L'onglet `Contenu apprenant` ne doit jamais afficher les corriges, le guide professeur, les retours d'usage, l'audit simule ou les notes internes.
- Les alertes de preparation enseignant sont optionnelles (`preparationAlerts`) et ne doivent jamais apparaitre dans l'onglet `Contenu apprenant`.
- Les actions de copie/impression restent locales: `navigator.clipboard.writeText` et `window.print`; elles ne generent pas de PDF/Word et n'envoient aucune donnee.
- L'impression navigateur imprime la vue active avec un titre de vue, en gardant les boutons et la navigation hors impression; la fiche apprenant imprimee ne contient pas les corriges.
- L'interface publique doit privilegier le vocabulaire enseignant: copier, imprimer, proposer une ressource, corrige, guide professeur. Les termes Markdown, YAML, pull request, fork, build ou repository ne doivent pas devenir le parcours principal.
- Les pages visibles doivent distinguer explicitement ce qui fonctionne, ce qui est simule, ce qui est conceptuel et ce qui reste en roadmap.
- Les boutons de copie utilisent les sections existantes du modele (`studentInstructions`, `teacherGuide`, `answerKey`) et une transformation locale en texte propre; ils n'envoient aucune donnee.
- Les ressources demo les plus representatives doivent renseigner clairement `studentInstructions`, `teacherGuide` et `answerKey` pour rendre les boutons de copie utiles immediatement. Les ressources grammaire cause/consequence, phonetique [y]/[u], enquete en classe, prise de notes video, traduction automatique, expose carte mentale et rituel A0 ont ete enrichies pour le test du "prof presse".
- Le prototype de proposition de ressource brute est visuel et non connecte: aucun stockage, aucune API, aucun `localStorage`.
- L'Atelier IA & FLE est une bibliotheque statique d'usages, tutoriels, prompts modeles et exemples remplis a copier dans l'outil choisi par l'enseignant. Il ne contient aucun chatbot, aucun appel API IA, aucun stockage de prompts saisis et aucune collecte de donnees utilisateur. La page affiche un bandeau explicite pour eviter de croire que FLE Commons Lab execute les prompts.
- Le garde-fou CECRL est obligatoire pour les prompts d'adaptation, correction, evaluation ou production par niveau: une IA fournit une hypothese de travail, jamais une validation de niveau.
- La page d'accueil doit rester une table d'orientation sobre: chercher une ressource FLE, ouvrir l'Atelier IA & FLE, puis distinguer actif, experimental et non actif.
- Aucune information du modele n'a ete supprimee: les metadonnees, versions, retours, propositions, audit, IA, numerique, licence et acces restent disponibles.
- Le corpus Google Drive observe sert uniquement de reference de conception pour gabarits et exemples fictifs; les documents sources ne doivent pas etre importes ni publies sans verification.
- `AGENTS.md` est le guide de travail prioritaire pour Codex, ChatGPT, Antigravity et autres LLM.
- Toute intervention significative doit maintenir la documentation de tracabilite: `PROJECT_STATE_FOR_LLMS.md`, `docs/project-journal.md`, `docs/decision-log.md` si necessaire.
- Validation enseignante obligatoire pour niveau, consignes, corriges, droits et licences.
- L'infrastructure Markdown/YAML/Git doit rester invisible pour l'utilisateur enseignant non technicien.
- La contribution ordinaire doit passer par des formulaires, retours d'usage, depots bruts ou corrections simples, non par des pull requests.
- La reciprocite contributive est une direction structurante, mais aucune restriction reelle d'acces ne doit etre implementee en v0.
- Le sas de normalisation des ressources brutes devient un axe central du projet.

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
3. Relire la doctrine `docs/access-and-sustainability-model.md` avant toute discussion d'acces reserve.
4. Lire `docs/drive-corpus-analysis.md` avant de creer de nouveaux gabarits ou exemples Markdown inspires de supports existants.
5. Utiliser `docs/change-report-template.md` comme format standard de bilan.
6. Relire `AGENTS.md` avec les pratiques reelles du projet.
7. Tester les 5 exemples Markdown avec des enseignants FLE pour verifier la clarte des gabarits.
8. Tester les boutons de copie et le rendu d'impression avec des enseignants FLE.
9. Ameliorer le validateur local si de nouveaux exemples Markdown apparaissent.
10. Tester l'architecture d'information avec deux ou trois enseignants FLE.
11. Ajouter quelques supports libres convertis en ressources structurees.
12. Preciser une charte de validation pedagogique.
13. Documenter un schema Supabase futur sans installer Supabase.
14. Definir une charte d'usage IA avant tout prototype actif.
15. Prioriser les fonctions copier et imprimer avant tout workflow communautaire complexe; etudier les exports Word/PDF plus tard seulement apres validation des besoins.
16. Prototyper plus tard un formulaire non persistant de retour d'usage court.
17. Relire les ressources demo ameliorees avec des enseignants FLE presses: les blocs copiables sont-ils assez clairs ?
18. Tester l'Atelier IA & FLE avec des enseignants debutants et verifier que les prompts statiques, les exemples remplis et les boutons de copie restent comprehensibles sans integration IA dans la plateforme.

## 11. A ne pas faire sans validation explicite

- Installer Supabase ou Firebase.
- Ajouter une authentification.
- Ajouter des roles reels ou permissions reelles.
- Ajouter Stripe, paiement, abonnement ou restriction reelle d'acces.
- Ajouter un appel IA reel.
- Ajouter un chatbot, une correction automatique ou un envoi de prompt depuis le site vers un fournisseur IA.
- Creer une cle API ou `.env.local`.
- Ajouter une base de donnees.
- Ajouter upload ou stockage de fichiers.
- Connecter le prototype de contribution a une API ou a `localStorage`.
- Ajouter un import automatique Markdown ou `.docx`.
- Ajouter un import automatique Google Drive.
- Ajouter une dependance YAML sans decision explicite.
- Ajouter un chat, forum ou messagerie.
- Ajouter un vrai workflow communautaire persistant.
- Copier dans le depot des contenus Drive dont les droits, sources et donnees personnelles n'ont pas ete verifies.
- Exposer une cle serveur cote frontend.
- Rendre le projet dependant d'un fournisseur IA.
- Faire de GitHub, Markdown ou YAML le parcours principal de contribution pour les enseignants non techniciens.
- Publier automatiquement une ressource brute sans verification humaine.

## Direction Strategique Confirmee : Reciprocite Contributive et Sas de Normalisation

**A L'ATTENTION DE TOUS LES AGENTS (Codex, Antigravity, etc.) :**
Le projet s'oriente vers un modele de *reciprocite contributive* (acces elargi associe a des contributions utiles) et integre le concept de *sas de normalisation* pour ingerer des ressources brutes.

Cependant, dans la v0 actuelle :
- Ne **PAS** developper ou implementer Supabase, Clerk, NextAuth, ou tout systeme de base de donnees backend.
- Ne **PAS** mettre en place de restriction reelle d'acces ou de murs payants dans l'application.
- Garder la contribution conceptuellement accessible (pas de jargon de developpeur).
- Ne pas exposer Markdown, YAML ou Git comme parcours principal pour l'enseignant ordinaire.
- Nous nous contentons de preparer les concepts, les types optionnels TypeScript et la documentation.
La priorite reste la v0 statique et documentaire.

## Horizon de reception FLE

L'etude de reception confirme trois profils :

- enseignants-consommateurs presses : ils veulent chercher, copier, adapter et imprimer ;
- concepteurs-contributeurs pedagogiques : ils peuvent proposer, corriger, adapter ou relire, mais pas necessairement via Git ;
- enseignants technophiles : ils peuvent maintenir les formats ouverts, schemas, validateurs et contributions GitHub.

Consequence active : l'interface publique doit etre pensee d'abord pour le premier profil, tandis que les parcours de contribution doivent viser le deuxieme. Le troisieme reste essentiel pour maintenir la forge, mais ne doit pas imposer ses outils au public majoritaire.


## Maquette UX : Formulaire de dépôt

**NOTE POUR LES PROCHAINES SESSIONS :**
Le composant `ContributionSpacePage.tsx` a été implémenté VISUELLEMENT (maquette) en respectant à la lettre le document `docs/raw-resource-intake-form-spec.md`. 
Le formulaire utilise un état local React uniquement (`useState`) pour naviguer entre les 5 étapes.
Ne **JAMAIS** ajouter de backend, de base de données (Supabase), ou d'authentification pour rendre le formulaire fonctionnel. Le bouton 'Envoyer' affiche simplement un message statique pédagogique de démonstration.
