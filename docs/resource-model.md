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
- `license`, `accessLevel`, `monetizationStatus`, `visibilityNotes`, `licenseNotes`
- `authors`, `tags`
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

## Accès et soutenabilité

Les champs suivants sont optionnels et conceptuels:

- `accessLevel`
- `monetizationStatus`
- `visibilityNotes`
- `licenseNotes`

`accessLevel` décrit une visibilité future possible dans une plateforme avec authentification. Il ne remplace pas `license`.

`license` décrit les droits juridiques de réutilisation. Une ressource peut être publique avec une licence restrictive, ou réservée à une équipe tout en gardant une licence ouverte selon son contexte.

`status` reste un statut éditorial. Il indique la maturité pédagogique de la ressource, pas son accès.

Exemples:

- Une ressource peut être `valide` mais `members_only`.
- Une ressource peut être `brouillon` mais `private`.
- Une ressource peut être `public` avec licence `CC_BY_NC_SA`.
- Une ressource peut être `premium` mais issue d'un contenu entièrement original.

Ces champs ne créent aucune restriction réelle dans la v0. Voir `docs/access-and-sustainability-model.md`.

## Statut de transformation d'un support

L'analyse `docs/drive-corpus-analysis.md` montre qu'il faut distinguer la valeur pédagogique d'un support et son degré de préparation pour une publication ouverte. Cette distinction reste documentaire dans la v0: aucun champ TypeScript obligatoire n'est ajouté pour l'instant.

### Support brut

Document de départ non normalisé: plan de séance, fiche interne, document Word, consigne isolée, annexe ou support multimédia. Il peut être utile pour concevoir une ressource, mais il ne doit pas être publié sans vérification.

Points de vigilance:

- objectifs souvent implicites;
- durée et niveau à confirmer;
- droits, images, sources et données personnelles à vérifier;
- corrigé parfois absent;
- guide professeur souvent implicite.

### Modèle temporaire

Support utilisé seulement pour comprendre une structure pédagogique. Exemple: observer qu'un document suit une logique corpus d'observation, repérage, exercices, synthèse et réemploi.

Un modèle temporaire peut inspirer un gabarit, mais ne doit pas fournir de texte copié.

### Ressource interne

Ressource utilisable dans un contexte fermé ou par son auteur, mais pas encore prête à être publiée. Elle peut contenir des références locales, des documents de droits incertains ou des consignes trop liées à une séance précise.

### Ressource publiable

Ressource dont le contenu est original ou libre, dont la licence est claire et dont les informations principales sont renseignées. Elle peut encore être `brouillon` ou `utilisable` si elle n'a pas été testée.

### Ressource complète et relue

Ressource comprenant objectifs, déroulé, support étudiant, guide professeur, corrigé ou critères, variantes, licence, sources et métadonnées cohérentes. Elle a été relue par un enseignant et, idéalement, testée en classe.

## Champs conceptuels à documenter

Ces notions peuvent être ajoutées plus tard au modèle TypeScript si le besoin se confirme. Pour l'instant, elles restent dans la documentation afin de ne pas alourdir la v0.

### `pedagogicalCompleteness`

Indique le degré de complétude pédagogique.

Valeurs possibles:

- `support_brut`;
- `objectifs_a_ajouter`;
- `corrige_a_ajouter`;
- `guide_professeur_a_ajouter`;
- `ressource_complete`;
- `ressource_testee`.

Cette notion complète `status`: une ressource peut être utilisable mais avoir un corrigé à compléter.

### `rightsStatus`

Indique le statut des droits indépendamment de la qualité pédagogique.

Valeurs possibles:

- `original`;
- `libre`;
- `a_verifier`;
- `usage_interne_uniquement`;
- `protege_ne_pas_publier`.

Cette notion complète `license`: `license` décrit la licence proposée, tandis que `rightsStatus` pourrait décrire la confiance dans la possibilité de publier.

### `referenceUse`

Indique comment un support de départ peut être utilisé dans le projet.

Valeurs possibles:

- `none`;
- `temporary_model`;
- `internal_reference`;
- `publishable_resource`.

Cette notion est utile pour les corpus exploratoires: un document peut inspirer un gabarit sans être importé, publié ni cité comme source de contenu.

## Garde-fous pour les corpus de référence

- Ne pas importer automatiquement les documents originaux.
- Ne pas copier de texte exact, d'image, d'audio, de vidéo ou de mise en page protégée.
- Retirer ou éviter toute donnée personnelle.
- Marquer les droits incertains comme `a_verifier`.
- Faire relire niveau, consignes, corrigé et licence par un enseignant avant toute publication.

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
