# Audit de synchronisation GitHub / local / Vercel

Date: 2026-05-23

## Résumé

Le dépôt local, `origin/main` et le dépôt GitHub public sont cohérents au moment de cet audit.

L'hypothèse "dépôt GitHub vide" n'est pas confirmée par les vérifications Git et par l'accès public au dépôt.

## État Git local

Branche active:

```text
main
```

Dernier commit local:

```text
3b038c1 docs: add agent and contributor governance foundations
```

État du working tree avant cet audit:

```text
main...origin/main
```

Le dépôt local contient bien l'application Vite + React + TypeScript, la documentation, les exemples Markdown, les scripts de validation et les fichiers de gouvernance.

## Remote GitHub

Remote configuré:

```text
origin https://github.com/franzbib/fle-commons-lab.git
```

La commande `git ls-remote origin refs/heads/main` retourne:

```text
3b038c16bbc04be9145ebb79e2faa95a37217d81 refs/heads/main
```

Ce hash correspond au `HEAD` local et à `origin/main`.

## Vérification du contenu distant

La commande suivante montre que `origin/main` contient les fichiers du projet:

```powershell
git ls-tree --name-only -r origin/main
```

Exemples visibles sur `origin/main`:

- `.github/`
- `AGENTS.md`
- `PROJECT_STATE_FOR_LLMS.md`
- `README.md`
- `docs/`
- `examples/resources-markdown/`
- `public/`
- `scripts/`
- `src/`
- `package.json`
- `vite.config.ts`

La page publique GitHub affiche également les dossiers et fichiers du projet, ainsi que la branche `main`.

## État Vercel

URL publique vérifiée:

```text
https://fle-commons-lab.vercel.app
```

Résultat de vérification HTTP:

```text
StatusCode=200
Title=laforge
```

Le dépôt ne contient pas de dossier `.vercel/`, donc le lien interne entre projet Vercel, équipe Vercel et dépôt GitHub ne peut pas être audité depuis le workspace local.

Configuration Vercel attendue:

- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Variables d'environnement obligatoires: aucune
- Branche de déploiement attendue: `main`

## Incohérence constatée

L'incohérence signalée semble provenir d'un affichage externe incomplet, obsolète, non rafraîchi, ou d'une consultation d'une mauvaise branche/page.

Les vérifications Git ne montrent pas de divergence:

- `HEAD` local = `origin/main`
- `origin/main` existe
- `origin/main` contient les fichiers
- GitHub public affiche le contenu
- Vercel répond en HTTP 200

## Actions recommandées si l'affichage semble encore vide

1. Vérifier que l'URL consultée est bien `https://github.com/franzbib/fle-commons-lab`.
2. Vérifier que la branche affichée sur GitHub est `main`.
3. Recharger la page sans cache.
4. Ouvrir directement `https://github.com/franzbib/fle-commons-lab/tree/main`.
5. Vérifier dans Vercel que le projet utilise bien le dépôt `franzbib/fle-commons-lab` et la branche `main`.

## Commandes d'audit utiles

```powershell
git status --short --branch
git log --oneline --decorate -5
git remote -v
git fetch origin --prune
git ls-remote origin refs/heads/main
git rev-parse HEAD
git rev-parse origin/main
git ls-tree --name-only -r origin/main
Invoke-WebRequest -Uri "https://fle-commons-lab.vercel.app" -UseBasicParsing
```
