# Deploiement

FLE Commons Lab est deployable comme application statique Vite. La v0 ne necessite aucun backend, aucune base de donnees et aucune variable d'environnement obligatoire.

## Vercel

Configuration attendue:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

La navigation utilise des hash routes (`#/library`, `#/resources/...`), ce qui evite une configuration de rewrite specifique pour les pages detail.

## Build local

Commandes PowerShell utiles:

```powershell
npm install
npm run typecheck
npm run lint
npm run test
npm run validate:resources
npm run build
Get-ChildItem dist
git status
```

## Verifications avant de deployer

- `npm run typecheck` passe.
- `npm run lint` passe.
- `npm run test` passe.
- `npm run validate:resources` passe.
- `npm run build` passe.
- Aucun fichier `.env.local` n'est present dans Git.
- Aucune cle API ou variable secrete n'est ajoutee.
- La page `#/demo` explique clairement les limites de la demo publique.

## Variables d'environnement

Aucune variable n'est obligatoire pour la v0.

Ne pas ajouter de secret dans Vercel sans documentation et decision explicite. Les futures variables possibles sont documentees dans `docs/environment.md`, mais elles ne sont pas utilisees:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GEMINI_API_KEY`

Les futures cles serveur ne devront pas etre exposees dans le frontend. Les appels IA ou base de donnees devront passer par une couche serveur explicite, qui n'existe pas dans cette v0.

## Limites de la demo publique

- Donnees statiques uniquement.
- Aucune collecte de donnees utilisateur.
- Aucun compte utilisateur.
- Aucun upload.
- Aucun appel IA reel.
- Aucun workflow communautaire persistant.
