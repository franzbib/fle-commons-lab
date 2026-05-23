# Analyse exploratoire du corpus Google Drive

Date: 2026-05-23
Outil principal: ChatGPT avec connecteur Google Drive
Statut: document de travail pour Codex, Antigravity et autres agents IA

## 1. Résumé exécutif

Un dossier Google Drive de supports pédagogiques FLE a été exploré comme corpus de référence temporaire pour FLE Commons Lab.

Le dossier se présente principalement comme une archive chronologique de séances. Il contient des sous-dossiers datés, des documents Word/PDF, quelques images, audios, vidéos, fichiers temporaires, fichiers exécutables anciens et supports potentiellement protégés.

Le corpus est très utile pour modéliser des ressources pédagogiques FLE, notamment:

- séquences de grammaire inductive longues;
- fiches grammaticales thématiques;
- évaluations contextualisées;
- sujets courts de production écrite;
- activités lexicales et interactionnelles;
- ressources avec annexes multimédias.

Les documents ne doivent pas être importés automatiquement ni rendus publics sans vérification des droits, des licences, des sources et des données personnelles. Leur meilleur usage immédiat est celui de modèles structurels temporaires.

## 2. Méthode

L'analyse a porté sur:

- le niveau racine du dossier Drive;
- plusieurs sous-dossiers datés;
- un échantillon de documents Word représentatifs;
- les titres, formats, dates et structures pédagogiques observables.

Les fichiers personnels, temporaires, exécutables, nominaux ou manifestement protégés ont été exclus de l'analyse pédagogique détaillée.

L'analyse n'est pas exhaustive. Elle constitue une première cartographie destinée à préparer le travail de structuration dans FLE Commons Lab.

## 3. Sous-dossiers observés

Le dossier racine contient notamment:

- `23 septembre`;
- `30 septembre`;
- `7 octobre`;
- `14 octobre`;
- `4 novembre`;
- `12 novembre`;
- `18 novembre`;
- `25 novembre`;
- `2 décembre`;
- `9 décembre`;
- `16 décembre`;
- dossiers de janvier et février;
- un dossier `manuel`;
- un dossier `rush`.

Cette organisation confirme que le corpus Drive est surtout une archive de préparation de cours et non une bibliothèque normalisée de ressources publiables.

## 4. Documents analysés

Échantillon ouvert et étudié:

| Document | Thème principal | Type pédagogique | Intérêt pour FLE Commons Lab |
|---|---|---|---|
| `grammaire23sept25.docx` | loisirs | grammaire inductive longue | déterminants, négation, démonstratifs, possessifs |
| `discours indirect et marqueurs temp.docx` | littérature | grammaire + méthodologie | discours indirect, ponctuation, fonctions grammaticales |
| `Etudes temps.docx` | études supérieures | séquence grammaire longue | présent, futur proche, futur simple, imparfait |
| `nominalisation 12 nov.docx` | médias | grammaire + lexique journalistique | nominalisation, articles contractés, conditionnel journalistique |
| `évaluation.docx` | médias | évaluation | barème, exercices notés, production finale |
| `Sujet EE.docx` | premières journées à Amiens | sujet court d'expression écrite | modèle minimal de tâche écrite |
| `18 novembre 2025.docx` | cinéma | lexique + opinion + grammaire | opinion, pronoms toniques, comparaison |
| `25nov ok santé.docx` | santé | séquence grammaire très complète | conditionnel, impératif, conseil, subjonctif |

## 5. Diagnostic pédagogique

Le corpus correspond à une logique pédagogique très identifiable:

1. thème concret ou institutionnel;
2. micro-corpus d'observation;
3. questions de repérage;
4. exercices longs et systématiques;
5. récapitulatif grammatical;
6. réemploi contextualisé;
7. intégration fréquente d'Amiens, de l'ISPA, de la BU, de l'ENT, de la scolarité, des médias et de la vie étudiante.

Le niveau dominant est B1/B2.

Les documents combinent souvent:

- grammaire;
- lexique;
- expression écrite;
- interaction orale;
- méthodologie universitaire;
- culture locale ou française.

Le corpus est donc excellent pour concevoir des gabarits, mais il n'est pas directement prêt pour une publication ouverte.

## 6. Forces du corpus

- Forte cohérence thématique.
- Ancrage local identifiable: Amiens, ISPA, BU, ENT, scolarité, médias locaux.
- Nombreux exercices systématiques et progressifs.
- Méthode inductive implicite souvent présente.
- Contextualisation adaptée à des étudiants étrangers en France.
- Possibilité de découper les documents longs en blocs pédagogiques réutilisables.
- Bon matériau pour tester le futur format Markdown + frontmatter YAML.

## 7. Limites observées

Les documents sont riches mais rarement normalisés. Pour devenir des ressources FLE Commons Lab, ils demanderaient souvent:

- un résumé;
- des objectifs explicites;
- une durée;
- un guide professeur;
- un corrigé complet;
- des variantes;
- un statut de licence;
- une vérification des sources;
- une validation humaine du niveau et de la progression.

## 8. Fichiers à exclure ou isoler

Ne pas utiliser comme ressources publiques:

- images ou listes nominatives d'étudiants;
- photos de personnes sans autorisation explicite;
- fichiers temporaires `~$...`;
- fichiers exécutables `.exe`;
- manuels ou extraits de manuels protégés;
- fichiers compressés de provenance incertaine;
- documents authentiques sans licence claire;
- audios, vidéos ou images sans vérification des droits.

