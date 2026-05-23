import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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
]

export const requiredMarkdownSections = [
  'Objectifs',
  'Déroulé',
  'Support étudiant',
  'Guide professeur',
  'Corrigé',
  'Licence et sources',
]

const controlledValues = {
  level: ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'mixte'],
  durationCategory: [
    'moins_15_min',
    '15_30_min',
    '30_60_min',
    '60_120_min',
    'sequence_longue',
    'projet_plusieurs_seances',
  ],
  mainSkill: [
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
  ],
  resourceType: [
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
  ],
  resourceTemplate: [
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
  ],
  status: ['brouillon', 'utilisable', 'teste', 'valide', 'archive'],
  reuseReadiness: [
    'a_completer',
    'pret_a_tester',
    'pret_a_utiliser',
    'teste_en_classe',
    'a_adapter',
    'valide_communautairement',
  ],
  license: [
    'CC_BY',
    'CC_BY_SA',
    'CC_BY_NC',
    'CC_BY_NC_SA',
    'domaine_public',
    'tous_droits_reserves',
    'a_verifier',
  ],
}

export function extractFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)

  if (!match) {
    return {
      frontmatter: null,
      body: markdown,
      errors: ['Bloc frontmatter YAML manquant ou mal délimité par --- en début de fichier.'],
    }
  }

  return {
    frontmatter: match[1],
    body: markdown.slice(match[0].length),
    errors: [],
  }
}

export function parseSimpleFrontmatter(frontmatterText) {
  const fields = {}
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
    const trimmedValue = rawValue.trim()

    if (trimmedValue) {
      fields[key] = parseScalar(trimmedValue)
      continue
    }

    const listValues = []
    let cursor = index + 1

    while (cursor < lines.length && lines[cursor].startsWith('  ')) {
      const listItem = lines[cursor].match(/^\s+-\s*(.*)$/)

      if (listItem) {
        listValues.push(parseScalar(listItem[1].trim()))
      }

      cursor += 1
    }

    fields[key] = listValues.length > 0 ? listValues : ''
  }

  return fields
}

export function validateMarkdownResource(markdown) {
  const errors = []
  const { frontmatter, body, errors: frontmatterErrors } = extractFrontmatter(markdown)

  errors.push(...frontmatterErrors)

  if (!frontmatter) {
    return { valid: false, errors, frontmatter: {} }
  }

  const parsedFrontmatter = parseSimpleFrontmatter(frontmatter)

  for (const field of requiredResourceFrontmatterFields) {
    const value = parsedFrontmatter[field]

    if (value === undefined) {
      errors.push(`Champ obligatoire manquant: ${field}.`)
      continue
    }

    if (isEmptyValue(value)) {
      errors.push(`Champ obligatoire vide: ${field}.`)
    }
  }

  for (const [field, values] of Object.entries(controlledValues)) {
    const value = parsedFrontmatter[field]

    if (value !== undefined && !isEmptyValue(value) && !values.includes(String(value))) {
      errors.push(`Valeur invalide pour ${field}: ${value}.`)
    }
  }

  if (
    parsedFrontmatter.durationMinutes !== undefined &&
    !Number.isFinite(Number(parsedFrontmatter.durationMinutes))
  ) {
    errors.push('durationMinutes doit être un nombre.')
  }

  const sections = extractMarkdownSections(body)

  if (sections.length === 0) {
    errors.push('Aucune section Markdown de niveau ## trouvée.')
  }

  for (const section of requiredMarkdownSections) {
    if (!sections.includes(normalizeHeading(section))) {
      errors.push(`Section Markdown manquante: ${section}.`)
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    frontmatter: parsedFrontmatter,
  }
}

export async function validateMarkdownResourceDirectory(directoryPath) {
  const entries = await readdir(directoryPath, { withFileTypes: true })
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
    .sort()

  const results = []

  for (const fileName of markdownFiles) {
    const filePath = path.join(directoryPath, fileName)
    const content = await readFile(filePath, 'utf8')
    results.push({
      fileName,
      filePath,
      ...validateMarkdownResource(content),
    })
  }

  return results
}

export function formatValidationSummary(results) {
  const validResults = results.filter((result) => result.valid)
  const invalidResults = results.filter((result) => !result.valid)
  const lines = [
    'Validation des ressources Markdown',
    `Fichiers vérifiés: ${results.length}`,
    `Fichiers valides: ${validResults.length}`,
    `Fichiers avec erreurs: ${invalidResults.length}`,
  ]

  for (const result of results) {
    lines.push('')
    lines.push(`${result.valid ? 'OK' : 'ERREUR'} ${result.fileName}`)

    for (const error of result.errors) {
      lines.push(`  - ${error}`)
    }
  }

  return lines.join('\n')
}

function parseScalar(value) {
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

  return value.replace(/^["']|["']$/g, '')
}

function isEmptyValue(value) {
  return value === '' || (Array.isArray(value) && value.length === 0)
}

function extractMarkdownSections(body) {
  return [...body.matchAll(/^##\s+(.+)$/gm)].map((match) => normalizeHeading(match[1]))
}

function normalizeHeading(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

async function main() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
  const resourcesDirectory = path.join(repoRoot, 'examples', 'resources-markdown')
  const results = await validateMarkdownResourceDirectory(resourcesDirectory)
  const summary = formatValidationSummary(results)

  console.log(summary)

  if (results.some((result) => !result.valid)) {
    process.exitCode = 1
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
