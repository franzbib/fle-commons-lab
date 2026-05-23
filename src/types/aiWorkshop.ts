export const aiWorkshopCategories = [
  'prise_en_main',
  'preparer_activite',
  'simplifier_adapter',
  'creer_exercices',
  'corriger_remedier',
  'differencier',
  'verifier_reponse_ia',
  'creer_corrige',
  'preparer_oral',
] as const

export const aiDifficultyLevels = ['debutant', 'intermediaire', 'avance'] as const
export const aiRiskLevels = ['faible', 'modere', 'eleve'] as const
export const teacherControlLevels = ['faible', 'moyen', 'fort'] as const

export type AiWorkshopCategory = (typeof aiWorkshopCategories)[number]
export type AiDifficultyLevel = (typeof aiDifficultyLevels)[number]
export type AiRiskLevel = (typeof aiRiskLevels)[number]
export type TeacherControlLevel = (typeof teacherControlLevels)[number]

export type AiTutorial = {
  id: string
  title: string
  summary: string
  category: AiWorkshopCategory
  difficulty: AiDifficultyLevel
  estimatedTime: string
  targetTeacherNeed: string
  steps: string[]
  safeguards: string[]
  commonPitfalls: string[]
  relatedPromptIds: string[]
  tags: string[]
}

export type PromptRecipe = {
  id: string
  title: string
  pedagogicalUse: string
  category: AiWorkshopCategory
  difficulty: AiDifficultyLevel
  riskLevel: AiRiskLevel
  promptText: string
  requiredInput: string[]
  expectedOutput: string
  teacherControlLevel: TeacherControlLevel
  risks: string[]
  verificationChecklist: string[]
  adaptationIdeas: string[]
  tags: string[]
}
