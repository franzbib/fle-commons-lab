# Git Workflow

Ce document décrit les commandes PowerShell utiles pour rattacher proprement le projet local au dépôt GitHub officiel:

```text
https://github.com/franzbib/fle-commons-lab
```

## Vérifier Le Bon Dossier

```powershell
Get-Location
Get-ChildItem
```

Le dossier doit contenir au minimum:

- `package.json`
- `src/`
- `docs/`
- `.gitignore`
- `PROJECT_STATE_FOR_LLMS.md`

## Vérifier L’État Git

```powershell
git status
```

Si Git est initialisé, la commande affiche l’état des fichiers.

Si Git n’est pas initialisé, elle affiche:

```text
fatal: not a git repository
```

## En Cas D’Erreur `fatal: not a git repository`

Initialiser Git dans le dossier courant:

```powershell
git init
git branch -M main
git remote add origin https://github.com/franzbib/fle-commons-lab.git
git remote -v
```

Si le remote existe déjà mais semble incomplet:

```powershell
git remote set-url origin https://github.com/franzbib/fle-commons-lab.git
git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git remote -v
```

## Premier Commit

Avant le commit, vérifier les fichiers sensibles:

```powershell
Get-ChildItem -Force -File .env*
git status
```

Ne jamais committer `.env.local`.

Préparer le commit:

```powershell
git add .
git status
git commit -m "chore: initialize FLE Commons Lab v0 foundation"
```

## Pousser Vers GitHub

```powershell
git push -u origin main
```

Si GitHub demande une authentification, utiliser la méthode configurée localement: navigateur, Git Credential Manager ou token personnel. Ne jamais écrire ni committer le token dans le dépôt.

## Hygiène `.env`

Le fichier `.gitignore` doit protéger:

```text
.env
.env.local
.env.*.local
node_modules
dist
.vite
```

Commandes utiles:

```powershell
Select-String -Path .gitignore -Pattern "^\.env$|^\.env\.local$|^\.env\.\*\.local$"
git status --short
```

## Vérifications Avant Push

```powershell
npm run typecheck
npm run lint
npm run test
npm run build
git status
git remote -v
```
