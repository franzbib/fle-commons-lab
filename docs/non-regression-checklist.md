# Checklist De Non-Régression

À vérifier avant chaque commit.

## Application

- `npm install` fonctionne sur un clone propre.
- `npm run dev` démarre l’application.
- `npm run build` passe.
- `npm run lint` passe si le lint est configuré.
- `npm run test` passe si les tests sont configurés.
- Les pages Accueil, Bibliothèque, Détail, Vision, Technologies et IA, Documentation s’affichent.

## Bibliothèque

- Les 18 ressources de démonstration sont visibles sans filtre.
- Le compteur de ressources est cohérent.
- La recherche texte fonctionne sur titre, résumé ou tag.
- Les filtres niveau, compétence principale, type, gabarit, thème et statut fonctionnent.
- Les filtres usage numérique et usage IA fonctionnent.
- Les ressources sans IA restent visibles quand le filtre IA est sur `Tous` ou `Non`.
- Le bouton de réinitialisation remet les filtres à zéro.
- Chaque carte ouvre une fiche détail.

## Détail Ressource

- Les métadonnées principales sont visibles.
- Les sections pédagogiques s’affichent.
- Les versions simulées sont visibles.
- Les retours d’usage simulés ou le placeholder sont visibles.
- La mention de non-persistance est claire.

## Sécurité Et Sobriété

- Aucune variable secrète n’est commitée.
- Aucun `.env.local` n’est présent dans Git.
- `.env`, `.env.local` et `.env.*.local` restent ignorés.
- Aucune dépendance backend, IA, Supabase ou auth n’a été ajoutée sans décision explicite.
- Aucun appel IA réel n’a été ajouté sans décision explicite.
- Aucune clé API n’apparaît dans le code ou la documentation.
- Le projet ne devient pas dépendant d’un fournisseur IA.
- La v0 fonctionne sans variable d’environnement.

## Documentation

- `PROJECT_STATE_FOR_LLMS.md` est à jour.
- Les limites volontaires de la v0 sont encore explicites.
- Les nouvelles décisions sont documentées.
- Les données de démonstration restent originales et pédagogiquement plausibles.
