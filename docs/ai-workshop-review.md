# Relecture Pédagogique et UX : Atelier IA & FLE

**Date de la relecture** : 23 Mai 2026
**Profil relecteur** : Enseignant de FLE non-technicien, critique mais curieux.
**Objectif** : Évaluer la prudence, l'utilité et la lisibilité de la section statique "Atelier IA & FLE".

---

## 1. Verdict global
La section pose des fondations excellentes : elle démythifie l'IA et replace l'enseignant au centre. L'approche 100% statique (zéro appel API, "tout à copier") est le meilleur choix possible pour protéger les données. Cependant, la charge cognitive reste élevée : un enseignant "bricoleur pressé" risque d'être intimidé par la longueur des explications et le côté "texte à trous" des prompts. L'absence d'IA intégrée doit être assumée plus visuellement pour éviter que l'utilisateur cherche "où taper son texte" sur la plateforme.

## 2. Points forts
* **L'orientation métier** : Les prompts répondent à de vraies douleurs d'enseignants (différenciation, préparation rapide, génération d'exemples).
* **La structure des fiches prompt** : Les champs "Niveau de contrôle" et "Vérifications à faire" imposent une distance critique saine.
* **La sécurité** : Le refus absolu d'intégrer des outils de correction automatique protège à la fois la plateforme et les apprenants.

## 3. Points faibles
* **Le malentendu technique** : L'enseignant débutant risque de ne pas savoir *où* coller le prompt (ChatGPT ? Gemini ? Claude ?).
* **L'abstraction des entrées** : Dire `[Insérez le texte ici]` est trop abstrait. Il manque un exemple de ce à quoi ressemble un texte "prêt à être inséré".
* **Le syndrome de la page pleine** : 8 prompts + 5 tutoriels = beaucoup de texte à lire avant l'action.

## 4. Recommandations prioritaires
1. **Bandeau "Où suis-je ?"** : Ajouter un bandeau permanent en haut de page : *"FLE Commons Lab ne contient aucune intelligence artificielle. Choisissez un outil (ex: ChatGPT, Claude), copiez nos instructions, et collez-les là-bas."*
2. **Double affichage (Prompt / Exemple)** : Pour chaque prompt, afficher le prompt à trou ("Gabarit") ET un exemple rempli ("Exemple").
3. **Mise en valeur visuelle du copier-coller** : Le bouton de copie doit être l'action principale de la carte, avec une confirmation visuelle ("Instruction copiée !").

## 5. Recommandations secondaires
1. **Tags de temps** : Ajouter une estimation de temps (ex: "⏱️ 3 min") sur chaque mini-tutoriel pour encourager la lecture.
2. **Icônes de risque** : Utiliser des icônes pour le "Niveau de contrôle enseignant" (ex: 🟢 Faible, 🟡 Moyen, 🔴 Fort - Attention requise).

## 6. Mini-tutoriels à corriger
* **Tutoriel 2 (Adapter un texte)** : Insister sur le fait qu'un texte simplifié par IA perd souvent sa "couleur culturelle". L'IA standardise.
* **Tutoriel 4 (Anonymisation)** : Remplacer les grandes phrases par un exemple visuel Avant/Après (Avant : *"Bonjour, je m'appelle Pedro, j'habite à Madrid"*. Après : *"Bonjour, je m'appelle [Prénom], j'habite à [Ville]"*).
* **Tutoriel 5 (Mot juste / Vocabulaire)** : Alerter sur le fait que générer des listes de mots hors contexte favorise une mémorisation superficielle. Suggérer de demander à l'IA d'inclure les mots dans un court dialogue.

## 7. Prompts à reformuler
* **Prompt 1 (Simplificateur)** : Ajouter l'instruction : *"Conserve le nombre de paragraphes et la structure logique (connecteurs) pour faciliter la comparaison avec l'original."*
* **Prompt 2 (Questions de CE)** : L'IA a tendance à inventer. Ajouter : *"N'utilise QUE les informations explicitement présentes dans le texte. Si la réponse n'y est pas, ne pose pas la question."*
* **Prompt 6 (Correcteur Bienveillant)** : Alerter le professeur : l'IA évalue mal les niveaux CECRL des étudiants. Ajouter au prompt : *"Base tes corrections uniquement sur la grammaire du niveau [A2], ne corrige pas les maladresses stylistiques."*
* **Prompt 7 (Grille CECRL)** : L'IA produit souvent des grilles vagues ("Bonne prononciation"). Ajouter : *"Pour chaque critère, donne un exemple concret de ce qui justifie la note maximale."*

## 8. Garde-fous à renforcer
* **La certification CECRL** : Créer un encart d'avertissement : *"Une IA ne 'connaît' pas le CECRL comme un humain. Un texte généré pour un 'niveau B1' comportera souvent des structures B2 ou un lexique A2. La relecture enseignante est non négociable."*
* **Le droit d'auteur** : Rappeler que si on donne un texte d'un éditeur protégé à une IA pour générer des questions, on ne peut pas republier le résultat publiquement sur FLE Commons Lab.

## 9. Suggestions de microcopies (UX Writing)
* Remplacer *"Générer"* par *"Préparer avec une IA"*.
* Remplacer *"Utiliser ce prompt"* par *"Copier cette instruction"*.
* Au lieu de *"Entrée nécessaire"*, écrire *"Ce que vous devez fournir"*.
* Au lieu de *"Sortie attendue"*, écrire *"Ce que l'IA va produire"*.

## 10. Prompt conseillé pour Codex (Intégration technique à venir)
Voici l'instruction recommandée pour le futur agent Codex chargé de coder l'interface React :

> "Code la page `/ai-workshop` en React (Tailwind). Tu as une contrainte absolue : la page doit être 100% statique. Aucun appel réseau, aucun état global complexe. Focus-toi sur le design des cartes (Card) pour les prompts. Utilise des composants visuels pour séparer le 'Gabarit à copier' de 'L'exemple rempli'. Crée un bouton 'Copier' très visible qui utilise l'API presse-papier du navigateur (`navigator.clipboard.writeText`) et affiche un état 'Copié !' temporaire de 2 secondes. Ajoute un encart 'Alerte' en haut de page pour préciser que le site ne contient aucun moteur IA."
