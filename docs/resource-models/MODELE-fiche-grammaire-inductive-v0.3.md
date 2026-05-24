# MODÈLE — Fiche de grammaire inductive Laforge v0.3

## Objectif du modèle

Ce document décrit un modèle de fiche de grammaire inductive pour Laforge v0.3.

Il sert à transformer des supports réels d’enseignants, souvent créés en Word, exportés en PDF ou transmis par copier-coller, en ressources pédagogiques structurées, réutilisables, imprimables et améliorables.

L’objectif n’est pas de rendre tous les supports parfaits dès leur dépôt. Le modèle fournit une structure commune pour passer progressivement d’un matériau brut à une ressource claire, partageable et publiable dans la forge.

## Public visé

Les premières fiches étalons ciblent prioritairement des apprenants FLE de niveaux B1-B2.

Elles peuvent notamment servir dans des contextes de préparation aux études supérieures : français général renforcé, français sur objectif universitaire, méthodologie écrite et orale, compréhension de documents longs, production argumentée ou reformulation.

Le modèle doit toutefois rester adaptable :

- à d’autres niveaux CECRL ;
- à des contextes de français général ;
- à des publics adultes ou jeunes adultes ;
- à des objectifs de remédiation ;
- à des parcours hybrides, autonomes ou accompagnés.

## Contexte d’apprentissage et public visé

Une ressource FLE n’est jamais définie seulement par son niveau CECRL.

Le niveau indique une hypothèse linguistique, mais il ne suffit pas à comprendre les conditions réelles d’utilisation d’une fiche : public, objectif, autonomie, familiarité avec les codes scolaires, rapport à l’écrit, besoins d’étayage ou références culturelles mobilisées.

La fiche doit donc préciser, de manière sobre et non intrusive, le contexte pour lequel elle a été conçue, testée ou imaginée.

Dimensions utiles à documenter :

- **Type de public** : captif, non captif ou mixte.
- **Tranche d’âge approximative** : adolescents, jeunes adultes, adultes, public intergénérationnel.
- **Objectif d’apprentissage** : universitaire, professionnel, intégration, certification, loisir, remédiation.
- **Degré d’autonomie attendu** : travail très guidé, semi-guidé, autonome, hybride.
- **Familiarité avec les pratiques scolaires** : prise de notes, exercice à trous, tableau grammatical, justification de réponse, travail en groupe.
- **Rapport à l’écrit** : aisance avec les consignes longues, besoin de reformulation orale, difficulté possible avec les supports denses.
- **Besoin d’étayage** : exemples supplémentaires, lexique préparatoire, reformulation des consignes, guidage par étapes.
- **Arrière-plan linguistique ou plurilingue** : à mentionner seulement si cela aide à adapter la ressource, par exemple pour anticiper une difficulté grammaticale fréquente ou valoriser des comparaisons utiles.
- **Références culturelles à expliciter** : lieux, pratiques sociales, implicites institutionnels, habitudes universitaires ou professionnelles.
- **Adaptations possibles pour un autre public** : simplification, contextualisation, oralisation, changement de thème, réduction de la charge écrite, ajout d’exemples.

Ces informations ne doivent jamais servir à catégoriser, réduire ou enfermer les apprenants. Elles servent uniquement à aider un enseignant à adapter la ressource avec discernement, à expliciter ses présupposés et à éviter de confondre niveau linguistique, autonomie scolaire, capital culturel ou aisance à l’écrit.

## Structure éditoriale obligatoire

Une fiche de grammaire inductive Laforge doit contenir ou prévoir les sections suivantes.

### Métadonnées

Informations structurées permettant de classer, filtrer, auditer et réutiliser la ressource.

### Présentation courte

Résumé lisible en quelques lignes : public, point de grammaire, usage en classe, durée et intérêt pédagogique.

### Objectifs pédagogiques

