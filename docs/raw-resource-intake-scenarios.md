# Scénarios d'Ingestion et de Normalisation

Ce document illustre concrètement la méthode de traitement du sas de normalisation à travers 3 scénarios fictifs mais hautement plausibles.

---

## Scénario 1 : L'exercice incomplet (Grammaire)

**Contexte :** Un enseignant copie-colle un brouillon d'exercice d'un fichier Word.

### 1. État Brut Soumis
```text
Titre : exo subjonctif
C'est pour mes B1, pour pratiquer "il faut que".
Complétez :
1. Il faut que tu (venir) demain.
2. Je veux qu'il (faire) attention.
3. Il est important que nous (savoir) la vérité.
```

### 2. Diagnostic du Sas
- **Positif** : Le texte est libre de droits (phrases génériques). L'objectif est clair (subjonctif, B1).
- **Manquant** : Le corrigé, le temps estimé, le format exact de la tâche (à l'écrit ? à l'oral ?).
- **Complexité de normalisation** : Faible. Une IA peut générer le corrigé et la mise en forme.

### 3. Questions (optionnelles) posées au contributeur
- *Souhaitez-vous que les étudiants le fassent individuellement à l'écrit ou en binômes à l'oral ?*

### 4. Version Normalisée Proposée (Gabarit : Grammaire)
```yaml
---
id: res-subj-001
title: "Exercice structural : Le subjonctif présent"
summary: "Phrases à trous pour systématiser la conjugaison du subjonctif (verbes irréguliers)."
level: B1
durationMinutes: 10
durationCategory: moins_15_min
mainSkill: grammaire
secondarySkills: [expression_ecrite]
theme: "Générique"
resourceType: exercice
resourceTemplate: grammaire_inductive
activityFormat: individuel
classroomMode: presentiel
status: utilisable
reuseReadiness: pret_a_utiliser
license: CC_BY_SA
normalizationMetadata:
  originalFormat: texte_brut
  submittedBy: "ProfFLE_42"
  normalizationStatus: normalisee
---
# Exercice structural : Le subjonctif présent

## Objectifs
- Conjuguer au subjonctif présent (venir, faire, savoir).
- Automatiser l'utilisation après les structures d'obligation et de volonté.

## Consigne Étudiant
Complétez les phrases suivantes en conjuguant les verbes entre parenthèses au subjonctif présent :
1. Il faut que tu (venir) demain.
2. Je veux qu'il (faire) attention.
3. Il est important que nous (savoir) la vérité.

## Corrigé
1. Il faut que tu **viennes** demain.
2. Je veux qu'il **fasse** attention.
3. Il est important que nous **sachions** la vérité.
```

### 5. Points à faire relire (Étape 4)
- La conjugaison générée dans le corrigé est-elle correcte ? (Oui).

### 6. Statut Recommandé
`utilisable` (La ressource est petite mais complète et sans ambiguïté juridique).

---

## Scénario 2 : Le document lourd (Évaluation)

**Contexte :** Un enseignant a uploadé un PDF de 4 pages contenant une compréhension écrite basée sur un article du journal *Le Monde*, suivi de 10 questions Vrai/Faux.

### 1. État Brut Soumis
*(Fichier PDF joint contenant l'article "La baguette au patrimoine de l'UNESCO" et des questions).*

### 2. Diagnostic du Sas
- **Positif** : Activité prête à l'emploi, format classique d'évaluation.
- **Bloquant** : Le texte original appartient au journal *Le Monde*. Le reproduire intégralement dans le dépôt `.md` sous licence CC-BY-SA serait une violation du droit d'auteur, l'exception pédagogique ne couvrant pas la redistribution publique open source.
- **Complexité de normalisation** : Élevée (juridique).

### 3. Action / Questions au contributeur
- Le sas (ou le modérateur) avertit l'enseignant : *Nous ne pouvons pas publier le texte du journal.* 
- **Solution proposée** : Transformer la ressource en "Fiche d'exploitation d'un document authentique externe". On retire le texte de l'article, on met le lien URL (ou les références exactes de l'article), et on garde l'appareil pédagogique (les questions).

