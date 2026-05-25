# Stratégie de composition et de sortie documentaire

> Document produit le 2026-05-25. Agent : Antigravity (audit pédagogique et UX documentaire).  
> Contraintes respectées : aucune modification du code source, aucun backend, logique v0 statique uniquement.

---

## 1. Diagnostic de lisibilité — cas de la ressource enquête B1

### Ressource de référence analysée

La ressource `b1-enquete-suspect-temoin-indice` est la ressource d'enquête disponible dans `demoResources.ts`. Il n'existe pas de ressource COD/COI dans le catalogue actuel. Une maquette COD/COI en contexte enquête est construite en section 4 comme ressource fictive de démonstration, afin de montrer concrètement les problèmes de lisibilité et les solutions envisagées.

**Remarque préalable** : la recherche de termes `COD`, `COI`, `pronoms`, `enquete-suspect` dans `demoResources.ts` ne retourne aucune ressource. La mission parent demandait explicitement de traiter la ressource la plus proche si la ressource COD/COI n'existait pas.

### Problèmes de lisibilité identifiés sur la ressource enquête existante

La ressource `b1-enquete-suspect-temoin-indice` est de bonne qualité globale, mais présente plusieurs points de tension qui se retrouveraient a fortiori dans une ressource grammaire + jeu d'enquête :

**Densité du texte**

Le champ `studentInstructions` contient six items. Chacun est long (une à deux lignes). L'ensemble forme un bloc de consignes difficile à lire d'un coup, surtout sur une feuille A4 imprimée. L'apprenant ne sait pas immédiatement quelle est la tâche principale et quelles sont les étapes secondaires.

**Confusion entre couches documentaires**

Dans la version actuelle, le `lessonPlan` (déroulé) et les `studentInstructions` (support apprenant) sont deux sections distinctes dans le modèle, mais dans la vue web onglet *Contenu apprenant*, elles s'affichent l'une après l'autre sans séparation visuelle forte. Un enseignant qui imprime cette vue obtient un document mêlant consignes pédagogiques (à ne pas donner aux apprenants) et support apprenant (à distribuer).

**Consignes trop longues**

