import type {
  AccessLevel,
} from '../types/access'
import type {
  CefrLevel,
  EditorialStatus,
  Resource,
  ResourceLicense,
  ResourceSkill,
  ResourceTemplate,
  ResourceType,
  SourceType,
  TeacherPreparationLevel,
  DurationCategory,
} from '../types/resource'

export type ResourceFiltersValue = {
  search: string
  level: CefrLevel | 'all'
  mainSkill: ResourceSkill | 'all'
  resourceType: ResourceType | 'all'
  resourceTemplate: ResourceTemplate | 'all'
  theme: string | 'all'
  status: EditorialStatus | 'all'
  usesDigitalTool: 'all' | 'yes' | 'no'
  usesAI: 'all' | 'yes' | 'no'
  accessLevel: AccessLevel | 'all'
  license: ResourceLicense | 'all'
  teacherPreparationLevel: TeacherPreparationLevel | 'all'
  sourceType: SourceType | 'all'
  durationCategory: DurationCategory | 'all'
  hasAnswerKey: 'all' | 'yes' | 'no'
  hasTeacherGuide: 'all' | 'yes' | 'no'
  readyForClass: 'all' | 'yes' | 'no'
}

export const emptyResourceFilters: ResourceFiltersValue = {
  search: '',
  level: 'all',
  mainSkill: 'all',
  resourceType: 'all',
  resourceTemplate: 'all',
  theme: 'all',
  status: 'all',
  usesDigitalTool: 'all',
  usesAI: 'all',
  accessLevel: 'all',
  license: 'all',
  teacherPreparationLevel: 'all',
  sourceType: 'all',
  durationCategory: 'all',
  hasAnswerKey: 'all',
  hasTeacherGuide: 'all',
  readyForClass: 'all',
}

export function filterResources(
  resources: Resource[],
  filters: ResourceFiltersValue,
): Resource[] {
  const normalizedSearch = normalize(filters.search)

  return resources.filter((resource) => {
    const matchesSearch =
      normalizedSearch.length === 0 ||
      normalize(
        [
          resource.title,
          resource.summary,
          resource.theme,
          ...resource.lexicalThemes,
          ...resource.grammarPoints,
          ...resource.tags,
          ...resource.authors,
          ...(resource.techMetadata?.digitalTools ?? []),
          ...(resource.aiMetadata?.suggestedTools ?? []),
        ].join(' '),
      ).includes(normalizedSearch)

    const matchesLevel = filters.level === 'all' || resource.level === filters.level
    const matchesSkill =
      filters.mainSkill === 'all' || resource.mainSkill === filters.mainSkill
    const matchesType =
      filters.resourceType === 'all' || resource.resourceType === filters.resourceType
    const matchesTemplate =
      filters.resourceTemplate === 'all' ||
      resource.resourceTemplate === filters.resourceTemplate
    const matchesTheme = filters.theme === 'all' || resource.theme === filters.theme
    const matchesStatus = filters.status === 'all' || resource.status === filters.status
    const matchesDigital =
      filters.usesDigitalTool === 'all' ||
      (filters.usesDigitalTool === 'yes' && resource.techMetadata?.usesDigitalTool === true) ||
      (filters.usesDigitalTool === 'no' && resource.techMetadata?.usesDigitalTool !== true)
    const matchesAI =
      filters.usesAI === 'all' ||
      (filters.usesAI === 'yes' && resource.aiMetadata?.usesAI === true) ||
      (filters.usesAI === 'no' && resource.aiMetadata?.usesAI !== true)
    const matchesAccess =
      filters.accessLevel === 'all' || resource.accessLevel === filters.accessLevel
    const matchesLicense =
      filters.license === 'all' || resource.license === filters.license
    const matchesPreparation =
      filters.teacherPreparationLevel === 'all' ||
      resource.teacherPreparationLevel === filters.teacherPreparationLevel
    const matchesSource =
      filters.sourceType === 'all' || resource.sourceType === filters.sourceType
    const matchesDuration =
      filters.durationCategory === 'all' || resource.durationCategory === filters.durationCategory
    const matchesAnswerKey =
      filters.hasAnswerKey === 'all' ||
      (filters.hasAnswerKey === 'yes' ? !!resource.content.answerKey : !resource.content.answerKey)
    const matchesTeacherGuide =
      filters.hasTeacherGuide === 'all' ||
      (filters.hasTeacherGuide === 'yes' ? !!resource.content.teacherGuide : !resource.content.teacherGuide)
    const matchesReady =
      filters.readyForClass === 'all' ||
      (filters.readyForClass === 'yes' ? ['utilisable', 'teste', 'valide'].includes(resource.status) : !['utilisable', 'teste', 'valide'].includes(resource.status))

    return (
      matchesSearch &&
      matchesLevel &&
      matchesSkill &&
      matchesType &&
      matchesTemplate &&
      matchesTheme &&
      matchesStatus &&
      matchesDigital &&
      matchesAI &&
      matchesAccess &&
      matchesLicense &&
      matchesPreparation &&
      matchesSource &&
      matchesDuration &&
      matchesAnswerKey &&
      matchesTeacherGuide &&
      matchesReady
    )
  })
}

function normalize(value: string): string {
  return value
    .toLocaleLowerCase('fr-FR')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}
