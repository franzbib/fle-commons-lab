import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  extractFrontmatter,
  validateMarkdownResource,
} from './validate-markdown-resources.mjs'

const sectionMap = new Map([
  ['objectifs', 'objectives'],
  ['pre-requis', 'prerequisites'],
  ['prerequis', 'prerequisites'],
  ['deroule', 'lessonPlan'],
  ['support etudiant', 'studentInstructions'],
  ['guide professeur', 'teacherGuide'],
  ['corrige', 'answerKey'],
  ['variantes', 'variants'],
  ['variantes et adaptations possibles', 'variants'],
  ['retours d’usage', 'usageNotes'],
  ['retours d usage', 'usageNotes'],
  ['retours d’usage possibles', 'usageNotes'],
  ['retours d usage possibles', 'usageNotes'],
  ['notes numeriques / ia', 'techNotes'],
  ['notes numeriques et ia', 'techNotes'],
  ['notes de normalisation', 'usageNotes'],
  ['historique des versions', 'versionHistory'],
])

const defaultTechMetadata = {
  usesDigitalTool: false,
  digitalTools: [],
  digitalFormat: 'document_imprimable',
  requiresInternet: false,
  requiresAccount: false,
  deviceRequirements: [],
  technicalDifficulty: 'aucune',
  privacyConsiderations: [],
}

const defaultAiMetadata = {
  usesAI: false,
  aiUseCase: 'aucun',
  aiAssistanceLevel: 'aucun',
  suggestedTools: [],
  teacherControlRequired: true,
  studentFacingAI: false,
  risks: [],
  safeguards: ['Ressource issue d’un fichier Markdown source; relecture enseignante requise.'],
}

const generatedReviewSummary = {
  clarityScore: 3,
  reusabilityScore: 3,
  progressionScore: 3,
  languageReliabilityScore: 3,
  digitalReadinessScore: 2,
  aiReadinessScore: 1,
  strengths: ['Structure Markdown valide', 'Sections pedagogiques identifiables'],
  issues: ['Ressource generee depuis un fichier source; relecture enseignante requise'],
  recommendations: ['Verifier le niveau, le corrige et les droits avant publication comme fiche etalon'],
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
  const sourceDirectory = path.join(repoRoot, 'examples', 'resources-markdown')
  const outputFile = path.join(repoRoot, 'src', 'data', 'generatedMarkdownResources.ts')
  const resources = await generateResources(sourceDirectory)

  await writeFile(outputFile, formatGeneratedFile(resources), 'utf8')

  console.log(`Ressources Markdown generees: ${resources.length}`)
  console.log(`Fichier cree: ${path.relative(repoRoot, outputFile)}`)
}

async function generateResources(sourceDirectory) {
  const entries = await readdir(sourceDirectory, { withFileTypes: true })
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort()

  const resources = []
  const errors = []

  for (const fileName of markdownFiles) {
    const filePath = path.join(sourceDirectory, fileName)
    const markdown = await readFile(filePath, 'utf8')
    const validation = validateMarkdownResource(markdown)

    if (!validation.valid) {
      errors.push(`${fileName}:\n${validation.errors.map((error) => `  - ${error}`).join('\n')}`)
      continue
    }

    resources.push(markdownToResource(fileName, markdown))
  }

  if (errors.length > 0) {
    throw new Error(`Impossible de generer les ressources Markdown:\n${errors.join('\n\n')}`)
  }

  return resources
}

function markdownToResource(fileName, markdown) {
  const { frontmatter, body } = extractFrontmatter(markdown)
  const metadata = parseFrontmatter(frontmatter)
  const id = String(metadata.id ?? fileName.replace(/\.md$/, ''))
  const sections = extractSections(body)
  const content = mapSectionsToResourceContent(sections)
  const licenseAndSources = sections.find((section) => normalizeHeading(section.title) === 'licence et sources')

  return {
    id,
    title: String(metadata.title),
    summary: String(metadata.summary),
    level: metadata.level,
    durationMinutes: Number(metadata.durationMinutes),
    durationCategory: metadata.durationCategory,
    mainSkill: metadata.mainSkill,
    secondarySkills: asArray(metadata.secondarySkills),
    theme: String(metadata.theme),
    lexicalThemes: asArray(metadata.lexicalThemes),
    grammarPoints: asArray(metadata.grammarPoints),
    resourceType: metadata.resourceType,
    resourceTemplate: metadata.resourceTemplate,
    activityFormat: metadata.activityFormat ?? 'individuel',
    classroomMode: metadata.classroomMode ?? 'presentiel',
    status: metadata.status,
    reuseReadiness: metadata.reuseReadiness,
    license: metadata.license,
    licenseNotes: licenseAndSources ? sectionContentToPlainText(licenseAndSources.content) : undefined,
    authors: asArray(metadata.authors),
    tags: asArray(metadata.tags),
    materialNeeded: asArray(metadata.materialNeeded),
    sourceType: metadata.sourceType ?? 'document_cree',
    teacherPreparationLevel: metadata.teacherPreparationLevel ?? 'faible',
    createdAt: metadata.createdAt ?? '2026-05-24',
    updatedAt: metadata.updatedAt ?? '2026-05-24',
    content,
    versions: [
      {
        id: `${id}-generated-v01`,
        versionNumber: '0.1',
        label: 'generation depuis Markdown',
        changelog: [
          `Ressource generee automatiquement depuis examples/resources-markdown/${fileName}.`,
        ],
        createdAt: metadata.createdAt ?? '2026-05-24',
        createdBy: asArray(metadata.authors).join(', ') || 'Laforge',
        status: metadata.status,
      },
    ],
    reviewSummary: generatedReviewSummary,
    techMetadata: normalizeTechMetadata(metadata.techMetadata),
    aiMetadata: normalizeAiMetadata(metadata.aiMetadata),
    normalizationMetadata: metadata.normalizationMetadata,
  }
}

