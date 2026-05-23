# Checklist De Non-Régression

À vérifier avant chaque commit.

## Application

- `npm install` fonctionne sur un clone propre.
- `npm run dev` démarre l’application.
- `npm run build` passe.
- `npm run lint` passe si le lint est configuré.
- `npm run test` passe si les tests sont configurés.
- Les pages Accueil, Démo, Bibliothèque, Collections, Détail collection, Détail ressource, Communauté, Espace de contribution, Gabarits, Vision, Technologies et IA, Documentation s’affichent.

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
- Les ressources démo représentatives contiennent un support étudiant, un guide professeur et un corrigé ou des critères réellement copiables.
- Les versions simulées sont visibles.
- Les retours d’usage simulés ou le placeholder sont visibles.
- Les propositions d’amélioration simulées ou le placeholder sont visibles.
- La mention de non-persistance est claire.
- Les boutons de copie restent locaux et n'envoient aucune donnée.
- Le rendu d'impression masque la navigation et garde les blocs pédagogiques lisibles.

## Architecture De L'information UX

- Les cartes restent centrées sur la décision rapide: titre, résumé court, niveau, compétence, durée, type, statut et quelques tags.
- Les filtres essentiels restent visibles sans ouvrir les filtres avancés.
- Les filtres avancés restent disponibles et fonctionnels.
- Les fiches détail gardent une prise en main rapide en haut de page.
- Les métadonnées complètes, IA/numérique, licence/accès, versions, retours, propositions et audit restent accessibles.
- Aucune information n'est supprimée pour alléger l'interface; elle est seulement hiérarchisée ou repliée.

## Collections Et Communauté

- Les collections locales s’affichent.
- Chaque collection ouvre sa page détail.
- Les ressources associées à une collection existent dans les données locales.
- La page Communauté rappelle qu’il n’y a pas de workflow persistant.
- Le prototype de proposition de ressource brute ne stocke rien, ne transmet rien et ne crée aucun upload.
- Les templates GitHub ne demandent pas de clé, de donnée personnelle ou de contenu protégé.

## Sécurité Et Sobriété

- Aucune variable secrète n’est commitée.
- Aucun `.env.local` n’est présent dans Git.
- `.env`, `.env.local` et `.env.*.local` restent ignorés.
- Aucune dépendance backend, IA, Supabase ou auth n’a été ajoutée sans décision explicite.
- Aucun role reel, permission ou systeme d'authentification n'a ete ajoute.
- Aucun paiement réel n'a été ajouté sans décision explicite.
- Aucune clé de paiement n'apparaît dans le dépôt.
- Aucune ressource publique ne doit être masquée par erreur.
- Aucune documentation ne présente un accès payant comme déjà actif.
- Les champs d'accès restent facultatifs tant que l'authentification n'existe pas.
- Aucun appel IA réel n’a été ajouté sans décision explicite.
- Aucune clé API n’apparaît dans le code ou la documentation.
- Le projet ne devient pas dépendant d’un fournisseur IA.
- La v0 fonctionne sans variable d’environnement.
- Aucun import automatique Markdown, `.docx` ou fichier utilisateur n’est ajouté sans décision explicite.
- Aucun import Google Drive n'est ajouté sans décision explicite.
- Aucun contenu exact d'un corpus externe n'est copié dans les exemples publics.
- `npm run validate:resources` passe sur les exemples Markdown.

## Format Markdown Et Conversion

- Les exemples Markdown restent originaux ou clairement libres.
- Les licences et sources sont renseignées ou marquées `a_verifier`.
- Un exemple Markdown n’est pas présenté comme une ressource validée.
- Les documents authentiques ne sont pas copiés sans vérification des droits.
- Toute conversion garde une étape de relecture enseignante.
- Le validateur Markdown ne remplace ni l’expertise pédagogique ni la vérification juridique.
- Le validateur ne crée pas de ressource dans l’application.

## Documentation

- `PROJECT_STATE_FOR_LLMS.md` est à jour.
- `AGENTS.md` reste coherent avec les contraintes du projet.
- `docs/deployment.md` reste cohérent avec la configuration Vite/Vercel.
- Les limites volontaires de la v0 sont encore explicites.
- Les nouvelles décisions sont documentées.
- Les données de démonstration restent originales et pédagogiquement plausibles.

## Documentation et traçabilité

- `PROJECT_STATE_FOR_LLMS.md` est mis à jour si nécessaire.
- `docs/project-journal.md` est mis à jour si l'intervention est significative.
- `docs/decision-log.md` est mis à jour si une décision structurante est prise.
- `README.md` est mis à jour si commandes, structure ou comportement visible changent.
- Aucun document ne présente comme existante une fonctionnalité seulement future.
- Les textes visibles distinguent clairement fonctionnalité active, donnée simulée, concept futur et élément de roadmap.
- Les pages publiques ne laissent pas croire qu'une IA, un paiement, un compte ou un backend est actif.

## Identité visuelle

- Les assets de marque utilisés existent dans `assets/branding/` ou `public/`.
- Les badges restent lisibles et ne remplacent pas l'information textuelle.
- L'interface ne devient pas une landing page commerciale.
- Les tokens CSS restent centralisés dans `src/styles/global.css`.
- `docs/ui-implementation-notes.md` est mis à jour si les composants visuels changent.

## UX Onglets Ressource

- La fiche ressource propose les onglets `Vue d'ensemble`, `Contenu apprenant` et `Corriges & Notes prof`.
- L'onglet `Contenu apprenant` ne montre pas le corrige, le guide professeur, les retours d'usage, l'audit simule ou les notes internes.
- L'onglet `Corriges & Notes prof` garde accessibles le guide professeur, le corrige, les variantes, les retours d'usage et les details complementaires.
- Aucune information n'est supprimee pour isoler le contenu apprenant; elle est deplacee vers la vue adaptee.

## Copie Et Impression Des Vues Ressource

- Les boutons de copie ciblée doivent rester locaux et utiliser uniquement le presse-papiers navigateur.
- L'impression doit rester une impression navigateur de la vue active; aucun PDF ou Word ne doit être généré par l'application sans décision explicite.
- La copie ou l'impression du contenu apprenant ne doit pas inclure le corrigé, le guide professeur, les retours d'usage, l'audit simulé ou les notes IA/numériques détaillées.
- La copie des notes professeur peut inclure guide, corrigé, variantes, notes d'usage, notes IA/numériques utiles et retours d'usage.
- Les boutons d'action doivent être masqués à l'impression.