Objectifs concrets et observables. Ils doivent indiquer ce que l’apprenant pourra mieux comprendre, manipuler ou produire après l’activité.

### Prérequis

Connaissances linguistiques ou méthodologiques utiles avant d’aborder la fiche.

### Corpus d’observation

Ensemble court d’énoncés, phrases, mini-dialogues ou extraits originaux permettant aux apprenants d’observer le fonctionnement grammatical.

Le corpus doit être suffisamment riche pour faire émerger la règle, mais assez court pour rester exploitable.

### Questions de repérage

Questions guidant l’observation : formes repérées, contexte d’emploi, opposition de sens, transformation possible, marqueurs, régularités.

### Conceptualisation guidée

Étape où les apprenants formulent progressivement la règle avec l’aide de l’enseignant.

Elle peut prendre la forme d’un tableau à compléter, de phrases à classer, de choix entre plusieurs formulations ou d’une synthèse partielle.

### Exercices de systématisation

Exercices progressifs permettant de stabiliser la forme et l’usage :

- repérage ;
- transformation ;
- complétion ;
- association ;
- reformulation ;
- production guidée.

### Activité de transfert

Tâche plus ouverte où l’apprenant réemploie le point grammatical dans une situation communicative ou discursive.

### Récapitulatif grammatical

Synthèse courte, claire et adaptée au niveau. Elle ne doit pas remplacer l’observation, mais stabiliser ce qui a été construit.

### Support étudiant

Version projetable, distribuable ou imprimable pour les apprenants.

### Guide professeur

Notes d’animation : intention pédagogique, déroulé, timing, modalités, points de vigilance, relances possibles.

### Corrigé

Réponses attendues, justifications utiles, exemples acceptables et critères de réussite pour les productions ouvertes.

### Variantes

Adaptations possibles : simplification, complexification, autonomie, oral, écrit, travail en groupes, version sans numérique.

### Retours d’usage

Observations après utilisation : durée réelle, difficultés rencontrées, ajustements utiles, contexte de classe.

### Licence et sources

Origine du corpus, statut juridique, licence proposée, éléments à vérifier avant publication publique.

### Historique des versions

Trace des modifications : version initiale, corrigé ajouté, consignes clarifiées, fiche testée, adaptation de niveau, etc.

## Métadonnées minimales

Une fiche de grammaire inductive doit au minimum documenter les champs suivants.

```yaml
title:
summary:
level:
duration_minutes:
skills:
theme:
grammar_points:
resource_type:
pedagogical_function:
guidance_level:
interaction_mode:
status:
license:
authors:
tags:
```

### Indications de remplissage

- `title` : titre clair pour un enseignant.
- `summary` : résumé court de l’usage pédagogique.
- `level` : niveau CECRL visé ou niveau mixte.
- `duration_minutes` : durée estimée réaliste.
- `skills` : compétences travaillées, par exemple grammaire, expression écrite, interaction orale.
- `theme` : thème de communication ou domaine lexical.
- `grammar_points` : point ou points de grammaire ciblés.
- `resource_type` : fiche, exercice, séquence, remédiation ou autre type contrôlé.
- `pedagogical_function` : découverte, systématisation, remédiation, réemploi, évaluation formative.
- `guidance_level` : guidé, semi-guidé, autonome.
- `interaction_mode` : individuel, binômes, petits groupes, classe entière, autonomie.
- `status` : brouillon, à compléter, partageable avec prudence, testée, relue, validée, archivée.
- `license` : licence ou statut à vérifier.
- `authors` : auteur, adaptateur ou contributeur identifié.
- `tags` : mots-clés utiles pour la recherche.

## Distinction entre support étudiant, guide professeur et corrigé

La fiche doit respecter une séparation stricte entre ce qui peut être montré aux apprenants et ce qui relève du travail enseignant.

### Support étudiant

Le support étudiant ne doit pas contenir les réponses.

Il contient :

