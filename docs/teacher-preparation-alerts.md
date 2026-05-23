# Alertes de preparation enseignant

## Pourquoi ces alertes existent

Le test "prof presse" montre qu'une ressource peut etre pedagogiquement claire mais demander une petite preparation pratique:

- imprimer ou decouper des cartes;
- verifier un son ou une video;
- preparer un affichage;
- organiser des groupes;
- anticiper un point de vigilance;
- controler l'impression avant la seance.

Ces alertes rendent ces gestes visibles avant l'entree en classe.

## Types d'alertes

La v0 prevoit des types simples:

- `materiel`;
- `impression_decoupage`;
- `media`;
- `organisation`;
- `temps_preparation`;
- `vigilance`;
- `impression`.

Chaque alerte contient:

- un type;
- un libelle court;
- un detail directement actionnable.

## Ou elles s'affichent

- Dans la `Vue d'ensemble`: resume discret, limite a quelques libelles.
- Dans `Corriges & Notes prof`: bloc complet `Avant la seance`, place pres du haut.

Elles ne doivent jamais etre affichees dans `Contenu apprenant`.

## Exemples

- Enquete B1: cartes roles a preparer, groupes a organiser, indices a reveler progressivement.
- Prise de notes video B2: video courte a choisir, son et projection a tester, droits a verifier.
- Rituel A0: images ou objets a preparer, consignes tres courtes, affichage clair.
- Cause/consequence B1: fiche a imprimer ou projeter.

## Limites actuelles

- Les alertes sont des donnees locales statiques.
- Elles ne declenchent aucune notification.
- Elles ne creent aucun workflow de preparation.
- Elles ne sont pas des permissions et ne cachent aucune information.
- Elles ne remplacent pas la relecture enseignante.

## Evolutions possibles

Plus tard, ces alertes pourraient alimenter un export professeur ou une checklist de preparation. Cela devra rester separe du contenu apprenant et ne pas introduire de backend sans decision explicite.
