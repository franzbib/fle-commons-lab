# Plan de montée en qualité des ressources de démonstration

> Document produit le 2026-05-25. Agent : Antigravity (audit éditorial et pédagogique).
> Contraintes respectées : aucun code, aucun `src/` modifié, aucun contenu protégé reproduit.
> Lire avec : `docs/usage-quality-benchmark.md`, `docs/resource-granularity-strategy.md`.

---

## 1. Inventaire typologique des ressources actuelles

FLE Commons Lab compte **19 ressources** et **5 collections** dans `src/data/demoResources.ts`.

### 1A. Ressources déjà solides (prêtes à devenir étalons avec corrections mineures)

Ces ressources ont une structure complète, un guide prof concret, un corrigé utilisable et au moins une variante. Elles souffrent principalement de problèmes d'accents ou de rendu en liste plate.

| ID | Titre | Niveau | Famille | Problème principal |
|----|-------|--------|---------|-------------------|
| `b1-pronoms-cod-coi-enquete` | Les pronoms COD et COI dans une enquête | B1 | Grammaire inductive | Accents absents, titres internes non différenciés, espaces de réponse manquants |
| `b1-enquete-suspect-temoin-indice` | Enquête en classe : interroger, comparer, accuser | B1 | Activité scénarisée | Bonne structure, retour d'usage, variantes — à vérifier pour les accents |
| `b2-notes-video-courte` | Prise de notes B2 : l'essentiel d'une vidéo courte | B2 | Compréhension / méthodologie | Gabarit fort (grille 3 colonnes), retours d'usage — vérifier accents |
| `a1-a2-phonetique-y-u` | Phonétique : entendre et dire [y] / [u] | A1/A2 | Phonétique | Rituel testé, 30 min, réutilisable — le plus court du catalogue |

### 1B. Ressources prometteuses mais à enrichir

Bonne idée pédagogique, situation fictive correcte, mais guide prof trop court, corrigé insuffisant ou variantes manquantes.

| ID | Titre | Niveau | Famille | À enrichir |
|----|-------|--------|---------|-----------|
| `a2-passe-compose-week-end` | Passé composé : raconter son week-end | A2 | Grammaire | Résumé correct, mais guide prof à détailler, corrigé à compléter, espaces de réponse absents |
| `b1-pronoms-y-en-ville` | Pronoms y et en : se repérer en ville | B1 | Grammaire inductive | Schéma de ville utile — à enrichir avec corpus d'observation et bilan grammatical |
| `b1-cause-consequence-quotidien` | Cause et conséquence : expliquer un retard | B1 | Grammaire / connecteurs | 45 min, individuel — guide prof trop court, pas de tableau de connecteurs |
| `b1-debat-limiter-ecrans` | Débat guidé : faut-il limiter les écrans ? | B1 | Oral / évaluation | Cartes neutres suggérées — manque grille d'observation pour l'évaluation orale |
| `b1-prompt-roleplay-entretien` | Jeu de rôle B1 : entretien professionnel | B1 | Oral / FOU | Fiche courte (45 min), bien positionnée — à enrichir avec cartes rôles |
| `b2-esprit-critique-reponse-ia` | Esprit critique : vérifier une réponse IA fictive | B2 | Littératie numérique | Sujet porteur — à enrichir avec grille d'analyse et exemples de formulations prudentes |

### 1C. Ressources trop démonstratives

Conçues pour montrer le modèle de données plutôt qu'être réellement utilisées en classe. Scénarisation faible ou thème générique.

| ID | Titre | Niveau | Famille | Problème |
|----|-------|--------|---------|---------|
| `a1-se-presenter-sans-numerique` | Se présenter sans support numérique | A1 | Oral | Très générique, pas de situation fictive, activité trop banale |
| `b2-reformuler-information-presse` | Reformuler une brève de presse fictive | B2 | Compréhension écrite | Situation correcte mais guide prof minimal, pas de corpus d'observation |
| `mixte-demarche-administrative-en-ligne` | Comprendre une démarche administrative fictive | Mixte | FOU / numérique | Pertinent mais trop centré sur la navigation web fictive — peu adaptable |
| `a2-b1-logement-signaler-probleme` | Logement : signaler un problème | A2/B1 | Oral / vie pratique | Utile, mais trop court pour être un mini-pack, fiche apprenant à enrichir |