- consignes ;
- corpus d’observation ;
- questions de repérage ;
- tableaux à compléter ;
- exercices ;
- activité de transfert ;
- espaces de réponse si utile.

Il doit pouvoir être projeté, copié, distribué ou imprimé sans révéler les corrigés ni les notes d’animation.

### Guide professeur

Le guide professeur explique l’intention, le déroulé et les points de vigilance.

Il peut contenir :

- objectifs de l’enseignant ;
- déroulé minute par minute ou étape par étape ;
- modalités de classe ;
- relances possibles ;
- erreurs fréquentes ;
- conseils d’animation ;
- adaptations selon le groupe.

### Corrigé

Le corrigé donne les réponses et les justifications utiles.

Il peut contenir :

- réponses fermées ;
- justifications grammaticales ;
- exemples acceptables ;
- critères de réussite ;
- remarques sur les réponses possibles ;
- limites ou cas particuliers à ne pas surcharger.

## Critères d’une fiche partageable

Une fiche peut être considérée comme partageable avec prudence si elle respecte au minimum les critères suivants :

- objectifs compréhensibles ;
- niveau plausible ;
- consignes claires ;
- durée estimée ;
- au moins un exercice exploitable ;
- corpus ou exemples suffisants pour comprendre le point travaillé ;
- sources identifiées ;
- absence de données personnelles ;
- statut honnête ;
- limites ou manques explicitement signalés.

Une fiche partageable n’est pas nécessairement complète. Elle peut encore nécessiter un corrigé enrichi, une relecture, une clarification des droits ou un retour d’usage.

## Critères d’une fiche étalon

Une fiche étalon représente un niveau plus exigeant.

Elle doit viser :

- progression inductive complète ;
- corpus d’observation cohérent ;
- exercices nombreux et progressifs ;
- activité de transfert réaliste ;
- corrigé complet ;
- guide professeur réaliste ;
- variantes prévues ;
- droits clarifiés ;
- possibilité d’impression ;
- possibilité d’adaptation par un collègue ;
- retours d’usage ou scénario de test documenté ;
- audit pédagogique vert ou majoritairement vert.

Une fiche étalon sert de preuve de concept pédagogique. Elle montre ce que Laforge entend par ressource structurée, réutilisable et améliorable.

## Grille d’audit pédagogique associée

La grille suivante peut être utilisée pour auditer une fiche de grammaire inductive.

| Critère | Question d’audit | Appréciation |
| --- | --- | --- |
| Clarté des objectifs | Les objectifs sont-ils compréhensibles et observables ? | Vert / Orange / Rouge |
| Cohérence niveau / tâche | Le niveau annoncé correspond-il aux consignes, au corpus et aux productions attendues ? | Vert / Orange / Rouge |
| Qualité du corpus d’observation | Le corpus permet-il de faire émerger le point grammatical ? | Vert / Orange / Rouge |
| Progressivité des exercices | Les exercices passent-ils du repérage au réemploi ? | Vert / Orange / Rouge |
| Charge cognitive | La fiche évite-t-elle de traiter trop de difficultés à la fois ? | Vert / Orange / Rouge |
| Qualité des consignes | Les consignes sont-elles courtes, actionnables et adaptées au niveau ? | Vert / Orange / Rouge |
| Présence du corrigé | Les réponses ou critères sont-ils disponibles côté professeur ? | Vert / Orange / Rouge |
| Présence du guide professeur | Le déroulé et les points de vigilance sont-ils documentés ? | Vert / Orange / Rouge |
| Réutilisabilité | Un collègue peut-il comprendre et adapter la fiche rapidement ? | Vert / Orange / Rouge |
| Statut juridique des sources | Les sources, licences et droits sont-ils identifiés ? | Vert / Orange / Rouge |
| Potentiel de variante | La fiche prévoit-elle au moins une adaptation possible ? | Vert / Orange / Rouge |
| Retour d’usage possible | La fiche permet-elle de documenter un test en classe ? | Vert / Orange / Rouge |
| Public visé explicite | Le type de public et le contexte d’apprentissage sont-ils décrits sans enfermer les apprenants ? | Vert / Orange / Rouge |
| Adéquation au contexte d’apprentissage | La fiche correspond-elle à l’objectif annoncé : universitaire, professionnel, intégration, certification ou autre ? | Vert / Orange / Rouge |
| Autonomie requise | Le degré d’autonomie attendu est-il réaliste pour le public visé ? | Vert / Orange / Rouge |
| Accessibilité culturelle | Les références culturelles, scolaires ou institutionnelles nécessaires sont-elles explicitées ? | Vert / Orange / Rouge |
| Possibilité d’adaptation à un autre public | La fiche indique-t-elle comment être adaptée à un autre âge, objectif, contexte ou rapport à l’écrit ? | Vert / Orange / Rouge |
| Vigilance contre les présupposés sociaux ou culturels | La fiche évite-t-elle d’assimiler niveau CECRL, autonomie scolaire, aisance à l’écrit ou familiarité culturelle ? | Vert / Orange / Rouge |

