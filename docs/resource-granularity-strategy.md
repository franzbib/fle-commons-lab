# Doctrine de granularité des ressources pédagogiques

> Document produit le 2026-05-25. Agent : Antigravity (conception documentaire).  
> Contraintes respectées : aucune modification du code source, aucun backend, aucun développement.  
> Lire avec : `docs/document-output-and-composition-strategy.md`, `docs/resource-model.md`.

---

## 1. Pourquoi parler de granularité

Une ressource FLE Commons Lab n'est pas un bloc monolithique. C'est un assemblage de contenus qui ont des fonctions, des publics et des durées de vie différents.

La **granularité** désigne le niveau auquel on découpe une ressource pour la rendre :

- **réutilisable** : un exercice de repérage peut servir dans plusieurs ressources sans réécriture ;
- **adaptable** : on peut remplacer le texte support sans refaire le guide professeur ;
- **composable** : on peut assembler une fiche courte en choisissant seulement certains blocs ;
- **améliorable** : on peut corriger un corrigé sans toucher aux consignes ;
- **contribuable** : un enseignant peut proposer une variante sans réécrire la ressource entière ;
- **exportable proprement** : un document d'usage (fiche apprenant, guide prof) est une vue calculée sur des blocs, pas une copie manuelle.

La granularité n'est pas un objectif technique. C'est une discipline éditoriale qui prépare une meilleure réutilisation sans imposer une architecture lourde.

---

## 2. Les trois niveaux de granularité

### Niveau 1 — La ressource complète

C'est l'unité pédagogique principale telle qu'elle existe dans `demoResources.ts` et telle que la décrit `src/types/resource.ts`.

Une ressource complète contient :

- **Métadonnées** : niveau CECRL, durée, compétence principale, type, statut, licence, auteurs, tags, matériel nécessaire, alertes de préparation.
- **Contenu structuré** : objectifs, prérequis, déroulé, support apprenant (`studentInstructions`), guide professeur (`teacherGuide`), corrigé (`answerKey`), variantes (`variants`), notes d'usage (`usageNotes`).
- **Traçabilité** : versions, retours d'usage, suggestions de contribution, audit pédagogique.
- **Contexte technique** : outils numériques, IA documentée, conditions d'accès.

**Exemple** : `b1-enquete-suspect-temoin-indice` est une ressource complète.  
**Exemple** : `b1-pronoms-cod-coi-enquete` est une ressource complète (statut : utilisable, 90 min, grammaire inductive, CC BY-SA).

Une ressource complète est l'unité de référence pour :
- la recherche dans la bibliothèque ;
- le filtrage par niveau, type, compétence ;
- l'affichage dans les trois onglets (Vue d'ensemble / Contenu apprenant / Corrigés & Notes prof) ;
- la copie et l'impression.

### Niveau 2 — Le bloc pédagogique

Un bloc pédagogique est une unité de contenu autonome à l'intérieur d'une ressource. Il a un rôle identifiable, un public précis et peut exister indépendamment.

**Caractéristiques d'un bloc pédagogique** :

- Il a un **titre fonctionnel** (pas de titre générique comme "Contenu").
- Il a un **public unique** : apprenant OU enseignant, pas les deux.
- Il peut être **remplacé ou supprimé** sans invalider les autres blocs.
- Il peut être **réutilisé** dans une autre ressource avec une adaptation minimale.

**Catalogue des types de blocs pédagogiques** :

| Type | Public | Description courte |
|------|--------|--------------------|
| `texte_support` | apprenant | Document, extrait, corpus de départ |
| `situation_entree` | apprenant | Mise en contexte, situation fictive déclenchante |
| `corpus_observation` | apprenant | Ensemble d'exemples à observer avant la règle |
| `exercice_reperage` | apprenant | Repérer, souligner, classer sans produire |
| `exercice_transformation` | apprenant | Transformer, remplacer, conjuguer |
| `exercice_systematisation` | apprenant | Appliquer systématiquement une règle |
| `activite_orale` | apprenant | Production orale guidée ou semi-guidée |
| `activite_reemploi` | apprenant | Réemploi libre en situation fictive |
| `bilan_grammatical` | apprenant | Règle mémorisable, tableau, formule clé |
| `consigne_projetable` | apprenant | Consigne courte destinée à être affichée |
| `encadre_lexical` | apprenant | Vocabulaire essentiel pour l'activité |
| `guide_professeur` | enseignant | Déroulé minuté, actions concrètes |
| `point_vigilance` | enseignant | Erreur fréquente, différenciation |
| `corrige` | enseignant | Réponses, critères, exemples acceptables |
| `variante` | enseignant | Version simplifiée ou complexifiée |
| `retour_usage` | enseignant | Témoignage d'une utilisation réelle ou simulée |

