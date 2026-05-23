# Sas de Normalisation des Ressources

Ce document décrit le flux de travail (workflow) permettant de transformer une ressource brute, imparfaite et non structurée, en une ressource publiable de qualité au sein de FLE Commons Lab.

## Objectif du Sas

Afin d'encourager la contribution, il ne faut pas exiger d'un enseignant qu'il maîtrise le Markdown, le format YAML, ou l'arborescence technique du projet. 
L'enseignant doit pouvoir proposer sa ressource sous sa forme naturelle. C'est le rôle du **Sas de Normalisation** (hybride humain/IA) de la formater.

## Types d'Entrées Acceptées

Le sas doit pouvoir recevoir des formats variés :
- Un texte copié-collé (brut).
- Un document Word ou PDF.
- Un brouillon de plan de séance.
- Un exercice avec un corrigé séparé ou manquant.
- Une simple idée d'activité (prompt pédagogique).

## Le Flux de Normalisation (Workflow)

Le processus de passage de "Brut" à "Publié" suit 5 étapes :

### 1. Soumission (`soumise`)
L'enseignant dépose sa ressource brute via un formulaire ou un dépôt de fichier. Il indique quelques métadonnées de base (ex: public cible, durée estimée).
*Le fichier est stocké tel quel, hors du catalogue public.*

### 2. Analyse (`en_analyse`)
La ressource est scannée par l'équipe (ou un script IA) pour vérifier les critères de rejet stricts (voir Garde-fous ci-dessous).

### 3. Normalisation (`en_normalisation`)
La transformation technique a lieu.
- Le texte est extrait.
- Le typage est appliqué (génération du Frontmatter YAML : `CefrLevel`, `DurationCategory`, etc.).
- Le contenu est structuré en Markdown (`ResourceContent` avec ses sections `objectives`, `lessonPlan`, etc.).
Cette étape peut être confiée à un LLM spécialisé (ex: Codex/Antigravity) ou à un enseignant "normalisateur".

### 4. Relecture Humaine (`en_relecture`)
La ressource normalisée est relue par un pair (ou un modérateur). Il vérifie que l'intention pédagogique originale n'a pas été altérée par la mise au format, et que les tags sont pertinents.

### 5. Publication (`normalisee` / `utilisable`)
La ressource quitte le sas. Elle obtient le statut éditorial `utilisable` ou `teste` et rejoint le catalogue public officiel de FLE Commons Lab.

## Les Garde-Fous (Critères de Rejet)

Pour garantir la qualité et la légalité du commun, le sas n'est **pas automatique**. Les éléments suivants bloquent la normalisation :

- **Légalité** : Copie évidente d'un manuel d'éditeur (CLE, Hachette, Didier, etc.) ou d'un article de presse non libre (sans respect de l'exception pédagogique).
- **Linguistique** : Texte criblé de fautes ou niveau de langue inadapté à l'objectif.
- **Pédagogique** : Activité incohérente, ou dont les consignes sont incompréhensibles.

Dans ces cas, le contributeur est contacté pour amender sa proposition.

## Implémentation v0

Dans la version actuelle du projet, le sas est purement conceptuel et repose sur le système de types `NormalizationStatus` et `NormalizationMetadata` inclus dans `Resource`. 
Aucun backend d'upload ou base de données n'est implémenté pour l'instant.
