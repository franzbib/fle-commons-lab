import type { Resource, ResourceSection, ResourceSectionKey } from '../types/resource'
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
]

const sectionTitleOverrides: Partial<Record<ResourceSectionKey, string>> = {
  objectives: 'Objectifs',
  prerequisites: 'Pre-requis',
  lessonPlan: 'Deroule',
  studentInstructions: 'Fiche apprenant',
  teacherGuide: 'Guide professeur',
  answerKey: 'Corrige',
  variants: 'Variantes',
  usageNotes: "Retours d'usage",
}

export function formatResourceSectionForCopy(
  resource: Resource,
  sectionKey: ResourceSectionKey,
): string {
  const section = resource.content[sectionKey]

  if (!section) {
    return ''
  }

  return [
    buildDocumentTitle('EXTRAIT DE RESSOURCE'),
    ...buildMetadata(resource),
    '',
    ...formatSection(section, sectionKey),
  ].join('\n')
}

export function formatResourceForCopy(resource: Resource): string {
  return [
    buildDocumentTitle('FICHE COMPLETE'),
    ...buildMetadata(resource, true),
    ...formatSections(resource, printableSectionOrder),
  ].join('\n')
}

export function formatLearnerViewForCopy(resource: Resource): string {
  return [
    buildDocumentTitle('FICHE APPRENANT'),
    ...buildMetadata(resource),
    ...formatSections(resource, learnerSectionOrder),
  ].join('\n')
}

export function formatTeacherViewForCopy(resource: Resource): string {
  const feedbacks = formatUsageFeedbacks(resource)

  return [
    buildDocumentTitle('GUIDE PROFESSEUR'),
    ...buildMetadata(resource),
    ...formatSections(resource, teacherSectionOrder),
    ...feedbacks,
  ].join('\n')
}

function buildDocumentTitle(title: string) {
  return [title, '='.repeat(title.length), '']
}

function buildMetadata(resource: Resource, includeExtra = false) {
  const metadata = [
    `Titre : ${resource.title}`,
    `Niveau : ${resource.level}`,
    `Duree : ${resource.durationMinutes} min`,
    `Competence principale : ${formatSkill(resource.mainSkill)}`,
  ]

  if (includeExtra) {
    metadata.push(
      `Type : ${formatResourceType(resource.resourceType)}`,
      `Gabarit : ${formatResourceTemplate(resource.resourceTemplate)}`,
      `Statut : ${formatStatus(resource.status)}`,
      `Modalite : ${formatClassroomMode(resource.classroomMode)}`,
      `Licence : ${formatLicense(resource.license)}`,
      `Auteurs : ${resource.authors.join(', ')}`,
    )
  }

  return [...metadata, '', '---']
}

function formatSections(resource: Resource, sectionKeys: ResourceSectionKey[]) {
  return sectionKeys.flatMap((sectionKey) => {
    const section = resource.content[sectionKey]

    return section ? ['', ...formatSection(section, sectionKey)] : []
  })
}

function formatSection(section: ResourceSection, sectionKey: ResourceSectionKey) {
  const title = (sectionTitleOverrides[sectionKey] ?? section.title).toUpperCase()
  const content = section.items.filter(Boolean).flatMap(formatItemLines)

  if (content.length === 0) {
    return [title, '-'.repeat(title.length), '', 'Section a completer.']
  }

  return [title, '-'.repeat(title.length), '', ...content]
}

function formatItemLines(item: string) {
  const lines = item
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length === 0) {
    return []
  }

  return lines.flatMap((line) => {
    if (looksLikeSubheading(line)) {
      const title = line.replace(/:$/, '').toUpperCase()

      return ['', title, '-'.repeat(title.length), '']
    }

    return [line, '']
  })
}

function formatUsageFeedbacks(resource: Resource) {
  if (!resource.usageFeedbacks || resource.usageFeedbacks.length === 0) {
    return []
  }

  return [
    '',
    'RETOURS D USAGE',
    '---------------',
    '',
    ...resource.usageFeedbacks.flatMap((feedback) => [
      `${feedback.authorName} - ${feedback.groupLevel} - ${feedback.actualDurationMinutes} min`,
      `Contexte : ${feedback.context}`,
      `Ce qui a fonctionne : ${feedback.whatWorked}`,
      `Difficultes : ${feedback.difficulties}`,
      `Suggestion : ${feedback.suggestedChanges}`,
      '',
    ]),
  ]
}

function looksLikeSubheading(item: string) {
  const trimmed = item.trim()
  const hasEditorialMarkers = /^—\s+.{1,80}\s+—$/.test(trimmed) || /^-\s+.{1,80}\s+-$/.test(trimmed)
  const knownHeadings = [
    'situation',
    'verbes utiles',
    'intention pedagogique',
    'intention pédagogique',
    'public conseille',
    'public conseillé',
    'duree et formats possibles',
    'durée et formats possibles',
    'points de vigilance',
    'gestion possible en classe',
    'conseils de correction',
    'pronoms dans le recit:',
    'pronoms dans le récit:',
    'justifications utiles pour les cas sensibles:',
    'reponses ouvertes. verifier:',
    'réponses ouvertes. vérifier:',
    'exemple acceptable:',
    'notes de normalisation',
    'a completer apres test en classe:',
    'à compléter après test en classe:',
  ]

  return (
    /^[A-F]\.\s/.test(trimmed) ||
    hasEditorialMarkers ||
    knownHeadings.includes(trimmed.toLowerCase()) ||
    (trimmed.length <= 52 && /:$/.test(trimmed))
  )
}