L'item `Préparez trois questions : Où étiez-vous ? Qu'est-ce que vous avez vu ? À quelle heure êtes-vous parti(e) ?` combine une instruction et trois exemples dans la même phrase liste. L'apprenant doit lire deux fois pour comprendre ce qu'il doit faire.

**Exercices mal séparés**

Les items du `studentInstructions` ne distinguent pas visuellement : (1) la mise en situation, (2) la consigne principale, (3) les étapes, (4) la consigne de synthèse. Tout est sur le même niveau de liste.

**Absence de respiration typographique**

Dans la vue imprimée (onglet Contenu apprenant + `window.print()`), les items sont des puces au même niveau. Aucun titre de section intermédiaire, aucune ligne vide visuelle, aucune hiérarchie. Sur une feuille A4, le résultat est un bloc compact.

**Difficulté d'impression**

La `print-qa-notes.md` documentait déjà ce problème. La vue imprimée actuelle inclut potentiellement les métadonnées (niveau, durée, auteurs, licence) avant le support apprenant, ce qui prend de la place et n'est pas utile pour l'élève. Le corrigé et le guide professeur, même dans l'onglet apprenant, risquent d'apparaître si l'impression est mal déclenchée.

**Surcharge de métadonnées**

Le modèle `Resource` comporte 30+ champs. Même si la vue apprenant les masque, la fiche complète (onglet Vue d'ensemble) affiche niveau, durée, compétences, gabarit, modalité, licence, auteurs, alertes de préparation. Un enseignant pressé qui veut juste imprimer le support étudiant doit naviguer dans les onglets pour trouver le bon bouton.

---

## 2. Doctrine : ressource interne vs document d'usage

Une ressource FLE Commons Lab est un objet de données structuré. Elle n'est pas un document. Cette distinction est fondamentale.

### Ressource structurée interne (objet de données)

C'est ce qui existe dans `demoResources.ts` et ce que décrit `src/types/resource.ts`. Elle contient tous les champs : métadonnées, objectifs, déroulé, support apprenant, guide professeur, corrigé, variantes, retours, suggestions, audit, IA, technique, version.

Elle sert à filtrer, indexer, afficher, copier et versionner. Elle n'est pas destinée à être lue d'une traite. Elle n'est pas imprimable telle quelle.

### Fiche web de consultation (onglets, survol rapide)

C'est la vue actuelle dans `ResourceDetail.tsx` avec ses onglets. Elle permet de décider vite (Vue d'ensemble), de consulter le contenu apprenant (Contenu apprenant) et d'accéder aux outils enseignant (Corrigés & Notes prof).

Elle est adaptée à la décision et à la consultation. Elle n'est pas adaptée à l'impression directe ni à la distribution en classe.

### Fiche étudiant (document imprimable class-ready)

C'est le document qu'un enseignant distribue ou projette. Il contient uniquement : titre de la ressource, niveau et durée, objectif en une phrase, support (texte, situation, corpus, document), consignes claires et numérotées, espace de travail si nécessaire.

Il ne contient pas : guide professeur, corrigé, retours d'usage, métadonnées techniques, alertes de préparation.

### Guide professeur (document de préparation)

C'est le document qu'un enseignant lit avant la séance. Il contient : déroulé avec minutage, points de vigilance, différenciation, variantes, erreurs fréquentes, matériel à préparer.

Il ne contient pas : le support apprenant (sauf en référence compacte).

### Corrigé (document de correction)

C'est le document qu'un enseignant utilise pendant ou après la séance. Il contient : réponses attendues, critères observables, exemples de productions acceptables, barème si évaluation.

Il ne contient pas : les consignes étudiantes complètes. Il peut en citer un extrait pour référence.

### Document complet imprimable (paquet enseignant)

C'est la concaténation ordonnée : fiche étudiant + guide professeur + corrigé + variante. Il est utile pour partager une ressource en formation d'équipe ou pour l'archiver. Il n'est pas destiné à une distribution directe aux apprenants.

### Conséquence pour la v0

Le modèle actuel génère un texte copiable (`formatLearnerViewForCopy`, `formatTeacherViewForCopy` dans `resourceText.ts`) mais ces fonctions produisent des listes plate sans structure de document. Elles sont un premier pas utile, pas un document class-ready.

---

## 3. Structure cible par couche documentaire

### A. Vue enseignant rapide (web)

**Objectif** : décision en moins de 5 secondes.

Structure suffisante :
- Titre + niveau + durée + compétence principale
- Résumé court (2 phrases max)
- Statut de réutilisabilité (prêt à utiliser / à tester / à compléter)
- Un seul bouton visible : Voir le support apprenant

Ce qui doit être masqué par défaut : métadonnées IA, technique, retours d'usage, audit, versions, suggestions de contribution.

### B. Fiche étudiant

**Objectif** : distribuer ou projeter directement.

Structure :

```
[Titre — niveau — durée]
[Objectif en une phrase]
---
SUPPORT
[Texte / situation / document]
---
CONSIGNES
1. [Consigne principale]
2. [Étape]
3. [Production attendue]
---
BILAN
[Ce qu'on retiendra : une règle, une formule, un mot-clé]
```

Ce qui ne doit pas apparaître : guide professeur, corrigé, métadonnées.

### C. Guide professeur

**Objectif** : préparer et animer sans avoir conçu la ressource.

Structure :

```
[Titre — niveau — durée estimée — matériel]
AVANT LA SÉANCE
- [Préparer / imprimer / tester]
DÉROULÉ (avec minutage)
- [Phase 1 : x min — action enseignant]
- [Phase 2 : x min — action enseignant]
POINTS DE VIGILANCE
- [Erreur fréquente]
- [Différenciation possible]
VARIANTES
- [Plus simple / plus difficile]
```

### D. Corrigé

**Objectif** : corriger rapidement, avec des critères observables.

Structure :

```
[Titre — référence exercice]
RÉPONSES ATTENDUES
- [Exercice 1 : réponse / critère]
- [Exercice 2 : réponse / critère]
CRITÈRES DE RÉUSSITE
- [Ce qu'on accepte / ce qu'on n'accepte pas]
EXEMPLE DE PRODUCTION ATTENDUE
- [Exemple minimal acceptable]
```

---

## 4. Maquette appliquée : pronoms COD/COI dans une enquête (B1)

Cette section produit une maquette textuelle pour une ressource fictive à créer. Elle n'existe pas dans le catalogue actuel. Elle illustre concrètement la doctrine de la section 3.

**Situation fictive** : une stagiaire de la brigade fictive de Fontaine-les-Roses cherche le voleur d'un tableau disparu du musée local. Les suspects ont été vus, interrogés, mais les enquêteurs n'arrivent pas à se souvenir de qui a vu qui, qui a parlé à qui.

**Objectif grammatical** : distinguer COD (complément d'objet direct) et COI (complément d'objet indirect) et utiliser les pronoms correspondants (le/la/les vs lui/leur) dans des phrases de compte rendu oral.

**Niveau** : B1. Durée : 55 minutes.

---

### 4A. Fiche étudiant

```
ENQUÊTE AU MUSÉE — Les pronoms COD et COI
Niveau B1 — 55 minutes

Objectif : remplacer un complément par le bon pronom (le, la, les, lui, leur)
           pour éviter les répétitions dans votre compte rendu d'enquête.

─────────────────────────────────────────
SUPPORT — Le carnet de l'inspectrice

Ce matin, l'inspectrice Mora a :
  - interrogé le gardien du musée
  - téléphoné à la directrice
  - montré les photos des suspects à deux témoins
  - demandé les clés à l'agent de sécurité
  - prévenu les journalistes

─────────────────────────────────────────
CONSIGNES

1. Lisez les actions de l'inspectrice.
   Pour chaque verbe, posez-vous la question :
   → Qui / quoi ? (COD) → pronom : le, la, les
   → À qui ? (COI)      → pronom : lui, leur

2. Transformez les phrases en remplaçant le groupe souligné.
   a. Elle a interrogé [le gardien].       → Elle ___ a interrogé.
   b. Elle a téléphoné [à la directrice].  → Elle ___ a téléphoné.
   c. Elle a montré les photos [aux deux témoins]. → Elle ___ a montré les photos.
   d. Elle a demandé les clés [à l'agent]. → Elle ___ a demandé les clés.
   e. Elle a prévenu [les journalistes].   → Elle ___ a prévenus.

3. Préparez un compte rendu oral de 5 phrases.
   Utilisez au moins 2 pronoms COD et 1 pronom COI.
   Commencez par : « L'inspectrice a d'abord... ensuite elle... »

─────────────────────────────────────────
BILAN — À retenir

  COD (qui ? / quoi ?)  →  le, la, les
  COI (à qui ?)         →  lui, leur
  Le pronom se place AVANT le verbe conjugué.
```

---

### 4B. Guide professeur

```
ENQUÊTE AU MUSÉE — Guide professeur (B1 — 55 min)

MATÉRIEL : fiche étudiant à imprimer ou à projeter.
           Aucun matériel numérique requis.

AVANT LA SÉANCE
- Repérer les verbes transitifs directs et indirects du support.
- Prévoir deux exemples au tableau : verbe + COD / verbe + COI.

DÉROULÉ

Phase 1 — Mise en route (10 min)
  → Poser : « Qu'est-ce qu'une enquête ? Qui interroge qui ? »
  → Faire lire les 5 actions de l'inspectrice à voix haute.
  → Ne pas encore parler de COD/COI.

Phase 2 — Observation (15 min)
  → Demander : « Sur quoi porte chaque action ? Sur une personne
    directement ? Ou sur une personne via quelque chose ? »
  → Faire émerger la différence question / à qui ? vs qui/quoi ?
  → Écrire les deux colonnes au tableau sans nommer COD/COI d'abord.

Phase 3 — Exercices (15 min)
  → Exercices a-e individuellement, puis correction en binômes.
  → Circuler et noter deux erreurs fréquentes.

Phase 4 — Production orale (10 min)
  → Compte rendu oral par binôme ou petit groupe.
  → Critère minimal : 2 pronoms COD + 1 pronom COI.

Phase 5 — Bilan collectif (5 min)
  → Traiter les 2 erreurs notées pendant la circulation.
  → Synthèse au tableau : COD → le/la/les / COI → lui/leur.

POINTS DE VIGILANCE
- Le pronom leur (COI pluriel) est souvent confondu avec leur (adjectif possessif).
- L'accord du participe passé avec les pronoms COD (prévenus) dépasse le niveau B1 :
  n'en faire un point que si le groupe est solide.
- Garder la situation d'enquête légère et fictive : éviter les scénarios anxiogènes.

DIFFÉRENCIATION
- Groupe fragile : fournir la colonne des pronoms attendus en marge.
- Groupe avancé : demander un compte rendu écrit de 6-8 phrases.
```

---

### 4C. Corrigé

```
ENQUÊTE AU MUSÉE — Corrigé (réservé à l'enseignant)

EXERCICES a-e

a. Elle l'a interrogé.           (COD : le gardien → l')
b. Elle lui a téléphoné.         (COI : à la directrice → lui)
c. Elle leur a montré les photos.(COI : aux deux témoins → leur)
d. Elle lui a demandé les clés.  (COI : à l'agent → lui)
e. Elle les a prévenus.          (COD pluriel : les journalistes → les)
   Note : accord du participe passé avec COD antéposé → prévenus.
   À mentionner seulement si le groupe le remarque.

CRITÈRES DE RÉUSSITE (compte rendu oral)
- Au moins 2 pronoms COD correctement placés avant le verbe.
- Au moins 1 pronom COI correctement placé avant le verbe.
- Le compte rendu est compréhensible par un pair.

EXEMPLE DE PRODUCTION MINIMALE ACCEPTABLE
« L'inspectrice a d'abord interrogé le gardien — elle l'a interrogé
  pendant vingt minutes. Ensuite, elle a téléphoné à la directrice,
  elle lui a posé trois questions. Elle a aussi montré les photos aux
  témoins : elle les leur a montrées hier soir. »
  (Le groupe pronoms lui + les leur est B1+ : ne pas l'exiger.)
```

---

### 4D. Variante

**Variante B1 guidée (groupe fragile)**

Fournir le support avec les pronoms en marge, à choisir dans une liste : `le / la / l' / les / lui / leur`. L'apprenant n'a qu'à sélectionner et vérifier la position.

**Variante B1+ (groupe avancé)**

Ajouter 3 phrases avec pronom + accord du participe passé. Demander une justification écrite pour chaque choix.

**Variante sans grammaire explicite (immersion)**

Ne pas afficher les termes COD/COI dans la fiche étudiant. Travailler uniquement sur la question « qui/quoi ? » vs « à qui ? » et laisser les apprenants induire la règle.

**Adaptation thématique**

Remplacer l'enquête par un contexte professionnel : un commercial qui a contacté des clients, informé des fournisseurs, envoyé des documents.

---

### 4E. Version courte imprimable (25 min)

```
ENQUÊTE RAPIDE — Pronoms COD/COI (B1 — 25 min)

Situation : l'inspectrice Mora a interrogé le gardien,
            téléphoné à la directrice, prévenu les journalistes.

Transformez (remplacez le groupe entre crochets) :
1. Elle a interrogé [le gardien].     → ___
2. Elle a téléphoné [à la directrice].→ ___
3. Elle a prévenu [les journalistes]. → ___

Rappel :  COD (qui/quoi ?) → le, la, les
          COI (à qui ?)    → lui, leur

Production : dites 3 phrases à votre voisin(e) avec les bons pronoms.
```

---

## 5. Réflexion Fleator — outil de composition future

### 5A. Bénéfices

Un outil de composition de documents pédagogiques à partir de blocs (appelé ici « Fleator ») aurait des avantages réels :

- **Gain de temps enseignant** : produire une fiche étudiant propre en quelques clics plutôt que de reformater manuellement.
- **Cohérence documentaire** : tous les documents issus d'une même ressource partagent le même titre, niveau, objectif.
- **Réutilisation des blocs** : un même corrigé peut être utilisé dans plusieurs contextes (version courte, version longue, version formation).
- **Séparation nette des publics** : l'apprenant ne voit jamais ce qui est réservé à l'enseignant, par construction et non par convention.
- **Versions multiples sans redondance** : la ressource source reste unique ; les documents sont des vues calculées.

### 5B. Risques

**Usine à gaz**

Si le Fleator propose trop de combinaisons (fiche + guide + corrigé + variante + version courte + version numérique + export Word + export PDF), la complexité de configuration devient plus longue que la rédaction manuelle. C'est le piège principal.

**Redondance**

Un enseignant qui veut juste copier-coller les consignes n'a pas besoin du Fleator. Les boutons de copie actuels (`formatLearnerViewForCopy`) couvrent déjà ce besoin minimal.

**Complexité de maintenance**

Chaque bloc (situation, consigne, corrigé) doit être rédigé de manière indépendante pour être vraiment réutilisable. En pratique, les consignes font souvent référence au support, et le corrigé cite les consignes. Le découpage fin demande un travail éditorial important en amont.

**Fausse automatisation**

Si les blocs sont générés automatiquement par IA à partir de la ressource source, le résultat sera fluide mais pédagogiquement fragile : il faudra relire et corriger chaque sortie. L'automatisation ne supprime pas le travail humain, elle le déplace.

**Coût d'apprentissage**

Un outil de composition nouveau implique une courbe d'apprentissage. Si l'interface est complexe, l'enseignant pressé reviendra au copier-coller.

### 5C. Conditions préalables

Avant d'implémenter quoi que ce soit qui ressemble au Fleator, il faut d'abord :

1. **Valider que les boutons de copie actuels sont insuffisants** en les testant avec de vrais enseignants. Si `Copier le support apprenant` suffit, le Fleator est inutile.

2. **Stabiliser la structure documentaire en 4 couches** (fiche étudiant / guide prof / corrigé / variante) dans quelques ressources exemplaires. Si la structure n'est pas claire dans les données, aucun outil ne pourra en extraire des documents lisibles.

3. **Définir ce qu'est un bloc pédagogique réutilisable** (voir 5D). Sans cette définition, le Fleator ne compose rien, il concatène.

4. **Tester l'impression propre** avant de tester la composition. Si `window.print()` donne un résultat inutilisable, le problème est en amont du Fleator.

5. **Consulter des enseignants sur leurs formats réels** : utilisent-ils Word, Google Docs, des diapos, du papier ? Le format de sortie conditionne la pertinence de l'outil.

### 5D. Modèle de blocs pédagogiques réutilisables

Un bloc pédagogique est une unité de contenu autonome, identifiable par un rôle et un public.

| Bloc | Public | Contenu | Peut exister seul |
|------|--------|---------|-------------------|
| `situation` | apprenant | Texte déclencheur, document support, mise en contexte | Oui |
| `consignes` | apprenant | Étapes numérotées, tâche principale | Oui (avec situation) |
| `bilan` | apprenant | Règle, formule, mot-clé à retenir | Oui |
| `deroulé` | enseignant | Minutage, phases, actions enseignant | Non (lié à consignes) |
| `points_vigilance` | enseignant | Erreurs fréquentes, différenciation | Non (lié à deroulé) |
| `corrigé` | enseignant | Réponses, critères, exemple | Non (lié à consignes) |
| `variante` | enseignant | Version plus simple ou plus complexe | Oui (référence blocs parent) |

Un document pédagogique est une composition ordonnée de blocs selon le public et l'usage :

- **Fiche étudiant** : `situation` + `consignes` + `bilan`
- **Guide professeur** : `deroulé` + `points_vigilance` + `variante`
- **Corrigé** : `corrigé`
- **Paquet complet** : tous les blocs dans l'ordre

### 5E. Étapes progressives réalistes

**Étape 0 — Maintenant** : améliorer les boutons de copie actuels pour qu'ils produisent un texte lisible avec une hiérarchie (titres, séparations) plutôt qu'une liste plate. Zéro infrastructure supplémentaire.

**Étape 1 — Après tests enseignants** : ajouter une vue d'impression dédiée *Fiche étudiant* qui masque tout sauf `situation` + `consignes` + `bilan`, avec un CSS d'impression propre. Toujours zéro infrastructure.

**Étape 2 — Si la demande est confirmée** : permettre à l'enseignant de cocher quels blocs inclure avant d'imprimer ou de copier. Interface minimaliste, côté client uniquement.

**Étape 3 — Bien plus tard** : un générateur de documents Word/PDF à partir des blocs sélectionnés. Cela nécessite une bibliothèque de génération (docx.js ou similaire) et une décision explicite sur les dépendances.

**Étape 4 — Si la communauté existe** : un éditeur de blocs collaboratif où des enseignants proposent des situations, consignes ou variantes séparément. Cela implique un backend, une authentification et un modèle de contribution structuré.

---

## 6. Recommandations pour Codex

Ces recommandations sont classées par priorité décroissante. Chacune est réalisable sans toucher au backend.

**Priorité 1 — Améliorer les sorties texte existantes**

La fonction `formatLearnerViewForCopy` dans `resourceText.ts` produit une liste plate avec des tirets. Ajouter des séparations textuelles (`---`), des titres de section en majuscules et une ligne vide entre chaque bloc. Cela rend le texte copié directement utilisable dans Word ou Google Docs sans reformatage.

**Priorité 2 — Ajouter une vue d'impression Fiche étudiant dédiée**

Créer un mode d'impression qui n'affiche que `objectives` + `studentInstructions` + éventuellement `variants` (section Bilan). Utiliser `@media print` pour cacher tout le reste. Cette vue doit être accessible depuis un bouton visible *Imprimer la fiche apprenant*.

**Priorité 3 — Structurer quelques ressources avec les 4 couches**

Identifier 3 ou 4 ressources qui ont un `studentInstructions` clair, un `teacherGuide` utile, un `answerKey` précis. Les retravailler pour que chaque section soit vraiment autonome et lisible seule. La ressource enquête (`b1-enquete-suspect-temoin-indice`) est un bon candidat.

**Priorité 4 — Ajouter un champ `bilan` ou `learnerNote`**

Le modèle actuel n'a pas de bloc *À retenir* pour l'apprenant. Ce bloc est pourtant le plus demandé dans les ressources de grammaire. Il peut être ajouté comme section optionnelle dans `ResourceSectionKey` : `learnerSummary`. Il serait inclus dans la fiche étudiant mais pas dans le guide professeur.

**Priorité 5 — Documenter la distinction support/guide/corrigé dans les ressources demo**

Plusieurs ressources actuelles mélangent dans `studentInstructions` des éléments qui appartiendraient au guide professeur. Revoir les ressources les plus utilisées pour respecter la séparation stricte.

---

## 7. Ce qui reste différé

Les éléments suivants ne doivent pas être implémentés dans la v0 :

- Outil Fleator ou compositeur de documents
- Génération automatique de PDF ou Word
- Export en format de présentation (Impress, PowerPoint)
- Blocs pédagogiques éditables séparément dans l'interface
- Sélection de blocs à la carte avant impression
- IA de génération de blocs (situations fictives, corrigés, variantes)
- Import de ressources Markdown pour générer automatiquement des fiches étudiant

Ces éléments attendent :
1. La validation des boutons de copie actuels avec des enseignants réels.
2. La stabilisation de la structure documentaire en 4 couches.
3. La mise en place d'un backend ou d'une persistance (étape ultérieure confirmée par la doctrine du projet).

---

*Document produit dans le cadre de l'audit pédagogique et UX documentaire de FLE Commons Lab v0.2. Auteur : Antigravity. Date : 2026-05-25. Ne pas modifier sans traçabilité dans `docs/project-journal.md`.*