### 4. Version Normalisée Proposée (Gabarit : Évaluation)
```yaml
---
id: res-eval-baguette
title: "Compréhension Écrite : La baguette de pain (A2)"
summary: "Fiche d'exploitation basée sur un article externe."
level: A2
durationMinutes: 30
durationCategory: 30_60_min
mainSkill: comprehension_ecrite
secondarySkills: []
theme: "Gastronomie / Culture"
resourceType: evaluation
resourceTemplate: analyse_de_document
activityFormat: individuel
classroomMode: presentiel
status: utilisable
reuseReadiness: pret_a_utiliser
license: CC_BY_SA
normalizationMetadata:
  originalFormat: pdf
  submittedBy: "MarieFLE"
  normalizationStatus: normalisee
  legalWarning: "Texte source retiré pour raisons de droits d'auteur."
---
# Compréhension Écrite : La baguette de pain

## Matériel requis
- L'article original (à chercher par l'enseignant) : *Le Monde, 30 novembre 2022, "La baguette française inscrite au patrimoine de l'humanité"*.

## Consigne Étudiant
Lisez l'article et répondez par Vrai ou Faux :
1. La baguette a été inventée en 2022. (V/F)
2. L'UNESCO protège désormais ce pain. (V/F)
*(...)*

## Corrigé
1. Faux (L'article dit que sa création remonte au début du XXe siècle).
2. Vrai.
```

### 5. Points à faire relire (Étape 4)
- La fiche est-elle utilisable sans avoir l'article collé dessus ? (Oui, moyennant une petite recherche par le professeur téléchargeur).

### 6. Statut Recommandé
`utilisable`.

---

## Scénario 3 : L'idée orale (testée)

**Contexte :** Un enseignant soumet juste une idée rapide dans le formulaire après son cours.

### 1. État Brut Soumis
```text
Super activité ce matin avec mes A1. Je leur ai fait dessiner un monstre au tableau en dictant les parties du corps. Ensuite ils ont dicté à leur tour à leur voisin. Ça a duré 20 minutes, ils ont adoré.
```

### 2. Diagnostic du Sas
- **Positif** : 100% testé en classe, succès validé, pas de droits d'auteur.
- **Manquant** : Il faut formuler la ressource pour que quelqu'un qui n'était pas là puisse la refaire.
- **Complexité de normalisation** : Moyenne (besoin de reformulation didactique).

### 3. Version Normalisée Proposée (Gabarit : Activité Orale)
```yaml
---
id: res-oral-monstre
title: "Jeu du Monstre : Les parties du corps"
summary: "Jeu de dictée visuelle au tableau puis en binôme pour réviser le lexique du corps."
level: A1
durationMinutes: 20
durationCategory: 15_30_min
mainSkill: comprehension_orale
secondarySkills: [expression_orale, lexique]
theme: "Le corps humain"
resourceType: activite_orale
resourceTemplate: jeu_pedagogique
activityFormat: classe_entiere
classroomMode: presentiel
status: teste
reuseReadiness: teste_en_classe
license: CC_BY_SA
normalizationMetadata:
  originalFormat: texte_brut
  submittedBy: "ProfToulouse"
  normalizationStatus: normalisee
---
# Jeu du Monstre : Les parties du corps

## Objectifs
- Lexique : les parties du corps, les nombres, les couleurs.
- Action : Dessiner sous la dictée, puis dicter.

## Déroulé / Guide Professeur

### Étape 1 : Le professeur dicte (5 min)
Allez au tableau. Demandez aux étudiants de vous dicter un monstre : "Dessinez trois yeux rouges", "Dessinez un grand nez". Dessinez exactement ce qu'ils disent pour valider leur prononciation.

### Étape 2 : Les étudiants dessinent (15 min)
En binômes. L'étudiant A dessine un monstre en cachette. Il le dicte à l'étudiant B. 
À la fin, ils comparent les deux dessins. On inverse les rôles.

## Retours d'usage (Historique)
- **ProfToulouse** : "Très efficace avec des A1, durée réelle de 20 minutes."
```

### 5. Points à faire relire (Étape 4)
- La reformulation de l'IA/modérateur a-t-elle dénaturé l'idée originale ? (Non, elle a structuré en 2 étapes).

### 6. Statut Recommandé
`teste` (Statut supérieur à `utilisable` car on a la preuve que ça marche en classe).
