# Workflow de conversion

Ce workflow prepare la transformation de supports FLE existants vers le modele FLE Commons Lab. Il reste volontairement simple: la v0 ne contient pas d'importeur automatique.

## 1. Recuperer un support brut

Le support peut etre un texte, une fiche interne, un plan de cours ou un document cree par un enseignant.

Validation humaine obligatoire:

- verifier que le support peut etre partage;
- retirer les donnees personnelles;
- identifier les sources.

## 2. Identifier le type de support

Choisir un `resourceType`: exercice, sequence, evaluation, fiche, activite orale, scenario IA, etc.

Automatisable partiellement:

- reperer des mots comme evaluation, exercice, corrigé, debat;
- suggerer un type probable.

Validation humaine obligatoire:

- confirmer que le type correspond a l'usage reel en classe.

## 3. Extraire les objectifs

Identifier ce que l'apprenant doit savoir faire a la fin de l'activite.

Semi-automatisable:

- proposer des objectifs a partir des consignes;
- reformuler des objectifs trop vagues.

Validation humaine obligatoire:

- verifier que les objectifs sont atteignables et adaptes au niveau.

## 4. Separer support etudiant, guide professeur et corrige

Le support etudiant contient les consignes et documents donnes aux apprenants.

Le guide professeur contient les conseils d'animation, les points de vigilance et les criteres.

Le corrige contient les reponses attendues ou criteres d'acceptation.

Automatisable:

- separer les blocs avec titres explicites;
- transformer listes et questions en Markdown.

Validation humaine obligatoire:

- gerer les corriges ouverts;
- verifier les variantes acceptables.

## 5. Ajouter les metadonnees

Completer le frontmatter YAML:

- niveau;
- duree;
- competence;
- theme;
- type;
- gabarit;
- statut;
- licence;
- metadonnees numeriques et IA si utiles.

Semi-automatisable:

- pre-remplir les champs visibles dans le support;
- signaler les champs manquants.

Validation humaine obligatoire:

- `level`;
- `mainSkill`;
- `resourceType`;
- `status`;
- `license`.

## 6. Verifier le niveau

Comparer lexique, grammaire, longueur, autonomie demandee et type de tache.

Validation humaine obligatoire:

- le niveau CECRL ne doit pas etre deduit automatiquement sans relecture.

## 7. Verifier les droits

Identifier les documents authentiques, images, textes, extraits audio, prompts ou captures.

Validation humaine obligatoire:

- verifier les licences;
- supprimer ou remplacer les contenus incertains;
- utiliser `a_verifier` si le statut est inconnu.

## 8. Produire un Markdown source

Creer un fichier `.md` avec frontmatter YAML et sections editoriales communes.

Automatisable:

- generer la structure;
- convertir titres, listes et questions;
- placer les informations identifiees.

## 9. Relire humainement

Un enseignant relit:

- objectifs;
- deroule;
- consignes;
- corrige;
- variantes;
- niveau;
- droits;
- risques numeriques ou IA.

## 10. Integrer plus tard a la bibliotheque

La v0 ne fait pas cette integration automatiquement.

Etapes futures possibles:

- validateur local de frontmatter;
- prototype d'import local;
- transformation Markdown vers objet `Resource`;
- stockage Supabase plus tard, apres decision explicite.

## Synthese

Automatisable:

- detection de titres explicites;
- extraction de listes;
- conversion Markdown;
- pre-remplissage de metadonnees evidentes.

Semi-automatisable:

- proposition d'objectifs;
- proposition de type ou competence;
- separation guide / support / corrige quand le document est clair.

Validation humaine obligatoire:

- niveau CECRL;
- pertinence pedagogique;
- corriges ouverts;
- droits et licences;
- usage responsable des outils numeriques et IA.
