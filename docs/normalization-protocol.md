# Protocole et Sas de Normalisation des Ressources

Ce document établit la méthode théorique et opérationnelle pour transformer une "ressource brute" (déposée par un enseignant) en une "ressource FLE structurée" compatible avec le catalogue *FLE Commons Lab*.

---

## 1. Audit du Modèle de Ressource Actuel

L'analyse de `src/types/resource.ts` révèle la structure de la donnée actuelle.

### Ce qui est suffisant
Le modèle TypeScript actuel est extrêmement exhaustif. Il permet déjà de représenter :
- **Le statut éditorial** (`EditorialStatus`: brouillon, utilisable, testé, validé).
- **L'état de normalisation** (`NormalizationStatus`: soumise, en_analyse, en_normalisation, en_relecture, normalisee).
- **L'adaptabilité** (`ReuseReadiness`: pret_a_tester, a_adapter, etc.).
- **La structure pédagogique** (`ResourceContent` avec ses clés : objectifs, prérequis, plan de leçon, guide enseignant, corrigé).
- **La boucle de rétroaction** (`usageFeedbacks`, `contributionSuggestions`, `reviewSummary`, `versions`).

### Ce qui est trop complexe
- La **granularité de la taxonomie** : Obliger un enseignant à remplir `aiUseCase`, `digitalFormat`, `sourceType` lors du dépôt initial provoquerait un abandon immédiat.
- La **séparation stricte** entre `mainSkill`, `secondarySkills` et `resourceSkill`. La distinction est subtile pour un contributeur pressé.

### Ce qui manque pour le sas de normalisation
- Le modèle ne prévoit pas le stockage du **matériau brut initial** (le texte copié-collé, ou l'URL du document Word). Actuellement `NormalizationMetadata` contient `originalFormat` mais pas le contenu brut lui-même. 
- *Recommandation* : Ne pas inclure le texte brut dans le modèle JSON public (`Resource`). Le texte brut doit exister uniquement dans un "sas" (base de données de contribution future) et n'être poussé dans le dépôt GitHub (via les fichiers `.md`) qu'une fois structuré.

### Ce qui doit rester optionnel
Absolument toutes les métadonnées (IA, Numérique, Retours d'usage, Versions) doivent rester optionnelles dans le frontmatter généré, à l'exception des "Quick Facts" (Niveau, Durée, Titre, Résumé, Compétence).

---

## 2. Typologie des Ressources Brutes

Voici la typologie des entrées auxquelles le sas devra faire face, et leur complexité de traitement :

| Type d'entrée | Récupérable Auto. (IA) | À vérifier / Demander à l'humain | Risques | Difficulté |
|---------------|------------------------|----------------------------------|---------|------------|
| **Simple texte copié** (ex: consignes, textes) | Extraction du texte, estimation niveau, découpage exercices/corrigés. | Titre, droits d'auteur, contexte d'usage. | Texte non libre de droits. | Faible |
| **Fiche Word complète** | Extraction texte, consignes, objectifs implicites. | Droits des images incluses, licence souhaitée. | Mises en page complexes perdues, images volées. | Moyenne |
| **PDF figé** | OCR (si possible), récupération texte brut. | Re-vérification forte de la typographie et des tableaux. | PDF de manuels d'éditeurs protégés. | Élevée |
| **Plan de cours / Séquence** | Extraction de la chronologie, durée, prérequis. | Ajout des supports étudiants (souvent manquants). | Séquence trop longue pour le format web. | Élevée |
| **Exercice sans corrigé** | Consignes, support étudiant. | Le corrigé (à générer par IA ou demander). | Activité inutilisable par un autre prof. | Faible |
| **Corrigé isolé** | Réponses. | Association à l'exercice d'origine (ID). | Inutile si orphelin. | Faible |
| **Activité orale rapide** | Le pitch, les règles du jeu. | Niveau CECRL précis, durée réaliste. | Souvent trop vague ("Parlez de la météo"). | Moyenne |
| **Retour d'usage (post-classe)** | Ce qui a marché, la durée réelle. | Association avec la ressource d'origine (ID). | Biais de l'enseignant. | Faible |

---

## 3. Protocole de Normalisation

Ce protocole définit les étapes que suit une ressource, du clic sur "Soumettre" à son apparition dans le catalogue.

### Étape 1 : Prédiagnostic (Statut: `soumise`)
- **Entrée** : Le fichier (Texte, Word) déposé + 3 questions rapides (Titre, Niveau, Compétence).
- **Action** : Scan rapide (script/IA).
- **Décision** : Rejet automatique si le texte contient un copyright explicite de maison d'édition.

### Étape 2 : Extraction et Structuration (Statut: `en_normalisation`)
- **Action** : Un script/LLM convertit le contenu brut en Markdown respectant le format `FLE Commons Lab`.
- **Sortie** : Fichier `.md` temporaire. Séparation nette entre `studentInstructions`, `teacherGuide` et `answerKey`. Estimation du `durationCategory`.

### Étape 3 : Qualification des Droits (Statut: `en_analyse`)
- **Action** : Demander confirmation des sources à l'enseignant ou au normalisateur (Si texte authentique: exception pédagogique ou domaine public ?).
- **Risque** : Publier un texte protégé. Si incertain, la licence est marquée `a_verifier`.

### Étape 4 : Relecture Humaine (Statut: `en_relecture`)
- **Entrée** : Le fichier `.md` généré.
- **Action** : Un "Contributeur Reconnu" vérifie le résultat via la *Grille d'Audit Pédagogique*. Il corrige les hallucinations de l'IA éventuelle.
- **Critère de qualité** : La ressource est compréhensible par un pair.

### Étape 5 : Publication (Statut: `normalisee` → `utilisable`)
- **Action** : Fusion (Merge Request) dans la branche principale. Apparition dans le catalogue.

---

## 4. Recommandations Produit (UX de contribution)

Pour inciter les enseignants non techniciens à partager sans backend lourd :

1. **Le Formulaire de Dépôt (Sas public)** :
   - Ne doit comporter que 3 champs obligatoires : "Quoi ?" (Texte/Fichier), "Pour quel niveau ?" (A1-C2), et "Quelle compétence ?".
   - Éviter absolument de demander : Licence technique, tags lexicaux, durée en minutes exactes.
   - *Mentalité* : "Jetez vos brouillons ici, on s'occupe du reste".

2. **Affichage des Statuts** :
   - Ne pas cacher les ressources en cours de normalisation. Les afficher avec le badge *Brouillon / Brut* (comme implémenté dans `ResourceCard`). Cela montre que le projet est vivant et suscite l'envie de contribuer à leur nettoyage.
   - Masquer les métadonnées techniques vides derrière des sections repliables (implémenté via *Divulgation Progressive*).

3. **Lien avec la Réciprocité Contributive** :
   - Lorsqu'un utilisateur relit ou corrige une ressource `en_relecture` (Étape 4), cela lui octroie le statut de "Contributeur Actif", pérennisant ainsi son accès gratuit à l'ensemble du catalogue.
