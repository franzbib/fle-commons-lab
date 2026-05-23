# Roles contributeurs futurs

Ce document prepare une gouvernance future. Aucun role reel, aucune permission et aucune authentification ne sont implementes dans la v0.

## Distinguer trois statuts

Un statut de personne decrit un niveau de responsabilite dans la communaute.

Un statut de ressource decrit la maturite pedagogique d'un support.

Un statut de contribution decrit l'etape d'une proposition.

Ces trois dimensions ne doivent pas etre confondues.

## Statuts de personnes

### nouveau_contributeur

Role: proposer des ressources, signaler des erreurs, ajouter des retours d'usage.

Droits futurs possibles: soumettre une contribution, commenter une ressource si un module existe plus tard.

Limites: relecture requise avant integration.

### contributeur_reconnu

Role: proposer des ameliorations regulieres et documentees.

Droits futurs possibles: proposer des variantes plus structurees, participer a des relectures simples.

Limites: pas de validation finale seul.

### mainteneur_pedagogique

Role: relire niveau, objectifs, consignes, corriges, progression et adequation culturelle.

Droits futurs possibles: recommander une validation pedagogique.

Limites: ne decide pas seul des choix techniques lourds.

### mainteneur_technique

Role: maintenir code, tests, documentation technique, deploiement et securite.

Droits futurs possibles: merger des changements techniques apres verification.

Limites: ne remplace pas la validation pedagogique.

### administrateur_projet

Role: arbitrer les orientations, gouvernance, moderation et perimetre.

Droits futurs possibles: decision finale sur les choix structurants.

Limites: role a definir avec prudence si la communaute grandit.

## Statuts de contribution

- `brouillon`
- `soumise`
- `en_relecture`
- `modifications_demandees`
- `acceptee`
- `integree`
- `refusee`
- `archivee`

Une contribution acceptee n'est pas forcement integree immediatement. Une contribution refusee peut rester utile comme trace de discussion si elle est formulee clairement.

## Statuts de ressource

- `brouillon`
- `utilisable`
- `testee`
- `validee`
- `a_reviser`
- `archivee`

Le statut d'une ressource doit refleter sa maturite pedagogique, pas la reputation de son auteur.

## Niveau de validation

Une contribution peut demander:

- auto-verification formelle;
- relecture pedagogique;
- relecture technique;
- validation mainteneur.

La v0 ne code aucun de ces droits. Elle documente seulement le vocabulaire.
