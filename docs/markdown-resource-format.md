# Format Markdown des ressources

La recommandation issue de `docs/conversion-experiments.md` est d'utiliser Markdown avec frontmatter YAML comme format source de contribution.

## Pourquoi Markdown + frontmatter YAML ?

Markdown est lisible par un enseignant, facile a versionner avec Git et compatible avec une publication open source. Le frontmatter YAML permet d'ajouter des metadonnees structurees sans imposer tout de suite une base de donnees.

Ce format peut etre relu humainement, valide localement et transforme en donnees TypeScript statiques pour l'interface. Il ne cree pas de backend et ne publie pas automatiquement une ressource comme fiche etalon.

## Validation locale minimale

La commande suivante vérifie les exemples Markdown du dossier `examples/resources-markdown/`:

```bash
npm run validate:resources
```

Ce validateur contrôle seulement:

- la présence du frontmatter délimité par `---`;
- les champs obligatoires;
- quelques valeurs contrôlées simples;
- les sections Markdown minimales;
- l'absence de champs obligatoires manifestement vides.

Il ne cree pas de ressource dans l'application et ne remplace pas la relecture enseignante. La generation des objets affichables se fait par une commande separee.

## Generation statique pour l'interface

La commande suivante lit les fichiers valides de `examples/resources-markdown/` et regenere `src/data/generatedMarkdownResources.ts`:

```bash
npm run generate:resources
```

Le fichier genere exporte `generatedMarkdownResources`, un tableau `Resource[]` consomme par l'application avec les ressources de demonstration existantes.

Cette generation reste volontairement sobre:

- elle lit uniquement les fichiers Markdown locaux;
- elle ne charge aucun fichier cote navigateur;
- elle n'ajoute pas de base de donnees;
- elle n'importe pas Word, PDF ou Google Drive;
- elle ne valide pas la qualite pedagogique complete;
- elle ne confirme pas juridiquement les licences.

## Ressource source et ressource affichee

Une ressource source est un fichier `.md` place par exemple dans `examples/resources-markdown/`.

Une ressource affichee dans l'application est un objet TypeScript: soit une ressource de demonstration dans `src/data/demoResources.ts`, soit une ressource generee depuis Markdown dans `src/data/generatedMarkdownResources.ts`.

La v0 ne fait pas d'import dynamique ni de publication automatique. Les exemples Markdown deviennent visibles seulement apres validation puis generation statique avec `npm run generate:resources`.

## Structure recommandee

Chaque fichier commence par un frontmatter YAML:

```yaml
---
title: "Titre de la ressource"
summary: "Resume court"
level: "B1"
durationMinutes: 45
durationCategory: "30_60_min"
mainSkill: "grammaire"
secondarySkills:
  - "expression_orale"
theme: "Vie quotidienne"
resourceType: "exercice"
resourceTemplate: "grammaire_inductive"
status: "brouillon"
reuseReadiness: "pret_a_tester"
license: "CC_BY_SA"
authors:
  - "Nom ou collectif"
---
```

Puis le corps Markdown suit cette structure:

```markdown
# Titre

## Objectifs

## Pre-requis

## Deroule

## Support etudiant

## Guide professeur

## Corrige

## Variantes

## Retours d'usage possibles

## Notes numeriques / IA

## Licence et sources

## Historique des versions
```

## Champs obligatoires

Pour une contribution minimale, renseigner:

- `title`
- `summary`
- `level`
- `durationMinutes`
- `durationCategory`
- `mainSkill`
- `theme`
- `resourceType`
- `resourceTemplate`
- `status`
- `reuseReadiness`
- `license`
- `authors`

## Champs facultatifs mais recommandes

- `secondarySkills`
- `lexicalThemes`
- `grammarPoints`
- `activityFormat`
- `classroomMode`
- `tags`
- `materialNeeded`
- `sourceType`
- `teacherPreparationLevel`
- `techMetadata`
- `aiMetadata`

## Gabarits issus de l'analyse du corpus Drive

