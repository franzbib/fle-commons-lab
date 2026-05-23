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

La fiche detail est organisee en trois temps:

1. prise en main rapide: titre, resume, niveau, duree, competence, type, statut, objectif principal, modalite et materiel;
2. contenu pedagogique principal: objectifs, prerequis, deroule, support etudiant, guide professeur, corrige, variantes;
3. sections complementaires repliables: metadonnees completes, IA et numerique, licence et acces, notes complementaires, versions, retours d'usage, propositions et audit simule.

Cette organisation allege la lecture sans retirer de champ.

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
- Les ressources sans IA ou sans numerique doivent rester visibles.
- Les donnees conceptuelles d'acces ne doivent pas creer de paywall.
- Les sections repliables ne remplacent pas la documentation du modele.
