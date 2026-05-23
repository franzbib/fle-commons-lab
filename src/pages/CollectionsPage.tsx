import type { Collection, Resource } from '../types/resource'
import { formatCollectionVisibility, formatDate } from '../utils/formatters'
import { Badge } from '../components/Badge'

type CollectionsPageProps = {
  collections: Collection[]
  resources: Resource[]
}

export function CollectionsPage({ collections, resources }: CollectionsPageProps) {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Collections locales</p>
        <h1>Parcours et sélections de ressources</h1>
        <p>
          Les collections montrent comment des ressources peuvent être regroupées par
          intention pédagogique, progression ou besoin de classe. Elles restent locales et
          simulées dans la v0.2.
        </p>
      </header>

      <section className="resource-grid" aria-label="Collections">
        {collections.map((collection) => (
          <article key={collection.id} className="resource-card">
            <div className="card-topline">
              <Badge>{formatCollectionVisibility(collection.visibility)}</Badge>
              <Badge>{collection.resourceIds.length} ressource(s)</Badge>
            </div>
            <h2>
              <a href={`#/collections/${collection.id}`}>{collection.title}</a>
            </h2>
            <p>{collection.description}</p>
            <dl className="card-facts">
              <div>
                <dt>Curateur</dt>
                <dd>{collection.curatorName ?? 'Non indiqué'}</dd>
              </div>
              <div>
                <dt>Créée le</dt>
                <dd>{formatDate(collection.createdAt)}</dd>
              </div>
              <div>
                <dt>Ressources valides</dt>
                <dd>
                  {
                    collection.resourceIds.filter((id) =>
                      resources.some((resource) => resource.id === id),
                    ).length
                  }
                </dd>
              </div>
            </dl>
            <div className="tag-list">
              {collection.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
