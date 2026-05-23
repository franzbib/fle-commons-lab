# Journal des décisions

Ce fichier consigne les décisions structurantes du projet. Une décision active ne doit pas être remise en cause sans nouvelle discussion explicite.

## Décision 1 — Utiliser Vite + React + TypeScript

- Statut : active
- Contexte : besoin d'une application locale simple, typée et facile à déployer en statique.
- Décision : utiliser Vite, React et TypeScript.
- Raisons : démarrage rapide, typage propre, build statique, écosystème connu.
- Conséquences : application frontend sans serveur; hash routes pour limiter la configuration de déploiement.
- Ce qu'il ne faut pas faire sans nouvelle décision : migrer vers Next.js, ajouter un backend ou changer de stack principale.
- Documents liés : `docs/architecture-v0.md`, `README.md`

## Décision 2 — Commencer sans Supabase

- Statut : active
- Contexte : le projet doit d'abord stabiliser son modèle pédagogique et documentaire.
- Décision : ne pas installer Supabase dans la v0.
- Raisons : éviter la complexité, les variables d'environnement et la persistance prématurée.
- Conséquences : données locales TypeScript et exemples Markdown.
- Ce qu'il ne faut pas faire sans nouvelle décision : ajouter Supabase, migrations, tables, clients ou variables Supabase obligatoires.
- Documents liés : `docs/environment.md`, `docs/architecture-v0.md`

## Décision 3 — Commencer sans appel IA réel

- Statut : active
- Contexte : le projet documente des usages IA pédagogiques mais ne doit pas exposer de clés ni appeler d'API.
- Décision : aucun appel IA réel dans la v0.
- Raisons : coût maîtrisé, sécurité, confidentialité, sobriété.
- Conséquences : métadonnées IA descriptives seulement.
- Ce qu'il ne faut pas faire sans nouvelle décision : ajouter OpenAI, Claude, Gemini, embeddings, agents ou clés API.
- Documents liés : `docs/technology-and-ai.md`, `PROJECT_STATE_FOR_LLMS.md`

## Décision 4 — Utiliser des données locales

- Statut : active
- Contexte : la v0 doit être consultable et testable sans compte ni serveur.
- Décision : stocker les ressources de démonstration dans des fichiers TypeScript.
- Raisons : lisibilité, typage, gratuité, facilité de reprise par agents IA.
- Conséquences : aucune persistance utilisateur; contributions simulées.
- Ce qu'il ne faut pas faire sans nouvelle décision : remplacer les données locales par une base ou un CMS.
- Documents liés : `src/data/demoResources.ts`, `docs/resource-model.md`

## Décision 5 — Documenter les usages IA sans les activer

- Statut : active
- Contexte : FLE Commons Lab doit intégrer une réflexion numérique et IA.
- Décision : ajouter `TechMetadata` et `AiMetadata`, mais sans service connecté.
- Raisons : préparer l'audit pédagogique futur tout en restant sûr et sobre.
- Conséquences : les ressources peuvent mentionner ChatGPT, Claude, Gemini ou autres outils sans intégration technique.
- Ce qu'il ne faut pas faire sans nouvelle décision : transformer une note IA en bouton actif ou appel API.
- Documents liés : `docs/technology-and-ai.md`, `src/types/resource.ts`

## Décision 6 — Utiliser Markdown + Frontmatter YAML comme format source expérimental

- Statut : active
- Contexte : Antigravity a exploré la conversion de supports FLE vers un format lisible et versionnable.
- Décision : documenter Markdown + Frontmatter YAML comme format source futur.
- Raisons : lisible par enseignants, compatible Git, exploitable plus tard par outils.
- Conséquences : exemples dans `examples/resources-markdown/`.
- Ce qu'il ne faut pas faire sans nouvelle décision : créer un import automatique ou imposer ce format comme unique source validée.
- Documents liés : `docs/markdown-resource-format.md`, `docs/conversion-experiments.md`

## Décision 7 — Créer un validateur avant un importeur

- Statut : active
- Contexte : les exemples Markdown doivent être vérifiables sans créer de pipeline lourd.
- Décision : ajouter `npm run validate:resources`.
- Raisons : contrôler les champs et sections minimales avant toute conversion.
- Conséquences : script Node autonome, sans dépendance YAML.
- Ce qu'il ne faut pas faire sans nouvelle décision : transformer le validateur en importeur complet ou en parser YAML général.
- Documents liés : `scripts/validate-markdown-resources.mjs`, `docs/markdown-resource-format.md`

