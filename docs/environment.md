# Variables D’Environnement

La v0 ne nécessite aucune variable d’environnement obligatoire.

L’application doit fonctionner avec:

```bash
npm install
npm run dev
```

sans fichier `.env`.

## Fichiers À Ne Pas Committer

Le `.gitignore` doit contenir:

```text
.env
.env.local
.env.*.local
node_modules
dist
.vite
```

Ne jamais committer `.env.local`.

## `.env.example`

Ne créer `.env.example` que lorsqu’une variable devient utile.

S’il est créé plus tard, il doit contenir uniquement des valeurs fictives ou commentées.

Exemple possible plus tard:

```text
# No required environment variables for v0.
# Future:
# VITE_SUPABASE_URL=
# VITE_SUPABASE_ANON_KEY=
```

## Variables Futures Possibles

Ces variables sont documentées pour préparer les étapes futures. Elles ne sont pas utilisées en v0.

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GEMINI_API_KEY`

Les clés serveur ne doivent jamais être exposées côté frontend. Les clés IA comme `OPENAI_API_KEY`, `ANTHROPIC_API_KEY` ou `GEMINI_API_KEY` ne doivent pas être utilisées directement dans une application React côté navigateur.

Les appels IA futurs devront passer par un backend, une edge function ou un service serveur contrôlé, jamais directement depuis le navigateur avec une clé privée.

## Commandes PowerShell Futures

Ces commandes sont données pour un usage futur local. Ne pas les exécuter en v0 sans besoin explicite.

```powershell
New-Item -ItemType File -Path .env.local
Add-Content .env.local "VITE_SUPABASE_URL=https://exemple.supabase.co"
Get-Content .env.local
git status
```

Avant toute intégration Supabase ou IA, vérifier que les secrets ne sont pas commités.

## Règle Pour Agents IA

Si une demande mentionne Supabase, OpenAI, Claude ou une variable d’environnement, l’interprétation par défaut en v0 est: documenter et anticiper, sans installer ni brancher.
