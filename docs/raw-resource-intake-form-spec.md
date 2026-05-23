# Spécification UX : Formulaire "Proposer une ressource"

Ce document définit l'architecture fonctionnelle et l'expérience utilisateur du futur formulaire de dépôt de ressources de FLE Commons Lab. 

L'objectif de ce formulaire est de permettre à n'importe quel enseignant de français langue étrangère (FLE), même non familier avec l'informatique ou GitHub, de proposer ses matériaux ou ses retours d'usage de manière sereine.

---

## 1. Principes Fondateurs

- **Zéro jargon technique** : Les mots "Markdown", "YAML", "Taxonomie", "Pull Request" ou "Base de données" sont proscrits de l'interface.
- **Droit à l'imperfection** : Le formulaire doit donner l'impression *"Jetez vos brouillons ici, on s'occupe du reste"*.
- **Divulgation progressive** : Le formulaire est découpé en étapes courtes ("wizard") pour ne pas effrayer par un mur de champs.
- **Réciprocité bienveillante** : Remercier le contributeur et lui indiquer que son apport (même modeste) l'inscrit dans la communauté active, sans utiliser le vocabulaire de la transaction financière.

---

## 2. Parcours Étape par Étape

Le formulaire est pensé comme un tunnel en 5 étapes.

### Étape 1 : Que voulez-vous proposer ?
*But : Capter tous les types de contributions, du texte complet à la simple idée.*

- **Titre affiché** : "Quelle est votre proposition aujourd'hui ?"
- **Microcopie d'aide** : "Toutes les contributions sont précieuses : une séquence complète, un exercice gribouillé, ou même une simple remarque sur une fiche existante."
- **Champs** :
  - **Type de proposition (Boutons Radio larges) [Obligatoire]** :
    - Une activité ou un exercice
    - Une évaluation
    - Une idée ou un retour d'expérience
    - Une adaptation d'une ressource du site
    - Un corrigé manquant
  - **Titre provisoire (Champ texte) [Facultatif]** : "Donnez un titre rapide à votre idée (ex: Jeu de rôle au restaurant)."

### Étape 2 : Le Contenu
*But : Récupérer la matière brute sans exiger de mise en forme.*

- **Titre affiché** : "Collez votre contenu"
- **Microcopie d'aide** : "Ne vous souciez pas de la mise en page. Nos modérateurs se chargeront de tout remettre au propre."
- **Champs** :
  - **Zone de texte libre (Textarea grand format) [Obligatoire]** : "Collez ici votre texte, vos consignes, ou décrivez votre activité..."
  - **Zone de dépôt de fichier (Optionnel, futur)** : "Ou glissez un fichier Word/PDF ici."

### Étape 3 : Pour quel public ?
*But : Obtenir les 3 "Quick Facts" vitaux pour le classement.*

- **Titre affiché** : "À qui s'adresse cette activité ?"
- **Champs** :
  - **Niveau estimé (Menu déroulant ou Boutons) [Obligatoire]** : "A1, A2, B1, B2, C1, C2, Je ne sais pas trop".
  - **Objectif principal (Champ court) [Obligatoire]** : "Ex: Apprendre à se présenter, réviser le passé composé..."
  - **Durée estimée (Menu déroulant court) [Facultatif]** : "Moins de 15 min, 15-30 min, 1h, Plus d'1h".

### Étape 4 : Droits et Sources
*But : Éviter le pillage de manuels commerciaux.*