Ces fichiers peuvent éventuellement servir de repères personnels internes, mais pas de contenu publiable.

## 9. Correspondance avec le modèle `Resource`

Champs généralement faciles à inférer:

- `title`;
- `level`;
- `theme`;
- `mainSkill`;
- `grammarPoints`;
- `resourceType`;
- `resourceTemplate`;
- `studentInstructions`.

Champs souvent absents ou implicites:

- `summary`;
- `durationMinutes`;
- `objectives`;
- `teacherGuide`;
- `answerKey`;
- `variants`;
- `license`;
- `sourceType`;
- `usageFeedbacks`.

Champs nécessitant validation humaine:

- `level`;
- `durationMinutes`;
- `license`;
- `sourceType`;
- `reuseReadiness`;
- `status`;
- `answerKey`;
- progression pédagogique;
- conformité des consignes et des corrigés.

## 10. Gabarits recommandés

### 10.1 Séquence grammaticale inductive longue

Adaptée aux documents longs comme `grammaire23sept25`, `Etudes temps`, `25nov ok santé`.

Rubriques recommandées:

- Objectifs;
- Corpus d'observation;
- Questions de repérage;
- Exercices systématiques;
- Exercices de transformation;
- Synthèse grammaticale;
- Réemploi contextualisé;
- Corrigé;
- Guide professeur;
- Variantes;
- Licence et sources.

### 10.2 Fiche grammaire thématique

Adaptée à une ressource plus ciblée, par exemple autour de la nominalisation, des articles contractés ou du conditionnel journalistique.

Rubriques recommandées:

- Mise en route thématique;
- Lexique utile;
- Observation;
- Exercices guidés;
- Exercices systématiques;
- Point de langue;
- Réemploi;
- Corrigé.

### 10.3 Évaluation contextualisée

Adaptée aux évaluations avec barème.

Rubriques recommandées:

- Informations générales;
- Durée;
- Niveau;
- Points évalués;
- Sujet étudiant;
- Exercices;
- Production finale;
- Barème détaillé;
- Corrigé;
- Remarques professeur.

### 10.4 Sujet court de production écrite

Adapté aux consignes brèves qui doivent être enrichies pour devenir réutilisables.

Rubriques recommandées:

- Situation;
- Consigne;
- Contraintes linguistiques;
- Aides lexicales;
- Critères de réussite;
- Variante guidée;
- Variante libre.

### 10.5 Activité lexique + interaction orale

Adaptée aux supports cinéma, santé, médias, opinion.

Rubriques recommandées:

- Lexique déclencheur;
- Classement ou association;
- Expressions utiles;
- Micro-dialogues;
- Interaction guidée;
- Débat ou tâche finale;
- Variantes.

### 10.6 Ressource avec annexe multimédia

Adaptée aux dossiers contenant images, audios, vidéos ou captures.

Rubriques recommandées:

- Document support;
- Statut des droits;
- Avant écoute / visionnage;
- Pendant écoute / visionnage;
- Après écoute / visionnage;
- Transcription éventuelle;
- Corrigé;
- Restrictions d'usage.

## 11. Recommandations de modélisation

### 11.1 Complétude pédagogique

Il serait utile de documenter, puis éventuellement de typer, un statut de complétude pédagogique:

```ts
pedagogicalCompleteness:
  | 'support_brut'
  | 'objectifs_a_ajouter'
  | 'corrige_a_ajouter'
  | 'guide_professeur_a_ajouter'
  | 'ressource_complete'
  | 'ressource_testee'
```

### 11.2 Statut des droits

Le corpus montre la nécessité de distinguer la valeur pédagogique d'un support et son statut juridique:

```ts
rightsStatus:
  | 'original'
  | 'libre'
  | 'a_verifier'
  | 'usage_interne_uniquement'
  | 'protege_ne_pas_publier'
```

### 11.3 Usage comme référence

Les documents Drive peuvent servir de modèles temporaires sans être intégrés comme ressources publiques:

```ts
referenceUse:
  | 'none'
  | 'temporary_model'
  | 'internal_reference'
  | 'publishable_resource'
```

Ces champs ne doivent pas nécessairement être ajoutés immédiatement au type `Resource`. Ils peuvent d'abord rester dans la documentation pour éviter d'alourdir trop tôt le modèle.

## 12. Décision recommandée

Ne pas importer le corpus Drive.

Utiliser le corpus pour:

- améliorer les gabarits;
- créer des exemples fictifs;
- tester le format Markdown;
- définir les seuils de complétude;
- préciser les règles de droits et de publication.

## 13. Actions futures pour Codex

1. Lire ce document avant toute intervention sur les gabarits.
2. Mettre à jour `docs/markdown-resource-format.md` avec les gabarits issus du corpus.
3. Mettre à jour `docs/resource-model.md` avec la distinction support brut / ressource mutualisable.
4. Créer 2 ou 3 exemples Markdown fictifs dans `examples/resources-markdown/`.
5. Ne reprendre aucun texte exact du Drive.
6. Ne pas ajouter Supabase, backend, authentification, paiement, upload ou IA réelle.
7. Vérifier `npm run validate:resources` si de nouveaux exemples Markdown sont créés.

## 14. Formule de prudence à conserver

Le corpus Drive est une référence de conception, pas une source publiable par défaut. Toute transformation en ressource ouverte suppose une vérification humaine des droits, des licences, du niveau, des consignes, du corrigé et du contexte d'usage.
