# StratÃ©gie de composition et de sortie documentaire

> Document produit le 2026-05-25. Agent : Antigravity (audit pÃ©dagogique et UX documentaire).
> Contraintes respectÃ©es : aucune modification du code source, aucun backend, logique v0 statique uniquement.

---

## 1. Diagnostic de lisibilitÃ© â€” cas de la ressource enquÃªte B1

### Ressource de rÃ©fÃ©rence analysÃ©e

La ressource `b1-enquete-suspect-temoin-indice` est la ressource d'enquÃªte disponible dans `demoResources.ts`. Il n'existe pas de ressource COD/COI dans le catalogue actuel. Une maquette COD/COI en contexte enquÃªte est construite en section 4 comme ressource fictive de dÃ©monstration, afin de montrer concrÃ¨tement les problÃ¨mes de lisibilitÃ© et les solutions envisagÃ©es.

**Remarque prÃ©alable** : la recherche de termes `COD`, `COI`, `pronoms`, `enquete-suspect` dans `demoResources.ts` ne retourne aucune ressource. La mission parent demandait explicitement de traiter la ressource la plus proche si la ressource COD/COI n'existait pas.

### ProblÃ¨mes de lisibilitÃ© identifiÃ©s sur la ressource enquÃªte existante

La ressource `b1-enquete-suspect-temoin-indice` est de bonne qualitÃ© globale, mais prÃ©sente plusieurs points de tension qui se retrouveraient a fortiori dans une ressource grammaire + jeu d'enquÃªte :

**DensitÃ© du texte**

Le champ `studentInstructions` contient six items. Chacun est long (une Ã  deux lignes). L'ensemble forme un bloc de consignes difficile Ã  lire d'un coup, surtout sur une feuille A4 imprimÃ©e. L'apprenant ne sait pas immÃ©diatement quelle est la tÃ¢che principale et quelles sont les Ã©tapes secondaires.

**Confusion entre couches documentaires**

Dans la version actuelle, le `lessonPlan` (dÃ©roulÃ©) et les `studentInstructions` (support apprenant) sont deux sections distinctes dans le modÃ¨le, mais dans la vue web onglet *Contenu apprenant*, elles s'affichent l'une aprÃ¨s l'autre sans sÃ©paration visuelle forte. Un enseignant qui imprime cette vue obtient un document mÃªlant consignes pÃ©dagogiques (Ã  ne pas donner aux apprenants) et support apprenant (Ã  distribuer).

**Consignes trop longues**