### 1D. Ressources utiles seulement pour tester le modèle

Créées pour valider des fonctionnalités (collections, IA metadata, multiformat). Peu directement utilisables en classe sans réécriture significative.

| ID | Titre | Niveau | Famille | Statut |
|----|-------|--------|---------|-------|
| `b1-b2-atelier-ia-ameliorer-consigne` | Atelier IA : analyser et améliorer une consigne | B1/B2 | Littératie numérique | Bien structuré mais complexe — le thème est pertinent, à reformuler plus simplement |
| `c1-debat-traduction-automatique` | C1 : débattre de la traduction automatique | C1 | Oral / débat | Niveau peu représenté, complexe — utile pour la diversité mais pas prioritaire |
| `mixte-creer-ressource-fle-ouverte` | Projet : transformer un support en ressource partageable | Mixte | Formation d'enseignants | 3 séances, 180 min — projet utile pour la communauté mais pas un gabarit de cours |
| `b2-expose-carte-mentale-numerique` | Exposé B2 : plan avec une carte mentale | B2 | Méthodologie | Utile, mais dépend d'un outil numérique externe — à reformuler en version papier-crayon |
| `a0-rituel-images-mots` | A0 : rituel images-mots en 12 minutes | A0 | Lexique / rituel | Très court, très basique — utile comme rituel mais pas structuré en mini-pack |

---

## 2. Définition : la ressource étalon FLE Commons Lab

Une **ressource étalon** FLE Commons Lab est une ressource dont la qualité est suffisante pour :
1. servir de modèle à de nouvelles ressources du même type ;
2. illustrer concrètement la doctrine de granularité (`docs/resource-granularity-strategy.md`) ;
3. valider les choix UX du rendu web et de l'impression ;
4. être partagée sans honte dans une formation d'enseignants.

### Critères d'une ressource étalon

| Critère | Seuil minimal |
|---------|--------------|
| **Titre** | Clair, avec accents, orienté usage (pas "Fiche grammaire B1") |
| **Résumé** | 2 phrases max, orienté enseignant pressé |
| **Situation** | Fictive, mémorable, juridiquement sûre, adaptable |
| **Fiche apprenant** | Lisible seule, sans info réservée prof, avec espaces de réponse |
| **Blocs visibles** | Titres internes distincts (marqueurs typographiques ou sections séparées) |
| **Guide prof** | Déroulé minuté, points de vigilance, différenciation |
| **Corrigé** | Réponses + justifications + exemple de production acceptable |
| **Variantes** | Au minimum : version plus facile et adaptation thématique |
| **Retour d'usage** | Au moins un retour simulé sobre et crédible |
| **Statut** | `utilisable` minimum ; `ressource_etalon` à terme |
| **Accents** | Tous les textes en français correct avec accents et apostrophes |
| **Licence** | CC BY-SA ou CC BY, jamais "à vérifier" |

### Ce qui distingue un étalon d'une bonne ressource

Une bonne ressource peut avoir un guide prof vague ou un corrigé incomplet. Un étalon a tous ses blocs complets, lisibles, copiables et directement utilisables. C'est la différence entre "on peut utiliser ça" et "c'est le modèle à suivre".

---

## 3. Ressources candidates pour devenir étalons (10 sélectionnées)

Les 10 candidats sont choisis pour couvrir 8 familles pédagogiques distinctes et représenter les niveaux A1 à C1.

### Passe 1 — 3 ressources prioritaires (intervention immédiate)

**Candidate 1 : `b1-pronoms-cod-coi-enquete`** — Grammaire inductive
- Statut actuel : solide mais accents absents, titres internes non différenciés, espaces de réponse manquants
- C'est la ressource étalon la plus avancée — un étalon en attente de finition

**Candidate 2 : `a2-passe-compose-week-end`** — Grammaire narrative
- Statut actuel : prometteuse, mais guide prof court et corrigé à compléter
- Représente le niveau A2 absent du groupe "solide"
- Thème universel, durée courte (50 min), facile à enrichir

**Candidate 3 : `a1-a2-phonetique-y-u`** — Phonétique
- Statut actuel : rituel testé, 30 min — seule ressource de phonétique du catalogue
- À enrichir avec des paires minimales en tableau et un bilan articulatoire

### Passe 2 — 3 ressources complémentaires

