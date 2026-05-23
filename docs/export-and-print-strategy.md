# Strategie copie, impression et exports

## Pourquoi c'est important

Les enseignants de FLE reutilisent souvent une ressource en classe par gestes simples:

- copier une consigne;
- adapter un support;
- imprimer une fiche;
- garder le corrige separe;
- partager une version provisoire avec un collegue.

La v0 doit donc offrir des actions immediates avant d'imaginer des exports plus ambitieux.

## Ce qui est implemente maintenant

Les fiches ressources proposent des actions locales:

- copier le contenu apprenant depuis l'onglet `Contenu apprenant`;
- copier les corriges et notes professeur depuis l'onglet `Corriges & Notes prof`;
- imprimer la vue active avec `window.print`.

Ces actions utilisent seulement les APIs navigateur. Elles n'appellent aucun serveur, ne stockent rien et ne generent pas de fichier.

## Separation apprenant / professeur

La copie du contenu apprenant ne doit pas inclure:

- corrige;
- guide professeur;
- retours d'usage;
- audit simule;
- notes IA ou numeriques detaillees;
- versions.

La copie des notes professeur peut inclure:

- deroule;
- guide professeur;
- corrige;
- variantes;
- notes d'usage;
- notes IA ou numeriques utiles;
- historique de version;
- retours d'usage synthetiques.

Cette separation est une regle UX, pas un systeme de permission.

## Impression navigateur

L'impression actuelle est volontairement simple:

- la navigation est masquee;
- les boutons d'action sont masques;
- la vue active reste lisible;
- les blocs pedagogiques evitent les coupures disgracieuses.

L'objectif n'est pas encore de produire un PDF parfait. L'enseignant peut utiliser la fonction d'impression du navigateur pour imprimer ou enregistrer en PDF si son systeme le permet.

## Exports futurs

Des exports plus structures pourront etre etudies plus tard:

- export Markdown;
- export texte propre;
- export PDF;
- export Word;
- export fiche apprenant seule;
- export corriges separes.

Ces exports devront rester sobres, verifier la separation apprenant / professeur et respecter les licences.

## Ce qui est volontairement differe

- Generation PDF applicative.
- Generation Word.
- Export serveur.
- Stockage d'exports.
- Templates complexes.
- Upload ou import de fichiers.
- Personnalisation par compte utilisateur.

Avant tout export avance, il faudra stabiliser le modele editorial et verifier les besoins reels avec des enseignants.