## Décision 8 — Organiser la communauté autour des ressources

- Statut : active
- Contexte : le projet doit devenir un commun pédagogique, pas un réseau social.
- Décision : centrer collections, retours, variantes et propositions sur les ressources.
- Raisons : garder la discussion actionnable et pédagogique.
- Conséquences : pas de forum général ni de messagerie dans la v0.
- Ce qu'il ne faut pas faire sans nouvelle décision : ajouter chat, forum, notifications ou réputation complexe.
- Documents liés : `docs/community-model.md`, `docs/contribution-space-concept.md`

## Décision 9 — Différer auth, upload, backend, chat et notifications

- Statut : active
- Contexte : ces fonctions demanderaient gouvernance, sécurité, modération et coûts.
- Décision : les différer explicitement.
- Raisons : réduire les risques et stabiliser le modèle.
- Conséquences : aucune donnée utilisateur collectée; démo statique.
- Ce qu'il ne faut pas faire sans nouvelle décision : ajouter un compte, un rôle réel, un upload ou une notification.
- Documents liés : `AGENTS.md`, `docs/non-regression-checklist.md`

## Décision 10 — Maintenir PROJECT_STATE_FOR_LLMS.md

- Statut : active
- Contexte : plusieurs agents IA interviennent sur le dépôt.
- Décision : garder `PROJECT_STATE_FOR_LLMS.md` comme fichier de reprise.
- Raisons : réduire la perte de contexte, éviter les redites, guider les futurs agents.
- Conséquences : toute évolution significative doit le mettre à jour.
- Ce qu'il ne faut pas faire sans nouvelle décision : laisser une nouvelle page, commande ou limite importante absente de ce fichier.
- Documents liés : `PROJECT_STATE_FOR_LLMS.md`, `AGENTS.md`

## Décision 11 — Répartir les rôles entre agents IA

- Statut : active
- Contexte : ChatGPT, Codex, Antigravity et éventuellement Claude interviennent avec des forces différentes.
- Décision : ChatGPT aide à l'architecture pédagogique, Codex code/teste/documente, Antigravity explore, Claude relit éventuellement.
- Raisons : éviter que chaque outil modifie tout sans discipline.
- Conséquences : `AGENTS.md` et `docs/agent-workflow.md` guident les interventions.
- Ce qu'il ne faut pas faire sans nouvelle décision : laisser un agent élargir seul le périmètre ou réécrire l'application principale.
- Documents liés : `AGENTS.md`, `docs/agent-workflow.md`

## Décision 12 — Prévoir des niveaux d'accès sans implémenter de paiement

- Statut : provisoire / à réviser plus tard
- Contexte : le projet pourrait un jour accueillir des ressources publiques, privées, institutionnelles, réservées à des membres ou éventuellement premium.
- Décision : documenter et typer légèrement les niveaux d'accès et statuts de soutenabilité, sans paiement ni authentification.
- Raisons : ne pas bloquer une architecture future tout en gardant le projet open source, sobre et centré sur les communs pédagogiques.
- Conséquences : ajout de types descriptifs `AccessLevel`, `MonetizationStatus` et `MembershipTier`; champs optionnels sur `Resource` et `ResourceFrontmatter`.
- Ce qu'il ne faut pas faire sans nouvelle décision : ajouter Stripe, paiement, abonnement, restriction réelle d'accès, auth, backend, Supabase ou offre commerciale.
- Documents liés : `docs/access-and-sustainability-model.md`, `src/types/access.ts`, `docs/resource-model.md`

## Décision 13 — Adopter le Laboratoire Typographique comme direction visuelle v0

- Statut : active / à réviser après retours utilisateurs
- Contexte : Antigravity a proposé plusieurs pistes visuelles pour éviter une interface SaaS générique.
- Décision : appliquer progressivement la direction "Laboratoire Typographique".
- Raisons : cohérence avec Markdown, métadonnées, ressources structurées, documentation et laboratoire pédagogique.
- Conséquences : tokens CSS papier/graphite/améthyste/jaune annotation, badges monospace, cartes type fiche d'index, logo temporaire.
- Ce qu'il ne faut pas faire sans nouvelle décision : refonte totale, surcharge graphique, dépendance UI lourde, transformation commerciale de l'interface.
- Documents liés : `docs/branding-directions.md`, `docs/visual-identity-v0.md`, `docs/ui-implementation-notes.md`
