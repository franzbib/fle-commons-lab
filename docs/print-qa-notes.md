# Notes QA impression

## Cas inspectes

Les ressources suivantes ont servi de cas de controle pour cette passe:

- `b2-notes-video-courte`: fiche avec contenu apprenant, guide professeur, criteres et notes techniques liees a une video.
- `b2-esprit-critique-reponse-ia`: fiche avec support apprenant, corrige, notes IA et metadonnees numeriques/IA.
- `c1-debat-traduction-automatique`: fiche longue de debat avec support apprenant, guide professeur, criteres et retours d'usage.

## Problemes observes

- L'impression affichait bien la vue active, mais ne donnait pas de titre imprime explicite indiquant si l'on imprimait la fiche apprenant ou les notes prof.
- Les cartes et bordures etaient encore un peu fortes pour une sortie noir et blanc.
- Les grilles de contenu en deux colonnes pouvaient rendre une fiche longue moins confortable a lire sur papier.
- Les titres de section avaient besoin d'une protection plus explicite pour eviter d'etre isoles en bas de page.

## Ajustements effectues

- Ajout d'un titre imprime pour la vue active dans `ResourceDetailTabs`.
- Passage du contenu pedagogique imprime en une colonne.
- Reduction des bordures et fonds colores dans `@media print`.
- Masquage confirme de la navigation, des onglets, des boutons de copie/impression et des actions non pertinentes.
- Ajout de regles `break-after: avoid-page`, `orphans` et `widows` pour limiter les coupures maladroites.
- Libelles enseignants clarifies: `Copier la fiche apprenant` et `Imprimer la fiche apprenant`.

## Separation apprenant / professeur

La vue `Contenu apprenant` imprime seulement le contenu rendu dans cet onglet:

- objectifs;
- prerequis;
- support etudiant.

Elle ne rend pas:

- corrige;
- guide professeur;
- notes prof;
- retours d'usage;
- audit simule;
- versions;
- notes IA/numeriques detaillees.

La vue `Corriges & Notes prof` peut imprimer les contenus enseignants et les details utiles a l'animation.

## Limites restantes

- Le rendu final depend toujours du navigateur et des parametres d'impression de l'utilisateur.
- L'application ne genere pas de PDF ou Word.
- Les blocs tres longs peuvent encore se couper si leur contenu depasse une page.
- Une vraie verification visuelle page par page devra etre faite avec quelques enseignants et plusieurs navigateurs.

## Differes vers un futur export

- Export PDF controle par gabarit.
- Export Word editable.
- Export separe apprenant / professeur avec nom de fichier.
- Numerotation de pages et en-tetes imprimes avances.
