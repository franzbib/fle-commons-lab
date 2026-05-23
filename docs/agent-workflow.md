# Workflow des agents IA

Ce document explique comment travailler avec ChatGPT, Codex, Antigravity, Claude ou d'autres LLM dans FLE Commons Lab.

## Principe central

Une tache = un objectif verifiable.

Eviter les demandes trop vastes comme "ameliore tout le projet". Preferer une consigne limitee: "ajoute une page de documentation", "teste le validateur Markdown", "propose trois ressources demo".

## Cycle de travail recommande

1. Lire `PROJECT_STATE_FOR_LLMS.md`.
2. Identifier un objectif unique.
3. Verifier les contraintes de sobriete.
4. Modifier le minimum de fichiers utile.
5. Lancer les commandes de verification.
6. Mettre a jour la documentation si le modele change.
7. Committer avec un message explicite si l'utilisateur l'autorise.

## Quand utiliser Codex

Utiliser Codex pour:

- modifier le code;
- ajouter ou corriger des tests;
- mettre a jour la documentation technique;
- verifier lint, typecheck, tests, build;
- committer et pousser quand c'est autorise.

## Quand utiliser Antigravity

Utiliser Antigravity pour:

- explorer des formats;
- convertir des supports en exemples;
- produire des rapports experimentaux;
- comparer des hypotheses;
- preparer des materiaux qui seront relus avant integration.

Antigravity ne doit pas reecrire l'application principale sans consigne explicite.

## Quand utiliser ChatGPT

Utiliser ChatGPT pour:

- concevoir les prompts;
- arbitrer les orientations pedagogiques;
- reflechir a la taxonomie;
- clarifier la vision du projet;
- preparer un plan avant implementation.

## Limiter les tokens

- Fournir le contexte utile, pas toute l'histoire du projet.
- Pointer vers `PROJECT_STATE_FOR_LLMS.md`.
- Donner les fichiers a lire en priorite.
- Demander un livrable concret.
- Eviter les listes de demandes contradictoires.

## Bon prompt Codex

Un bon prompt Codex contient:

- depot concerne;
- objectif unique;
- fichiers a inspecter;
- contraintes strictes;
- commandes a lancer;
- message de commit souhaite;
- indication claire sur push ou non.

## Bon prompt Antigravity

Un bon prompt Antigravity contient:

- question d'exploration;
- type de support a analyser;
- format de rapport attendu;
- limites du prototype;
- distinction entre hypothese et integration.

## Verifier avant commit

Selon la tache:

```bash
npm run typecheck
npm run lint
npm run test
npm run validate:resources
npm run build
git status
```

## Maintenir PROJECT_STATE_FOR_LLMS.md

Mettre a jour ce fichier quand:

- une page importante est ajoutee;
- un type durable est cree;
- une commande npm est ajoutee;
- une decision de sobriete est prise;
- une limite volontaire change;
- un futur agent doit comprendre le nouvel etat sans reconstituer l'historique.
