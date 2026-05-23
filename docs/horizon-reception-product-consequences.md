# Horizon de reception et consequences produit

## Objet du document

Ce document formalise les consequences pratiques de l'etude sur l'accueil probable de FLE Commons Lab par les enseignants de FLE.

Il ne remplace pas les documents d'architecture existants. Il sert de garde-fou produit : toute evolution de l'interface, du modele de contribution ou du systeme d'acces doit etre confrontee a la realite des usages enseignants.

## Hypothese centrale

FLE Commons Lab peut rester techniquement structure comme une forge, mais il doit etre percu par les enseignants comme une bibliotheque claire, modifiable et genereuse.

Le moteur interne peut utiliser Markdown, frontmatter YAML, Git, validation et versionnage. Cependant, ces elements doivent rester invisibles pour l'utilisateur final non technicien.

## Trois profils de reception

### 1. Enseignant-consommateur

Profil majoritaire.

Il cherche une ressource utilisable tres vite, souvent dans l'urgence d'une preparation de cours.

Besoins prioritaires :

- filtrer rapidement par niveau CECRL, competence, duree et type de ressource ;
- comprendre l'interet d'une ressource en quelques secondes ;
- copier le texte brut ;
- telecharger ou exporter en Word ;
- imprimer proprement ;
- adapter sans obstacle technique.

Risques de rejet :

- voir du YAML, du Markdown brut, des erreurs techniques ou du vocabulaire de developpeur ;
- ne pas pouvoir copier ou telecharger ;
- obtenir une mise en page difficile a imprimer ;
- devoir creer un compte avant de comprendre la valeur du site.

Consequence produit :

La page bibliotheque et la page detail doivent etre pensees d'abord pour ce profil. Le projet doit prouver sa valeur par la consultation, l'adaptation et l'impression, avant de demander une contribution.

### 2. Concepteur-contributeur pedagogique

Profil minoritaire mais decisif pour la croissance du commun.

Il peut produire des sequences, relire, adapter, proposer des variantes, mais il n'est pas necessairement a l'aise avec Git, YAML ou Markdown.

Besoins prioritaires :

- reconnaissance du travail pedagogique ;
- formulaire simple de proposition ;
- depot d'une ressource brute ;
- retour d'usage structure ;
- possibilite de corriger ou adapter sans passer par une pull request ;
- visibilite de son statut de contributeur.

Consequence produit :

Le modele de reciprocite contributive doit etre fonde sur des contributions accessibles : retour d'usage, correction, relecture, adaptation, depot brut, normalisation partielle. Une ressource complete et parfaitement formatee ne doit pas etre la seule contribution reconnue.

### 3. Enseignant technophile ou ingenieur pedagogique

Profil minoritaire, mais essentiel pour la maintenance et la qualite technique.

Il peut comprendre les formats ouverts, le versionnage, les schemas, les validateurs et le depot GitHub.

Besoins prioritaires :

- formats ouverts ;
- documentation technique ;
- possibilite de contribuer par GitHub ;
- schemas et validateurs ;
- tracabilite des decisions.

Consequence produit :

GitHub, Markdown, YAML et les validateurs doivent rester disponibles, mais ils ne doivent pas devenir le chemin principal de contribution pour l'ensemble des enseignants.

## Arbitrage structurant

Le projet doit assumer une dissociation nette :

- stockage et maintenance : formats ouverts, versionnes, structurables ;
- usage enseignant : interface simple, copier-coller, exports, impression ;
- contribution ordinaire : formulaires, depot brut, retours d'usage ;
- contribution technique : GitHub, Markdown, schemas, pull requests.

## Principes UX obligatoires

### 1. Decision en moins de cinq secondes

Une carte ressource doit afficher immediatement :

- titre ;
- niveau ;
- competence principale ;
- duree ;
- type de ressource ;
- statut de validation ;
- resume tres court.

Les metadonnees expertes doivent etre accessibles seulement a la demande.

### 2. Copier, exporter, imprimer

Les fonctions suivantes doivent devenir prioritaires avant toute sophistication communautaire :

- copier le support etudiant ;
- copier le guide professeur ;
- copier le corrige ;
- exporter en Markdown propre ;
- preparer l'export Word ;
- preparer l'export PDF ;
- ameliorer le rendu d'impression.

### 3. Vocabulaire non technique

Dans l'interface publique, eviter :

- frontmatter ;
- YAML ;
- Markdown ;
- pull request ;
- fork ;
- issue ;
- build ;
- repository.

Preferer :

- fiche ;
- modele ;
- formulaire ;
- proposer une ressource ;
- signaler une erreur ;
- proposer une adaptation ;
- copier ;
- telecharger ;
- imprimer ;
- corrige ;
- guide professeur.

## Consequences pour la reciprocite contributive

Le modele de reciprocite contributive doit eviter l'impression d'un paywall deguise.

Formulation recommandee :

> Decouvrir librement. Acceder davantage en contribuant. Faire grandir le commun par l'usage.

L'acces elargi ne doit pas etre conditionne seulement au depot d'une ressource complete. Il peut etre debloque par :

- un retour d'usage utile ;
- une correction ;
- une adaptation ;
- une relecture ;
- le depot d'une ressource brute ;
- un corrige ajoute ;
- une participation a la normalisation ;
- une ressource complete validee.

## Consequences pour le sas de normalisation

Le sas de normalisation devient une fonctionnalite centrale.

Flux vise :

```text
Document brut ou idee pedagogique
-> depot simple
-> analyse
-> normalisation
-> verification humaine
-> publication ou retour a retravailler
```

Entrees acceptees :

- texte copie-colle ;
- fichier Word ;
- PDF ;
- plan de seance ;
- exercice incomplet ;
- corrige separe ;
- retour d'usage ;
- adaptation d'une ressource existante.

Aucune publication automatique ne doit etre prevue sans verification linguistique, pedagogique, juridique et editoriale.

## Ordre de priorite recommande

### Court terme

1. Stabiliser les cartes ressources et les fiches detail.
2. Ameliorer la copie, l'impression et la lisibilite. Premiere couche appliquee: boutons de copie pour les blocs identifiables d'une fiche, copie de la fiche complete et styles d'impression dedies.
3. Produire des ressources exemplaires et vraiment reutilisables.
4. Documenter la contribution non technique. Premiere couche appliquee: prototype non persistant "Proposer une ressource brute" dans l'espace de contribution.

### Moyen terme

1. Ameliorer le prototype de proposition de ressource brute, sans persistance, a partir de retours enseignants.
2. Prototyper un formulaire de retour d'usage, sans persistance.
3. Decrire les statuts de normalisation et de validation.
4. Definir les conditions d'acces elargi, sans restriction reelle.

### Plus tard seulement

1. Authentification.
2. Supabase.
3. Suivi reel des acces.
4. Credits de contribution.
5. Workflow communautaire persistant.
6. Recherche plein texte ou vectorielle.

## Decision de conception

Toute nouvelle fonctionnalite doit repondre a cette question :

> Est-ce que cette fonctionnalite aide un enseignant de FLE presse a trouver, adapter, imprimer ou ameliorer une ressource sans competence technique ?

Si la reponse est non, la fonctionnalite doit etre repoussee ou reservee a l'espace technique.
