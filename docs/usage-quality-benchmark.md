# Benchmark de qualité d'usage des ressources FLE Commons Lab

> Document produit le 2026-05-25. Agent : Antigravity (benchmark pédagogique et UX documentaire).
> Contraintes respectées : aucun contenu protégé reproduit, aucun développement, aucun backend.
> Lire avec : `docs/resource-granularity-strategy.md`, `docs/document-output-and-composition-strategy.md`.

---

## 1. Avertissement juridique et éthique

Ce document analyse des **principes pédagogiques et UX transférables** observés dans des ressources FLE bien conçues. Il ne reproduit aucun contenu protégé, aucune mise en page propriétaire, aucun texte, image ou activité issus de ressources tierces.

Les principes décrits ici sont des pratiques pédagogiques générales documentées dans la littérature didactique du FLE, libres de droits comme connaissances professionnelles partagées.

**À ne pas faire** : reproduire, copier, scanner, imiter directement la mise en page ou les activités de ressources commerciales ou associatives protégées. FLE Commons Lab produit ses propres ressources originales sur la base de ces principes.

---

## 2. Analyse des principes de qualité dans les ressources FLE bien conçues

Cette section synthétise les qualités observables dans les ressources FLE appréciées par les enseignants — sans désigner ni reproduire de source spécifique.

### 2A. La page d'orientation enseignant

Les ressources les plus utilisées en classe commencent par une **page d'orientation** destinée exclusivement à l'enseignant. Elle contient en général :

