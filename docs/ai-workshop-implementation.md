# Implementation Atelier IA & FLE

## Ce qui est implemente

La page `Atelier IA & FLE` est une section statique de l'application. Elle contient:

- une introduction pour enseignants FLE;
- des garde-fous sur les donnees, la verification et le jugement enseignant;
- 4 parcours d'initiation;
- 5 mini-tutoriels;
- 8 prompts commentes;
- un exemple rempli court pour chaque prompt;
- des filtres locaux par categorie et difficulte;
- deux boutons de copie explicites: `Copier le prompt modele` et `Copier l'exemple rempli`;
- un bandeau visible rappelant que le site ne contient aucune IA integree.

## Pourquoi la section reste statique

La v0 ne doit pas integrer d'appel IA. Les prompts sont des supports pedagogiques a copier dans l'outil choisi par l'enseignant. Le site ne recoit pas, ne stocke pas et n'envoie pas de texte utilisateur.

Aucun champ de saisie n'est traite par FLE Commons Lab. Le bouton de copie utilise seulement le presse-papiers du navigateur et ne declenche aucun appel reseau.

## Fichiers principaux

- `src/types/aiWorkshop.ts`
- `src/data/aiWorkshop.ts`
- `src/pages/AiWorkshopPage.tsx`
- `src/components/CopyPromptButton.tsx`

## Ajouter un tutoriel

Ajouter une entree dans `aiTutorials` avec:

- un titre oriente besoin;
- un temps court;
- 3 a 5 etapes;
- des garde-fous;
- des pieges courants;
- des tags.

Le tutoriel doit partir d'un besoin FLE, pas d'une fonctionnalite technique.

## Ajouter un prompt

Ajouter une entree dans `promptRecipes` avec:

- un usage pedagogique;
- un texte de prompt contenant des zones a remplir entre crochets;
- un exemple rempli court, fictif et juridiquement sur;
- l'entree necessaire;
- la sortie attendue;
- les risques;
- la checklist de verification;
- des idees d'adaptation.

Si le prompt mentionne un niveau CECRL, une adaptation de niveau, une correction ou une grille, ajouter un garde-fou CECRL: le niveau propose par une IA est une hypothese de travail, jamais une validation.

## Regles de prudence

- Ne pas demander de donnees personnelles d'apprenants.
- Ne pas copier de contenu protege sans droits.
- Verifier le niveau CECRL, les exemples, le corrige et les consignes.
- Rappeler que le CECRL ne peut pas etre valide automatiquement par une IA.
- Ne pas presenter l'IA comme un evaluateur automatique.
- Garder le jugement enseignant au centre.

## Limites actuelles

- Aucun chatbot.
- Aucun appel API IA.
- Aucun stockage des prompts copies.
- Aucun compte utilisateur.
- Aucun suivi d'usage.
- Aucun fournisseur IA privilegie.

La section est une bibliotheque de pratiques et de prompts, pas un outil IA integre.
