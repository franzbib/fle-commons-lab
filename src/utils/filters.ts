import type {
  CefrLevel,
  EditorialStatus,
  Resource,
  ResourceSkill,
  ResourceTemplate,
  ResourceType,
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

    return (
      matchesSearch &&
      matchesLevel &&
      matchesSkill &&
      matchesType &&
      matchesTemplate &&
      matchesTheme &&
      matchesStatus &&
      matchesDigital &&
      matchesAI
    )
  })
}

function normalize(value: string): string {
  return value
    .toLocaleLowerCase('fr-FR')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}
