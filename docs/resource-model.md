# Modèle De Ressource

Le modèle TypeScript complet est dans `src/types/resource.ts`.

## Objets

- `Resource`
- `ResourceContent`
- `ResourceVersion`
- `UsageFeedback`
- `ResourceReviewSummary`
- `TechMetadata`
- `AiMetadata`
- `ContributionSuggestion`
- `Collection`

## Champs Resource

Champs principaux:

- `id`, `title`, `summary`
- `level`, `durationMinutes`, `durationCategory`
- `mainSkill`, `secondarySkills`
- `theme`, `lexicalThemes`, `grammarPoints`
- `resourceType`, `resourceTemplate`, `activityFormat`, `classroomMode`
- `status`, `reuseReadiness`
- `license`, `authors`, `tags`
- `materialNeeded`, `sourceType`, `teacherPreparationLevel`
- `createdAt`, `updatedAt`
- `content`, `versions`

Champs facultatifs:

- `usageFeedbacks`
- `reviewSummary`
- `techMetadata`
- `aiMetadata`
- `contributionSuggestions`
- `collectionIds`

## Taxonomie Pédagogique

Niveaux: `A0`, `A1`, `A2`, `B1`, `B2`, `C1`, `C2`, `mixte`.

Compétences: compréhension écrite/orale, expression écrite/orale, interaction orale/écrite, grammaire, lexique, phonétique, culture, méthodologie, médiation, littératie numérique, esprit critique, collaboration.

Types: exercice, séquence, évaluation, fiche, activité orale, compréhension écrite/orale, jeu pédagogique, projet, atelier numérique, scénario IA, prompt pédagogique, guide enseignant, autre.

Gabarits: conversation guidée, document déclencheur, grammaire inductive, lexique actif, jeu pédagogique, séquence complète, évaluation, remédiation, projet collaboratif, atelier numérique, scénario IA, analyse de document, production assistée, autre.

Formats: individuel, binômes, petits groupes, classe entière, autonomie, semi-autonomie, hybride, classe inversée, atelier, projet long, rituel court.

## Taxonomie Technologique

`TechMetadata` documente:

- usage d’outil numérique;
- outils suggérés;
- format numérique;
- besoin d’Internet;
- besoin d’un compte;
- appareils nécessaires;
- difficulté technique;
- précautions de confidentialité.

Ces champs servent à classer et auditer une ressource, pas à brancher un outil.

## Taxonomie IA

`AiMetadata` documente:

- usage IA prévu ou non;
- cas d’usage;
- niveau d’assistance;
- outils suggérés;
- contrôle enseignant;
- exposition des étudiants;
- risques;
- garde-fous.

Ces champs ne déclenchent aucun appel IA.

## Statuts Et Licences

Statuts: `brouillon`, `utilisable`, `teste`, `valide`, `archive`.

Réutilisabilité: `a_completer`, `pret_a_tester`, `pret_a_utiliser`, `teste_en_classe`, `a_adapter`, `valide_communautairement`.

Licences: `CC_BY`, `CC_BY_SA`, `CC_BY_NC`, `CC_BY_NC_SA`, `domaine_public`, `tous_droits_reserves`, `a_verifier`.

Les licences doivent être vérifiées avant publication publique. Le projet ne doit pas encourager la copie de contenus protégés.

## Exemple Minimal

```ts
const resource = {
  id: 'b2-esprit-critique-reponse-ia',
  title: 'Vérifier une réponse produite par une IA',
  level: 'B2',
  mainSkill: 'esprit_critique',
  resourceType: 'atelier_numerique',
  resourceTemplate: 'analyse_de_document',
  techMetadata: {
    usesDigitalTool: true,
    digitalTools: ['document IA fictif'],
    digitalFormat: 'document_imprimable',
    requiresInternet: false,
    requiresAccount: false,
    deviceRequirements: [],
    technicalDifficulty: 'faible',
    privacyConsiderations: ['Ne pas demander de compte IA aux étudiants.']
  },
  aiMetadata: {
    usesAI: true,
    aiUseCase: 'audit_pedagogique',
    aiAssistanceLevel: 'guide',
    suggestedTools: ['ChatGPT', 'Claude', 'Gemini'],
    teacherControlRequired: true,
    studentFacingAI: false,
    risks: ['Confiance excessive'],
    safeguards: ['Vérification humaine obligatoire']
  }
}
```
