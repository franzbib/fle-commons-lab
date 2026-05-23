import type {
  AccessLevel,
  MonetizationStatus,
} from './access'
import type {
  ActivityFormat,
  AiMetadata,
  CefrLevel,
  ClassroomMode,
  DurationCategory,
  EditorialStatus,
  ResourceLicense,
  ResourceSkill,
  ResourceTemplate,
  ResourceType,
  ReuseReadiness,
  SourceType,
  TeacherPreparationLevel,
  TechMetadata,
} from './resource'

export type ResourceFrontmatter = {
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
  accessLevel?: AccessLevel
  monetizationStatus?: MonetizationStatus
  visibilityNotes?: string
  licenseNotes?: string
  authors: string[]
  tags: string[]
  materialNeeded: string[]
  sourceType: SourceType
  teacherPreparationLevel: TeacherPreparationLevel
  techMetadata?: TechMetadata
  aiMetadata?: AiMetadata
}

export const requiredResourceFrontmatterFields = [
  'title',
  'summary',
  'level',
  'durationMinutes',
  'durationCategory',
  'mainSkill',
  'theme',
  'resourceType',
  'resourceTemplate',
  'status',
  'reuseReadiness',
  'license',
  'authors',
] as const
