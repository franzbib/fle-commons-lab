# Journal du projet

Journal chronologique synthÃ©tique des interventions importantes. Les dates sont celles connues dans le dÃ©pÃ´t ou les Ã©changes; quand une date exacte n'est pas vÃ©rifiable, elle est indiquÃ©e comme Ã  prÃ©ciser.

## Date Ã  prÃ©ciser â€” CrÃ©ation du dÃ©pÃ´t GitHub

- Outil principal : GitHub
- Objectif : crÃ©er le dÃ©pÃ´t public `franzbib/fle-commons-lab`
- RÃ©sultat : dÃ©pÃ´t disponible Ã  l'adresse `https://github.com/franzbib/fle-commons-lab`
- Fichiers principaux : aucun fichier initial vÃ©rifiable dans ce journal
- DÃ©cisions : utiliser GitHub comme source publique du projet open source
- Limites volontaires : aucune architecture applicative dÃ©cidÃ©e Ã  ce stade
- Commit associÃ© si connu : Ã  prÃ©ciser

## 2026-05-23 â€” Socle local Vite React TypeScript

- Outil principal : Codex
- Objectif : crÃ©er une v0 locale fonctionnelle pour une bibliothÃ¨que FLE
- RÃ©sultat : application Vite + React + TypeScript, donnÃ©es locales, pages principales et documentation fondatrice
- Fichiers principaux : `src/`, `README.md`, `PROJECT_STATE_FOR_LLMS.md`, `docs/`
- DÃ©cisions : choisir Vite + React + TypeScript; utiliser des donnÃ©es locales; commencer sans backend
- Limites volontaires : pas de Supabase, pas d'authentification, pas d'appel IA rÃ©el, pas d'upload
- Commit associÃ© si connu : `2e1c0e2 chore: initialize FLE Commons Lab v0 foundation`

## 2026-05-23 â€” Taxonomie pÃ©dagogique, numÃ©rique et IA

- Outil principal : Codex
- Objectif : enrichir le modÃ¨le de ressource pour couvrir pÃ©dagogie FLE, numÃ©rique et IA documentÃ©e
- RÃ©sultat : modÃ¨le TypeScript enrichi, 18 ressources de dÃ©monstration, filtres, pages dÃ©tail et page Technologies et IA
- Fichiers principaux : `src/types/resource.ts`, `src/data/demoResources.ts`, `src/pages/TechnologyAndAiPage.tsx`
- DÃ©cisions : documenter les usages IA sans les activer; garder les scores et retours d'usage simulÃ©s
- Limites volontaires : aucune API IA, aucune clÃ©, aucune persistance
- Commit associÃ© si connu : `2e1c0e2 chore: initialize FLE Commons Lab v0 foundation`

## 2026-05-23 â€” Tests et consolidation Git

- Outil principal : Codex
- Objectif : consolider les filtres, Git et la documentation de synchronisation initiale
- RÃ©sultat : tests Vitest sur la logique de filtrage, scripts npm de vÃ©rification, dÃ©pÃ´t local rattachÃ© Ã  GitHub
- Fichiers principaux : `src/utils/filters.test.ts`, `docs/git-workflow.md`, `package.json`
- DÃ©cisions : utiliser Vitest pour les tests lÃ©gers; rester sans Playwright/Cypress
- Limites volontaires : pas d'infrastructure de test lourde
- Commit associÃ© si connu : `2e1c0e2 chore: initialize FLE Commons Lab v0 foundation`

## 2026-05-23 â€” Fondations communautaires locales

- Outil principal : Codex
- Objectif : montrer la logique de commun pÃ©dagogique sans backend
- RÃ©sultat : collections locales, propositions d'amÃ©lioration simulÃ©es, page CommunautÃ©, page Gabarits, templates GitHub
- Fichiers principaux : `src/pages/CollectionsPage.tsx`, `src/pages/CommunityPage.tsx`, `.github/`, `docs/community-model.md`
- DÃ©cisions : organiser la communautÃ© autour des ressources plutÃ´t qu'autour d'un forum
- Limites volontaires : pas de chat, pas de forum, pas de commentaires persistants, pas de rÃ´les rÃ©els
- Commit associÃ© si connu : `4dc467c docs: add markdown resource format foundations`

## 2026-05-23 â€” Rapport Antigravity sur la conversion

