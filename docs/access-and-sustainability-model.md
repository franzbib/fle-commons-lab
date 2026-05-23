# Accès et soutenabilité

Ce document prépare une réflexion future. Aucun paiement, abonnement, compte utilisateur ou contrôle d'accès réel n'est implémenté dans la v0.

## Philosophie générale

FLE Commons Lab reste d'abord un projet open source orienté commun pédagogique. Le but principal est de structurer, documenter, relire et améliorer des ressources FLE, pas de construire un produit commercial.

Doctrine proposée:

A. Le code du projet reste open source.  
B. Les modèles de ressources, gabarits, schémas et documentations de base restent ouverts.  
C. Les ressources pédagogiques peuvent avoir des statuts d'accès différents selon leur origine, leur licence et leur mode de contribution.  
D. Les éventuels contenus payants ne doivent pas empêcher la réutilisation du socle ouvert.  
E. Aucun paiement n'est implémenté en v0.

## Niveaux d'accès futurs possibles

- `public`: visible publiquement.
- `unlisted`: non listé mais accessible par lien.
- `private`: réservé à un espace privé ou brouillon personnel.
- `members_only`: réservé à des membres authentifiés.
- `institution_only`: réservé à une institution ou équipe.
- `premium`: réservé à une offre payante éventuelle.
- `draft_only`: visible seulement pendant la préparation éditoriale.

Ces niveaux sont conceptuels tant qu'il n'existe ni backend ni authentification.

## Modèles de soutenabilité possibles

- `free`: ressource librement accessible.
- `donation_supported`: accès libre soutenu par dons.
- `members_only`: accès réservé à une communauté membre.
- `paid`: accès payant éventuel.
- `institution_licensed`: accès lié à un accord institutionnel.
- `undecided`: décision à prendre plus tard.

Ces statuts ne doivent pas être confondus avec les licences juridiques.

## Code ouvert et contenus restreints

Le code peut rester open source même si certaines ressources futures ont des conditions d'accès différentes.

Exemples:

- le modèle `Resource` reste ouvert;
- les gabarits pédagogiques restent ouverts;
- la documentation de contribution reste ouverte;
- une ressource issue d'une institution pourrait être réservée à cette institution;
- une ressource originale premium éventuelle pourrait exister sans fermer le socle.

## Ce qui devrait rester libre par principe

- Code applicatif.
- Documentation de base.
- Modèles de données.
- Gabarits pédagogiques.
- Exemples de démonstration originaux.
- Règles de contribution.
- Principes de validation et de sobriété.

## Ce qui pourrait éventuellement être réservé

- Parcours institutionnels spécifiques.
- Ressources produites dans un cadre contractuel.
- Formations ou ateliers accompagnés.
- Collections privées d'équipe.
- Ressources premium entièrement originales.

## Risques éthiques

- Créer une barrière d'accès pour des enseignants ou structures peu financées.
- Confondre contribution bénévole et contenu commercial.
- Fermer des ressources qui devraient rester des communs.
- Donner plus de poids pédagogique à un membre payant qu'à un contributeur compétent.
- Mélanger licences ouvertes et restrictions commerciales.

## Garde-fous nécessaires

- Séparer rôle communautaire, rôle éditorial et statut de soutien.
- Ne jamais considérer un membre payant comme validateur pédagogique par défaut.
- Documenter clairement l'origine et la licence de chaque ressource.
- Garder un socle ouvert robuste.
- Discuter toute monétisation avant implémentation.
- Prévoir une validation humaine et communautaire.

## Implications pour les licences

`accessLevel` décrit qui peut voir ou utiliser une ressource dans la plateforme.

`license` décrit les droits juridiques de réutilisation.

Une ressource peut être publique mais sous licence restrictive. Une ressource peut être réservée à des membres mais sous licence ouverte si le contexte l'exige. Ces cas doivent être documentés explicitement.

## Implications pour la communauté

La soutenabilité ne doit pas transformer FLE Commons Lab en plateforme fermée. Les futurs choix économiques devront être lisibles, contestables, documentés et compatibles avec l'idée de commun pédagogique.

## Limites v0

- Aucun paiement.
- Aucune authentification.
- Aucun rôle réel.
- Aucune restriction d'accès réelle.
- Aucune clé Stripe ou autre fournisseur.
- Aucun backend.
