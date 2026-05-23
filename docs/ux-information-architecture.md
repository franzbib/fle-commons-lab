# Architecture de l'information UX

## Principe

FLE Commons Lab contient volontairement beaucoup d'informations: niveau, competence, duree, type, statut, licence, usage numerique, usage IA, versions, retours d'usage, propositions d'amelioration et audit simule.

La regle v0 est simple: ne jamais supprimer l'information utile, mais la hierarchiser.

## Lecture progressive

L'interface doit aider un enseignant a decider vite, puis a approfondir s'il le souhaite.

1. La carte sert a reperer une ressource rapidement.
2. La fiche detail sert a prendre en main la ressource.
3. Les sections repliables gardent les metadonnees expertes disponibles.
4. La documentation expose le modele complet.
5. Le Markdown source conserve la richesse complete pour les futures contributions.

## Carte ressource

La carte affiche par defaut:

- titre;
- resume court;
- niveau;
- competence principale;
- theme;
- duree;
- type;
- statut;
- gabarit;
- deux ou trois tags;
- indicateurs discrets pour numerique, IA, licence a verifier ou acces futur.

La carte ne doit pas afficher toutes les metadonnees, toutes les notes IA, les versions, les retours d'usage ou l'audit simule.

## Fiche detail

La fiche detail est maintenant organisee par onglets simples:

1. `Vue d'ensemble`: prise en main rapide, resume, niveau, duree, competence, type, statut, objectif principal, modalite, materiel, apercu court du deroule et metadonnees consultables;
2. `Contenu apprenant`: objectifs, prerequis et support etudiant projetables ou distribuables;
3. `Corriges & Notes prof`: deroule d'animation, guide professeur, corrige, variantes, retours d'usage, IA/numerique, licence, versions, propositions et audit simule.

Cette organisation allege la lecture sans retirer de champ. Elle evite surtout d'afficher les reponses ou notes professeur quand l'enseignant projette une consigne aux apprenants.

Voir aussi `docs/ux-resource-tabs.md`.

## Filtres

Les filtres visibles en permanence sont les plus utiles pour une decision rapide:

- recherche;
- niveau;
- competence principale;
- type;
- statut.

Les filtres avances restent disponibles a la demande:

- gabarit pedagogique;
- theme;
- usage numerique;
- usage IA;
- acces futur;
- licence;
- preparation enseignant;
- type de source.

## Garde-fous

- Une information masquee par defaut doit rester accessible.
- Aucun champ du modele `Resource` ne doit etre supprime pour alleger l'interface.
- Le contenu apprenant ne doit pas afficher le corrige, le guide professeur, les retours d'usage ou l'audit simule.
- Les ressources sans IA ou sans numerique doivent rester visibles.
- Les donnees conceptuelles d'acces ne doivent pas creer de paywall.
- Les sections repliables ne remplacent pas la documentation du modele.
