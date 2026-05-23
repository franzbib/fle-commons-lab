# Format Markdown des ressources

La recommandation issue de `docs/conversion-experiments.md` est d'utiliser Markdown avec frontmatter YAML comme format source de contribution.

## Pourquoi Markdown + frontmatter YAML ?

Markdown est lisible par un enseignant, facile a versionner avec Git et compatible avec une publication open source. Le frontmatter YAML permet d'ajouter des metadonnees structurees sans imposer tout de suite une base de donnees.

Ce format peut etre relu humainement et exploite plus tard par un import local, un validateur ou une base Supabase. Aucun de ces outils n'est actif dans la v0.

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

Il ne crée pas de ressource dans l'application, ne transforme pas Markdown en objet `Resource` et ne remplace pas la relecture enseignante.

## Ressource source et ressource affichee

Une ressource source est un fichier `.md` place par exemple dans `examples/resources-markdown/`.

Une ressource affichee dans l'application est aujourd'hui un objet TypeScript dans `src/data/demoResources.ts`.

La v0 ne convertit pas automatiquement les fichiers Markdown en ressources affichees. Les exemples servent a stabiliser le futur format de contribution.

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

- Pas d'import automatique.
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
