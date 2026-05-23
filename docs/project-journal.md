# Journal du projet

Journal chronologique synthétique des interventions importantes. Les dates sont celles connues dans le dépôt ou les échanges; quand une date exacte n'est pas vérifiable, elle est indiquée comme à préciser.

## Date à préciser — Création du dépôt GitHub

- Outil principal : GitHub
- Objectif : créer le dépôt public `franzbib/fle-commons-lab`
- Résultat : dépôt disponible à l'adresse `https://github.com/franzbib/fle-commons-lab`
- Fichiers principaux : aucun fichier initial vérifiable dans ce journal
- Décisions : utiliser GitHub comme source publique du projet open source
- Limites volontaires : aucune architecture applicative décidée à ce stade
- Commit associé si connu : à préciser

## 2026-05-23 — Socle local Vite React TypeScript

- Outil principal : Codex
- Objectif : créer une v0 locale fonctionnelle pour une bibliothèque FLE
- Résultat : application Vite + React + TypeScript, données locales, pages principales et documentation fondatrice
- Fichiers principaux : `src/`, `README.md`, `PROJECT_STATE_FOR_LLMS.md`, `docs/`
- Décisions : choisir Vite + React + TypeScript; utiliser des données locales; commencer sans backend
- Limites volontaires : pas de Supabase, pas d'authentification, pas d'appel IA réel, pas d'upload
- Commit associé si connu : `2e1c0e2 chore: initialize FLE Commons Lab v0 foundation`

## 2026-05-23 — Taxonomie pédagogique, numérique et IA

- Outil principal : Codex
- Objectif : enrichir le modèle de ressource pour couvrir pédagogie FLE, numérique et IA documentée
- Résultat : modèle TypeScript enrichi, 18 ressources de démonstration, filtres, pages détail et page Technologies et IA
- Fichiers principaux : `src/types/resource.ts`, `src/data/demoResources.ts`, `src/pages/TechnologyAndAiPage.tsx`
- Décisions : documenter les usages IA sans les activer; garder les scores et retours d'usage simulés
- Limites volontaires : aucune API IA, aucune clé, aucune persistance
- Commit associé si connu : `2e1c0e2 chore: initialize FLE Commons Lab v0 foundation`

## 2026-05-23 — Tests et consolidation Git

- Outil principal : Codex
- Objectif : consolider les filtres, Git et la documentation de synchronisation initiale
- Résultat : tests Vitest sur la logique de filtrage, scripts npm de vérification, dépôt local rattaché à GitHub
- Fichiers principaux : `src/utils/filters.test.ts`, `docs/git-workflow.md`, `package.json`
- Décisions : utiliser Vitest pour les tests légers; rester sans Playwright/Cypress
- Limites volontaires : pas d'infrastructure de test lourde
- Commit associé si connu : `2e1c0e2 chore: initialize FLE Commons Lab v0 foundation`

## 2026-05-23 — Fondations communautaires locales

- Outil principal : Codex
- Objectif : montrer la logique de commun pédagogique sans backend
- Résultat : collections locales, propositions d'amélioration simulées, page Communauté, page Gabarits, templates GitHub
- Fichiers principaux : `src/pages/CollectionsPage.tsx`, `src/pages/CommunityPage.tsx`, `.github/`, `docs/community-model.md`
- Décisions : organiser la communauté autour des ressources plutôt qu'autour d'un forum
- Limites volontaires : pas de chat, pas de forum, pas de commentaires persistants, pas de rôles réels
- Commit associé si connu : `4dc467c docs: add markdown resource format foundations`

## 2026-05-23 — Rapport Antigravity sur la conversion

- Outil principal : Antigravity
- Objectif : explorer la conversion de supports FLE vers le modèle FLE Commons Lab
- Résultat : rapport de conversion et exemples expérimentaux
- Fichiers principaux : `docs/conversion-experiments.md`, `docs/conversion-examples/`
- Décisions : recommander Markdown + Frontmatter YAML comme format source lisible et exploitable
- Limites volontaires : conversions exploratoires, pas d'import automatique
- Commit associé si connu : à préciser

