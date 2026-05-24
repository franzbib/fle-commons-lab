# Parcours bêta — D’une source-mère Word à une fiche Laforge

## Statut

Document UX et produit pour Laforge v0.3.

Ce document ne décrit pas une spécification technique d’import automatique Word ou PDF. Il décrit un scénario de normalisation progressive : partir d’un support enseignant réel, contextualisé et imparfait, puis aider à en extraire une première ressource mutualisable.

## Problème

Les enseignants travaillent souvent avec des supports longs, composites et fortement contextualisés : documents Word, PDF exportés, copier-coller de séances, exercices successifs, corrigés partiels, notes de cours, consignes testées en classe.

Ces supports peuvent être imparfaits au regard d’un modèle de publication : trop longs, trop locaux, sans métadonnées, sans corrigé complet, ou difficiles à partager tels quels.

Mais ils sont souvent pédagogiquement riches. Ils portent une vraie intention de cours, une progression, des exemples, des exercices, une mémoire de classe.

Le problème de Laforge n’est donc pas seulement de stocker ces documents. Il est d’aider l’enseignant à en extraire des ressources mutualisables, sans lui demander d’emblée de comprendre Markdown, YAML, GitHub ou un modèle de données complet.

## Principe directeur

**Valoriser d’abord le travail enseignant, normaliser ensuite.**

Un document-source riche n’est pas une fiche à publier telle quelle ; c’est une matière première à cartographier, découper, normaliser et enrichir.

Le premier geste de Laforge doit donc être accueillant : reconnaître la valeur du support déposé. Le deuxième geste doit être structurant : proposer un chemin simple vers une première fiche courte, solide et partageable avec prudence.

## Parcours utilisateur simple

Le parcours bêta doit rester court au départ.

### 1. L’enseignant dépose ou colle son support

L’enseignant fournit un document Word, un PDF, un copier-coller ou un texte brut.

Dans le cas étudié, il s’agit d’un support Word de grammaire B1+/B2 sur le thème de l’enquête, contextualisé à l’ISPA à Amiens, autour d’un parapluie disparu.

Le document contient notamment :

- un récit d’observation ;
- une activité de repérage des pronoms ;
- des exercices sur les pronoms COD ;
- des exercices sur les pronoms COI ;
- un exercice de discrimination COD/COI ;
- des exercices sur `y` et `en` ;
- des exercices sur les pronoms toniques après préposition ;
- des points sur l’infinitif, l’impératif, les doubles compléments et le pronom neutre `le`.

### 2. Laforge remercie et valorise la contribution

Laforge ne doit pas commencer par signaler tous les défauts du document.

Il doit d’abord reconnaître qu’un support réel représente du temps, une intention pédagogique et une expérience de classe.

### 3. Laforge propose un résumé simple du document

Laforge formule une lecture courte et compréhensible du support :

- type probable ;
- niveau probable ;
- public probable ;
- thème ;
- points de langue principaux ;
- statut de normalisation.

### 4. Laforge détecte plusieurs ressources possibles

Le document n’est pas traité comme une fiche unique.

Il est considéré comme une source-mère pouvant produire une mini-collection de ressources plus courtes.

### 5. Laforge propose de commencer par une première fiche courte et solide

Plutôt que de normaliser tout le document d’un coup, Laforge recommande une première extraction raisonnable.

L’utilisateur ne doit répondre qu’à très peu de questions au départ :

- ce résumé est-il globalement juste ?
- voulez-vous commencer par cette première fiche ?
- faut-il anonymiser ou généraliser le contexte ?

## Écran de valorisation

Exemple de message affiché à l’enseignant :

> Votre document contient une matière pédagogique riche. Nous avons repéré plusieurs blocs pouvant devenir des ressources réutilisables.
>
> Nous vous proposons de commencer par une première fiche courte, puis de conserver le document comme source-mère pour de futures ressources.

Le ton doit rester professionnel, sobre et non infantilisant.

L’objectif est de dire : votre travail compte, nous allons l’aider à devenir plus partageable.

## Résumé automatique proposé

Exemple de résumé possible pour le support décrit :

- **Type probable** : support de grammaire contextualisé.
- **Niveau probable** : B1+ / B2.
- **Public probable** : jeunes adultes FLE, centre de langue ou parcours propédeutique.
- **Thème** : enquête.
- **Point principal** : pronoms personnels compléments.
- **Statut** : ressource brute riche, à normaliser.
- **Potentiel de mutualisation** : élevé.

Ce résumé ne doit pas être présenté comme une vérité définitive. Il sert de point de départ pour la normalisation.

## Détection des ressources possibles

| Ressource détectée | Niveau probable | État | Action proposée |
| --- | --- | --- | --- |
| Les pronoms COD et COI dans une enquête | B1+ | bien alimenté, périmètre raisonnable | commencer par cette fiche |
| Y / EN : choses, lieux, idées | B1+ / B2 | présent, à isoler | préparer une deuxième fiche |
| Pronoms toniques après préposition | B1 / B1+ | exploitable, probablement court | transformer en fiche ciblée |
| Place du pronom devant l’infinitif | B1+ | point ponctuel | intégrer à une fiche ou variante |
| Pronoms à l’impératif | B1+ / B2 | point spécifique | traiter plus tard |
| Double pronominalisation | B2 | plus complexe | différer ou réserver à une fiche avancée |
| Pronom neutre LE | B2 | abstrait, nécessite guidage | différer et clarifier les exemples |