`docs/drive-corpus-analysis.md` sert de reference de conception uniquement. Les gabarits ci-dessous decrivent des structures observees dans des supports FLE reels, mais aucun contenu exact du corpus Drive ne doit etre copie dans les exemples publics.

### Sequence grammaticale inductive longue

Usage pedagogique: organiser une progression B1/B2 autour d'un theme, d'un corpus d'observation, de reperages, d'exercices systematiques et d'un reemploi contextualise.

Rubriques recommandees:

- Objectifs;
- Corpus d'observation;
- Questions de reperage;
- Exercices systematiques;
- Exercices de transformation;
- Synthese grammaticale;
- Reemploi contextualise;
- Corrige;
- Guide professeur;
- Variantes;
- Licence et sources.

Champs frontmatter particulierement importants:

- `level`;
- `durationMinutes` et `durationCategory`;
- `mainSkill`;
- `grammarPoints`;
- `resourceType: "sequence"`;
- `resourceTemplate: "grammaire_inductive"`;
- `reuseReadiness`;
- `license`;
- `sourceType`.

Limites et precautions: un document long n'est pas forcement une ressource complete. Il faut verifier la progression, expliciter les objectifs, ajouter un corrige fiable et distinguer les exemples originaux des documents authentiques.

### Fiche grammaire thematique

Usage pedagogique: traiter un point de langue cible dans un theme concret, par exemple medias, sante, logement ou vie etudiante.

Rubriques recommandees:

- Mise en route thematique;
- Lexique utile;
- Observation;
- Exercices guides;
- Exercices systematiques;
- Point de langue;
- Reemploi;
- Corrige.

Champs frontmatter particulierement importants:

- `mainSkill: "grammaire"`;
- `secondarySkills`;
- `theme`;
- `grammarPoints`;
- `resourceType: "fiche"` ou `"exercice"`;
- `resourceTemplate: "grammaire_inductive"`;
- `teacherPreparationLevel`.

Limites et precautions: la fiche doit rester reutilisable sans contexte de cours trop implicite. Les exemples doivent etre originaux ou clairement libres.

### Evaluation contextualisee

Usage pedagogique: evaluer plusieurs acquis dans un contexte identifiable, avec consignes, exercices courts, production finale et bareme.

Rubriques recommandees:

- Informations generales;
- Points evalues;
- Sujet etudiant;
- Exercices;
- Production finale;
- Bareme detaille;
- Corrige ou criteres;
- Remarques professeur;
- Licence et sources.

Champs frontmatter particulierement importants:

- `resourceType: "evaluation"`;
- `resourceTemplate: "evaluation"`;
- `durationMinutes`;
- `level`;
- `mainSkill` et `secondarySkills`;
- `status`;
- `reuseReadiness`;
- `license`.

Limites et precautions: une evaluation doit annoncer clairement ce qui est note, ne pas exposer de donnees personnelles et rester separee des corriges si elle doit etre utilisee en classe.

### Sujet court de production ecrite

Usage pedagogique: transformer une consigne breve en tache utilisable, avec situation, contraintes et criteres de reussite.

Rubriques recommandees:

- Situation;
- Consigne;
- Contraintes linguistiques;
- Aides lexicales;
- Criteres de reussite;
- Variante guidee;
- Variante libre.

Champs frontmatter particulierement importants:

- `mainSkill: "expression_ecrite"`;
- `resourceType: "exercice"`;
- `resourceTemplate: "production_assistee"`;
- `durationMinutes`;
- `level`;
- `theme`;
- `reuseReadiness`.

Limites et precautions: une consigne seule est rarement suffisante pour devenir une ressource mutualisable. Ajouter objectifs, criteres, variantes et notes professeur.

### Activite lexique + interaction orale

Usage pedagogique: faire passer les apprenants du lexique vers une interaction guidee puis une tache orale.

Rubriques recommandees:

- Lexique declencheur;
- Classement ou association;
- Expressions utiles;
- Micro-dialogues;
- Interaction guidee;
- Debat ou tache finale;
- Variantes.