**Correspondance avec le modèle actuel** :

Le modèle `ResourceSectionKey` dans `src/types/resource.ts` (lignes 246-257) définit des sections (`objectives`, `studentInstructions`, `teacherGuide`, `answerKey`, `variants`...). Chaque section correspond approximativement à un ou plusieurs blocs pédagogiques.

La différence : une `ResourceSection` est une liste plate d'items (`string[]`). Un bloc pédagogique au sens de la présente doctrine est une **unité cohérente avec un rôle explicite**. La granularité fine n'est donc pas encore codée — elle est éditoriale et s'applique à la façon dont on rédige les items dans chaque section.

### Niveau 3 — L'élément interne

Un élément interne est l'unité minimale à l'intérieur d'un bloc. Il ne peut pas être réutilisé seul sans son contexte.

**Exemples d'éléments internes** :

- une phrase d'exercice (`Elle a interrogé [le gardien]. → ___`) ;
- une question de compréhension ;
- une réponse attendue dans un corrigé ;
- une note de bas de page professeur ;
- une reformulation possible d'une consigne ;
- un exemple de production minimale acceptable ;
- une expression clé dans un bilan grammatical.

Dans la v0, les éléments internes sont les `string[]` dans chaque `ResourceSection`. Ils ne sont pas modélisés séparément et ne doivent pas l'être pour l'instant.

---

## 3. Application à la ressource "Les pronoms COD/COI dans une enquête"

Cette ressource existe dans `demoResources.ts` sous l'ID `b1-pronoms-cod-coi-enquete` (statut : utilisable, 90 min, grammaire inductive, CC BY-SA). Elle illustre concrètement la doctrine de granularité et sert de ressource exemplaire de référence.

### Décomposition en blocs

```
RESSOURCE : b1-pronoms-cod-coi-enquete
Niveau B1 — 90 min — Grammaire / Interaction orale

Bloc 1 : situation_entree
  Public : apprenant
  Contenu : "L'inspectrice Mora a interrogé le gardien, téléphoné à la directrice,
             montré les photos aux témoins, demandé les clés à l'agent, prévenu les journalistes."
  Rôle : ancrer grammaticalement dans une situation mémorable et fictive.
  Réutilisabilité : ce texte peut être réemployé dans d'autres exercices COD/COI.

Bloc 2 : corpus_observation
  Public : apprenant
  Contenu : liste des 5 actions de l'inspectrice avec les compléments soulignés.
  Rôle : faire observer qui/quoi vs à qui avant de nommer la règle.

Bloc 3 : exercice_reperage
  Public : apprenant
  Contenu : Exercices a-e — Remplacer le groupe entre crochets par le bon pronom.
  Rôle : systématisation guidée de COD/COI.
  Réutilisabilité : les 5 phrases peuvent être utilisées séparément dans un exercice flash.

Bloc 4 : bilan_grammatical
  Public : apprenant
  Contenu :
    COD (qui ? / quoi ?) → le, la, les
    COI (à qui ?)        → lui, leur
    Le pronom se place AVANT le verbe conjugué.
  Rôle : ancrer la règle mémorisable.
  Réutilisabilité : ce bilan peut illustrer d'autres ressources de grammaire.

Bloc 5 : activite_reemploi
  Public : apprenant
  Contenu : Compte rendu oral de 5 phrases avec 2 COD et 1 COI minimum.
  Rôle : production guidée en situation.

Bloc 6 : guide_professeur
  Public : enseignant
  Contenu : phases minutées, actions enseignant, points de vigilance (leur/leur),
             différenciation (groupe fragile / groupe avancé).
  Rôle : permettre à un enseignant non auteur d'animer sans préparer.

Bloc 7 : point_vigilance
  Public : enseignant
  Contenu :
    - leur COI vs leur adjectif possessif.
    - Accord du participe passé (niveau B1+ seulement).
    - Garder la situation légère et fictive.
  Rôle : signaler les erreurs fréquentes spécifiques à ce contenu.

Bloc 8 : corrige
  Public : enseignant
  Contenu : Réponses a-e + critères + exemple de production minimale acceptable.
  Rôle : corriger rapidement avec des critères observables.

Bloc 9 : variante (groupe fragile)
  Public : enseignant
  Contenu : Fournir les pronoms en marge ; l'apprenant choisit et vérifie la position.

Bloc 10 : variante (groupe avancé)
  Public : enseignant
  Contenu : Ajouter 3 phrases avec accord du participe passé + justification écrite.

Bloc 11 : variante (sans grammaire explicite)
  Public : enseignant
  Contenu : Travailler sans mentionner COD/COI ; induire la règle par la question.
```

