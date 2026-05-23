# Démonstration du Sas de Normalisation

Ce fichier illustre le processus de transformation d'une "ressource brute" (déposée par un enseignant) vers une "ressource normalisée" (structurée pour FLE Commons Lab).

## 1. La Ressource Brute (Statut : `soumise`)

Voici ce que l'enseignant a copié-collé dans le sas :

```text
Activité brise-glace A1
Demander aux étudiants de se mettre par deux. 
Ils doivent se poser 3 questions : Comment tu t'appelles ? Tu viens d'où ? Tu aimes quoi ?
Ensuite, chaque étudiant présente son camarade à la classe.
C'est bien pour le premier cours. Ça prend 15 minutes.
Pas de matériel.
```

---

## 2. La Ressource Normalisée (Statut : `normalisee` -> `utilisable`)

Voici le résultat après passage dans le sas (traitement IA + relecture humaine) :

```markdown
---
id: res-brise-glace-01
title: "Interview croisée : Brise-glace de rentrée"
summary: "Activité de présentation en binôme pour le tout premier cours."
level: A1
durationMinutes: 15
durationCategory: 15_30_min
mainSkill: interaction_orale
secondarySkills: [expression_orale]
theme: "Faire connaissance"
resourceType: activite_orale
resourceTemplate: conversation_guidee
activityFormat: binomes
status: utilisable
reuseReadiness: pret_a_utiliser
license: CC_BY_SA
normalizationMetadata:
  originalFormat: texte_brut
  submittedBy: "ProfAnonyme"
  normalizationStatus: normalisee
---

# Interview croisée : Brise-glace de rentrée

## Objectifs
- Briser la glace lors de la première séance.
- Formuler des questions basiques (identité, origine, goûts).
- Présenter une tierce personne à la classe (verbes s'appeler, venir, aimer à la 3e personne).

## Prérequis
- Aucun (premier cours).

## Déroulé

### 1. Préparation en binômes (5 min)
Les étudiants se mettent par deux. Ils se posent mutuellement 3 questions simples :
- *Comment tu t'appelles ?*
- *Tu viens d'où ?*
- *Tu aimes quoi ? / Qu'est-ce que tu aimes ?*

### 2. Présentation à la classe (10 min)
Tour à tour, chaque étudiant présente son partenaire au reste du groupe.
*Exemple attendu : "Il s'appelle Luis, il vient du Mexique, il aime le football."*
```