**Candidate 4 : `b1-enquete-suspect-temoin-indice`** — Activité scénarisée / oral
- Statut actuel : solide, retour d'usage existant, alertes de préparation
- À vérifier pour les accents, enrichir avec une grille de mini-synthèse

**Candidate 5 : `b1-debat-limiter-ecrans`** — Évaluation formative orale
- Statut actuel : prometteuse, suggestion de cartes neutres documentée
- À enrichir avec une grille d'observation pour l'évaluation formative

**Candidate 6 : `b2-notes-video-courte`** — Compréhension / méthodologie
- Statut actuel : gabarit de prise de notes en 3 colonnes — fort
- À vérifier pour les accents, enrichir le guide prof

### Passe 3 — 4 ressources plus ambitieuses ou mini-packs

**Candidate 7 : `b1-cause-consequence-quotidien`** — Grammaire / connecteurs
- Représente les connecteurs logiques (parce que, donc, à cause de) — utile B1
- À enrichir avec un tableau de connecteurs et des exercices de transformation

**Candidate 8 : `b2-esprit-critique-reponse-ia`** — Littératie numérique
- Seule ressource d'esprit critique sur les sorties IA au catalogue
- À enrichir avec une grille d'analyse (affirmation / preuve / doute / reformulation)

**Candidate 9 : `b1-prompt-roleplay-entretien`** — Oral / FOU
- Jeu de rôle entretien, 45 min — très utilisable en cours du soir ou préparation pro
- À enrichir avec des cartes rôles (recruteur / candidat) et critères d'évaluation

**Candidate 10 : `a1-se-presenter-sans-numerique`** — Rituel A1
- Trop générique actuellement — mais le niveau A1 a besoin d'un étalon
- À réécrire avec une situation fictive légère (premier jour dans une école de langues fictive)

---

## 4. Propositions de montée en qualité par ressource candidate

### 4.1 `b1-pronoms-cod-coi-enquete`

**Meilleur titre** : "COD ou COI ? Une enquête pour choisir le bon pronom (B1)"

**Résumé orienté enseignant** :
"Fiche B1 prête à imprimer. Situation d'enquête fictive, observation guidée, exercices de transformation COD/COI, mini-dialogue final. Guide professeur et corrigé dans l'onglet enseignant."

**Modifications éditoriales** :
- Corriger tous les accents et apostrophes (priorité absolue)
- Préfixer les titres internes : `▸ Situation`, `▸ Exercice 1 — Repérage`, `▸ Bilan grammatical`
- Ajouter un tableau COD/COI ASCII dans les instructions apprenant
- Ajouter des espaces de réponse (`___`) dans les exercices 1-3
- Passer `reuseReadiness` à `pret_a_utiliser` après corrections

**Statut visé** : ressource étalon grammaire inductive B1

---

### 4.2 `a2-passe-compose-week-end`

**Meilleur titre** : "Passé composé A2 : raconter son week-end en 5 phrases"

**Résumé orienté enseignant** :
"Fiche A2 imprimable en 50 minutes. Corpus de 5 phrases modèles, exercice de tri être/avoir, production écrite courte, correction en binômes. Guide professeur et corrigé séparés."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Enrichir `teacherGuide` : déroulé minuté par bloc, erreurs fréquentes (auxiliaire avoir vs être, accord du participe passé)
- Enrichir `answerKey` : réponses avec justification de l'auxiliaire + exemples de productions acceptables
- Ajouter un tableau : 2 colonnes "auxiliaire avoir" / "auxiliaire être" avec 6-8 verbes à classer
- Ajouter espaces de réponse dans la production écrite
- Variante : version sans liste de verbes (groupe avancé)

**Statut visé** : ressource étalon grammaire A2

---

### 4.3 `a1-a2-phonetique-y-u`

**Meilleur titre** : "Phonétique A1/A2 : entendre et distinguer [y] et [u]"

**Résumé orienté enseignant** :
"Rituel de 30 minutes pour travailler les sons [y] et [u] à partir de paires minimales contextualisées. Utilisable en début de séance ou en correction ciblée."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Ajouter un tableau de paires minimales dans `studentInstructions` :
  ```
  [y]     |  [u]
  tu      |  tout
  rue     |  roue
  vu      |  vous
  sur     |  sourd
  ```