### Ce que cette décomposition révèle

1. Les blocs 1-5 constituent la **fiche apprenant**. Ils doivent être lisibles sans les blocs 6-11.
2. Les blocs 6-8 constituent le **paquet enseignant** (guide + vigilance + corrigé). Ils présupposent la connaissance des blocs apprenant.
3. Les blocs 9-11 sont des **variantes**, chacune autonome.
4. Le `bilan_grammatical` (bloc 4) pourrait être réutilisé dans une autre ressource sur les pronoms compléments (B2, double pronom) comme rappel de prérequis.

---

## 4. Pourquoi la granularité est importante

### Pour la réutilisation

Une situation d'enquête fictive bien rédigée peut servir à plusieurs objectifs grammaticaux : les pronoms COD/COI (B1), l'accord du participe passé (B1+), la voix passive (B2). Si la situation est isolée comme bloc, on peut l'importer dans d'autres ressources sans réécrire.

### Pour l'adaptation

Remplacer le contexte "enquête policière" par "enquête médicale" ou "enquête professionnelle" ne nécessite que la modification du bloc `situation_entree` et du `corpus_observation`. Le guide professeur, le corrigé et les variantes restent identiques.

### Pour la composition documentaire future

Quand un enseignant veut une fiche de 25 minutes au lieu de 90, il peut sélectionner seulement les blocs `situation_entree` + `exercice_transformation` + `bilan_grammatical`. C'est l'idée du futur Fleator (voir section 6).

### Pour la contribution partielle

Un enseignant qui veut améliorer la ressource peut proposer une nouvelle `variante` sans réécrire le corrigé ni les consignes. Si les blocs sont bien séparés dans les données, la contribution peut être ciblée.

### Pour l'amélioration progressive

On peut améliorer le `guide_professeur` d'une ressource existante sans toucher à la `fiche_apprenant`. La traçabilité par version peut préciser quel bloc a changé.

### Pour l'export propre

Un document d'usage (fiche apprenant imprimable) est une sélection de blocs : `situation_entree` + `exercice_reperage` + `bilan_grammatical`. La qualité du document dépend directement de la qualité de chaque bloc isolément.

---

## 5. Ce qu'il ne faut pas faire maintenant

> Ces interdits valent pour la v0 et la v0.2 en cours.

### Ne pas créer de modèle `Block` en TypeScript

Le type `ResourceSection` existant (`{ title: string; items: string[] }`) est suffisant. Ajouter un type `PedagogicalBlock` avec un champ `type`, `audience`, `reusabilityLevel` alourdirait le modèle sans bénéfice immédiat. La granularité s'applique d'abord à la façon d'écrire les items, pas à la structure de données.

### Ne pas créer de table Supabase ou de base de données de blocs

Les blocs sont implicites dans les sections des ressources. Les rendre explicites en base de données implique un backend, une interface de gestion et une montée en complexité incompatible avec la v0 statique.

### Ne pas créer d'interface drag-and-drop

