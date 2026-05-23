import { describe, expect, it } from 'vitest'
import { demoResources } from '../data/demoResources'
import { emptyResourceFilters, filterResources, type ResourceFiltersValue } from './filters'

function withFilters(filters: Partial<ResourceFiltersValue>): ResourceFiltersValue {
  return { ...emptyResourceFilters, ...filters }
}

describe('filterResources', () => {
  it('returns every resource with empty filters', () => {
    expect(filterResources(demoResources, emptyResourceFilters)).toHaveLength(
      demoResources.length,
    )
  })

  it('filters by CEFR level', () => {
    const results = filterResources(demoResources, withFilters({ level: 'B2' }))

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((resource) => resource.level === 'B2')).toBe(true)
  })

  it('filters by main skill', () => {
    const results = filterResources(
      demoResources,
      withFilters({ mainSkill: 'esprit_critique' }),
    )

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((resource) => resource.mainSkill === 'esprit_critique')).toBe(
      true,
    )
  })

  it('filters by resource type', () => {
    const results = filterResources(
      demoResources,
      withFilters({ resourceType: 'atelier_numerique' }),
    )

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((resource) => resource.resourceType === 'atelier_numerique')).toBe(
      true,
    )
  })

  it('filters by editorial status', () => {
    const results = filterResources(demoResources, withFilters({ status: 'brouillon' }))

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((resource) => resource.status === 'brouillon')).toBe(true)
  })

  it('filters resources that use a digital tool', () => {
    const results = filterResources(demoResources, withFilters({ usesDigitalTool: 'yes' }))

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((resource) => resource.techMetadata?.usesDigitalTool === true)).toBe(
      true,
    )
  })

  it('filters resources that do not use a digital tool', () => {
    const results = filterResources(demoResources, withFilters({ usesDigitalTool: 'no' }))

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((resource) => resource.techMetadata?.usesDigitalTool !== true)).toBe(
      true,
    )
  })

  it('filters resources that document AI use', () => {
    const results = filterResources(demoResources, withFilters({ usesAI: 'yes' }))

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((resource) => resource.aiMetadata?.usesAI === true)).toBe(true)
  })

  it('filters resources that do not document AI use', () => {
    const results = filterResources(demoResources, withFilters({ usesAI: 'no' }))

    expect(results.length).toBeGreaterThan(0)
    expect(results.every((resource) => resource.aiMetadata?.usesAI !== true)).toBe(true)
  })

  it('filters by license, preparation level and source type', () => {
    const licenseResults = filterResources(demoResources, withFilters({ license: 'CC_BY_SA' }))
    const preparationResults = filterResources(
      demoResources,
      withFilters({ teacherPreparationLevel: 'faible' }),
    )
    const sourceResults = filterResources(
      demoResources,
      withFilters({ sourceType: 'document_cree' }),
    )

    expect(licenseResults.length).toBeGreaterThan(0)
    expect(licenseResults.every((resource) => resource.license === 'CC_BY_SA')).toBe(true)
    expect(preparationResults.length).toBeGreaterThan(0)
    expect(
      preparationResults.every((resource) => resource.teacherPreparationLevel === 'faible'),
    ).toBe(true)
    expect(sourceResults.length).toBeGreaterThan(0)
    expect(sourceResults.every((resource) => resource.sourceType === 'document_cree')).toBe(true)
  })

  it('searches in title, summary, tags and themes', () => {
    const byTitle = filterResources(demoResources, withFilters({ search: 'phonétique' }))
    const byTag = filterResources(demoResources, withFilters({ search: 'versionnage' }))
    const byTheme = filterResources(demoResources, withFilters({ search: 'administration' }))

    expect(byTitle.some((resource) => resource.id === 'a1-a2-phonetique-y-u')).toBe(true)
    expect(byTag.some((resource) => resource.id === 'mixte-creer-ressource-fle-ouverte')).toBe(
      true,
    )
    expect(byTheme.some((resource) => resource.id === 'mixte-demarche-administrative-en-ligne')).toBe(
      true,
    )
  })

  it('combines several filters', () => {
    const results = filterResources(
      demoResources,
      withFilters({
        level: 'mixte',
        resourceType: 'scenario_ia',
        usesAI: 'yes',
      }),
    )

    expect(results.map((resource) => resource.id)).toEqual([
      'b1-b2-atelier-ia-ameliorer-consigne',
    ])
  })

  it('returns an empty list when no resource matches', () => {
    const results = filterResources(
      demoResources,
      withFilters({
        search: 'ressource inexistante impossible',
        level: 'C2',
      }),
    )

    expect(results).toEqual([])
  })
})