L'item `PrÃ©parez trois questions : OÃ¹ Ã©tiez-vous ? Qu'est-ce que vous avez vu ? Ã€ quelle heure Ãªtes-vous parti(e) ?` combine une instruction et trois exemples dans la mÃªme phrase liste. L'apprenant doit lire deux fois pour comprendre ce qu'il doit faire.

**Exercices mal sÃ©parÃ©s**

Les items du `studentInstructions` ne distinguent pas visuellement : (1) la mise en situation, (2) la consigne principale, (3) les Ã©tapes, (4) la consigne de synthÃ¨se. Tout est sur le mÃªme niveau de liste.

**Absence de respiration typographique**

Dans la vue imprimÃ©e (onglet Contenu apprenant + `window.print()`), les items sont des puces au mÃªme niveau. Aucun titre de section intermÃ©diaire, aucune ligne vide visuelle, aucune hiÃ©rarchie. Sur une feuille A4, le rÃ©sultat est un bloc compact.

**DifficultÃ© d'impression**

La `print-qa-notes.md` documentait dÃ©jÃ  ce problÃ¨me. La vue imprimÃ©e actuelle inclut potentiellement les mÃ©tadonnÃ©es (niveau, durÃ©e, auteurs, licence) avant le support apprenant, ce qui prend de la place et n'est pas utile pour l'Ã©lÃ¨ve. Le corrigÃ© et le guide professeur, mÃªme dans l'onglet apprenant, risquent d'apparaÃ®tre si l'impression est mal dÃ©clenchÃ©e.

**Surcharge de mÃ©tadonnÃ©es**

Le modÃ¨le `Resource` comporte 30+ champs. MÃªme si la vue apprenant les masque, la fiche complÃ¨te (onglet Vue d'ensemble) affiche niveau, durÃ©e, compÃ©tences, gabarit, modalitÃ©, licence, auteurs, alertes de prÃ©paration. Un enseignant pressÃ© qui veut juste imprimer le support Ã©tudiant doit naviguer dans les onglets pour trouver le bon bouton.

---

## 2. Doctrine : ressource interne vs document d'usage

Une ressource FLE Commons Lab est un objet de donnÃ©es structurÃ©. Elle n'est pas un document. Cette distinction est fondamentale.

### Ressource structurÃ©e interne (objet de donnÃ©es)

C'est ce qui existe dans `demoResources.ts` et ce que dÃ©crit `src/types/resource.ts`. Elle contient tous les champs : mÃ©tadonnÃ©es, objectifs, dÃ©roulÃ©, support apprenant, guide professeur, corrigÃ©, variantes, retours, suggestions, audit, IA, technique, version.

Elle sert Ã  filtrer, indexer, afficher, copier et versionner. Elle n'est pas destinÃ©e Ã  Ãªtre lue d'une traite. Elle n'est pas imprimable telle quelle.

### Fiche web de consultation (onglets, survol rapide)

C'est la vue actuelle dans `ResourceDetail.tsx` avec ses onglets. Elle permet de dÃ©cider vite (Vue d'ensemble), de consulter le contenu apprenant (Contenu apprenant) et d'accÃ©der aux outils enseignant (CorrigÃ©s & Notes prof).

Elle est adaptÃ©e Ã  la dÃ©cision et Ã  la consultation. Elle n'est pas adaptÃ©e Ã  l'impression directe ni Ã  la distribution en classe.

### Fiche Ã©tudiant (document imprimable class-ready)

C'est le document qu'un enseignant distribue ou projette. Il contient uniquement : titre de la ressource, niveau et durÃ©e, objectif en une phrase, support (texte, situation, corpus, document), consignes claires et numÃ©rotÃ©es, espace de travail si nÃ©cessaire.

Il ne contient pas : guide professeur, corrigÃ©, retours d'usage, mÃ©tadonnÃ©es techniques, alertes de prÃ©paration.

### Guide professeur (document de prÃ©paration)

C'est le document qu'un enseignant lit avant la sÃ©ance. Il contient : dÃ©roulÃ© avec minutage, points de vigilance, diffÃ©renciation, variantes, erreurs frÃ©quentes, matÃ©riel Ã  prÃ©parer.

Il ne contient pas : le support apprenant (sauf en rÃ©fÃ©rence compacte).

### CorrigÃ© (document de correction)

C'est le document qu'un enseignant utilise pendant ou aprÃ¨s la sÃ©ance. Il contient : rÃ©ponses attendues, critÃ¨res observables, exemples de productions acceptables, barÃ¨me si Ã©valuation.

Il ne contient pas : les consignes Ã©tudiantes complÃ¨tes. Il peut en citer un extrait pour rÃ©fÃ©rence.

### Document complet imprimable (paquet enseignant)

C'est la concatÃ©nation ordonnÃ©e : fiche Ã©tudiant + guide professeur + corrigÃ© + variante. Il est utile pour partager une ressource en formation d'Ã©quipe ou pour l'archiver. Il n'est pas destinÃ© Ã  une distribution directe aux apprenants.

### ConsÃ©quence pour la v0

Le modÃ¨le actuel gÃ©nÃ¨re un texte copiable (`formatLearnerViewForCopy`, `formatTeacherViewForCopy` dans `resourceText.ts`) mais ces fonctions produisent des listes plate sans structure de document. Elles sont un premier pas utile, pas un document class-ready.

---

## 3. Structure cible par couche documentaire

### A. Vue enseignant rapide (web)

**Objectif** : dÃ©cision en moins de 5 secondes.

Structure suffisante :
- Titre + niveau + durÃ©e + compÃ©tence principale
- RÃ©sumÃ© court (2 phrases max)
- Statut de rÃ©utilisabilitÃ© (prÃªt Ã  utiliser / Ã  tester / Ã  complÃ©ter)
- Un seul bouton visible : Voir le support apprenant

Ce qui doit Ãªtre masquÃ© par dÃ©faut : mÃ©tadonnÃ©es IA, technique, retours d'usage, audit, versions, suggestions de contribution.

### B. Fiche Ã©tudiant

**Objectif** : distribuer ou projeter directement.

Structure :

```
[Titre â€” niveau â€” durÃ©e]
[Objectif en une phrase]
---
SUPPORT
[Texte / situation / document]
---
CONSIGNES
1. [Consigne principale]
2. [Ã‰tape]
3. [Production attendue]
---
BILAN
[Ce qu'on retiendra : une rÃ¨gle, une formule, un mot-clÃ©]
```

Ce qui ne doit pas apparaÃ®tre : guide professeur, corrigÃ©, mÃ©tadonnÃ©es.

### C. Guide professeur

**Objectif** : prÃ©parer et animer sans avoir conÃ§u la ressource.

Structure :

```
[Titre â€” niveau â€” durÃ©e estimÃ©e â€” matÃ©riel]
AVANT LA SÃ‰ANCE
- [PrÃ©parer / imprimer / tester]
DÃ‰ROULÃ‰ (avec minutage)
- [Phase 1 : x min â€” action enseignant]
- [Phase 2 : x min â€” action enseignant]
POINTS DE VIGILANCE
- [Erreur frÃ©quente]
- [DiffÃ©renciation possible]
VARIANTES
- [Plus simple / plus difficile]
```

### D. CorrigÃ©

**Objectif** : corriger rapidement, avec des critÃ¨res observables.

Structure :

```
[Titre â€” rÃ©fÃ©rence exercice]
RÃ‰PONSES ATTENDUES
- [Exercice 1 : rÃ©ponse / critÃ¨re]
- [Exercice 2 : rÃ©ponse / critÃ¨re]
CRITÃˆRES DE RÃ‰USSITE
- [Ce qu'on accepte / ce qu'on n'accepte pas]
EXEMPLE DE PRODUCTION ATTENDUE
- [Exemple minimal acceptable]
```

---

## 4. Maquette appliquÃ©e : pronoms COD/COI dans une enquÃªte (B1)

Cette section produit une maquette textuelle pour une ressource fictive Ã  crÃ©er. Elle n'existe pas dans le catalogue actuel. Elle illustre concrÃ¨tement la doctrine de la section 3.

**Situation fictive** : une stagiaire de la brigade fictive de Fontaine-les-Roses cherche le voleur d'un tableau disparu du musÃ©e local. Les suspects ont Ã©tÃ© vus, interrogÃ©s, mais les enquÃªteurs n'arrivent pas Ã  se souvenir de qui a vu qui, qui a parlÃ© Ã  qui.

**Objectif grammatical** : distinguer COD (complÃ©ment d'objet direct) et COI (complÃ©ment d'objet indirect) et utiliser les pronoms correspondants (le/la/les vs lui/leur) dans des phrases de compte rendu oral.

**Niveau** : B1. DurÃ©e : 55 minutes.

---

### 4A. Fiche Ã©tudiant

```
ENQUÃŠTE AU MUSÃ‰E â€” Les pronoms COD et COI
Niveau B1 â€” 55 minutes

Objectif : remplacer un complÃ©ment par le bon pronom (le, la, les, lui, leur)
           pour Ã©viter les rÃ©pÃ©titions dans votre compte rendu d'enquÃªte.

â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
SUPPORT â€” Le carnet de l'inspectrice

Ce matin, l'inspectrice Mora a :
  - interrogÃ© le gardien du musÃ©e
  - tÃ©lÃ©phonÃ© Ã  la directrice
  - montrÃ© les photos des suspects Ã  deux tÃ©moins
  - demandÃ© les clÃ©s Ã  l'agent de sÃ©curitÃ©
  - prÃ©venu les journalistes

â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
CONSIGNES

1. Lisez les actions de l'inspectrice.
   Pour chaque verbe, posez-vous la question :
   â†’ Qui / quoi ? (COD) â†’ pronom : le, la, les
   â†’ Ã€ qui ? (COI)      â†’ pronom : lui, leur

2. Transformez les phrases en remplaÃ§ant le groupe soulignÃ©.
   a. Elle a interrogÃ© [le gardien].       â†’ Elle ___ a interrogÃ©.
   b. Elle a tÃ©lÃ©phonÃ© [Ã  la directrice].  â†’ Elle ___ a tÃ©lÃ©phonÃ©.
   c. Elle a montrÃ© les photos [aux deux tÃ©moins]. â†’ Elle ___ a montrÃ© les photos.
   d. Elle a demandÃ© les clÃ©s [Ã  l'agent]. â†’ Elle ___ a demandÃ© les clÃ©s.
   e. Elle a prÃ©venu [les journalistes].   â†’ Elle ___ a prÃ©venus.

3. PrÃ©parez un compte rendu oral de 5 phrases.
   Utilisez au moins 2 pronoms COD et 1 pronom COI.
   Commencez par : Â« L'inspectrice a d'abord... ensuite elle... Â»

â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
BILAN â€” Ã€ retenir

  COD (qui ? / quoi ?)  â†’  le, la, les
  COI (Ã  qui ?)         â†’  lui, leur
  Le pronom se place AVANT le verbe conjuguÃ©.
```

---

### 4B. Guide professeur

```
ENQUÃŠTE AU MUSÃ‰E â€” Guide professeur (B1 â€” 55 min)

MATÃ‰RIEL : fiche Ã©tudiant Ã  imprimer ou Ã  projeter.
           Aucun matÃ©riel numÃ©rique requis.

AVANT LA SÃ‰ANCE
- RepÃ©rer les verbes transitifs directs et indirects du support.
- PrÃ©voir deux exemples au tableau : verbe + COD / verbe + COI.

DÃ‰ROULÃ‰

Phase 1 â€” Mise en route (10 min)
  â†’ Poser : Â« Qu'est-ce qu'une enquÃªte ? Qui interroge qui ? Â»
  â†’ Faire lire les 5 actions de l'inspectrice Ã  voix haute.
  â†’ Ne pas encore parler de COD/COI.

Phase 2 â€” Observation (15 min)
  â†’ Demander : Â« Sur quoi porte chaque action ? Sur une personne
    directement ? Ou sur une personne via quelque chose ? Â»
  â†’ Faire Ã©merger la diffÃ©rence question / Ã  qui ? vs qui/quoi ?
  â†’ Ã‰crire les deux colonnes au tableau sans nommer COD/COI d'abord.

Phase 3 â€” Exercices (15 min)
  â†’ Exercices a-e individuellement, puis correction en binÃ´mes.
  â†’ Circuler et noter deux erreurs frÃ©quentes.

Phase 4 â€” Production orale (10 min)
  â†’ Compte rendu oral par binÃ´me ou petit groupe.
  â†’ CritÃ¨re minimal : 2 pronoms COD + 1 pronom COI.

Phase 5 â€” Bilan collectif (5 min)
  â†’ Traiter les 2 erreurs notÃ©es pendant la circulation.
  â†’ SynthÃ¨se au tableau : COD â†’ le/la/les / COI â†’ lui/leur.

POINTS DE VIGILANCE
- Le pronom leur (COI pluriel) est souvent confondu avec leur (adjectif possessif).
- L'accord du participe passÃ© avec les pronoms COD (prÃ©venus) dÃ©passe le niveau B1 :
  n'en faire un point que si le groupe est solide.
- Garder la situation d'enquÃªte lÃ©gÃ¨re et fictive : Ã©viter les scÃ©narios anxiogÃ¨nes.

DIFFÃ‰RENCIATION
- Groupe fragile : fournir la colonne des pronoms attendus en marge.
- Groupe avancÃ© : demander un compte rendu Ã©crit de 6-8 phrases.
```

---

### 4C. CorrigÃ©

```
ENQUÃŠTE AU MUSÃ‰E â€” CorrigÃ© (rÃ©servÃ© Ã  l'enseignant)

EXERCICES a-e

a. Elle l'a interrogÃ©.           (COD : le gardien â†’ l')
b. Elle lui a tÃ©lÃ©phonÃ©.         (COI : Ã  la directrice â†’ lui)
c. Elle leur a montrÃ© les photos.(COI : aux deux tÃ©moins â†’ leur)
d. Elle lui a demandÃ© les clÃ©s.  (COI : Ã  l'agent â†’ lui)
e. Elle les a prÃ©venus.          (COD pluriel : les journalistes â†’ les)
   Note : accord du participe passÃ© avec COD antÃ©posÃ© â†’ prÃ©venus.
   Ã€ mentionner seulement si le groupe le remarque.

CRITÃˆRES DE RÃ‰USSITE (compte rendu oral)
- Au moins 2 pronoms COD correctement placÃ©s avant le verbe.
- Au moins 1 pronom COI correctement placÃ© avant le verbe.
- Le compte rendu est comprÃ©hensible par un pair.

EXEMPLE DE PRODUCTION MINIMALE ACCEPTABLE
Â« L'inspectrice a d'abord interrogÃ© le gardien â€” elle l'a interrogÃ©
  pendant vingt minutes. Ensuite, elle a tÃ©lÃ©phonÃ© Ã  la directrice,
  elle lui a posÃ© trois questions. Elle a aussi montrÃ© les photos aux
  tÃ©moins : elle les leur a montrÃ©es hier soir. Â»
  (Le groupe pronoms lui + les leur est B1+ : ne pas l'exiger.)
```

---

### 4D. Variante

**Variante B1 guidÃ©e (groupe fragile)**

Fournir le support avec les pronoms en marge, Ã  choisir dans une liste : `le / la / l' / les / lui / leur`. L'apprenant n'a qu'Ã  sÃ©lectionner et vÃ©rifier la position.

**Variante B1+ (groupe avancÃ©)**

Ajouter 3 phrases avec pronom + accord du participe passÃ©. Demander une justification Ã©crite pour chaque choix.

**Variante sans grammaire explicite (immersion)**

Ne pas afficher les termes COD/COI dans la fiche Ã©tudiant. Travailler uniquement sur la question Â« qui/quoi ? Â» vs Â« Ã  qui ? Â» et laisser les apprenants induire la rÃ¨gle.

**Adaptation thÃ©matique**

Remplacer l'enquÃªte par un contexte professionnel : un commercial qui a contactÃ© des clients, informÃ© des fournisseurs, envoyÃ© des documents.

---

### 4E. Version courte imprimable (25 min)

```
ENQUÃŠTE RAPIDE â€” Pronoms COD/COI (B1 â€” 25 min)

Situation : l'inspectrice Mora a interrogÃ© le gardien,
            tÃ©lÃ©phonÃ© Ã  la directrice, prÃ©venu les journalistes.

Transformez (remplacez le groupe entre crochets) :
1. Elle a interrogÃ© [le gardien].     â†’ ___
2. Elle a tÃ©lÃ©phonÃ© [Ã  la directrice].â†’ ___
3. Elle a prÃ©venu [les journalistes]. â†’ ___

Rappel :  COD (qui/quoi ?) â†’ le, la, les
          COI (Ã  qui ?)    â†’ lui, leur

Production : dites 3 phrases Ã  votre voisin(e) avec les bons pronoms.
```

---

## 5. RÃ©flexion Fleator â€” outil de composition future

[DIFFERE - ne pas implementer en v0]

### 5A. BÃ©nÃ©fices

Un outil de composition de documents pÃ©dagogiques Ã  partir de blocs (appelÃ© ici Â« Fleator Â») aurait des avantages rÃ©els :

- **Gain de temps enseignant** : produire une fiche Ã©tudiant propre en quelques clics plutÃ´t que de reformater manuellement.
- **CohÃ©rence documentaire** : tous les documents issus d'une mÃªme ressource partagent le mÃªme titre, niveau, objectif.
- **RÃ©utilisation des blocs** : un mÃªme corrigÃ© peut Ãªtre utilisÃ© dans plusieurs contextes (version courte, version longue, version formation).
- **SÃ©paration nette des publics** : l'apprenant ne voit jamais ce qui est rÃ©servÃ© Ã  l'enseignant, par construction et non par convention.
- **Versions multiples sans redondance** : la ressource source reste unique ; les documents sont des vues calculÃ©es.

### 5B. Risques

**Usine Ã  gaz**

Si le Fleator propose trop de combinaisons (fiche + guide + corrigÃ© + variante + version courte + version numÃ©rique + export Word + export PDF), la complexitÃ© de configuration devient plus longue que la rÃ©daction manuelle. C'est le piÃ¨ge principal.

**Redondance**

Un enseignant qui veut juste copier-coller les consignes n'a pas besoin du Fleator. Les boutons de copie actuels (`formatLearnerViewForCopy`) couvrent dÃ©jÃ  ce besoin minimal.

**ComplexitÃ© de maintenance**

Chaque bloc (situation, consigne, corrigÃ©) doit Ãªtre rÃ©digÃ© de maniÃ¨re indÃ©pendante pour Ãªtre vraiment rÃ©utilisable. En pratique, les consignes font souvent rÃ©fÃ©rence au support, et le corrigÃ© cite les consignes. Le dÃ©coupage fin demande un travail Ã©ditorial important en amont.

**Fausse automatisation**

Si les blocs sont gÃ©nÃ©rÃ©s automatiquement par IA Ã  partir de la ressource source, le rÃ©sultat sera fluide mais pÃ©dagogiquement fragile : il faudra relire et corriger chaque sortie. L'automatisation ne supprime pas le travail humain, elle le dÃ©place.

**CoÃ»t d'apprentissage**

Un outil de composition nouveau implique une courbe d'apprentissage. Si l'interface est complexe, l'enseignant pressÃ© reviendra au copier-coller.

### 5C. Conditions prÃ©alables

Avant d'implÃ©menter quoi que ce soit qui ressemble au Fleator, il faut d'abord :

1. **Valider que les boutons de copie actuels sont insuffisants** en les testant avec de vrais enseignants. Si `Copier le support apprenant` suffit, le Fleator est inutile.

2. **Stabiliser la structure documentaire en 4 couches** (fiche Ã©tudiant / guide prof / corrigÃ© / variante) dans quelques ressources exemplaires. Si la structure n'est pas claire dans les donnÃ©es, aucun outil ne pourra en extraire des documents lisibles.

3. **DÃ©finir ce qu'est un bloc pÃ©dagogique rÃ©utilisable** (voir 5D). Sans cette dÃ©finition, le Fleator ne compose rien, il concatÃ¨ne.

4. **Tester l'impression propre** avant de tester la composition. Si `window.print()` donne un rÃ©sultat inutilisable, le problÃ¨me est en amont du Fleator.

5. **Consulter des enseignants sur leurs formats rÃ©els** : utilisent-ils Word, Google Docs, des diapos, du papier ? Le format de sortie conditionne la pertinence de l'outil.

### 5D. ModÃ¨le de blocs pÃ©dagogiques rÃ©utilisables

[DIFFERE - ne pas implementer en v0]

Un bloc pÃ©dagogique est une unitÃ© de contenu autonome, identifiable par un rÃ´le et un public.

| Bloc | Public | Contenu | Peut exister seul |
|------|--------|---------|-------------------|
| `situation` | apprenant | Texte dÃ©clencheur, document support, mise en contexte | Oui |
| `consignes` | apprenant | Ã‰tapes numÃ©rotÃ©es, tÃ¢che principale | Oui (avec situation) |
| `bilan` | apprenant | RÃ¨gle, formule, mot-clÃ© Ã  retenir | Oui |
| `deroulÃ©` | enseignant | Minutage, phases, actions enseignant | Non (liÃ© Ã  consignes) |
| `points_vigilance` | enseignant | Erreurs frÃ©quentes, diffÃ©renciation | Non (liÃ© Ã  deroulÃ©) |
| `corrigÃ©` | enseignant | RÃ©ponses, critÃ¨res, exemple | Non (liÃ© Ã  consignes) |
| `variante` | enseignant | Version plus simple ou plus complexe | Oui (rÃ©fÃ©rence blocs parent) |

Un document pÃ©dagogique est une composition ordonnÃ©e de blocs selon le public et l'usage :

- **Fiche Ã©tudiant** : `situation` + `consignes` + `bilan`
- **Guide professeur** : `deroulÃ©` + `points_vigilance` + `variante`
- **CorrigÃ©** : `corrigÃ©`
- **Paquet complet** : tous les blocs dans l'ordre

### 5E. Ã‰tapes progressives rÃ©alistes

**Ã‰tape 0 â€” Maintenant** : amÃ©liorer les boutons de copie actuels pour qu'ils produisent un texte lisible avec une hiÃ©rarchie (titres, sÃ©parations) plutÃ´t qu'une liste plate. ZÃ©ro infrastructure supplÃ©mentaire.

**Ã‰tape 1 â€” AprÃ¨s tests enseignants** : ajouter une vue d'impression dÃ©diÃ©e *Fiche Ã©tudiant* qui masque tout sauf `situation` + `consignes` + `bilan`, avec un CSS d'impression propre. Toujours zÃ©ro infrastructure.

**Ã‰tape 2 â€” Si la demande est confirmÃ©e** : permettre Ã  l'enseignant de cocher quels blocs inclure avant d'imprimer ou de copier. Interface minimaliste, cÃ´tÃ© client uniquement.

**Ã‰tape 3 â€” Bien plus tard** : un gÃ©nÃ©rateur de documents Word/PDF Ã  partir des blocs sÃ©lectionnÃ©s. Cela nÃ©cessite une bibliothÃ¨que de gÃ©nÃ©ration (docx.js ou similaire) et une dÃ©cision explicite sur les dÃ©pendances.

**Ã‰tape 4 â€” Si la communautÃ© existe** : un Ã©diteur de blocs collaboratif oÃ¹ des enseignants proposent des situations, consignes ou variantes sÃ©parÃ©ment. Cela implique un backend, une authentification et un modÃ¨le de contribution structurÃ©.

---

## 6. Recommandations pour Codex

Ces recommandations sont classÃ©es par prioritÃ© dÃ©croissante. Chacune est rÃ©alisable sans toucher au backend.

**PrioritÃ© 1 â€” AmÃ©liorer les sorties texte existantes**

La fonction `formatLearnerViewForCopy` dans `resourceText.ts` produit une liste plate avec des tirets. Ajouter des sÃ©parations textuelles (`---`), des titres de section en majuscules et une ligne vide entre chaque bloc. Cela rend le texte copiÃ© directement utilisable dans Word ou Google Docs sans reformatage.

**PrioritÃ© 2 â€” Ajouter une vue d'impression Fiche Ã©tudiant dÃ©diÃ©e**

CrÃ©er un mode d'impression qui n'affiche que `objectives` + `studentInstructions` + Ã©ventuellement `variants` (section Bilan). Utiliser `@media print` pour cacher tout le reste. Cette vue doit Ãªtre accessible depuis un bouton visible *Imprimer la fiche apprenant*.

**PrioritÃ© 3 â€” Structurer quelques ressources avec les 4 couches**

Identifier 3 ou 4 ressources qui ont un `studentInstructions` clair, un `teacherGuide` utile, un `answerKey` prÃ©cis. Les retravailler pour que chaque section soit vraiment autonome et lisible seule. La ressource enquÃªte (`b1-enquete-suspect-temoin-indice`) est un bon candidat.

**PrioritÃ© 4 â€” Ajouter un champ `bilan` ou `learnerNote`**

Le modÃ¨le actuel n'a pas de bloc *Ã€ retenir* pour l'apprenant. Ce bloc est pourtant le plus demandÃ© dans les ressources de grammaire. Il peut Ãªtre ajoutÃ© comme section optionnelle dans `ResourceSectionKey` : `learnerSummary`. Il serait inclus dans la fiche Ã©tudiant mais pas dans le guide professeur.

**PrioritÃ© 5 â€” Documenter la distinction support/guide/corrigÃ© dans les ressources demo**

Plusieurs ressources actuelles mÃ©langent dans `studentInstructions` des Ã©lÃ©ments qui appartiendraient au guide professeur. Revoir les ressources les plus utilisÃ©es pour respecter la sÃ©paration stricte.

---

## 7. Ce qui reste diffÃ©rÃ©

Les Ã©lÃ©ments suivants ne doivent pas Ãªtre implÃ©mentÃ©s dans la v0 :

- Outil Fleator ou compositeur de documents
- GÃ©nÃ©ration automatique de PDF ou Word
- Export en format de prÃ©sentation (Impress, PowerPoint)
- Blocs pÃ©dagogiques Ã©ditables sÃ©parÃ©ment dans l'interface
- SÃ©lection de blocs Ã  la carte avant impression
- IA de gÃ©nÃ©ration de blocs (situations fictives, corrigÃ©s, variantes)
- Import de ressources Markdown pour gÃ©nÃ©rer automatiquement des fiches Ã©tudiant

Ces Ã©lÃ©ments attendent :
1. La validation des boutons de copie actuels avec des enseignants rÃ©els.
2. La stabilisation de la structure documentaire en 4 couches.
3. La mise en place d'un backend ou d'une persistance (Ã©tape ultÃ©rieure confirmÃ©e par la doctrine du projet).

---

*Document produit dans le cadre de l'audit pÃ©dagogique et UX documentaire de FLE Commons Lab v0.2. Auteur : Antigravity. Date : 2026-05-25. Ne pas modifier sans traÃ§abilitÃ© dans `docs/project-journal.md`.*