Sélectionner et assembler des blocs visuellement est une fonctionnalité de l'outil Fleator (voir section 6). Ce n'est pas une priorité v0.

### Ne pas créer d'export DOCX ou PDF

L'export de fichiers nécessite une bibliothèque de génération (docx.js, pdfmake) et des décisions sur la mise en forme. Ce n'est pas une priorité v0. La copie dans le presse-papier (`formatLearnerViewForCopy`) et l'impression navigateur (`window.print()`) suffisent pour la v0.

### Ne pas atomiser excessivement les ressources

Une ressource trop fragmentée (un bloc = un fichier = une fiche) devient difficile à maintenir, à lire et à contribuer. Le niveau de granularité raisonnable pour la v0 est **la section** (`ResourceSection`), pas la phrase.

---

## 6. Fleator — horizon différé

> **[DIFFÉRÉ — ne pas implémenter en v0]**

Le Fleator désigne un futur outil de composition de documents pédagogiques à partir de blocs. L'idée est de permettre à un enseignant de sélectionner des blocs dans une ou plusieurs ressources pour produire une fiche personnalisée.

**Ce que le Fleator permettrait** :
- Choisir un texte support + deux exercices + un bilan grammatical = fiche de 25 minutes.
- Composer un document bilingue en combinant un bloc en français et une note de traduction.
- Adapter une ressource B1 en B2 en remplaçant seulement le corpus d'observation.
- Générer automatiquement un document formaté (fiche apprenant propre, guide prof séparé).

**Pourquoi ne pas l'implémenter maintenant** :

1. Les boutons de copie actuels (`Copier la fiche apprenant`) couvrent déjà le besoin minimal sans infrastructure.
2. La structure en blocs n'est pas encore stable dans les données. Construire un outil de composition sur des données non structurées produit du bruit, pas de la valeur.
3. Aucun enseignant n'a encore exprimé ce besoin en testant l'outil réel.
4. L'interface de sélection de blocs demande un travail UX significatif pour ne pas être plus lente que le copier-coller manuel.

**Condition préalable absolue** :
Avoir au moins 10 ressources dont chaque bloc est clairement rédigé, séparé et testé en classe. Sans ce corpus, le Fleator ne composerait que des documents de mauvaise qualité.

**Référence** : voir aussi `docs/document-output-and-composition-strategy.md`, section 5, pour l'analyse détaillée des bénéfices, risques et conditions préalables.

---

## 7. Progression raisonnable vers une granularité exploitable

### Étape 0 — Maintenant (pas de code)

Rédiger les nouvelles ressources en respectant la séparation stricte entre blocs apprenant et blocs enseignant à l'intérieur de chaque `ResourceSection` existante.

**Règles éditoriales immédiates** :
- Un item de `studentInstructions` ne doit jamais contenir d'information réservée à l'enseignant.
- Un item de `teacherGuide` ne doit pas reproduire mot pour mot les consignes apprenant.
- Le `answerKey` doit commencer par les réponses, pas par les consignes.
- Le `bilan_grammatical` doit être dans `studentInstructions` (dernier item, clairement séparé) ou dans une section dédiée si le modèle le permet.

### Étape 1 — Prochaine passe éditoriale

Améliorer les fonctions de copie existantes dans `src/utils/resourceText.ts` :
- Ajouter des séparateurs textuels (`---`) entre les sections.
- Ajouter des titres en majuscules pour chaque bloc.
- Ajouter des lignes vides pour la respiration.

Résultat attendu : le texte copié dans Word ou Google Docs est directement utilisable sans reformatage.

### Étape 2 — CSS d'impression ciblé

Améliorer `@media print` dans `src/styles/global.css` pour masquer les métadonnées et le header (`detail-hero`) lors de l'impression depuis l'onglet *Contenu apprenant*. Résultat attendu : impression navigateur directement distribuable.

### Étape 3 — Ressources exemplaires structurées

Consolider 3 à 5 ressources dont les sections sont explicitement structurées comme des blocs autonomes :
- La ressource `b1-pronoms-cod-coi-enquete` est la première ressource exemplaire existante structurée selon cette doctrine.
- Chaque section doit avoir un titre qui reflète son rôle (pas "Contenu" mais "Situation d'entrée : l'enquête au musée").

