import type { Resource, ResourceSectionKey } from '../types/resource'
import {
  formatClassroomMode,
  formatLicense,
  formatResourceTemplate,
  formatResourceType,
  formatSkill,
  formatStatus,
} from './formatters'

const printableSectionOrder: ResourceSectionKey[] = [
  'objectives',
  'prerequisites',
  'lessonPlan',
  'studentInstructions',
  'teacherGuide',
  'answerKey',
  'variants',
  'usageNotes',
]

export function formatResourceSectionForCopy(
  resource: Resource,
  sectionKey: ResourceSectionKey,
): string {
  const section = resource.content[sectionKey]

  if (!section) {
    return ''
  }

  return [`# ${resource.title}`, '', `## ${section.title}`, '', ...section.items.map((item) => `- ${item}`)].join(
    '\n',
  )
}

export function formatResourceForCopy(resource: Resource): string {
  const metadata = [
    `# ${resource.title}`,
    '',
    resource.summary,
    '',
    `Niveau: ${resource.level}`,
    `Durée: ${resource.durationMinutes} min`,
    `Compétence principale: ${formatSkill(resource.mainSkill)}`,
    `Type: ${formatResourceType(resource.resourceType)}`,
    `Gabarit: ${formatResourceTemplate(resource.resourceTemplate)}`,
    `Statut: ${formatStatus(resource.status)}`,
    `Modalité: ${formatClassroomMode(resource.classroomMode)}`,
    `Licence: ${formatLicense(resource.license)}`,
    `Auteurs: ${resource.authors.join(', ')}`,
  ]

  const sections = printableSectionOrder
    .map((sectionKey) => resource.content[sectionKey])
    .filter((section) => section !== undefined)
    .flatMap((section) => ['', `## ${section.title}`, '', ...section.items.map((item) => `- ${item}`)])

  return [...metadata, ...sections].join('\n')
}
