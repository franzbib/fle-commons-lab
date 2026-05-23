# Implementation Atelier IA & FLE

## Ce qui est implemente

La page `Atelier IA & FLE` est une section statique de l'application. Elle contient:

- une introduction pour enseignants FLE;
- des garde-fous sur les donnees, la verification et le jugement enseignant;
- 4 parcours d'initiation;
- 5 mini-tutoriels;
- 8 prompts commentes;
- des filtres locaux par categorie et difficulte;
- un bouton `Copier le prompt`.

## Pourquoi la section reste statique

La v0 ne doit pas integrer d'appel IA. Les prompts sont des supports pedagogiques a copier dans l'outil choisi par l'enseignant. Le site ne recoit pas, ne stocke pas et n'envoie pas de texte utilisateur.

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
- l'entree necessaire;
- la sortie attendue;
- les risques;
- la checklist de verification;
- des idees d'adaptation.

## Regles de prudence

- Ne pas demander de donnees personnelles d'apprenants.
- Ne pas copier de contenu protege sans droits.
- Verifier le niveau CECRL, les exemples, le corrige et les consignes.
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