Champs frontmatter particulierement importants:

- `mainSkill: "interaction_orale"`;
- `secondarySkills`;
- `lexicalThemes`;
- `activityFormat`;
- `classroomMode`;
- `resourceTemplate: "lexique_actif"` ou `"conversation_guidee"`;
- `materialNeeded`.

Limites et precautions: prevoir une alternative si le theme mobilise des documents audio, video ou images dont les droits ne sont pas verifies.

### Ressource avec annexe multimedia

Usage pedagogique: exploiter une image, un audio, une video, une capture ou un document support comme declencheur ou support de comprehension.

Rubriques recommandees:

- Document support;
- Statut des droits;
- Avant ecoute ou visionnage;
- Pendant ecoute ou visionnage;
- Apres ecoute ou visionnage;
- Transcription eventuelle;
- Corrige;
- Restrictions d'usage.

Champs frontmatter particulierement importants:

- `sourceType`;
- `license`;
- `licenseNotes` si disponible;
- `techMetadata`;
- `materialNeeded`;
- `teacherPreparationLevel`;
- `reuseReadiness`;
- `status`.

Limites et precautions: ne pas publier d'images de personnes, extraits de manuels, audios, videos ou captures sans verification des droits et autorisations. Utiliser `a_verifier` si le statut est incertain.

## Metadonnees numeriques et IA

Les champs `techMetadata` et `aiMetadata` servent a documenter un usage possible. Ils ne declenchent aucun outil.

Une ressource peut decrire un usage IA sans que la plateforme appelle une API IA.

## Conventions de nommage

Nommer les fichiers en minuscules, sans accents, avec des tirets:

- `grammaire-b1-pronoms-y-en.md`
- `oral-a2-logement.md`
- `ia-b2-esprit-critique.md`

Le nom doit donner une indication sur le type, le niveau et le sujet.

## Licences et sources

Ne pas copier de contenus proteges sans autorisation. Pour un document authentique, noter:

- origine du document;
- droits connus ou inconnus;
- adaptations effectuees;
- licence proposee;
- elements a verifier avant publication.

Si la licence est incertaine, utiliser `a_verifier`.

## Validation humaine indispensable

Un enseignant doit relire:

- niveau CECRL reel;
- objectifs;
- pertinence des consignes;
- progression;
- corriges et reponses ouvertes;
- adequation culturelle;
- risques lies aux outils numeriques ou IA;
- droits et licences.

## Limites de cette v0

- Pas d'import dynamique dans l'application.
- Generation statique locale possible avec `npm run generate:resources`.
- Pas de parser YAML complet.
- Pas d'upload.
- Pas de stockage fichier.
- Pas de validation automatique complete.
- Pas de publication publique automatique.
- Pas de vérification juridique réelle des licences.
- Pas de vérification pédagogique complète.

## Exemple court

```markdown
---
title: "Demander son chemin"
summary: "Mini-dialogue A1 pour demander et comprendre une direction simple."
level: "A1"
durationMinutes: 20
durationCategory: "15_30_min"
mainSkill: "interaction_orale"
secondarySkills:
  - "lexique"
theme: "Ville"
resourceType: "activite_orale"
resourceTemplate: "conversation_guidee"
status: "brouillon"
reuseReadiness: "pret_a_tester"
license: "CC_BY"
authors:
  - "FLE Commons Lab demo"
---

# Demander son chemin

## Objectifs

- Demander une direction simple.
- Comprendre `a gauche`, `a droite`, `tout droit`.

## Support etudiant

Jouez un dialogue entre une personne perdue et une personne qui aide.

## Licence et sources

Contenu original de demonstration.
```

## Alignement editorial 2026-05-23

Le dossier `examples/resources-markdown/` contient des exemples sources valides pour tester le format. La commande `npm run validate:resources` verifie leur structure minimale. La commande `npm run generate:resources` produit ensuite les objets TypeScript affichables. La relecture enseignante et la verification des droits restent obligatoires.