## 2026-05-23 — Format Markdown + Frontmatter YAML

- Outil principal : Codex
- Objectif : formaliser le format source de contribution sans créer d'importeur
- Résultat : documentation du format, exemples Markdown et type `ResourceFrontmatter`
- Fichiers principaux : `docs/markdown-resource-format.md`, `docs/conversion-workflow.md`, `examples/resources-markdown/`, `src/types/resourceMarkdown.ts`
- Décisions : créer un format source expérimental avant toute base de données
- Limites volontaires : pas de parser YAML complet, pas d'upload, pas d'import automatique
- Commit associé si connu : `4dc467c docs: add markdown resource format foundations`

## 2026-05-23 — Validateur Markdown local

- Outil principal : Codex
- Objectif : vérifier minimalement les exemples Markdown + frontmatter
- Résultat : script de validation, commande npm et tests Vitest
- Fichiers principaux : `scripts/validate-markdown-resources.mjs`, `scripts/validate-markdown-resources.test.mjs`, `package.json`
- Décisions : créer un validateur léger avant un importeur; éviter une dépendance YAML
- Limites volontaires : ne valide pas la qualité pédagogique ni juridiquement les licences
- Commit associé si connu : `3b038c1 docs: add agent and contributor governance foundations`

## 2026-05-23 — Démo publique et déploiement Vercel

- Outil principal : Codex
- Objectif : clarifier la dimension démo publique du projet
- Résultat : page Démo, documentation Vercel, URL publique vérifiée
- Fichiers principaux : `src/pages/ProjectStatusPage.tsx`, `docs/deployment.md`, `README.md`
- Décisions : documenter que la démo ne collecte aucune donnée utilisateur
- Limites volontaires : site statique uniquement, aucune variable obligatoire
- Commit associé si connu : `3b038c1 docs: add agent and contributor governance foundations`

## 2026-05-23 — Gouvernance agents et contributeurs

- Outil principal : Codex
- Objectif : définir comment ChatGPT, Codex, Antigravity et autres LLM doivent travailler dans le dépôt
- Résultat : `AGENTS.md`, workflow agents, rôles contributeurs futurs, page conceptuelle Espace de contribution
- Fichiers principaux : `AGENTS.md`, `docs/agent-workflow.md`, `docs/contributor-roles.md`, `docs/contribution-space-concept.md`, `src/types/community.ts`
- Décisions : rôles contributeurs purement descriptifs; aucun système réel de permission
- Limites volontaires : pas d'authentification, pas de rôles réels, pas de workflow persistant
- Commit associé si connu : `3b038c1 docs: add agent and contributor governance foundations`

## 2026-05-23 — Audit de synchronisation GitHub / local / Vercel

- Outil principal : Codex
- Objectif : vérifier l'incohérence signalée entre dépôt GitHub supposé vide, dépôt local et déploiement Vercel
- Résultat : audit documenté; local, `origin/main` et GitHub public cohérents; Vercel répond en HTTP 200
- Fichiers principaux : `docs/git-sync-audit.md`, `docs/deployment.md`, `PROJECT_STATE_FOR_LLMS.md`, `README.md`
- Décisions : conserver `main` comme branche attendue; documenter les commandes d'audit
- Limites volontaires : configuration interne Vercel non vérifiable sans dossier `.vercel/` ou accès dashboard
- Commit associé si connu : `72f066f chore: document repository synchronization and deployment state`

## 2026-05-23 — Traçabilité projet et journaux de décision

- Outil principal : Codex
- Objectif : créer une couche légère de journalisation des interventions et décisions
- Résultat : journal projet, decision log, modèle de rapport et règles de prompting
- Fichiers principaux : `docs/project-journal.md`, `docs/decision-log.md`, `docs/change-report-template.md`, `docs/prompting-rules.md`
- Décisions : toute intervention significative doit mettre à jour la documentation de reprise
- Limites volontaires : pas de fonctionnalité applicative ajoutée
- Commit associé si connu : commit en cours

