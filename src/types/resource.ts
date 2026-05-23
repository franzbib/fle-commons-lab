export const cefrLevels = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'mixte'] as const

export const durationCategories = [
  'moins_15_min',
  '15_30_min',
  '30_60_min',
  '60_120_min',
  'sequence_longue',
  'projet_plusieurs_seances',
] as const

export const resourceSkills = [
  'comprehension_ecrite',
  'comprehension_orale',
  'expression_ecrite',
  'expression_orale',
  'interaction_orale',
  'interaction_ecrite',
  'grammaire',
  'lexique',
  'phonetique',
  'culture',
  'methodologie',
  'mediation',
  'litteratie_numerique',
  'esprit_critique',
  'collaboration',
] as const

export const resourceTypes = [
  'exercice',
  'sequence',
  'evaluation',
  'fiche',
  'activite_orale',
  'comprehension_ecrite',
  'comprehension_orale',
  'jeu_pedagogique',
  'projet',
  'atelier_numerique',
  'scenario_ia',
  'prompt_pedagogique',
  'guide_enseignant',
  'autre',
] as const

export const resourceTemplates = [
  'conversation_guidee',
  'document_declencheur',
  'grammaire_inductive',
  'lexique_actif',
  'jeu_pedagogique',
  'sequence_complete',
  'evaluation',
  'remediation',
  'projet_collaboratif',
  'atelier_numerique',
  'scenario_ia',
  'analyse_de_document',
  'production_assistee',
  'autre',
] as const

export const activityFormats = [
  'individuel',
  'binomes',
  'petits_groupes',
  'classe_entiere',
  'autonomie',
  'semi_autonomie',
  'hybride',
  'classe_inversee',
  'atelier',
  'projet_long',
  'rituel_court',
] as const

export const classroomModes = [
  'presentiel',
  'distanciel',
  'hybride',
  'autonomie',
  'accompagnement_enseignant',
  'salle_informatique',
  'smartphone_autorise',
  'videoprojection',
] as const

export const sourceTypes = [
  'document_cree',
  'document_authentique',
  'texte',
  'image',
  'audio',
  'video',
  'infographie',
  'page_web',
  'document_administratif',
  'corpus',
  'interaction_ia',
  'autre',
] as const

export const teacherPreparationLevels = ['faible', 'moyen', 'important'] as const

export const editorialStatuses = [
  'brouillon',
  'utilisable',
  'teste',
  'valide',
  'archive',
] as const

export const reuseReadinessValues = [
  'a_completer',
  'pret_a_tester',
  'pret_a_utiliser',
  'teste_en_classe',
  'a_adapter',
  'valide_communautairement',
] as const

export const resourceLicenses = [
  'CC_BY',
  'CC_BY_SA',
  'CC_BY_NC',
  'CC_BY_NC_SA',
  'domaine_public',
  'tous_droits_reserves',
  'a_verifier',
] as const

export const digitalFormats = [
  'aucun',
  'document_imprimable',
  'support_videoprojectable',
  'formulaire_interactif',
  'quiz_interactif',
  'jeu_numerique',
  'tableau_collaboratif',
  'prompt',
  'chatbot',
  'audio_video',
  'autre',
] as const

export const technicalDifficulties = ['aucune', 'faible', 'moyenne', 'elevee'] as const

export const aiUseCases = [
  'aucun',
  'generation_de_support',
  'reformulation',
  'correction_formative',
  'aide_a_la_recherche',
  'simulation_dialogue',
  'analyse_de_document',
  'differenciation',
  'aide_a_la_synthese',
  'creation_de_quiz',
  'audit_pedagogique',
  'autre',
] as const

export const aiAssistanceLevels = ['aucun', 'optionnel', 'guide', 'central', 'experimental'] as const

export const contributionTypes = [
  'correction',
  'ajout_corrige',
  'clarification_consigne',
  'variante_niveau',
  'variante_numerique',
  'variante_ia',
  'retour_usage',
  'signalement_droit_auteur',
  'autre',
] as const

export const contributionStatuses = [
  'en_attente',
  'acceptee',
  'refusee',
  'integree',
] as const

export const collectionVisibilities = ['privee', 'partagee', 'publique'] as const