- Outil principal : Antigravity
- Objectif : explorer la conversion de supports FLE vers le modÃ¨le FLE Commons Lab
- RÃ©sultat : rapport de conversion et exemples expÃ©rimentaux
- Fichiers principaux : `docs/conversion-experiments.md`, `docs/conversion-examples/`
- DÃ©cisions : recommander Markdown + Frontmatter YAML comme format source lisible et exploitable
- Limites volontaires : conversions exploratoires, pas d'import automatique
- Commit associÃ© si connu : Ã  prÃ©ciser

## 2026-05-23 â€” Format Markdown + Frontmatter YAML

- Outil principal : Codex
- Objectif : formaliser le format source de contribution sans crÃ©er d'importeur
- RÃ©sultat : documentation du format, exemples Markdown et type `ResourceFrontmatter`
- Fichiers principaux : `docs/markdown-resource-format.md`, `docs/conversion-workflow.md`, `examples/resources-markdown/`, `src/types/resourceMarkdown.ts`
- DÃ©cisions : crÃ©er un format source expÃ©rimental avant toute base de donnÃ©es
- Limites volontaires : pas de parser YAML complet, pas d'upload, pas d'import automatique
- Commit associÃ© si connu : `4dc467c docs: add markdown resource format foundations`

## 2026-05-23 â€” Validateur Markdown local

- Outil principal : Codex
- Objectif : vÃ©rifier minimalement les exemples Markdown + frontmatter
- RÃ©sultat : script de validation, commande npm et tests Vitest
- Fichiers principaux : `scripts/validate-markdown-resources.mjs`, `scripts/validate-markdown-resources.test.mjs`, `package.json`
- DÃ©cisions : crÃ©er un validateur lÃ©ger avant un importeur; Ã©viter une dÃ©pendance YAML
- Limites volontaires : ne valide pas la qualitÃ© pÃ©dagogique ni juridiquement les licences
- Commit associÃ© si connu : `3b038c1 docs: add agent and contributor governance foundations`

## 2026-05-23 â€” DÃ©mo publique et dÃ©ploiement Vercel

- Outil principal : Codex
- Objectif : clarifier la dimension dÃ©mo publique du projet
- RÃ©sultat : page DÃ©mo, documentation Vercel, URL publique vÃ©rifiÃ©e
- Fichiers principaux : `src/pages/ProjectStatusPage.tsx`, `docs/deployment.md`, `README.md`
- DÃ©cisions : documenter que la dÃ©mo ne collecte aucune donnÃ©e utilisateur
- Limites volontaires : site statique uniquement, aucune variable obligatoire
- Commit associÃ© si connu : `3b038c1 docs: add agent and contributor governance foundations`

## 2026-05-23 â€” Gouvernance agents et contributeurs

- Outil principal : Codex
- Objectif : dÃ©finir comment ChatGPT, Codex, Antigravity et autres LLM doivent travailler dans le dÃ©pÃ´t
- RÃ©sultat : `AGENTS.md`, workflow agents, rÃ´les contributeurs futurs, page conceptuelle Espace de contribution
- Fichiers principaux : `AGENTS.md`, `docs/agent-workflow.md`, `docs/contributor-roles.md`, `docs/contribution-space-concept.md`, `src/types/community.ts`
- DÃ©cisions : rÃ´les contributeurs purement descriptifs; aucun systÃ¨me rÃ©el de permission
- Limites volontaires : pas d'authentification, pas de rÃ´les rÃ©els, pas de workflow persistant
- Commit associÃ© si connu : `3b038c1 docs: add agent and contributor governance foundations`

## 2026-05-23 â€” Audit de synchronisation GitHub / local / Vercel

- Outil principal : Codex
- Objectif : vÃ©rifier l'incohÃ©rence signalÃ©e entre dÃ©pÃ´t GitHub supposÃ© vide, dÃ©pÃ´t local et dÃ©ploiement Vercel
- RÃ©sultat : audit documentÃ©; local, `origin/main` et GitHub public cohÃ©rents; Vercel rÃ©pond en HTTP 200
- Fichiers principaux : `docs/git-sync-audit.md`, `docs/deployment.md`, `PROJECT_STATE_FOR_LLMS.md`, `README.md`
- DÃ©cisions : conserver `main` comme branche attendue; documenter les commandes d'audit
- Limites volontaires : configuration interne Vercel non vÃ©rifiable sans dossier `.vercel/` ou accÃ¨s dashboard
- Commit associÃ© si connu : `72f066f chore: document repository synchronization and deployment state`

