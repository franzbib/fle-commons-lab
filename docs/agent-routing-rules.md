# Règles de routage des agents IA

## Objectif du document

Ce document aide à choisir le bon agent selon la tâche, économiser les tokens, éviter les doublons, maintenir le dépôt synchronisé et limiter les modifications hors périmètre.

Il complète `AGENTS.md`, `docs/agent-workflow.md`, `docs/prompting-rules.md` et `PROJECT_STATE_FOR_LLMS.md`. Il ne crée aucune fonctionnalité applicative.

## Règle préalable obligatoire : synchronisation Git

Avant toute intervention, vérifier que l'on travaille dans le bon dépôt et sur la bonne branche.

Commandes minimales :

```bash
git status
git fetch origin
git status
git log --oneline --decorate -5
```

Règles :

- Ne jamais travailler si le dépôt est behind `origin/main`.
- Faire un pull ou un rebase propre avant toute modification si `main` est en retard.
- Ne jamais travailler sur un working tree sale sans expliquer l'état exact.
- Ne jamais utiliser `git add .`.
- Ajouter explicitement les fichiers concernés par la tâche.
- Ne pas toucher aux fichiers `.docx` non suivis.
- Ne pas supprimer ni déplacer les fichiers non suivis hors périmètre.
- Ne jamais faire de `reset --hard` ou de push forcé sans demande explicite.

## Répartition des agents

### Antigravity

À utiliser pour :

- audits pédagogiques ;
- benchmark qualité d'usage ;
- stratégie de granularité ;
- doctrine produit ;
- UX documentaire ;
- revue critique sans code ;
- analyse de ressources FLE.

Modèles conseillés :

- Claude Sonnet 4.6 Thinking : rédaction structurée, doctrine, plans d'évolution.
- Claude Opus 4.6 Thinking : audit critique final, contre-expertise.
- Gemini 3.1 Pro High : lecture multi-fichiers et petite maquette si nécessaire.
- Gemini 3.5 Flash High : micro-maintenance documentaire et synchronisation légère.

### Codex

À utiliser pour :

- modifications ciblées dans `src/data/demoResources.ts` ;
- corrections de `src/utils/resourceText.ts` ;
- CSS print ;
- petits composants React ;
- tests ;
- build ;
- refactors limités.

Modèle conseillé :

- modèle Codex le plus fort disponible.

## Choisir l'agent selon la tâche

| Type de tâche | Agent conseillé | Modèle conseillé | Remarques |
|---|---|---|---|
| Réflexion produit | Antigravity | Claude Sonnet 4.6 Thinking | Produire une doctrine ou un cadrage, pas du code. |
| Audit pédagogique | Antigravity | Claude Sonnet 4.6 Thinking | Lire les ressources, signaler forces, limites et priorités. |
| Benchmark qualité d'usage | Antigravity | Claude Sonnet 4.6 Thinking ou Gemini 3.1 Pro High | Observer des principes transférables sans copier de contenu protégé. |
| Correction éditoriale de ressources | Codex | Modèle Codex le plus fort disponible | Modifier 1 à 3 ressources maximum, avec tests complets. |
| Modification React/CSS | Codex | Modèle Codex le plus fort disponible | Scope court, tests et build obligatoires. |
| Vérification Git | Codex | Modèle Codex le plus fort disponible | Diagnostiquer branche, remote, ahead/behind, working tree. |
| Micro-synchronisation documentaire | Gemini 3.5 Flash High ou Codex | Gemini 3.5 Flash High si disponible | Pas de code, validation légère. |
| Audit critique final | Antigravity | Claude Opus 4.6 Thinking | Contre-expertise avant décision structurante. |

## Chaînes de travail recommandées

### A. Conception documentaire

Antigravity / Claude Sonnet → éventuellement Claude Opus → Codex seulement si une action technique est décidée.

Usage typique : doctrine produit, modèle pédagogique, plan de montée en qualité, audit UX documentaire.

### B. Correction technique ciblée

Codex directement → tests → éventuellement audit Opus si le changement est sensible.

Usage typique : correction de copie, impression, composant React léger, ajustement de filtres.

### C. Micro-maintenance documentaire

Gemini 3.5 Flash ou Codex → `npm run validate:resources` si nécessaire.

Usage typique : synchroniser un plan, corriger une note, ajouter une entrée de journal.

### D. Montée en qualité des ressources

Antigravity pour plan ou audit → Codex pour 2 ou 3 ressources maximum → Opus pour revue critique.

Usage typique : transformer des ressources démo en mini-packs imprimables sans changer le modèle.

## Garde-fous permanents v0

Ne pas ajouter sans décision explicite :

- backend ;
- Supabase ;
- authentification ;
- upload ;
- stockage ;
- appel IA réel ;
- export DOCX/PDF réel ;
- Fleator ;
- modèle `Block` ;
- dépendance lourde.

Ces éléments peuvent être documentés comme futurs ou différés, mais ne doivent pas être implémentés en v0.

## Format standard des prompts

Squelette court recommandé :

```text
Modèle conseillé :
Rôle du modèle :
Objectif :
Avant toute intervention :
Fichiers à lire :
Contraintes :
Travail demandé :
Vérifications :
Livrable attendu :
```

Conseils :

- Une tâche = un objectif vérifiable.
- Indiquer précisément les fichiers modifiables.
- Indiquer explicitement les interdictions temporaires.
- Demander la mise à jour documentaire si l'intervention est significative.
- Demander commit et push à Codex quand les vérifications passent.

## Vérifications selon le type de tâche

### Documentation seule

Commandes minimales :

```bash
git status
```

Ajouter si des ressources Markdown sont touchées :

```bash
npm run validate:resources
```

### Code ou ressources TypeScript

Commandes attendues :

```bash
npm run typecheck
npm run lint
npm run test
npm run validate:resources
npm run build
```

## État Git final attendu

Tout rapport final doit indiquer :

- branche ;
- commit ;
- fichiers modifiés ;
- état ahead/behind ;
- tests lancés ;
- fichiers volontairement non touchés.

Les fichiers `.docx` non suivis doivent être explicitement laissés hors commit.

## Mise à jour documentaire

À faire :

- ajouter une entrée à `docs/project-journal.md` pour toute intervention significative ;
- mettre à jour `PROJECT_STATE_FOR_LLMS.md` si l'organisation durable du projet change ;
- mettre à jour `docs/decision-log.md` seulement si une décision structurante nouvelle est prise ;
- ne jamais laisser un plan documentaire annoncer comme futur ce qui est déjà fait, ou comme actif ce qui est seulement conceptuel.

## Principe final

Choisir l'agent qui réduit le risque, pas celui qui peut tout faire. Antigravity clarifie et critique ; Codex modifie, teste et pousse ; les documents de reprise gardent la mémoire commune.