- Ajouter un exercice d'auto-évaluation : "J'entends... [y] ☐ ou [u] ☐"
- Enrichir `teacherGuide` : positionnement des lèvres, consigne de pronunciation, erreurs fréquentes par L1
- Enrichir `answerKey` : liste des réponses attendues + critère "compréhensible pour un locuteur natif"
- Variante : paires dans un micro-dialogue de 3 répliques

**Statut visé** : ressource étalon phonétique A1/A2

---

### 4.4 `b1-enquete-suspect-temoin-indice`

**Meilleur titre** : "Enquête en classe B1 : interroger, comparer, formuler une hypothèse"

**Résumé orienté enseignant** :
"Jeu de rôle B1 en 65 minutes. Situation fictive prête à imprimer, cartes rôles à préparer, exercice de mini-synthèse. Guide professeur et critères de réussite dans l'onglet enseignant."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Ajouter une mini-grille dans `studentInstructions` : 3 colonnes "Faits / Indices / Hypothèses" à remplir
- Ajouter des espaces de réponse dans la mini-synthèse
- Enrichir `answerKey` : critères observables pour la question orale + exemple de mini-synthèse acceptable
- Variante supplémentaire : version écrite (rapport d'enquête en 5 phrases)

**Statut visé** : ressource étalon activité scénarisée B1

---

### 4.5 `b1-debat-limiter-ecrans`

**Meilleur titre** : "Débat guidé B1 : faut-il limiter les écrans ?"

**Résumé orienté enseignant** :
"Activité orale B1 en 45 minutes. Cartes arguments pour et contre, grille d'observation pour l'évaluation formative. Fonctionne sans matériel numérique."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Ajouter dans `studentInstructions` : 3-4 arguments par position (pour / contre) sous forme de cartes découpables
- Ajouter dans `answerKey` : grille d'observation formative (cohérence, temps de parole, connecteurs utilisés)
- Enrichir `teacherGuide` : rôle de l'enseignant pendant le débat (observateur, médiateur, chronométreur)
- Variante : version sans cartes (arguments à trouver par le groupe)

**Statut visé** : ressource étalon évaluation formative orale B1

---

### 4.6 `b2-notes-video-courte`

**Meilleur titre** : "Prise de notes B2 : grille en trois colonnes pour une vidéo courte"

**Résumé orienté enseignant** :
"Gabarit B2 imprimable en 75 minutes. Deux écoutes d'une vidéo libre de droits, grille mots-clés / chiffres / exemples, synthèse orale de 60 secondes. Aucune vidéo fournie : l'enseignant choisit la sienne."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Rendre la grille 3 colonnes visible dans `studentInstructions` (format ASCII)
- Ajouter un espace de synthèse : "En 60 secondes, expliquez à votre voisin(e) : ___"
- Enrichir `teacherGuide` : critères de sélection d'une vidéo adaptée (durée, débit, accent)
- Enrichir `answerKey` : critères de la synthèse orale (informations minimales attendues)

**Statut visé** : ressource étalon compréhension orale / méthodologie B2

---

### 4.7 `b1-cause-consequence-quotidien`

**Meilleur titre** : "Cause et conséquence B1 : relier des situations avec parce que, donc et à cause de"

**Résumé orienté enseignant** :
"Fiche B1 de 45 minutes sur les connecteurs logiques. Situations du quotidien, exercice d'appariement, production écrite courte. Guide professeur et corrigé séparés."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Ajouter un tableau de connecteurs dans `studentInstructions` :
  ```
  Pour exprimer la cause : parce que, car, à cause de, grâce à
  Pour exprimer la conséquence : donc, alors, c'est pourquoi, du coup
  ```
- Ajouter des exercices d'appariement : situation → connecteur → phrase complète
- Enrichir `teacherGuide` : différenciation cause / conséquence, erreurs fréquentes (à cause de vs grâce à)
- Ajouter un exercice de production : "Écrivez 3 phrases avec des connecteurs différents pour expliquer votre retard imaginaire"
- Variante : version dictée-puzzle (connecteurs à découper et replacer)

**Statut visé** : ressource étalon grammaire / connecteurs B1

---

### 4.8 `b2-esprit-critique-reponse-ia`

**Meilleur titre** : "Esprit critique B2 : analyser une réponse d'IA fictive"

**Résumé orienté enseignant** :
"Atelier B2 de 70 minutes. Une réponse fictive trop assurée à analyser, repérer les généralisations, reformuler avec prudence. Aucun accès à une IA réelle requis."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Ajouter une grille d'analyse dans `studentInstructions` :
  ```
  Affirmation | C'est vrai / possible / faux | Preuve ou doute
  [...]       |                              |
  ```
- Ajouter un bilan : "Quels mots signalent la prudence en français ?" (peut-être, il semblerait que, selon...)
- Enrichir `teacherGuide` : comment choisir une réponse IA fictive vraisemblable, comment réagir si un apprenant cite une vraie IA
- Variante : version courte (25 min) avec une seule affirmation à analyser

**Statut visé** : ressource étalon littératie numérique / esprit critique B2

---

### 4.9 `b1-prompt-roleplay-entretien`

**Meilleur titre** : "Jeu de rôle B1 : préparer et jouer un entretien professionnel"

**Résumé orienté enseignant** :
"Fiche B1 de 45 minutes. Cartes rôles recruteur / candidat, préparation guidée, jeu de rôle en binômes. Fonctionne entièrement sans IA. Un prompt modèle est disponible en bonus pour les classes équipées."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Ajouter des cartes rôles découpables dans `studentInstructions` :
  - Carte Recruteur : 3 questions à poser + 1 question à inventer
  - Carte Candidat : poste fictif, 3 qualités, 1 expérience inventée
- Enrichir `answerKey` : grille d'évaluation formative (phrases complètes, vocabulaire du poste, aisance)
- Enrichir `teacherGuide` : comment cadrer le jeu de rôle, erreurs fréquentes (tu/vous, formules de politesse)
- Variante : version sans cartes (groupe fort prépare seul les questions)

**Statut visé** : ressource étalon oral / FOU B1

---

### 4.10 `a1-se-presenter-sans-numerique`

**Meilleur titre** : "Premier cours A1 : se présenter dans une école de langues"

**Résumé orienté enseignant** :
"Activité A1 de 35 minutes pour un premier cours. Situation fictive (première journée dans une école de langues), salutations, prénom, pays, une question. Aucun support numérique requis."

**Modifications éditoriales** :
- Vérifier et corriger les accents
- Ajouter une situation fictive légère : "Vous êtes dans une école de langues à Lyon. C'est votre premier cours."
- Ajouter une mini-grille d'interaction : "Demandez le prénom et le pays à trois personnes différentes"
  ```
  Prénom | Pays | Une information
  ___    | ___  | ___
  ___    | ___  | ___
  ___    | ___  | ___
  ```
- Enrichir `teacherGuide` : comment éviter l'alignement de présentations répétitives, comment faire parler les plus timides
- Variante : version avec cartes prénoms (anonymisation pour les apprenants qui préfèrent)

**Statut visé** : ressource étalon premier cours A1

---

## 5. Feuille de route en 3 passes

### Passe 1 — Ressources prioritaires (3 ressources, correctif + enrichissement)

**Objectif** : disposer de 3 étalons couvrant les niveaux A2, B1 (grammaire), A1/A2 (phonétique).

| Ressource | Action principale | Durée estimée |
|-----------|-------------------|---------------|
| `b1-pronoms-cod-coi-enquete` | Correction accents + marqueurs internes + tableau COD/COI + espaces réponse | 2-3h éditorial |
| `a2-passe-compose-week-end` | Enrichissement guide + corrigé + tableau être/avoir + espaces réponse | 2h éditorial |
| `a1-a2-phonetique-y-u` | Tableau paires minimales + auto-évaluation + guide articulatoire | 1-2h éditorial |

**Critère de validation** : les 3 ressources passent la grille qualité à 10/12 ou plus.

### Passe 2 — Ressources complémentaires (3 ressources, enrichissement)

**Objectif** : couvrir oral scénarisé, évaluation formative et méthodologie.

| Ressource | Action principale | Durée estimée |
|-----------|-------------------|---------------|
| `b1-enquete-suspect-temoin-indice` | Grille mini-synthèse + correction accents + critères réussite | 2h éditorial |
| `b1-debat-limiter-ecrans` | Cartes arguments + grille observation + guide rôle enseignant | 2h éditorial |
| `b2-notes-video-courte` | Grille 3 colonnes visible + espace synthèse + critères sélection vidéo | 1-2h éditorial |

**Critère de validation** : les 3 ressources passent la grille qualité à 9/12 ou plus.

### Passe 3 — Ressources ambitieuses ou mini-packs (4 ressources, réécriture partielle)

**Objectif** : couvrir connecteurs logiques, littératie numérique, FOU, et rituel A1.

| Ressource | Action principale | Durée estimée |
|-----------|-------------------|---------------|
| `b1-cause-consequence-quotidien` | Tableau connecteurs + exercices appariement + production | 2-3h éditorial |
| `b2-esprit-critique-reponse-ia` | Grille analyse + bilan modalisation + variante courte | 2h éditorial |
| `b1-prompt-roleplay-entretien` | Cartes rôles + grille évaluation + guide cadrage | 2h éditorial |
| `a1-se-presenter-sans-numerique` | Situation fictive + grille interaction + variante cartes prénoms | 1-2h éditorial |

**Critère de validation** : chaque ressource peut servir de modèle pour son type dans la documentation.

---

## 6. Garde-fous contre la copie de contenus protégés

### Principes non négociables

1. **Toutes les situations fictives doivent être originales**. Une école de langues fictive, un badge disparu, une inspectrice Mora — ce sont des inventions libres. Un article de presse réel, une vidéo YouTube identifiable, un extrait de manuel — non.

2. **Les noms de personnes sont génériques**. Lina, Sami, Nora, Hugo : prénoms courants, non attribuables à une œuvre. Éviter les prénoms issus d'un roman, d'un film ou d'un manuel connu.

3. **Les structures d'exercices ne sont pas protégeables**. Un exercice de transformation, un tableau à compléter, une grille d'observation — ce sont des formats pédagogiques dans le domaine public. L'originalité est dans le contenu (situation fictive, phrases exemples), pas dans la structure.

4. **Les exemples linguistiques inventés sont sûrs**. "L'inspectrice a interrogé le gardien" est une phrase inventée. "Le chat est sur le tapis" aussi. Aucun problème de droit.

5. **Ne jamais reproduire, même partiellement, le texte d'une fiche existante**. Même une ressource Creative Commons doit être citée et sa licence respectée. Les ressources FLE Commons Lab sont produites de zéro.

6. **Les images générées par IA sont à éviter sans politique claire**. En v0, pas d'images. Les tableaux ASCII et la mise en page textuelle suffisent.

---

## 7. Recommandations pour Codex

### Corrections techniques liées aux ressources étalons

**Priorité technique 1 (indépendant du contenu)** :
Améliorer `formatLearnerViewForCopy` dans `src/utils/resourceText.ts` pour produire des séparateurs `---` et des titres en majuscules entre les sections. Cette amélioration bénéficiera à toutes les ressources, pas seulement aux étalons.

**Priorité technique 2 (indépendant du contenu)** :
Masquer `.detail-hero` dans `@media print` de `src/styles/global.css`. Cela améliore l'impression de toutes les ressources.

**Priorité éditoriale 1 (dans `src/data/demoResources.ts`)** :
Corriger les accents et apostrophes de `b1-pronoms-cod-coi-enquete`. C'est la seule ressource dont les textes sont systématiquement dépourvus d'accents.

**Note importante pour Codex** :
Les tableaux ASCII dans `studentInstructions` et `answerKey` sont stockés comme items de `string[]` normaux. Un tableau à deux colonnes peut s'écrire :
```
'Pronom | Il remplace | Construction du verbe',
'  l\'   | le badge    | chercher qqch (direct)',
'  lui  | à Sami      | parler à qqn (indirect)',
```
Ce format est lisible dans la liste, copiable dans Word (alignement manuel) et imprimable. C'est la solution éditoriale sans modification du composant.

---

## 8. Références

- `docs/usage-quality-benchmark.md` — grille 12 critères, types de ressources FLE, mini-pack
- `docs/resource-granularity-strategy.md` — niveaux de granularité, catalogue de blocs
- `docs/document-output-and-composition-strategy.md` — doctrine ressource vs document, Fleator différé
- `docs/pedagogical-audit-grid.md` — grille d'audit interne
- `src/data/demoResources.ts` — données des 19 ressources de démonstration

---

*Document produit dans le cadre du plan de montée en qualité FLE Commons Lab v0.2. Auteur : Antigravity. Date : 2026-05-25. Ne pas modifier sans traçabilité dans `docs/project-journal.md`.*