## 2026-05-23 â€” TraÃ§abilitÃ© projet et journaux de dÃ©cision

- Outil principal : Codex
- Objectif : crÃ©er une couche lÃ©gÃ¨re de journalisation des interventions et dÃ©cisions
- RÃ©sultat : journal projet, decision log, modÃ¨le de rapport et rÃ¨gles de prompting
- Fichiers principaux : `docs/project-journal.md`, `docs/decision-log.md`, `docs/change-report-template.md`, `docs/prompting-rules.md`
- DÃ©cisions : toute intervention significative doit mettre Ã  jour la documentation de reprise
- Limites volontaires : pas de fonctionnalitÃ© applicative ajoutÃ©e
- Commit associÃ© si connu : commit en cours

## 2026-05-23 â€” ModÃ¨le conceptuel d'accÃ¨s et de soutenabilitÃ©

- Outil principal : Codex
- Objectif : prÃ©parer la possibilitÃ© future de ressources publiques, privÃ©es, membres, institutionnelles ou premium sans implÃ©menter de paiement
- RÃ©sultat : doctrine d'accÃ¨s, types descriptifs, champs optionnels sur `Resource` et `ResourceFrontmatter`
- Fichiers principaux : `docs/access-and-sustainability-model.md`, `src/types/access.ts`, `docs/resource-model.md`, `docs/decision-log.md`
- DÃ©cisions : le code et les modÃ¨les de base restent ouverts; les statuts d'accÃ¨s sont conceptuels; aucun paiement n'est actif
- Limites volontaires : pas de Stripe, pas d'abonnement, pas d'authentification, pas de backend, pas de restriction rÃ©elle
- Commit associÃ© si connu : commit en cours

## 2026-05-23 â€” IntÃ©gration visuelle Laboratoire Typographique

- Outil principal : Antigravity pour la direction, Codex pour l'intÃ©gration
- Objectif : appliquer une premiÃ¨re couche visuelle plus marquÃ©e sans refonte complÃ¨te
- RÃ©sultat : tokens CSS, logo temporaire, favicon, badges typographiques, cartes ressources type fiche d'index
- Fichiers principaux : `docs/visual-identity-v0.md`, `assets/branding/`, `src/styles/global.css`, `src/components/Badge.tsx`, `src/components/ResourceCard.tsx`
- DÃ©cisions : retenir le laboratoire typographique comme direction v0, en gardant une intÃ©gration sobre et rÃ©versible
- Limites volontaires : pas de dÃ©pendance UI lourde, pas de refonte globale, pas de changement mÃ©tier
- Commit associÃ© si connu : commit en cours

## 2026-05-23 â€” Divulgation progressive de l'information

- Outil principal : Antigravity pour le rapport UX, Codex pour l'intÃ©gration
- Objectif : allÃ©ger la navigation enseignant sans supprimer les mÃ©tadonnÃ©es du projet
- RÃ©sultat : cartes ressource plus compactes, tags limitÃ©s avec compteur, filtres avancÃ©s repliables, fiche dÃ©tail organisÃ©e en prise en main rapide puis sections complÃ©mentaires
- Fichiers principaux : `docs/ux-progressive-disclosure.md`, `docs/ux-information-architecture.md`, `src/components/ResourceCard.tsx`, `src/components/ResourceDetail.tsx`, `src/components/ResourceFilters.tsx`
- DÃ©cisions : appliquer le principe "ne pas supprimer l'information, la hiÃ©rarchiser"
- Limites volontaires : pas de moteur de prÃ©fÃ©rences, pas de refonte complÃ¨te, pas de suppression de champ mÃ©tier
- Commit associÃ© si connu : commit en cours

## 2026-05-23 â€” Analyse exploratoire d'un corpus Google Drive

