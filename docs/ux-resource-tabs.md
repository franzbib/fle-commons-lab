# Onglets de fiche ressource

## Pourquoi separer les vues

Une fiche FLE contient souvent deux publics dans le meme objet:

- les apprenants, qui doivent voir les consignes, supports, exercices et taches;
- l'enseignant, qui doit garder sous la main le deroule, les corriges, les criteres, les variantes et les retours d'usage.

Quand une fiche est projetee en classe, l'interface ne doit pas risquer d'afficher les reponses ou les notes d'animation. La separation par onglets sert donc a rendre la ressource plus utilisable en situation reelle, sans creer de restriction d'acces technique.

## Organisation retenue

### Vue d'ensemble

Cette vue aide a decider rapidement si la ressource convient:

- resume;
- niveau;
- duree;
- competence principale;
- type et gabarit;
- statut;
- objectif principal;
- modalite;
- materiel;
- apercu court du deroule;
- metadonnees completes consultables a la demande.

Les actions de copie restent visibles dans cette vue, car elle correspond a la prise en main par l'enseignant.

### Contenu apprenant

Cette vue est pensee pour la projection ou la distribution:

- objectifs;
- prerequis;
- support etudiant;
- consignes;
- exercices;
- taches ou espaces de reponse quand ils existent dans les donnees.

Regle stricte: ne jamais afficher dans cet onglet les corriges, le guide professeur, les retours d'usage, l'audit simule, les notes internes ou les criteres detailles.

Actions disponibles:

- copier le contenu apprenant;
- imprimer le contenu apprenant avec l'impression navigateur.

### Corriges & Notes prof

Cette vue rassemble ce qui est reserve a l'enseignant:

- deroule d'animation;
- guide professeur;
- corrige;
- criteres de reussite;
- variantes;
- retours d'usage;
- propositions d'amelioration;
- notes IA et numeriques;
- licence, acces, versions et audit simule.

Ces informations restent accessibles, mais elles ne polluent plus l'espace apprenant.

Actions disponibles:

- copier les notes professeur;
- imprimer les notes professeur avec l'impression navigateur.

## Articulation avec la divulgation progressive

Les onglets ne remplacent pas les sections repliables. Ils ajoutent un premier niveau de separation par usage:

1. choisir rapidement;
2. projeter ou distribuer;
3. animer, corriger, adapter.

Les details secondaires restent repliables dans les vues pertinentes. La regle centrale reste inchangee: ne jamais supprimer l'information, seulement la hierarchiser et la rendre consultable au bon moment.

## Limites v0

- Aucun compte utilisateur.
- Aucune restriction reelle d'acces.
- Aucun mode professeur securise.
- Aucun stockage de preference d'onglet.
- Aucun backend.
- Aucun export PDF ou Word genere par l'application.

La separation est une aide UI locale, pas un systeme de droits.