- **Titre affiché** : "D'où vient ce document ?"
- **Microcopie d'aide** : "Pour protéger le projet FLE Commons Lab, nous ne pouvons pas publier de textes ou d'images copiés d'un manuel édité (CLE, Hachette, Didier, etc.)."
- **Champs** :
  - **Source (Boutons Radio) [Obligatoire]** :
    - "C'est moi qui l'ai entièrement créé."
    - "C'est basé sur un document authentique externe (article, vidéo, brochure)."
    - "C'est inspiré d'une ressource existante, mais je l'ai fortement modifiée."
  - **Lien source (Champ texte) [Facultatif, s'affiche si doc authentique]** : "Lien vers l'article original."
  - **Validation des droits (Case à cocher) [Obligatoire]** : "J'accepte que ma ressource soit mise au propre, partagée gratuitement aux autres professeurs sous licence libre (CC-BY-SA)."

### Étape 5 : Votre Profil & Envoi
*But : Lier l'action à la réciprocité contributive.*

- **Titre affiché** : "Un grand merci !"
- **Microcopie d'aide** : "Votre aide permet au projet de rester gratuit et indépendant. Ce dépôt comptera comme une participation active."
- **Champs** :
  - **Pseudonyme ou Prénom (Champ texte) [Facultatif]** : "Sous quel nom souhaitez-vous être crédité ?"
  - **Bouton d'envoi final** : `Envoyer au Sas de Mise au propre`

---

## 3. Ce qu'il NE FAUT PAS demander

Pour garantir le taux de complétion, il est formellement interdit d'afficher :
- Le choix de la licence technique (ex: CC-BY, CC-BY-NC-SA). L'explication vulgarisée à l'étape 4 suffit.
- La durée exacte en minutes (trop de charge cognitive).
- Les tags lexicaux ou grammaticaux exhaustifs.
- Le format numérique ou le degré d'usage de l'IA.
- Le Frontmatter YAML.
- Tout sélecteur d'arborescence (ex: "Dans quel dossier voulez-vous l'enregistrer ?").

---

## 4. Affichage des Statuts (Traduction Professeur)

Lorsque l'enseignant consultera plus tard la liste de ses contributions, les statuts techniques (`src/types/resource.ts`) seront traduits ainsi :

| Statut Technique (`NormalizationStatus`) | Affichage Interface (Professeur) | Explication (Tooltip) |
|------------------------------------------|----------------------------------|------------------------|
| `soumise` | **Bien reçu !** | "Votre proposition est bien arrivée dans notre sas." |
| `en_analyse` | **À clarifier** | "Nous avons une question sur votre dépôt (ex: droits d'auteur)." |
| `en_normalisation` | **Mise en page en cours** | "L'équipe structure votre brouillon au format du site." |
| `en_relecture` | **Relecture croisée** | "Un autre professeur vérifie la cohérence pédagogique." |
| `normalisee` | **Publié ! 🎉** | "Bravo, votre ressource est en ligne et utile à tous." |

---

## 5. Parcours Utilisateurs Typiques

### Profil A : Julie, professeure pressée (Corrigé manquant)
- **Situation** : Elle a utilisé une ressource du site mais a remarqué qu'il manquait le corrigé. Elle a fait le corrigé à la main pendant son cours.
- **Parcours** : Elle choisit "Un corrigé manquant" (Étape 1). Elle tape simplement "Pour l'exo sur le subjonctif : 1. vienne, 2. fasse, 3. sachions" dans la grande zone de texte (Étape 2). Elle coche la case des droits (Étape 4) et envoie.
- **Résultat** : En 45 secondes, elle a contribué au commun et validé son statut de "Contributrice Active".

### Profil B : Karim, enseignant expérimenté (Séquence complexe)
- **Situation** : Il a une séquence géniale sur l'écologie (4 pages de texte).
- **Parcours** : Il choisit "Activité ou séquence" (Étape 1). Il copie-colle brutalement ses 4 pages Word dans la zone (Étape 2). Il indique "B2" (Étape 3) et "Création personnelle" (Étape 4).
- **Résultat** : Il n'a pas eu à s'arracher les cheveux sur la mise en page web. Le sas transformera ses 4 pages en sections structurées (`objectives`, `lessonPlan`, etc.).

### Profil C : Sofia (Retour d'usage)
- **Situation** : Elle a testé le "Jeu du Monstre". Elle veut juste dire que ça a pris 30min au lieu de 20min.
- **Parcours** : Elle choisit "Une idée ou un retour d'expérience" et tape sa remarque. 

---

## 6. Recommandations pour l'Intégration Future (Codex)

Lors de la future implémentation du composant React `src/pages/ContributionSpacePage.tsx` :
- **Design UI** : Coder un composant "Wizard" (avec une jauge de progression `Étape X sur 5`).
- **Composants Formulaire** : Utiliser des gros boutons cliquables plutôt que de minuscules boutons radio natifs.
- **Logique v0 (Mock)** : Le bouton `Envoyer` ne fera pas d'appel réseau. Il affichera simplement le message suivant (Microcopie à intégrer) :
  > *"Merci ! Ce formulaire est une démonstration visuelle de notre future philosophie de dépôt. Dans cette version V0 statique, vos données ne sont envoyées sur aucun serveur. Retrouvez-nous sur GitHub si vous êtes technophile !"*
- **Architecture** : Ne créer aucune table de base de données, ni aucun appel d'API. L'état du formulaire restera purement local (`useState`).