- niveau CECRL cible et groupe type ;
- durée et découpage (combien d'activités, dans quel ordre) ;
- objectifs pédagogiques en termes d'actions (pas de métalangage excessif) ;
- matériel à préparer ;
- suggestion de progression.

**Ce que cela apporte** : un enseignant pressé décide en 30 secondes si la ressource est utilisable pour son groupe, sans lire toute la fiche apprenant.

**Correspondance FLE Commons Lab** : l'onglet "Vue d'ensemble" remplit partiellement ce rôle, mais il inclut des métadonnées techniques (gabarit, modalité, identifiant, version) qui ne sont pas pertinentes pour la décision rapide. La section "Prise en main rapide" est sur la bonne voie.

### 2B. La structure en pack

Les ressources les plus réutilisables sont organisées en **packs modulaires** :
- une activité principale + un ou deux blocs complémentaires ;
- chaque bloc peut être utilisé seul ou en séquence ;
- les blocs sont imprimables séparément.

**Ce que cela apporte** : l'enseignant peut extraire seulement le bloc vocabulaire, ou seulement les cartes de conversation, selon le temps disponible.

**Correspondance FLE Commons Lab** : la doctrine de granularité (`docs/resource-granularity-strategy.md`) prépare exactement cette logique, mais les blocs sont encore implicites dans un seul champ `studentInstructions` rendu en liste plate.

### 2C. La modularité visible

Une ressource modulaire bien conçue montre visuellement ses composants :
- titres de section nets (SUPPORT / CONSIGNES / BILAN) ;
- séparations visuelles (ligne, encadré, couleur, blanc typographique) ;
- pagination cohérente (chaque bloc tient sur une page).

**Correspondance FLE Commons Lab** : le modèle de données sépare bien les blocs, mais le rendu web (`ContentSections`, liste plate d'items) efface cette séparation. C'est la principale lacune UX actuelle.

### 2D. Les supports visuels et tableaux

Les ressources bien conçues utilisent systématiquement des **tableaux, grilles et colonnes** pour les exercices de classement :
- tableau COD / COI (deux colonnes, exemples à placer) ;
- grille de qualités à cocher ou noter ;
- colonne "avant / après transformation".

**Ce que cela apporte** : l'apprenant voit immédiatement ce qu'il doit remplir. La consigne est dans la structure, pas seulement dans le texte.

**Correspondance FLE Commons Lab** : le format `string[]` pour `studentInstructions` ne peut pas rendre un tableau. La ressource COD/COI (`b1-pronoms-cod-coi-enquete`) décrit verbalement ce que devrait être un tableau d'observation (`'Classez les exemples en deux colonnes'`), mais ne fournit pas le tableau. Le copier-coller ne peut donc pas produire une fiche prête à l'emploi.

### 2E. Les cartes et questions découpables

Certaines ressources très populaires proposent des **cartes à découper** : questions de conversation, situations, rôles. Ces cartes :
- sont imprimables sur une ou deux pages ;
- peuvent être distribuées individuellement ;
- servent de supports manipulables.

**Correspondance FLE Commons Lab** : les variantes de type "Version orale : distribuer trois rôles fictifs" (`variants` de `b1-pronoms-cod-coi-enquete`) décrivent cette logique sans la matérialiser. Un bloc `cartes_decoupables` (liste de courts items) serait facilement imprimable depuis le presse-papier.

### 2F. Le corrigé séparé

Toutes les ressources bien conçues ont un **corrigé clairement séparé** :
- jamais sur la même page que la fiche apprenant ;
- annoté avec justifications, pas seulement les réponses ;
- utilisable indépendamment pendant la correction orale.

**Correspondance FLE Commons Lab** : le champ `answerKey` est correctement isolé dans l'onglet "Corrigés & Notes prof". La ressource COD/COI a un corrigé complet avec justifications. C'est un point fort.

### 2G. La scénarisation légère

Les ressources les plus engageantes n'utilisent pas un support factice générique ("Jean aime la musique"). Elles proposent une **situation fictive légère** qui donne une raison de faire l'exercice :
- une enquête ;
- un organigramme d'entreprise à compléter ;
- une carrière à retracer ;
- une situation professionnelle fictive.

**Ce que cela apporte** : l'apprenant a une raison contextuelle d'utiliser les formes linguistiques, pas seulement une instruction mécanique.

**Correspondance FLE Commons Lab** : la ressource COD/COI (badge disparu, interrogatoires) est un bon exemple de scénarisation légère. La ressource enquête (`b1-enquete-suspect-temoin-indice`) également. C'est la direction à maintenir.

### 2H. La mise en page imprimable

Les ressources les plus utilisées respectent des contraintes d'impression :
- marges suffisantes pour annoter ;
- polices lisibles sur papier (≥ 11pt) ;
- pas d'arrière-plan coloré qui consomme de l'encre ;
- blocs qui tiennent sur une page A4 sans coupure.

**Correspondance FLE Commons Lab** : le CSS print existant (`global.css`, lignes 1307-1464) gère les marges, la taille des polices et les coupures de page. Le `detail-hero` (header avec badges et résumé) n'est pas encore masqué à l'impression — correction à faire.

---

## 3. Panorama des types de ressources FLE appréciées

Sans faire un catalogue exhaustif ni désigner de site spécifique, on peut classer les ressources FLE selon leur qualité d'usage principale :

### Type 1 — Banques de ressources rapides

**Caractéristique principale** : accès en moins de 3 clics, filtrage par niveau et thème, téléchargement immédiat.

**Ce qui plaît** : pas de compte, pas d'abonnement pour l'essentiel, format PDF directement imprimable.

**Limite** : souvent sans guide professeur ni corrigé intégré. L'enseignant doit construire lui-même la séquence.

**Principe transférable** : la bibliothèque FLE Commons Lab doit permettre de trouver une ressource en moins de 3 interactions (filtre + carte + bouton copier).

### Type 2 — Fiches prêtes à imprimer

**Caractéristique principale** : mise en page professionnelle, fiche apprenant A4 propre, corrigé au dos ou en annexe.

**Ce qui plaît** : distributable sans reformatage. Zéro travail de mise en forme côté enseignant.

**Limite** : souvent génériques (situations peu mémorables, vocabulaire banal).

**Principe transférable** : le bouton "Copier la fiche apprenant" doit produire un texte directement utilisable dans Word. Actuellement, les accents manquants et la liste plate l'en empêchent.

### Type 3 — Ressources institutionnelles à documents authentiques

**Caractéristique principale** : documents authentiques (presse, radio, vidéo), fiche d'exploitation pédagogique, niveau B1-C1.

**Ce qui plaît** : ancrage dans le réel, thèmes actuels, légitimité du document source.

**Limite** : exploitation pédagogique souvent lourde (trop de questions, pas de scénarisation). Niveau souvent plus élevé que prévu.

**Principe transférable** : FLE Commons Lab peut proposer des fiches d'exploitation pour documents authentiques **fictifs** (simili-article, simili-reportage) pour éviter les problèmes de droits tout en gardant l'authenticité du format.

### Type 4 — Activités ludiques et conversationnelles

**Caractéristique principale** : cartes, jeux, activités en binômes ou petits groupes. Peu ou pas de métalangage grammatical.

**Ce qui plaît** : implication immédiate, parole rapide, engagement sans anxiété.

**Limite** : objectifs linguistiques souvent peu expliqués. L'enseignant doit construire le lien avec la progression.

**Principe transférable** : les activités de réemploi et de conversation de FLE Commons Lab doivent avoir un objectif linguistique clair dans le guide prof, même si la fiche apprenant n'en parle pas explicitement.

### Type 5 — Ressources lexicales et grammaticales très directes

**Caractéristique principale** : fiche sur un point précis (les pronoms, le conditionnel, le lexique du travail), exercices d'application immédiate.

**Ce qui plaît** : ciblage chirurgical, réponse directe au besoin de l'enseignant, corrigé intégré.

**Limite** : souvent décontextualisées, peu mémorables.

**Principe transférable** : la ressource COD/COI est de ce type, mais améliorée par la scénarisation légère (enquête).

---

## 4. Grille "qualité d'usage" pour FLE Commons Lab

Cette grille est applicable à toute ressource FLE Commons Lab. Elle est conçue pour être lisible par un enseignant, pas seulement par un développeur.

| Critère | Question de vérification | Oui / Partiel / Non |
|---------|--------------------------|----------------------|
| **Compréhension immédiate** | Un enseignant comprend-il en moins de 10 secondes ce que fait la ressource ? | — |
| **Prêt à imprimer** | Peut-on imprimer la fiche apprenant directement depuis le navigateur sans reformatage ? | — |
| **Support apprenant séparé** | La fiche apprenant ne contient-elle aucun élément réservé à l'enseignant ? | — |
| **Guide professeur concret** | Le guide donne-t-il des actions, pas des principes ? (déroulé minuté, pas "favoriser l'échange") | — |
| **Corrigé séparé** | Le corrigé est-il dans l'onglet enseignant, jamais dans la fiche apprenant ? | — |
| **Blocs manipulables** | Y a-t-il au moins un bloc qui peut être utilisé seul (exercice flash, cartes, bilan) ? | — |
| **Consignes actionnelles** | Les consignes commencent-elles par un verbe d'action ? ("Repérez", "Transformez", "Écrivez") | — |
| **Espaces de réponse** | Y a-t-il des blancs, tirets ou tableaux pour écrire les réponses dans la fiche apprenant ? | — |
| **Variantes** | Y a-t-il au moins une variante pour adapter la ressource (niveau, temps, modalité) ? | — |
| **Adaptation facile** | Peut-on remplacer les noms, le contexte ou le support sans réécrire les exercices ? | — |
| **Statut juridique clair** | La licence est-elle indiquée et compatible avec une utilisation en classe ? | — |
| **Charge de préparation faible** | L'enseignant peut-il utiliser la ressource sans plus d'une heure de préparation ? | — |

### Niveaux de maturité

- **⬛ Non documenté** : le critère n'est pas rempli et n'est pas encore prévu.
- **🟧 Partiel** : le critère est partiellement rempli ou présent dans les données mais pas dans le rendu.
- **🟩 Rempli** : le critère est clairement rempli dans le rendu web et dans le document imprimé.

---

## 5. Application de la grille à `b1-pronoms-cod-coi-enquete`

| Critère | Évaluation | Commentaire |
|---------|------------|-------------|
| Compréhension immédiate | 🟧 Partiel | Titre sans accents (`enquete`). Résumé informatif mais monolithique. |
| Prêt à imprimer | 🟧 Partiel | CSS print solide, mais `detail-hero` non masqué + accents absents dans le texte. |
| Support apprenant séparé | 🟩 Rempli | `answerKey` et `teacherGuide` exclusivement dans l'onglet professeur. |
| Guide professeur concret | 🟩 Rempli | Déroulé 0-90 min, erreurs fréquentes précises, différenciation intégrée. |
| Corrigé séparé | 🟩 Rempli | Complet avec justifications, dans l'onglet prof uniquement. |
| Blocs manipulables | 🟧 Partiel | Présents dans les données (dialogue, exercices, bilan) mais rendus en liste plate indifférenciée. |
| Consignes actionnelles | 🟧 Partiel | Présentes dans les items (`'Relevez les pronoms'`, `'Transformez avec le, la ou les'`) mais sans verbes fléchis (accents manquants : `Transformez` → `Transformez`). |
| Espaces de réponse | ⬛ Non | Pas de tirets `___`, tableaux ou colonnes pour écrire. Exercice 1 décrit verbalement une grille à deux colonnes sans la fournir. |
| Variantes | 🟩 Rempli | 4 variantes (plus facile, plus difficile, générique, orale). |
| Adaptation facile | 🟩 Rempli | La variante générique invite explicitement à remplacer noms et lieu. |
| Statut juridique clair | 🟩 Rempli | CC BY-SA, auteurs identifiés, aucun contenu tiers. |
| Charge de préparation faible | 🟩 Rempli | `teacherPreparationLevel: 'faible'`, matériel = fiche + tableau. |

**Score : 7 remplis / 3 partiels / 1 non documenté.**

### Ce qui fonctionne déjà

- Architecture des données (séparation des onglets, guide détaillé, corrigé avec justifications)
- Scénarisation légère (badge disparu, personnages fictifs mémorables)
- Variantes bien pensées (niveaux différents, mode oral)
- Licence et préparation claires

### Ce qui reste trop "base de données"

- Titre et textes sans accents ni apostrophes → rendu brut non distribuable
- Titres internes (`'Situation'`, `'Exercice 1: reperage'`) rendus comme puces ordinaires → structure invisible
- Absence de tableau réel dans l'exercice d'observation → la consigne décrit un tableau, mais l'apprenant ne reçoit pas le tableau

### Ce qui manque pour devenir un vrai mini-pack

Pour passer de "fiche structurée" à "mini-pack utilisable en classe" :

| Bloc manquant | Description | Complexité à ajouter |
|---------------|-------------|----------------------|
| Tableau COD / COI | Deux colonnes, apprenant remplit pendant l'observation | Éditorial : 4-5 items formatés comme tableau ASCII |
| Cartes d'exercice flash | 5 phrases courtes sur cartes séparées (version découpage) | Éditorial : nouvelle variante avec items courts |
| Page d'orientation enseignant | Une phrase par bloc : "1. Dialogue (10 min) → 2. Observation (15 min) → …" | Éditorial : reformater `lessonPlan` |
| Mémo grammatical mémorisable | Tableau COD/COI avec verbes fréquents à conserver visible | Éditorial : 6-8 entrées dans `studentInstructions` |

---

## 6. Notion de "mini-pack FLE Commons Lab"

Un **mini-pack** est une ressource FLE Commons Lab dont les blocs, pris ensemble, permettent de conduire une séquence complète sans aucune préparation supplémentaire.

Le mini-pack reste compatible avec la v0 statique : il n'implique aucun nouveau composant, aucun backend, aucun export.

### Structure cible d'un mini-pack

```
MINI-PACK FLE Commons Lab
┌─────────────────────────────────────────────────┐
│ PAGE D'ORIENTATION ENSEIGNANT (onglet prof)      │
│  • Durée par bloc                               │
│  • Ce qu'il faut préparer                       │
│  • Ce qui est dans chaque section               │
├─────────────────────────────────────────────────┤
│ FICHE APPRENANT (onglet apprenant)               │
│  • Situation d'entrée (1 paragraphe max)        │
│  • Corpus / support                             │
│  • Exercice(s) avec espaces de réponse          │
│  • Bilan / mémo                                 │
│  • Réemploi court                               │
├─────────────────────────────────────────────────┤
│ GUIDE PROFESSEUR (onglet prof)                   │
│  • Déroulé minuté                               │
│  • Points de vigilance                          │
│  • Différenciation                              │
├─────────────────────────────────────────────────┤
│ CORRIGÉ (onglet prof)                            │
│  • Réponses avec justifications                 │
│  • Exemples acceptables                         │
├─────────────────────────────────────────────────┤
│ VARIANTES (onglet prof)                          │
│  • Plus simple                                  │
│  • Plus difficile                               │
│  • Adaptation thématique                        │
└─────────────────────────────────────────────────┘
```

### Ce qui distingue un mini-pack d'une simple fiche

| Fiche simple | Mini-pack |
|-------------|-----------|
| Exercices sans contexte | Situation fictive mémorable |
| Guide prof absent ou vague | Déroulé minuté bloc par bloc |
| Corrigé mélangé ou absent | Corrigé séparé avec justifications |
| Pas de variante | Minimum une variante niveau différent |
| Un seul usage possible | Plusieurs entrées (orale, écrite, flash) |
| Mise en page non contrôlée | Lisible sur papier A4 directement |

### Conditions pour qu'une ressource FLE Commons Lab soit mini-pack

1. Les 7 critères "🟩 Rempli" de la grille qualité sont atteints.
2. La fiche apprenant contient au moins un espace de réponse réel (tiret, blanc, tableau ASCII).
3. Le guide professeur contient un déroulé avec minutage.
4. Il y a au moins une variante documentée.
5. Le titre et tous les textes contiennent les accents et apostrophes corrects.

---

## 7. Ce qu'il ne faut pas faire

### Ne pas copier les ressources existantes

Les ressources FLE Commons Lab doivent être originales. Reproduire, adapter ou s'inspirer trop directement d'une ressource commerciale ou associative protégée expose à des risques juridiques et nuit à la crédibilité du projet.

### Ne pas imiter le design d'autres ressources

La mise en page de FLE Commons Lab doit être fonctionnelle et sobre, pas une copie du style visuel d'un éditeur ou d'un réseau associatif.

### Ne pas créer de générateur PDF/DOCX maintenant

La génération de fichiers nécessite une bibliothèque (docx.js, pdfmake) et des décisions de mise en forme non triviales. Le copier-coller vers Word et l'impression navigateur couvrent le besoin immédiat sans infrastructure supplémentaire.

### Ne pas implémenter le Fleator

> **[DIFFÉRÉ — ne pas implémenter en v0]**

L'outil de composition de blocs à la carte est documenté dans `docs/document-output-and-composition-strategy.md` (section 5) et `docs/resource-granularity-strategy.md` (section 6). Il reste différé jusqu'à validation des boutons de copie actuels avec de vrais enseignants.

### Ne pas transformer la v0 en usine à gaz

Chaque nouvelle fonctionnalité documentée ici doit rester optionnelle et compatible avec la logique statique actuelle. La qualité des ressources prime sur la sophistication technique.

---

## 8. Recommandations concrètes

### Pour `b1-pronoms-cod-coi-enquete` (passe éditoriale urgente)

**Priorité 1** : corriger tous les accents et apostrophes dans `demoResources.ts` pour cette ressource. (`enquete` → `enquête`, `prete` → `prête`, `quelqu un` → `quelqu'un`, etc.) C'est la condition minimale pour que le texte copié soit distribuable.

**Priorité 2** : préfixer les titres internes dans `studentInstructions` et `teacherGuide` avec un marqueur typographique explicite. Exemple : `'▸ Situation'`, `'▸ Exercice 1 — Repérage'`, `'▸ Bilan grammatical'`. Cela rend la structure visible dans la liste plate sans modifier le composant.

**Priorité 3** : ajouter un tableau d'observation COD/COI dans `studentInstructions`. Format ASCII utilisable dans le presse-papier :
```
Pronom | Il remplace... | Construction du verbe
  l'   | le badge       | chercher qqch (direct)
  lui  | à Sami         | parler à qqn (indirect)
```

**Priorité 4** : ajouter des espaces de réponse (`___`) dans les exercices 1, 2 et 3.

### Pour les 3 prochaines ressources exemplaires

**Ressource 1 : `b1-enquete-suspect-temoin-indice`** (interaction orale)
- Même logique d'enquête, mais axée sur l'oral.
- Vérifier que `studentInstructions` est lisible seul sans le `teacherGuide`.
- Ajouter des espaces de réponse dans la mini-synthèse.
- Ajouter un bloc "mémo des formules d'hypothèse" (`peut-être`, `je pense que`, `il est possible que`).

**Ressource 2 : `a1-a2-phonetique-y-u`** (phonétique)
- Format différent des ressources de grammaire : pas d'exercice écrit mais des paires minimales.
- Proposer un bloc "liste de paires à prononcer" + un bloc "auto-évaluation" (l'apprenant coche ce qu'il entend).
- Guide prof : positionnement des lèvres, contexte sonore favorable.
- Variante : paires dans un dialogue court.

**Ressource 3 : type évaluation ou débat** (`b1-debat-limiter-ecrans` ou équivalent)
- Format différent : production orale guidée, grille d'observation.
- Fiche apprenant : position à défendre, arguments fournis ou à trouver.
- Guide prof : grille d'observation avec critères observables (cohérence, temps de parole, connecteurs).
- Corrigé : critères de réussite + exemples d'arguments acceptables.

### Pour le futur rendu imprimable

Sans modifier `src/`, deux ajouts CSS ciblés amélioreraient significativement l'impression :

1. Masquer `detail-hero` dans `@media print` : les badges et le résumé ne sont pas nécessaires sur la fiche imprimée.
2. Ajouter une classe `.print-section-title` sur les items courts des listes (heuristique : item < 60 caractères sans ponctuation finale) — risqué car fragile. Préférer la solution éditoriale (marqueurs typographiques dans les données).

### Pour le futur Fleator

> **[DIFFÉRÉ — ne pas implémenter en v0]**

Quand au moins 5 ressources respectent la structure mini-pack, envisager une interface minimaliste côté client :
1. L'enseignant coche les blocs à inclure (fiche apprenant, bilan, corrigé, variante).
2. Le texte copié est généré avec les blocs sélectionnés.
3. Aucun export, aucun backend.

Condition préalable : valider que `formatLearnerViewForCopy` et `formatTeacherViewForCopy` suffisent après correction des accents et ajout des marqueurs typographiques.

---

## 9. Garde-fous juridiques

| Pratique | Risque | Règle |
|----------|--------|-------|
| Utiliser une situation fictive similaire à une ressource existante | Faible si la situation est générique | Toujours rédiger sa propre situation, pas traduire ni adapter directement |
| Illustrer avec des exemples de l'oral français réel | Moyen si source identifiable | Utiliser des exemples fabriqués ou des formes génériques non attribuables |
| S'inspirer d'un exercice de grammaire classique | Nul (forme non protégeable) | Les types d'exercices (transformation, complétion) sont dans le domaine public |
| Utiliser des noms de personnages fictifs | Nul | Conserver des prénoms courants et génériques, sans lien avec des œuvres protégées |
| Adapter une ressource Creative Commons | Nul si licence respectée | Indiquer la source, la licence et les modifications |

---

## 10. Références

- `docs/resource-granularity-strategy.md` — doctrine des blocs pédagogiques
- `docs/document-output-and-composition-strategy.md` — doctrine ressource vs document d'usage, Fleator différé
- `docs/pedagogical-audit-grid.md` — grille d'audit interne
- `docs/resource-model.md` — modèle de données complet
- `docs/horizon-reception-product-consequences.md` — vision produit et contraintes
- `src/data/demoResources.ts` — ressources de démonstration actuelles

---

*Document produit dans le cadre du benchmark qualité d'usage FLE Commons Lab v0.2. Auteur : Antigravity. Date : 2026-05-25. Ne pas modifier sans traçabilité dans `docs/project-journal.md`.*
