# AGENTS.md

Guide permanent pour les agents IA travaillant sur FLE Commons Lab.

## Resume du projet

FLE Commons Lab est un projet open source pour enseignants de francais langue etrangere. Il prepare une forge de ressources pedagogiques structurees, versionnees, reutilisables et ameliorables.

La v0 reste locale et statique: pas de backend, pas de Supabase, pas d'authentification, pas d'upload et pas d'appel IA reel.

## Principes directeurs

- Une tache = un objectif verifiable.
- Preferer la clarte a la sophistication.
- Preserver la sobriete technique.
- Documenter les decisions qui touchent au modele ou au perimetre.
- Garder les ressources originales ou clairement libres.
- Ne pas transformer une anticipation future en fonctionnalite active.

## Stack actuelle

- Vite
- React
- TypeScript
- CSS simple
- Vitest
- Donnees locales TypeScript
- Exemples Markdown + frontmatter YAML

## Commandes de verification

```bash
npm run typecheck
npm run lint
npm run test
npm run validate:resources
npm run build
git status
```

## Fichiers a lire en priorite

- `PROJECT_STATE_FOR_LLMS.md`
- `README.md`
- `docs/architecture-v0.md`
- `docs/resource-model.md`
- `docs/community-model.md`
- `docs/agent-workflow.md`
- `docs/non-regression-checklist.md`
- `src/types/resource.ts`
- `src/types/community.ts`
- `src/data/demoResources.ts`

## Conventions de modification

- Respecter les patterns existants.
- Garder les composants simples et lisibles.
- Ajouter des tests pour la logique nouvelle quand c'est raisonnable.
- Mettre a jour `PROJECT_STATE_FOR_LLMS.md` quand une decision durable est prise.
- Ne pas supprimer de documentation sans raison explicite.
- Ne pas modifier massivement les ressources de demonstration sans demande precise.

## Documentation obligatoire après intervention

- Mettre à jour `PROJECT_STATE_FOR_LLMS.md` si l'état du projet change.
- Ajouter une entrée à `docs/project-journal.md` si l'intervention est significative.
- Ajouter une décision à `docs/decision-log.md` si une décision structurante est prise.
- Utiliser `docs/change-report-template.md` pour structurer le bilan final.
- Vérifier `docs/prompting-rules.md` avant de lancer une tâche multi-agent.
- Ne jamais laisser le code et la documentation diverger.

## Variables d'environnement

La v0 ne necessite aucune variable d'environnement.

Ne jamais committer:

- `.env`
- `.env.local`
- `.env.*.local`

Ne jamais ajouter de secret dans Vercel ou dans le code sans documentation et validation explicite.

## Contenus proteges

- Ne pas copier de contenus pedagogiques, textes, images, captures ou documents proteges sans autorisation.
- Preferer des contenus originaux, fictifs ou libres.
- Marquer `a_verifier` quand une licence est incertaine.
- Garder une relecture humaine pour les documents authentiques.

## Regles sur l'IA

- Les usages IA peuvent etre documentes.
- Aucun appel IA reel ne doit etre ajoute sans validation explicite.
- Aucune cle OpenAI, Anthropic, Gemini ou autre ne doit apparaitre dans le frontend.
- Les futurs appels IA devront passer par une couche serveur explicite, qui n'existe pas en v0.

## Roles des agents

### ChatGPT - Architecte pedagogique et strategique

- Concoit les prompts.
- Aide a arbitrer les orientations.
- Propose les modeles pedagogiques.
- Ne modifie pas directement le depot sauf generation de documents externes.

### Codex - Developpeur et mainteneur technique

- Modifie le code.
- Ajoute des tests.
- Maintient la documentation technique.
- Lance build, lint, tests et validateurs.
- Commit et push quand l'utilisateur l'autorise.

### Antigravity - Explorateur et experimentateur

- Produit des rapports.
- Teste des conversions.
- Explore des formats.
- Prepare des materiaux.
- Ne doit pas reecrire l'application principale sans consigne explicite.

### Claude ou autre LLM - Relecteur critique eventuel

- Relit la documentation.
- Signale les incoherences.
- Propose des reformulations.
- Ne doit pas elargir le perimetre sans validation.

## Ce qu'un agent ne doit pas faire sans validation explicite

- Ajouter Supabase.
- Ajouter un backend.
- Ajouter une authentification.
- Ajouter une IA reelle.
- Ajouter un upload.
- Ajouter une dependance lourde.
- Changer toute la taxonomie.
- Supprimer de la documentation.
- Modifier massivement les ressources de demonstration.
- Ajouter des contenus proteges.
- Ajouter chat, forum, notifications ou messagerie.
- Creer un systeme reel de permissions ou de roles.