### Étape 4 — Documentation d'un modèle de blocs optionnel

Quand 5 ressources respectent la structure en blocs, documenter un guide éditorial : "Comment structurer une ressource FLE Commons Lab en blocs pédagogiques". Ce guide sera la base du modèle de blocs décrit dans `docs/document-output-and-composition-strategy.md`, section 5D.

### Étape 5 — Envisager la composition (beaucoup plus tard)

Si des enseignants réels utilisent les boutons de copie et expriment le besoin de composer des fiches personnalisées, envisager une interface minimale de sélection de blocs côté client. Zéro backend, zéro export fichier, zéro IA.

Le Fleator complet (export Word/PDF, IA de génération, blocs éditables) reste à une étape ultérieure non datée.

---

## 8. Risques spécifiques à surveiller

### Risque 1 — Surspécification du modèle

Vouloir modéliser chaque type de bloc en TypeScript avant d'avoir stabilisé la rédaction des ressources. Les données doivent précéder la structure, pas l'inverse.

### Risque 2 — Granularité trop fine

Découper une ressource en 20 micro-blocs (une phrase = un bloc) rend la ressource impossible à lire, à contribuer et à maintenir. La granularité raisonnable est la section, pas la phrase.

### Risque 3 — Confusion public cible

Mélanger dans un même bloc des contenus pour l'apprenant et pour l'enseignant est le problème le plus fréquent dans les ressources actuelles. C'est la première règle éditoriale à appliquer.

### Risque 4 — Inflation documentaire

Créer trop de documents de doctrine (un fichier par concept) dilue l'information. Ce document et `docs/document-output-and-composition-strategy.md` couvrent ensemble la doctrine documentaire. Ne pas créer d'autres fichiers stratégiques sans décision explicite.

### Risque 5 — Interprétation comme instruction de développement

Un agent Codex qui lit ce document pourrait vouloir coder le modèle de blocs, le Fleator ou l'interface de composition. Les sections "Ce qu'il ne faut pas faire" et "Fleator — horizon différé" doivent être lues avant toute intervention technique.

---

## 9. Recommandations pour la suite

**Pour le prochain agent Codex (correction technique) :**

1. Améliorer `formatLearnerViewForCopy` dans `src/utils/resourceText.ts` : ajouter `---`, titres en MAJUSCULES, lignes vides. Ne pas modifier le modèle de données.
2. Ajouter dans `@media print` de `src/styles/global.css` : `.detail-hero { display: none }` et une règle pour masquer les sections non pertinentes lors de l'impression depuis l'onglet apprenant.

**Pour le prochain agent éditorial :**

3. La ressource `b1-pronoms-cod-coi-enquete` existe déjà dans `src/data/demoResources.ts`. Vérifier que ses titres de section reflètent bien le rôle de chaque bloc. Si une section s'intitule "Support étudiant" au lieu de "Situation d'entrée : l'enquête au musée", la renommer dans une prochaine passe éditoriale légère.

**Pour une future session de doctrine :**

4. Ne pas créer de nouveau document de stratégie sans décision explicite. La doctrine actuelle (ce document + `docs/document-output-and-composition-strategy.md`) est suffisante pour orienter les 3 à 5 prochaines interventions.

---

## 10. Références

- `docs/document-output-and-composition-strategy.md` — doctrine ressource interne vs document d'usage, maquette COD/COI, analyse Fleator.
- `docs/resource-model.md` — modèle de données complet.
- `docs/normalization-protocol.md` — protocole de normalisation des ressources.
- `docs/pedagogical-audit-grid.md` — grille d'audit pédagogique.
- `src/types/resource.ts` — types TypeScript : `ResourceSectionKey`, `ResourceSection`, `ResourceContent`.
- `src/utils/resourceText.ts` — fonctions de formatage pour la copie.

---

*Document produit dans le cadre de la réflexion produit FLE Commons Lab v0.2. Auteur : Antigravity. Date : 2026-05-25. Ne pas modifier sans traçabilité dans `docs/project-journal.md`.*
