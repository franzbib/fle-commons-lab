# Recherche simple et affinage progressif dans Laforge

## Statut

Document UX pour Laforge v0.3.

## Problème

Laforge doit prendre en compte la diversité réelle des publics FLE : niveaux, objectifs, contextes, degrés d’autonomie, rapport à l’écrit, finalités universitaires, professionnelles, d’intégration ou de certification.

Mais cette richesse ne doit pas décourager les enseignants par des formulaires longs, des filtres trop techniques ou des critères qui ressemblent à un questionnaire sociologique.

L’utilisateur de base doit pouvoir entrer rapidement dans Laforge, trouver une ressource utile, puis affiner seulement s’il en ressent le besoin.

## Principe directeur

**Complexité pédagogique en profondeur, simplicité contributive en surface.**

Laforge peut porter un modèle riche, mais l’interface ne doit pas obliger chaque enseignant à renseigner toute cette richesse dès le premier geste.

## Recherche par défaut

La recherche par défaut doit rester simple et immédiatement compréhensible.

Critères prioritaires :

- niveau ;
- point de langue ;
- compétence ;
- durée ;
- type de ressource ;
- présence d’un corrigé ;
- format imprimable ou projetable.

Ces critères correspondent aux questions que se pose souvent un enseignant pressé :

- Est-ce adapté au niveau de mon groupe ?
- Quel point de langue ou quelle compétence est travaillé ?
- Combien de temps cela prend-il ?
- Est-ce une fiche, une séquence, un exercice, une activité orale ?
- Puis-je l’utiliser tout de suite ?
- Le corrigé existe-t-il ?
- Puis-je imprimer ou projeter le support apprenant ?

## Affinage volontaire

Une zone ou un bouton `Affiner selon mon public` peut permettre d’ajouter des critères plus fins uniquement si l’utilisateur le souhaite.

Exemples de critères avancés :

- objectif universitaire ;
- objectif professionnel ;
- intégration / vie quotidienne ;
- certification ;
- groupe peu autonome ;
- groupe très autonome ;
- besoin d’une version plus guidée ;
- besoin d’une version plus orale ;
- besoin d’une version plus écrite ;
- besoin d’une version plus courte ;
- besoin d’une tâche finale plus concrète.

Cet affinage doit rester optionnel. Il ne doit jamais être nécessaire pour accéder aux ressources de base.

## Variations comme enrichissement de sortie

Les variations pédagogiques ne doivent pas compliquer l’accès initial à une ressource.

Elles doivent intervenir après la première recherche, comme enrichissement possible :

- choisir une variante déjà prévue ;
- demander une version plus guidée ;
- adapter vers un usage oral ;
- transformer une fiche en activité plus courte ;
- préparer une version universitaire ;
- rendre la tâche plus concrète pour un public d’intégration ;
- signaler qu’une adaptation reste à créer.

L’objectif est de ne pas demander à l’utilisateur de tout anticiper avant même d’avoir vu la ressource.

La logique UX doit donc être :

1. trouver rapidement une ressource ;
2. comprendre son noyau pédagogique ;
3. voir les variantes disponibles ;
4. adapter si nécessaire.

## Exemples de parcours

### Professeur pressé cherchant une fiche B1 imprimable

L’enseignant cherche une activité pour le lendemain.

Recherche simple :

- niveau : B1 ;
- point de langue : cause / conséquence ;
- durée : 30 à 60 minutes ;
- format : imprimable ;
- corrigé : présent.

Il ouvre la fiche, imprime le support étudiant, puis consulte le corrigé et les notes prof.

Il n’a pas besoin de renseigner le type de public, l’objectif institutionnel ou le degré d’autonomie.

### Enseignant adaptant une ressource à un public adulte en intégration

L’enseignant trouve une fiche B1 sur les démarches administratives ou le logement.

Après lecture, il utilise `Affiner selon mon public` ou consulte les variantes :

- intégration / vie quotidienne ;
- version plus guidée ;
- consignes plus courtes ;
- tâche finale plus concrète ;
- références institutionnelles à expliciter.

La ressource reste la même, mais une adaptation devient visible.

### Enseignant FOU cherchant une version orientée écrit universitaire

L’enseignant cherche une fiche B2 sur la reformulation, la concession ou la nominalisation.

Recherche simple :

- niveau : B2 ;
- compétence : expression écrite ;
- point de langue : nominalisation ;
- type : fiche de grammaire inductive.

Puis affinage :

- objectif universitaire ;
- version plus écrite ;
- tâche finale : paragraphe argumenté ou reformulation de notes ;
- attention aux codes académiques.

La variation universitaire enrichit la ressource sans bloquer l’accès initial.

## Ce qu’il ne faut pas faire

- Ne pas rendre les critères fins obligatoires.
- Ne pas demander d’informations sensibles ou intrusives.
- Ne pas transformer la recherche en questionnaire sociologique.
- Ne pas masquer les ressources si l’utilisateur ne remplit pas les critères avancés.
- Ne pas confondre public visé et catégorisation des apprenants.
- Ne pas présenter une variante comme meilleure en soi : elle est adaptée à une situation.

## Formule finale

“Les variations ne doivent pas compliquer l’entrée dans Laforge ; elles doivent enrichir la sortie.”