export type CefrLevel = (typeof cefrLevels)[number]
export type DurationCategory = (typeof durationCategories)[number]
export type ResourceSkill = (typeof resourceSkills)[number]
export type ResourceType = (typeof resourceTypes)[number]
export type ResourceTemplate = (typeof resourceTemplates)[number]
export type ActivityFormat = (typeof activityFormats)[number]
export type ClassroomMode = (typeof classroomModes)[number]
export type SourceType = (typeof sourceTypes)[number]
export type TeacherPreparationLevel = (typeof teacherPreparationLevels)[number]
export type EditorialStatus = (typeof editorialStatuses)[number]
export type ReuseReadiness = (typeof reuseReadinessValues)[number]
export type ResourceLicense = (typeof resourceLicenses)[number]
export type DigitalFormat = (typeof digitalFormats)[number]
export type TechnicalDifficulty = (typeof technicalDifficulties)[number]
export type AiUseCase = (typeof aiUseCases)[number]
export type AiAssistanceLevel = (typeof aiAssistanceLevels)[number]
export type ContributionType = (typeof contributionTypes)[number]
export type ContributionStatus = (typeof contributionStatuses)[number]
export type CollectionVisibility = (typeof collectionVisibilities)[number]

export type ResourceSectionKey =
  | 'objectives'
  | 'prerequisites'
  | 'lessonPlan'
  | 'studentInstructions'
  | 'teacherGuide'
  | 'answerKey'
  | 'variants'
  | 'usageNotes'
  | 'techNotes'
  | 'aiNotes'
  | 'versionHistory'

export type ResourceSection = {
  title: string
  items: string[]
}

export type ResourceContent = Partial<Record<ResourceSectionKey, ResourceSection>>

export type ResourceVersion = {
  id: string
  versionNumber: string
  label: string
  changelog: string[]
  createdAt: string
  createdBy: string
  status: EditorialStatus
}

export type UsageFeedback = {
  id: string
  authorName: string
  context: string
  actualDurationMinutes: number
  groupLevel: CefrLevel
  whatWorked: string
  difficulties: string
  suggestedChanges: string
  createdAt: string
}

export type ResourceReviewSummary = {
  clarityScore: number
  reusabilityScore: number
  progressionScore: number
  languageReliabilityScore: number
  digitalReadinessScore: number
  aiReadinessScore: number
  strengths: string[]
  issues: string[]
  recommendations: string[]
}

export type TechMetadata = {
  usesDigitalTool: boolean
  digitalTools: string[]
  digitalFormat: DigitalFormat
  requiresInternet: boolean
  requiresAccount: boolean
  deviceRequirements: string[]
  technicalDifficulty: TechnicalDifficulty
  privacyConsiderations: string[]
}

export type AiMetadata = {
  usesAI: boolean
  aiUseCase: AiUseCase
  aiAssistanceLevel: AiAssistanceLevel
  suggestedTools: string[]
  teacherControlRequired: boolean
  studentFacingAI: boolean
  risks: string[]
  safeguards: string[]
}

export type ContributionSuggestion = {
  id: string
  type: ContributionType
  title: string
  description: string
  status: ContributionStatus
  proposedBy: string
  createdAt: string
}

export type Collection = {
  id: string
  title: string
  description: string
  resourceIds: string[]
  visibility: CollectionVisibility
  tags: string[]
  curatorName?: string
  createdAt: string
}

export type Resource = {
  id: string
  title: string
  summary: string
  level: CefrLevel
  durationMinutes: number
  durationCategory: DurationCategory
  mainSkill: ResourceSkill
  secondarySkills: ResourceSkill[]
  theme: string
  lexicalThemes: string[]
  grammarPoints: string[]
  resourceType: ResourceType
  resourceTemplate: ResourceTemplate
  activityFormat: ActivityFormat
  classroomMode: ClassroomMode
  status: EditorialStatus
  reuseReadiness: ReuseReadiness
  license: ResourceLicense
  authors: string[]
  tags: string[]
  materialNeeded: string[]
  sourceType: SourceType
  teacherPreparationLevel: TeacherPreparationLevel
  createdAt: string
  updatedAt: string
  content: ResourceContent
  versions: ResourceVersion[]
  usageFeedbacks?: UsageFeedback[]
  reviewSummary?: ResourceReviewSummary
  techMetadata?: TechMetadata
  aiMetadata?: AiMetadata
  contributionSuggestions?: ContributionSuggestion[]
  collectionIds?: string[]
}
