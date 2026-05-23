# Règles de prompting pour agents IA

Ce document aide à formuler des demandes efficaces pour Codex, Antigravity, ChatGPT et autres LLM.

## Règles générales

- Toujours préciser le périmètre.
- Toujours rappeler les interdictions temporaires.
- Toujours demander une mise à jour documentaire.
- Toujours demander les vérifications disponibles.
- Toujours éviter les tâches trop larges.
- Préférer: une tâche = un objectif vérifiable.
- Inclure systématiquement un bloc "Discipline documentaire obligatoire".

## Prompt Codex

Un prompt Codex doit préciser:

- dépôt concerné;
- objectif unique;
- fichiers à inspecter;
- contraintes strictes;
- vérifications à lancer;
- documents à mettre à jour;
- message de commit souhaité;
- push attendu ou non.

Demander à Codex de committer et pousser si l'environnement le permet.

Exemple:

```text
Objectif: ajouter une documentation courte sur X.
Contraintes: pas de backend, pas de dépendance, pas de fonctionnalité produit.
À mettre à jour: README.md, PROJECT_STATE_FOR_LLMS.md, docs/...
Vérifications: npm run typecheck, lint, test, build.
Commit: docs: document X
Push: oui si tout passe.
```

## Prompt Antigravity

Un prompt Antigravity doit préciser:

- question d'exploration;
- matériaux à analyser;
- format du rapport;
- limites de l'expérience;
- interdiction de modifier l'application principale sauf consigne explicite.

Antigravity doit produire un rapport, une conversion ou une hypothèse exploitable par Codex, pas réécrire le projet.

## Prompt ChatGPT

Un prompt ChatGPT peut servir à:

- clarifier la vision;
- construire une taxonomie;
- rédiger un prompt pour Codex;
- arbitrer une orientation pédagogique;
- relire une décision avant implémentation.

ChatGPT ne doit pas être supposé connaître l'état exact du dépôt sans `PROJECT_STATE_FOR_LLMS.md`.

## Discipline documentaire obligatoire

Pour toute intervention significative:

- mettre à jour `PROJECT_STATE_FOR_LLMS.md` si l'état du projet change;
- ajouter une entrée à `docs/project-journal.md`;
- ajouter une entrée à `docs/decision-log.md` si une décision structurante est prise;
- utiliser `docs/change-report-template.md` comme structure de bilan;
- vérifier que README, docs et code ne se contredisent pas.

## Mauvais signaux dans un prompt

Éviter:

- "améliore tout";
- "ajoute toutes les fonctionnalités";
- "branche Supabase et l'IA" sans décision préalable;
- "fais une vraie communauté" sans périmètre;
- "importe automatiquement tous les fichiers" sans validation du modèle.

Ces formulations élargissent trop le périmètre et risquent de casser la sobriété du projet.