function parseFrontmatter(frontmatterText) {
  const root = {}
  const lines = frontmatterText.split(/\r?\n/)

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]

    if (!line.trim() || line.startsWith(' ')) {
      continue
    }

    const match = line.match(/^([A-Za-z][A-Za-z0-9_]*):(?:\s*(.*))?$/)

    if (!match) {
      continue
    }

    const [, key, rawValue = ''] = match
    const value = rawValue.trim()

    if (value) {
      root[key] = parseValue(value)
      continue
    }

    const nestedLines = []
    let cursor = index + 1

    while (cursor < lines.length && lines[cursor].startsWith('  ')) {
      nestedLines.push(lines[cursor])
      cursor += 1
    }

    root[key] = parseNestedBlock(nestedLines)
  }

  return root
}

function parseNestedBlock(lines) {
  if (lines.length === 0) {
    return ''
  }

  if (lines.every((line) => /^\s+-\s+/.test(line))) {
    return lines.map((line) => parseValue(line.replace(/^\s+-\s+/, '').trim()))
  }

  const object = {}

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^\s{2}([A-Za-z][A-Za-z0-9_]*):(?:\s*(.*))?$/)

    if (!match) {
      continue
    }

    const [, key, rawValue = ''] = match
    const value = rawValue.trim()

    if (value) {
      object[key] = parseValue(value)
      continue
    }

    const list = []
    let cursor = index + 1

    while (cursor < lines.length && /^\s{4}-\s+/.test(lines[cursor])) {
      list.push(parseValue(lines[cursor].replace(/^\s{4}-\s+/, '').trim()))
      cursor += 1
    }

    object[key] = list
  }

  return object
}

function parseValue(value) {
  if (value === '[]') {
    return []
  }

  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (/^\d+$/.test(value)) {
    return Number(value)
  }

  if (/^\[.*\]$/.test(value)) {
    const inner = value.slice(1, -1).trim()

    if (!inner) {
      return []
    }

    return inner.split(',').map((item) => parseValue(item.trim()))
  }

  return value.replace(/^["']|["']$/g, '')
}

function extractSections(markdownBody) {
  const matches = [...markdownBody.matchAll(/^##\s+(.+)$/gm)]

  return matches.map((match, index) => {
    const nextMatch = matches[index + 1]
    const start = match.index + match[0].length
    const end = nextMatch ? nextMatch.index : markdownBody.length

    return {
      title: match[1].trim(),
      content: markdownBody.slice(start, end).trim(),
    }
  })
}

function mapSectionsToResourceContent(sections) {
  const content = {}

  for (const section of sections) {
    const key = sectionMap.get(normalizeHeading(section.title))

    if (!key) {
      continue
    }

    const items = markdownToItems(section.content)

    if (items.length === 0) {
      continue
    }

    if (content[key]) {
      content[key].items.push('', section.title, ...items)
      continue
    }

    content[key] = {
      title: section.title,
      items,
    }
  }

  return content
}

function markdownToItems(markdown) {
  return markdown
    .split(/\n{2,}/)
    .flatMap((block) => normalizeMarkdownBlock(block))
    .filter((item) => item.length > 0)
}

function normalizeMarkdownBlock(block) {
  const lines = block
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length === 0) {
    return []
  }

  if (lines.every((line) => /^([-*]|\d+\.)\s+/.test(line))) {
    return lines.map(stripMarkdownLine)
  }

  return [lines.map(stripMarkdownLine).join('\n')]
}

function stripMarkdownLine(line) {
  return line
    .replace(/^###\s+/, '')
    .replace(/^[-*]\s+/, '')
    .replace(/^\d+\.\s+/, '')
    .trim()
}

function sectionContentToPlainText(markdown) {
  return markdownToItems(markdown).join('\n')
}

function normalizeTechMetadata(value) {
  return {
    ...defaultTechMetadata,
    ...(isObject(value) ? value : {}),
  }
}

function normalizeAiMetadata(value) {
  return {
    ...defaultAiMetadata,
    ...(isObject(value) ? value : {}),
  }
}

function asArray(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (value === undefined || value === '') {
    return []
  }

  return [String(value)]
}

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function normalizeHeading(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, ' ')
    .toLowerCase()
    .trim()
}

function formatGeneratedFile(resources) {
  return `import type { Resource } from '../types/resource'

// Fichier genere par scripts/generate-markdown-resources.mjs.
// Ne pas modifier manuellement: corriger les fichiers Markdown sources puis relancer npm run generate:resources.
export const generatedMarkdownResources: Resource[] = ${JSON.stringify(resources, null, 2)}
`
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
}