Cette table aide à ne pas perdre la richesse du document-source tout en évitant de tout publier en bloc.

## Première recommandation Laforge

Laforge doit recommander de commencer par :

**Les pronoms COD et COI dans une enquête**

Justification :

- le périmètre est raisonnable ;
- le document-source contient déjà beaucoup de matière exploitable ;
- le point est très utile pour un public B1+ ;
- la distinction COD/COI se prête bien à une démarche d’observation ;
- la ressource est plus facile à mutualiser qu’un grand dossier sur tous les pronoms ;
- c’est un bon premier test du modèle Laforge : support étudiant, guide professeur, corrigé, variantes et statut `en_normalisation`.

## Métadonnées proposées pour cette première fiche

```yaml
title: "Les pronoms COD et COI dans une enquête"
summary: "Fiche de grammaire guidée pour distinguer et employer les pronoms COD et COI dans un scénario d’enquête situé dans une école de langue."
level: "B1+"
duration_minutes: 90
skills:
  - grammaire
  - compréhension écrite
  - interaction orale
theme: "enquête"
grammar_points:
  - pronoms COD
  - pronoms COI
  - le / la / l’ / les
  - lui / leur
resource_type: "fiche_grammaire_inductive"
pedagogical_function:
  - observation
  - repérage
  - systématisation
guidance_level: "guidé"
interaction_mode:
  - individuel
  - binôme
  - classe entière
status: "en_normalisation"
source_context: "Support de cours ISPA, groupe B1+, thème hebdomadaire de l’enquête"
reuse_potential: "élevé"
```

## Audit doux

L’audit de départ ne doit pas être culpabilisant. Il sert à orienter le travail de normalisation.

Statuts recommandés :

- `fort` ;
- `à préciser` ;
- `à ajouter` ;
- `à vérifier`.

| Critère | Lecture possible | Statut |
| --- | --- | --- |
| Matière pédagogique | Le document contient un récit, des exercices et plusieurs points de langue. | fort |
| Contexte motivant | Le scénario d’enquête donne une cohérence narrative. | fort |
| Niveau identifiable | Le niveau B1+ / B2 semble plausible, mais doit être confirmé. | à préciser |
| Découpage | Le document couvre trop de points pour une seule fiche. | à ajouter |
| Corrigé | Les réponses doivent être isolées, complétées ou relues. | à ajouter |
| Guide professeur | L’intention et le déroulé doivent être explicités. | à ajouter |
| Réutilisation par collègue | La contextualisation ISPA/Amiens doit être généralisable. | à préciser |
| Sources et droits | Le récit et les exemples doivent être vérifiés comme originaux ou réécrits. | à vérifier |
| Variantes | Des versions génériques, orales ou plus courtes sont possibles. | à ajouter |

## Sorties possibles pour l’enseignant

À partir de cette source-mère, Laforge pourrait proposer :

- créer une fiche normalisée COD/COI ;
- créer une version générique sans références ISPA trop spécifiques ;
- créer une version adaptable avec variables de lieu, prénom et objet disparu ;
- produire un corrigé à relire ;
- produire un guide professeur ;
- conserver le document comme source-mère ;
- créer plus tard une mini-collection sur les pronoms.

Ces sorties doivent être proposées progressivement. L’enseignant ne doit pas avoir l’impression qu’il doit tout valider en une seule fois.

## Mini-collection future

Le document-source peut devenir la base d’une mini-collection :

**Les pronoms personnels dans une enquête**

Fiches possibles :

- COD / COI ;
- `y` et `en` ;
- pronoms toniques après préposition ;
- infinitif et impératif ;
- double pronominalisation ;
- pronom neutre `le`.

Cette collection n’est pas à construire tout de suite.

Elle sert à ne pas perdre la valeur future du document-source et à montrer qu’un support long peut devenir plusieurs ressources Laforge cohérentes.

## Garde-fous contre l’usine à gaz

Pour la v0.3, il ne faut pas :

- développer d’import Word automatique maintenant ;
- ajouter d’IA intégrée maintenant ;
- ajouter Supabase maintenant ;
- créer de comptes utilisateurs maintenant ;
- transformer tous les critères pédagogiques en champs obligatoires ;
- traiter tout le document-source en une seule fiche ;
- créer un workflow de validation complet avant d’avoir testé le parcours avec quelques enseignants ;
- demander à l’enseignant de comprendre Markdown, YAML, Git ou GitHub pour contribuer.

La complexité pédagogique doit rester en profondeur. Le premier écran doit rester simple.

## Prochaine action concrète

La prochaine action raisonnable est :

Créer une première ressource normalisée, statique, à partir du bloc COD/COI, avec :

- support étudiant ;
- guide professeur ;
- corrigé ;
- variantes minimales ;
- statut `en_normalisation`.

Cette ressource servira de preuve de concept pour le passage d’une source-mère Word à une fiche Laforge mutualisable.