- Outil principal : ChatGPT avec connecteur Google Drive
- Objectif : analyser un dossier Drive de supports FLE comme corpus de rÃ©fÃ©rence temporaire pour les futurs gabarits du projet
- RÃ©sultat : rapport documentaire `docs/drive-corpus-analysis.md` dÃ©crivant la typologie des supports, les risques, les champs faciles ou difficiles Ã  infÃ©rer et les gabarits recommandÃ©s
- Fichiers principaux : `docs/drive-corpus-analysis.md`
- DÃ©cisions : utiliser le corpus Drive comme rÃ©fÃ©rence de conception, pas comme source publiable par dÃ©faut; ne pas importer automatiquement les documents; crÃ©er plus tard des exemples fictifs ou anonymisÃ©s
- Limites volontaires : pas d'import Drive, pas de copie de contenus protÃ©gÃ©s, pas d'accÃ¨s rÃ©el, pas de Supabase, pas d'upload, pas de backend
- Commit associÃ© si connu : `61e6562 docs: add Drive corpus analysis`

## 2026-05-23 â€” Gabarits Markdown inspirÃ©s du corpus Drive

- Outil principal : Codex
- Objectif : exploiter `docs/drive-corpus-analysis.md` comme rÃ©fÃ©rence de conception sans importer les documents Drive
- RÃ©sultat : documentation des six gabarits de ressources, clarification support brut / ressource publiable et deux exemples Markdown fictifs supplÃ©mentaires
- Fichiers principaux : `docs/markdown-resource-format.md`, `docs/resource-model.md`, `examples/resources-markdown/grammaire-b1-b2-medias-nominalisation.md`, `examples/resources-markdown/evaluation-b1-b2-vie-etudiante.md`
- DÃ©cisions : garder `pedagogicalCompleteness`, `rightsStatus` et `referenceUse` documentaires pour l'instant; ne pas alourdir le type `Resource`
- Limites volontaires : aucun accÃ¨s Drive, aucune copie de contenu exact, aucun import automatique, aucun backend
- Décisions : garder `pedagogicalCompleteness`, `rightsStatus` et `referenceUse` documentaires pour l'instant; ne pas alourdir le type `Resource`
- Limites volontaires : aucun accès Drive, aucune copie de contenu exact, aucun import automatique, aucun backend
- Commit associé si connu : commit en cours

## 2026-05-23 — Usage enseignant immédiat

- Outil principal : Codex
- Objectif : rendre les fiches plus copiables, adaptables et imprimables sans ajouter de backend
- Résultat : boutons de copie pour support étudiant, guide professeur, corrigé et fiche complète; bouton d'impression; styles print; prototype non persistant de proposition de ressource brute
- Fichiers principaux : `src/components/ResourceDetail.tsx`, `src/components/ResourceCopyActions.tsx`, `src/utils/resourceText.ts`, `src/pages/ContributionSpacePage.tsx`, `src/styles/global.css`
- Décisions : utiliser les sections existantes du modèle pour produire du texte copiable; garder le formulaire de contribution purement visuel
- Limites volontaires : aucune donnée envoyée, aucun stockage local, aucun upload, aucune authentification, aucune restriction d'accès
- Commit associé si connu : commit en cours

## 2026-05-23 — Ressources démo alignées sur l'usage enseignant

- Outil principal : Codex
- Objectif : rendre un lot représentatif de ressources de démonstration plus immédiatement compréhensible, copiable, imprimable et adaptable
- Résultat : 7 fiches locales enrichies avec titres plus directs, résumés orientés usage, supports étudiants, guides professeur, corrigés, variantes, retours d'usage et propositions d'amélioration simulées
- Fichiers principaux : `src/data/demoResources.ts`, `PROJECT_STATE_FOR_LLMS.md`, `docs/project-journal.md`
- Décisions : ne pas réécrire toute la bibliothèque; améliorer les ressources les plus représentatives pour montrer la promesse "copier, imprimer, adapter, contribuer sans compétence technique"
- Limites volontaires : aucune nouvelle fonctionnalité, aucun changement profond du modèle, aucun contenu protégé, aucun backend, aucun upload, aucun appel IA réel
- Commit associé si connu : commit en cours

### 2026-05-23 : Spécification UX du formulaire de dépôt brut
- **Action** : Rédaction complète de la spécification UX pour le composant `ContributionSpacePage` (`docs/raw-resource-intake-form-spec.md`).
- **Décision** : Le formulaire prendra la forme d'un wizard en 5 étapes, conçu pour minimiser la charge cognitive (zéro YAML, zéro Markdown, aucun jargon technique).

