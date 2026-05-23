# Modèle de Réciprocité Contributive

Ce document décrit la doctrine de "réciprocité contributive" de FLE Commons Lab, qui vise à garantir la soutenabilité du commun pédagogique sans tomber dans le modèle classique du paywall (qui limite l'accès à ceux qui paient).

## Le Principe : Un Commun qui demande à être nourri

FLE Commons Lab est conçu par et pour les enseignants de français langue étrangère. Son but n'est pas de monétiser des ressources, mais d'encourager la mise en commun des pratiques.

La règle d'or de la plateforme est la suivante : 
> **"Ceux qui utilisent beaucoup doivent contribuer un peu."**

## Les Niveaux d'Accès

Le système (qui sera implémenté techniquement dans une phase ultérieure) reposera sur différents statuts pour les utilisateurs :

1. **Accès Découverte (Visiteur / Non inscrit)**
   - Accès limité à un certain nombre de ressources par mois ou à une partie du catalogue.
   - Permet à un enseignant de découvrir la qualité du projet et de l'utiliser pour un dépannage ponctuel.

2. **Accès Inscrit**
   - L'enseignant se crée un compte gratuit.
   - Les limites de consultation sont élargies.
   - L'enseignant a accès au "Sas de Contribution".

3. **Contributeur Actif**
   - Accès illimité à l'ensemble du catalogue.
   - Ce statut s'acquiert et se maintient en apportant une **contribution utile** au commun.

4. **Contributeur Reconnu / Modérateur**
   - Utilisateurs très actifs qui ont les droits de relecture, de validation et d'administration du sas de normalisation.

## Qu'est-ce qu'une "Contribution Utile" ?

La grande force du modèle est de reconnaître que **la contribution n'est pas uniquement technique ou experte**. De nombreux enseignants n'ont pas le temps de créer une ressource structurée parfaite de A à Z.

Voici les formes de contribution qui permettront de maintenir son statut "Actif" :

- **Le Dépôt Brut** : Partager une ressource brute (texte, pdf, scan d'un exercice) que l'enseignant a créée et qui passera dans le sas de normalisation pour être mise au format par d'autres.
- **Le Retour d'Usage (Feedback)** : Laisser un commentaire constructif sur une ressource utilisée en classe (ex: "J'ai testé avec des B1, l'activité a pris 45min au lieu de 30min, j'ai dû simplifier la consigne 2"). C'est une donnée pédagogique inestimable.
- **La Correction** : Signaler ou corriger une coquille, une erreur de niveau, ou un problème de droits d'auteur.
- **L'Adaptation** : Proposer une variante (ex: une version de la fiche adaptée pour du public alpha, ou une version intégrant l'usage d'une IA).
- **La Normalisation** : Aider à transformer une "ressource brute" déposée par un pair en "ressource structurée" (Markdown/YAML).

## Pourquoi pas un simple Paywall ?

Un paywall monétaire (ex: 5€/mois) transforme la relation en une relation client-fournisseur. L'enseignant devient consommateur, et attend un service irréprochable.
La réciprocité contributive, au contraire, transforme l'enseignant en acteur de la plateforme. La "monnaie d'échange" est le savoir pédagogique et le temps.

## Ce qui n'est pas prévu pour l'instant (v0/v1)

Afin de garder le projet gérable techniquement, les éléments suivants sont **volontairement exclus de la version actuelle** :
- La création de comptes utilisateurs via base de données (Supabase, Clerk, etc.).
- Le blocage réel (paywall) des pages web.
- Le suivi technique fin des quotas de consultation.

Actuellement, le projet prépare **les concepts et les structures de données** (via les types optionnels dans le code) pour être prêt le jour où la communauté décidera d'activer ces barrières logicielles.
