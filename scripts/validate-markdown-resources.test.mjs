import { describe, expect, it } from 'vitest'
import { validateMarkdownResource } from './validate-markdown-resources.mjs'

const validMarkdown = `---
title: "Ressource test"
summary: "Résumé court"
level: "B1"
durationMinutes: 45
durationCategory: "30_60_min"
mainSkill: "grammaire"
theme: "Vie quotidienne"
resourceType: "exercice"
resourceTemplate: "grammaire_inductive"
status: "brouillon"
reuseReadiness: "pret_a_tester"
license: "CC_BY_SA"
authors:
  - "FLE Commons Lab"
---

# Ressource test

## Objectifs

Texte.

## Déroulé

Texte.

## Support étudiant

Texte.

## Guide professeur

Texte.

## Corrigé

Texte.

## Licence et sources

Texte.
`

describe('validateMarkdownResource', () => {
  it('accepts a valid markdown resource', () => {
    expect(validateMarkdownResource(validMarkdown).valid).toBe(true)
  })

  it('rejects markdown without frontmatter', () => {
    const result = validateMarkdownResource('# Titre\n\n## Objectifs\nTexte.')

    expect(result.valid).toBe(false)
    expect(result.errors).toContain(
      'Bloc frontmatter YAML manquant ou mal délimité par --- en début de fichier.',
    )
  })

  it('rejects a missing required field', () => {
    const result = validateMarkdownResource(validMarkdown.replace('level: "B1"\n', ''))

    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Champ obligatoire manquant: level.')
  })

  it('rejects an empty required field', () => {
    const result = validateMarkdownResource(validMarkdown.replace('title: "Ressource test"', 'title:'))

    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Champ obligatoire vide: title.')
  })

  it('rejects a missing markdown section', () => {
    const result = validateMarkdownResource(
      validMarkdown.replace('## Support étudiant\n\nTexte.\n\n', ''),
    )

    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Section Markdown manquante: Support étudiant.')
  })

  it('rejects a controlled taxonomy value outside the model', () => {
    const result = validateMarkdownResource(validMarkdown.replace('status: "brouillon"', 'status: "publie"'))

    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Valeur invalide pour status: publie.')
  })
})
