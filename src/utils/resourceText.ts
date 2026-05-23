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

const learnerSectionOrder: ResourceSectionKey[] = [
  'objectives',
  'prerequisites',
  'studentInstructions',
]

const teacherSectionOrder: ResourceSectionKey[] = [
  'lessonPlan',
  'teacherGuide',
  'answerKey',
  'variants',
  'usageNotes',
  'techNotes',
  'aiNotes',
  'versionHistory',
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

export function formatLearnerViewForCopy(resource: Resource): string {
  return formatResourceSectionsForCopy(resource, learnerSectionOrder, 'Contenu apprenant')
}

export function formatTeacherViewForCopy(resource: Resource): string {
  const sections = formatResourceSectionsForCopy(
    resource,
    teacherSectionOrder,
    'Corriges et notes professeur',
  )

  const feedbacks =
    resource.usageFeedbacks && resource.usageFeedbacks.length > 0
      ? [
          '',
          '## Retours d’usage',
          '',
          ...resource.usageFeedbacks.flatMap((feedback) => [
            `- ${feedback.authorName} (${feedback.groupLevel}, ${feedback.actualDurationMinutes} min)`,
            `  - Ce qui a fonctionné: ${feedback.whatWorked}`,
            `  - Difficultés: ${feedback.difficulties}`,
            `  - Suggestion: ${feedback.suggestedChanges}`,
          ]),
        ]
      : []

  return [sections, ...feedbacks].join('\n')
}

function formatResourceSectionsForCopy(
  resource: Resource,
  sectionKeys: ResourceSectionKey[],
  heading: string,
): string {
  const metadata = [
    `# ${resource.title}`,
    '',
    resource.summary,
    '',
    `Vue: ${heading}`,
    `Niveau: ${resource.level}`,
    `Durée: ${resource.durationMinutes} min`,
    `Compétence principale: ${formatSkill(resource.mainSkill)}`,
  ]

  const sections = sectionKeys
    .map((sectionKey) => resource.content[sectionKey])
    .filter((section) => section !== undefined)
    .flatMap((section) => ['', `## ${section.title}`, '', ...section.items.map((item) => `- ${item}`)])

  return [...metadata, ...sections].join('\n')
}