## Règles de transformation depuis un document brut

### Word long

Un document Word long doit être découpé avant normalisation.

Priorités :

- identifier l’objectif principal ;
- séparer les consignes apprenant des notes professeur ;
- repérer les exercices réellement exploitables ;
- isoler le corrigé s’il est présent ;
- supprimer ou déplacer les éléments de contexte trop locaux ;
- conserver l’historique de transformation.

### PDF issu de Word

Un PDF issu de Word peut souvent être traité comme un document textuel.

Il faut toutefois vérifier :

- l’ordre réel des blocs ;
- les tableaux mal extraits ;
- les titres perdus ;
- les sauts de page ;
- la distinction entre support étudiant et corrigé.

### PDF scanné

Un PDF scanné doit être considéré comme matériau fragile.

Avant toute normalisation :

- vérifier la qualité de l’OCR ;
- relire les accents, apostrophes et caractères spéciaux ;
- corriger les erreurs de reconnaissance ;
- éviter de publier automatiquement un texte extrait sans contrôle humain.

### Corrigé séparé

Un corrigé séparé doit être relié explicitement à la fiche.

Il faut vérifier :

- que les numéros d’exercices correspondent ;
- que les réponses sont alignées avec la version normalisée ;
- que les justifications utiles sont ajoutées si nécessaire ;
- que le corrigé reste hors du support étudiant.

### Fiche sans corrigé

Une fiche sans corrigé peut être normalisée, mais son statut doit rester honnête.

Statuts possibles :

- à compléter ;
- partageable avec prudence ;
- brouillon de normalisation.

Elle ne doit pas être présentée comme fiche étalon tant qu’un corrigé ou des critères de réussite n’ont pas été ajoutés.

### Ressource très contextualisée

Une ressource liée à une classe, une ville, un examen interne ou une progression locale peut être utile, mais elle doit être rendue transférable.

Actions recommandées :

- remplacer les références trop locales par des variables ;
- documenter le contexte d’origine ;
- proposer une variante générique ;
- signaler ce qui doit être adapté par un collègue.

### Document contenant un texte protégé

Un document contenant un texte protégé ne doit pas être publié tel quel.

Traitement recommandé :

- identifier la source ;
- indiquer `license: a_verifier` ou équivalent ;
- ne pas republier l’extrait protégé dans une ressource ouverte ;
- proposer un corpus original de remplacement si possible ;
- conserver seulement la structure pédagogique si elle est réutilisable ;
- demander une validation juridique ou éditoriale avant diffusion publique.

## Principe final

“Une fiche étalon n’est pas une fiche parfaite : c’est une ressource suffisamment claire, structurée et honnête pour être comprise, utilisée, adaptée et améliorée par un autre enseignant.”
