import { describe, expect, it } from 'vitest'
import { demoCollections, demoResources } from '../data/demoResources'
import {
  getCollectionById,
  getCollectionResources,
  getResourceCollections,
} from './collections'

describe('collection utilities', () => {
  it('finds a collection by id', () => {
    expect(getCollectionById(demoCollections, 'numerique-et-ia')?.title).toBe(
      'Technologies et IA en classe de FLE',
    )
  })

  it('returns undefined for an unknown collection id', () => {
    expect(getCollectionById(demoCollections, 'collection-inconnue')).toBeUndefined()
  })

  it('resolves resources attached to a collection', () => {
    const collection = getCollectionById(demoCollections, 'activites-orales-courtes')

    expect(collection).toBeDefined()
    expect(getCollectionResources(collection!, demoResources)).toHaveLength(
      collection!.resourceIds.length,
    )
  })

  it('finds collections linked to a resource', () => {
    const collections = getResourceCollections('a1-se-presenter-sans-numerique', demoCollections)

    expect(collections.map((collection) => collection.id)).toContain('premiers-cours')
    expect(collections.map((collection) => collection.id)).toContain('activites-orales-courtes')
  })

  it('keeps demo collection references valid', () => {
    const resourceIds = new Set(demoResources.map((resource) => resource.id))
    const missingIds = demoCollections.flatMap((collection) =>
      collection.resourceIds.filter((resourceId) => !resourceIds.has(resourceId)),
    )

    expect(missingIds).toEqual([])
  })
})