## 2026-05-23 — Modèle conceptuel d'accès et de soutenabilité

- Outil principal : Codex
- Objectif : préparer la possibilité future de ressources publiques, privées, membres, institutionnelles ou premium sans implémenter de paiement
- Résultat : doctrine d'accès, types descriptifs, champs optionnels sur `Resource` et `ResourceFrontmatter`
- Fichiers principaux : `docs/access-and-sustainability-model.md`, `src/types/access.ts`, `docs/resource-model.md`, `docs/decision-log.md`
- Décisions : le code et les modèles de base restent ouverts; les statuts d'accès sont conceptuels; aucun paiement n'est actif
- Limites volontaires : pas de Stripe, pas d'abonnement, pas d'authentification, pas de backend, pas de restriction réelle
- Commit associé si connu : commit en cours

## 2026-05-23 — Intégration visuelle Laboratoire Typographique

- Outil principal : Antigravity pour la direction, Codex pour l'intégration
- Objectif : appliquer une première couche visuelle plus marquée sans refonte complète
- Résultat : tokens CSS, logo temporaire, favicon, badges typographiques, cartes ressources type fiche d'index
- Fichiers principaux : `docs/visual-identity-v0.md`, `assets/branding/`, `src/styles/global.css`, `src/components/Badge.tsx`, `src/components/ResourceCard.tsx`
- Décisions : retenir le laboratoire typographique comme direction v0, en gardant une intégration sobre et réversible
- Limites volontaires : pas de dépendance UI lourde, pas de refonte globale, pas de changement métier
- Commit associé si connu : commit en cours

## 2026-05-23 — Divulgation progressive de l'information

- Outil principal : Antigravity pour le rapport UX, Codex pour l'intégration
- Objectif : alléger la navigation enseignant sans supprimer les métadonnées du projet
- Résultat : cartes ressource plus compactes, tags limités avec compteur, filtres avancés repliables, fiche détail organisée en prise en main rapide puis sections complémentaires
- Fichiers principaux : `docs/ux-progressive-disclosure.md`, `docs/ux-information-architecture.md`, `src/components/ResourceCard.tsx`, `src/components/ResourceDetail.tsx`, `src/components/ResourceFilters.tsx`
- Décisions : appliquer le principe "ne pas supprimer l'information, la hiérarchiser"
- Limites volontaires : pas de moteur de préférences, pas de refonte complète, pas de suppression de champ métier
- Commit associé si connu : commit en cours

## 2026-05-23 — Analyse exploratoire d'un corpus Google Drive

- Outil principal : ChatGPT avec connecteur Google Drive
- Objectif : analyser un dossier Drive de supports FLE comme corpus de référence temporaire pour les futurs gabarits du projet
- Résultat : rapport documentaire `docs/drive-corpus-analysis.md` décrivant la typologie des supports, les risques, les champs faciles ou difficiles à inférer et les gabarits recommandés
- Fichiers principaux : `docs/drive-corpus-analysis.md`
- Décisions : utiliser le corpus Drive comme référence de conception, pas comme source publiable par défaut; ne pas importer automatiquement les documents; créer plus tard des exemples fictifs ou anonymisés
- Limites volontaires : pas d'import Drive, pas de copie de contenus protégés, pas d'accès réel, pas de Supabase, pas d'upload, pas de backend
- Commit associé si connu : `61e6562 docs: add Drive corpus analysis`

## 2026-05-23 — Gabarits Markdown inspirés du corpus Drive

- Outil principal : Codex
- Objectif : exploiter `docs/drive-corpus-analysis.md` comme référence de conception sans importer les documents Drive
- Résultat : documentation des six gabarits de ressources, clarification support brut / ressource publiable et deux exemples Markdown fictifs supplémentaires
- Fichiers principaux : `docs/markdown-resource-format.md`, `docs/resource-model.md`, `examples/resources-markdown/grammaire-b1-b2-medias-nominalisation.md`, `examples/resources-markdown/evaluation-b1-b2-vie-etudiante.md`
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
