# Vue atelier des ressources

## Statut

Documentation UX pour la v0 statique de Laforge.

## Objectif

La vue atelier separe l'experience publique de consultation des informations utiles au suivi editorial.

La fiche publique doit aider un enseignant a comprendre, copier, imprimer et reutiliser une ressource. Elle ne doit pas exposer en priorite les traces de generation, les details de normalisation, les audits ou l'historique technique.

La vue atelier permet de garder ces informations accessibles sans creer de compte, de role, d'authentification ou de backend.

## Ce qui reste public

La bibliotheque et les fiches publiques privilegient:

- titre;
- resume;
- niveau;
- duree;
- competence principale;
- theme;
- type de ressource;
- statut lisible;
- support apprenant;
- guide professeur;
- corrige;
- actions de copie et d'impression utiles en classe.

Pour les ressources Markdown en cours de normalisation, le statut public peut afficher `En normalisation` plutot que le statut technique `brouillon`.

## Ce qui passe en vue atelier

La route `#/atelier` liste les ressources inspectables.

La route `#/atelier/:id` affiche:

- metadonnees completes;
- statut technique;
- statut de normalisation;
- chemin source Markdown quand il existe;
- sections extraites;
- notes de licence;
- notes de contexte;
- donnees numeriques et IA;
- versions;
- retours d'usage;
- propositions;
- audit simule.

## Garde-fous

- La vue atelier n'est pas une administration securisee.
- Aucun role reel n'est implemente.
- Aucune authentification n'est ajoutee.
- Aucun backend n'est ajoute.
- Aucune information n'est supprimee: elle est seulement deplacee ou rendue moins centrale.
- Les ressources brutes ou en normalisation ne doivent pas etre presentees comme des fiches etalons.

## Cas test

La ressource `grammaire-b1-plus-pronoms-cod-coi-enquete` doit rester visible dans la bibliotheque publique et devenir inspectable dans `#/atelier/grammaire-b1-plus-pronoms-cod-coi-enquete`.
