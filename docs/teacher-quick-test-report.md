# Rapport de Recette Pédagogique et UX : Test du "Prof Pressé"

**Date du test** : 23 Mai 2026
**Profil testeur** : Enseignant de FLE disposant de 10 minutes de préparation avant d'entrer en classe.
**Périmètre** : Fiche ressource (3 onglets), impression, copie, lisibilité apprenant/professeur.

## 1. Résumé global
Le test simule l'expérience d'un enseignant découvrant la ressource juste avant son cours. La nouvelle structure en trois onglets (Vue d'ensemble, Contenu apprenant, Corrigés & Notes prof) apporte une clarification radicale. La promesse de FLE Commons Lab (copier, imprimer, adapter sans technique) commence à être tenue. Cependant, si le contenu classique (grammaire) est immédiatement exploitable, les activités nécessitant du matériel (vidéo, cartes rôles) révèlent quelques frictions UX pour une utilisation "dans l'urgence".

## 2. Tableau comparatif des ressources testées

| Ressource | Niveau | Vue d'ensemble | Contenu apprenant (Projection/Impression) | Corrigés & Notes prof |
|-----------|--------|----------------|-------------------------------------------|-----------------------|
| **b1-cause-consequence** | B1 | Très claire (45 min, grammaire) | Propre, consignes directes. | Précis, différenciation utile. |
| **b1-enquete-suspect** | B1 | Claire, jeu de rôle (65 min) | Lisible, mais nécessite découpage (rôles). | Guide indispensable pour la mise en place. |
| **b2-notes-video** | B2 | Objectifs méthodologiques clairs | Grille de notes facile à projeter. | Lien vidéo et rythme d'écoute à chercher. |
| **a0-rituel-images-mots**| A0 | Immédiat (12 min, rituel) | Très visuel, idéal pour projection. | Instructions gestuelles concrètes. |

## 3. Points forts
* **L'isolation du contenu apprenant** : L'enseignant peut projeter le deuxième onglet sans crainte de révéler accidentellement le corrigé.
* **Le vocabulaire d'interface** : Aucun jargon technique (pas de "YAML", "Markdown" ou "Frontmatter"). On est bien dans une salle des profs.
* **Les styles d'impression (Print CSS)** : L'impression du contenu apprenant génère un support propre, sans la navigation du site.
* **Le droit à l'adaptation** : La structure rend évidente la possibilité de s'approprier le contenu.

## 4. Problèmes rencontrés
* **Visibilité du matériel critique** : Pour l'enquête ou la vidéo, l'enseignant doit lire le `teacherGuide` pour savoir s'il lui manque du matériel physique (ciseaux, haut-parleurs). En 10 minutes, cette info doit sauter aux yeux.
* **Coupures de page à l'impression** : Sur l'activité *b1-enquete-suspect*, l'impression brute du "Contenu apprenant" peut couper une carte rôle en deux.
* **Accès aux médias** : Pour *b2-notes-video*, l'enseignant cherche immédiatement le lien ou le fichier de la vidéo. S'il est noyé dans le texte, c'est une perte de temps.

## 5. Corrections prioritaires
1. **Alerte matériel en haut du guide** : Isoler visuellement (alerte ou puce) le matériel requis dès le début de l'onglet "Corrigés & Notes prof" (ex: *Attention : nécessite d'imprimer et découper 4 rôles*, ou *Vérifier le son*).
2. **Sauts de page CSS (`page-break-inside: avoid`)** : S'assurer que les listes ou "cartes" dans le contenu apprenant ne sont pas coupées à l'impression.
3. **Mise en évidence des liens médias** : Si une ressource dépend d'une vidéo ou d'un audio, le lien doit être un bouton d'action clair dans l'onglet "Contenu apprenant" et "Notes prof".

## 6. Corrections secondaires
1. **Bouton "Copier le texte" vs "Copier avec mise en forme"** : Offrir l'option pour faciliter le collage dans Word (mise en forme) ou dans un outil tiers (texte brut).
2. **Estimation du temps de lecture** : Ajouter un petit badge "Lu en 2 min" sur l'onglet Notes prof pour rassurer l'enseignant pressé.

## 7. Recommandations pour les futures ressources
* **La règle des 3 puces** : Le `teacherGuide` doit commencer par une liste de 3 puces maximum décrivant "L'action immédiate" (1. Distribuer, 2. Faire écouter, 3. Corriger).
* **Indépendance des variantes** : Si une variante est proposée, s'assurer qu'elle est décrite de façon autonome pour éviter à l'enseignant de faire des allers-retours mentaux avec l'activité principale.
* **Simplicité des consignes apprenant** : Le contenu apprenant doit pouvoir se suffire à lui-même si le professeur l'imprime et part faire des photocopies.

## 8. Recommandations UX
* **Aperçu avant impression** : Proposer un mode "Aperçu apprenant" qui montre exactement ce qui sortira de l'imprimante (marges, en-têtes nettoyés).
* **Affichage des variantes** : Intégrer visuellement les "Variantes" sous forme d'accordéons ou d'onglets secondaires dans le Guide Professeur pour ne pas surcharger la vue par défaut.
* **Mode "Projection"** : Un bouton plein écran dans l'onglet "Contenu apprenant" pour cacher le header du site et utiliser 100% de l'écran du vidéoprojecteur.

## 9. Verdict sur le test "Prof pressé" (10 min de préparation)

* **b1-cause-consequence-quotidien** : **OUI**. Typique de la grammaire inductive/remédiation. L'enseignant projette, lit les consignes, a le corrigé sous les yeux. Prêt en 2 minutes.
* **a0-rituel-images-mots** : **OUI**. L'activité est si courte et visuelle que l'enseignant peut la lire en marchant vers sa classe.
* **b1-enquete-suspect-temoin-indice** : **OUI AVEC UNE PETITE ADAPTATION**. Demande de passer à la photocopieuse et potentiellement de découper des cartes de rôle. Faisable en 10 minutes, mais avec un peu de stress logistique.
* **b2-notes-video-courte** : **OUI AVEC UNE PETITE ADAPTATION**. Le support écrit (grille de prise de notes) est prêt, mais le "prof pressé" doit impérativement trouver la vidéo, vérifier son compte Moodle/Youtube, et tester l'audio de sa salle.
