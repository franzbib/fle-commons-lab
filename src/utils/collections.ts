import type { Collection, Resource } from '../types/resource'

export function getCollectionById(
  collections: Collection[],
  collectionId: string | undefined,
): Collection | undefined {
  if (!collectionId) {
    return undefined
  }

  return collections.find((collection) => collection.id === collectionId)
}

export function getCollectionResources(
  collection: Collection,
  resources: Resource[],
): Resource[] {
  return collection.resourceIds
    .map((resourceId) => resources.find((resource) => resource.id === resourceId))
    .filter((resource): resource is Resource => Boolean(resource))
}

export function getResourceCollections(
  resourceId: string,
  collections: Collection[],
): Collection[] {
  return collections.filter((collection) => collection.resourceIds.includes(resourceId))
}
