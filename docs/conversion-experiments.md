# Expériences de conversion de supports FLE

Date: 2026-05-23

Rôle: Explorateur de conversion du projet `fle-commons-lab`.

## Objectif

Tester comment transformer des supports pédagogiques FLE existants en ressources structurées compatibles avec le modèle documentaire du projet.

Le dépôt ne contient pas encore de supports `.txt` ou `.docx` métier. Les trois supports ci-dessous sont donc des supports simples simulés, représentatifs de documents souvent partagés entre enseignants: une fiche texte, une activité orale et une petite évaluation.

## Livrables Convertis

- [Exemple 1: fiche grammaire A2](conversion-examples/01-fiche-grammaire-passe-compose.md)
- [Exemple 2: activité orale B1](conversion-examples/02-activite-orale-logement.md)
- [Exemple 3: évaluation compréhension écrite A2](conversion-examples/03-evaluation-comprehension-ecrite-menu.md)

## Méthode De Conversion

1. Identifier le type de support: exercice, séquence, évaluation, fiche, activité orale.
2. Extraire les métadonnées visibles: titre, niveau, durée, thème, compétence.
3. Repérer les consignes destinées aux apprenants.
4. Distinguer les notes professeur des consignes étudiant.
5. Isoler les réponses attendues pour le corrigé.
6. Ajouter les informations manquantes sous forme d’hypothèses explicites.
7. Produire un Markdown structuré avec les sections du modèle:
   - Objectifs
   - Déroulé
   - Support étudiant
   - Guide professeur
   - Corrigé
   - Variantes

## Expérience 1: Fiche Texte De Grammaire

### Source Simulée

```text
Titre: Le passé composé avec avoir et être
Niveau: A2
Durée: 45 min

Rappel:
Avec avoir: j'ai mangé, tu as regardé, nous avons visité.
Avec être: je suis allé(e), elle est sortie, ils sont venus.

Exercice 1:
Complétez avec avoir ou être.
1. Hier, je ___ allé au marché.
2. Nous ___ regardé un film.
3. Elles ___ sorties à 20h.
4. Tu ___ mangé une pizza.

Production:
Écrivez 5 phrases pour raconter votre week-end.
```

### Conversion Proposée

Le support devient une fiche de grammaire structurée. Les objectifs et le guide professeur ne sont pas entièrement présents dans la source: ils sont inférés.

Fichier converti: [01-fiche-grammaire-passe-compose.md](conversion-examples/01-fiche-grammaire-passe-compose.md)

### Ce Qui Se Perd

- La mise en page exacte de la fiche d’origine.
- Les éventuels encadrés, couleurs ou espacements utilisés pour guider le regard.
- Le niveau de détail de l’explication orale donnée par l’enseignant.

### Automatisable

- Détection du titre, du niveau et de la durée si les libellés sont explicites.
- Extraction des exercices numérotés.
- Transformation des listes en Markdown.
- Repérage probable du corrigé quand les réponses sont mécaniques.

### À Relire Par Un Enseignant

- Validité de la règle grammaticale.
- Pertinence des exemples.
- Progression de l’exercice.
- Corrigé et accords possibles.
- Niveau réel: certains groupes A2 auront besoin d’un rappel plus guidé.

## Expérience 2: Activité Orale

### Source Simulée

```text
Débat: Habiter seul ou en colocation ?
B1 - 60 minutes

Mise en route: demander aux étudiants où ils habitent et s'ils aimeraient changer.

Par groupes de 3:
Listez les avantages et inconvénients de la colocation.
Préparez 3 arguments.

Débat:
Groupe A défend la colocation.
Groupe B défend le logement seul.

Expressions utiles:
Je pense que...
Je ne suis pas d'accord parce que...
En revanche...
```

### Conversion Proposée

Le support devient une activité orale B1 avec guide d’animation, support étudiant et variantes. Le corrigé devient une grille d’attendus plutôt qu’une réponse unique.

Fichier converti: [02-activite-orale-logement.md](conversion-examples/02-activite-orale-logement.md)

### Ce Qui Se Perd

- Le ton exact de l’animation orale.
- Les exemples spontanés produits en classe.
- Les critères implicites de réussite.
- La façon dont l’enseignant gère la parole et les tours de rôle.

### Automatisable

- Repérage des phases: mise en route, préparation, débat.
- Extraction des expressions utiles.
- Création d’une structure Markdown par sections.
- Proposition d’un type `activité orale` et d’une compétence principale `interaction orale`.

### À Relire Par Un Enseignant

- Équilibre des rôles dans le débat.
- Adaptation culturelle du thème du logement.
- Gestion des apprenants plus réservés.
- Pertinence du niveau B1.
- Critères d’observation et de correction.

## Expérience 3: Évaluation De Compréhension Écrite

### Source Simulée

```text
Compréhension écrite - A2
Document: Menu d'un restaurant

Entrées: soupe de légumes 6€, salade verte 5€
Plats: poulet rôti 14€, poisson du jour 16€, omelette 11€
Desserts: tarte aux pommes 6€, glace 5€

Questions:
1. Quel est le plat le moins cher ?
2. Combien coûte le poisson du jour ?
3. Vous avez 20€. Choisissez une entrée et un plat.
4. Le menu propose-t-il un dessert aux fruits ?

Corrigé:
1. L'omelette.
2. 16€.
3. Exemple: salade verte + omelette = 16€.
4. Oui, la tarte aux pommes.
```

### Conversion Proposée

Le support devient une évaluation A2 avec document source, questions et corrigé. Le déroulé et le guide professeur sont ajoutés pour clarifier l’usage en classe.

Fichier converti: [03-evaluation-comprehension-ecrite-menu.md](conversion-examples/03-evaluation-comprehension-ecrite-menu.md)

### Ce Qui Se Perd

- La présentation visuelle du menu, qui peut être importante pour un document authentique.
- Les polices, colonnes ou images éventuelles.
- Les indices de difficulté liés à la mise en page.
- La distinction entre document authentique et document fabriqué si la source n’est pas documentée.

### Automatisable

- Extraction du texte du document.
- Conversion des questions numérotées.
- Séparation du corrigé quand il est explicitement indiqué.
- Identification probable du type `évaluation`.

### À Relire Par Un Enseignant

- Cohérence des prix et des réponses possibles.
- Niveau lexical réel du document.
- Barème ou critères d’acceptation.
- Accessibilité pour apprenants avec difficultés de lecture.
- Droits d’usage si le menu provient d’un vrai restaurant.

## Synthèse

La conversion vers Markdown est réaliste pour des supports simples, surtout quand les documents sources contiennent déjà des titres, consignes et corrigés explicites.

La partie la plus automatisable concerne la forme:

- titres;
- listes;
- questions;
- corrigés signalés;
- métadonnées évidentes;
- conversion en sections.

La partie qui doit rester relue par un enseignant concerne le fond:

- niveau CECRL réel;
- objectifs pédagogiques;
- pertinence culturelle;
- progression;
- consignes ambiguës;
- corrigés ouverts;
- variantes réalistes;
- droits et sources.

## Recommandations Pour La Suite

1. Commencer avec des conversions assistées, pas entièrement automatiques.
2. Demander à l’enseignant de valider les champs `level`, `mainSkill`, `resourceType` et `status`.
3. Conserver le texte source ou une note de source quand le document vient d’un support existant.
4. Signaler explicitement les éléments inférés pendant la conversion.
5. Reporter l’import `.docx` automatisé tant que le modèle éditorial n’est pas stabilisé.
