import { ResourceCard } from '../components/ResourceCard'
import type { Collection, Resource } from '../types/resource'
import { getCollectionResources } from '../utils/collections'
import { formatCollectionVisibility, formatDate } from '../utils/formatters'

type CollectionPageProps = {
  collection?: Collection
  resources: Resource[]
}

export function CollectionPage({ collection, resources }: CollectionPageProps) {
  if (!collection) {
    return (
      <main className="page">
        <section className="empty-state">
          <h1>Collection introuvable</h1>
          <p>Cette collection n’existe pas dans les données locales.</p>
          <a className="secondary-button" href="#/collections">
            Retour aux collections
          </a>
        </section>
      </main>
    )
  }

  const collectionResources = getCollectionResources(collection, resources)

  return (
    <main className="page">
      <a className="back-link" href="#/collections">
        Retour aux collections
      </a>
      <header className="detail-hero">
        <p className="eyebrow">Collection</p>
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
      </header>

      <section className="detail-grid" aria-label="Métadonnées de collection">
        <Fact label="Visibilité" value={formatCollectionVisibility(collection.visibility)} />
        <Fact label="Curateur" value={collection.curatorName ?? 'Non indiqué'} />
        <Fact label="Créée le" value={formatDate(collection.createdAt)} />
        <Fact label="Ressources" value={`${collectionResources.length}`} />
      </section>

      <section className="detail-section">
        <h2>Tags</h2>
        <div className="tag-list">
          {collection.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <h2>Ressources associées</h2>
        <div className="resource-grid">
          {collectionResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </main>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="fact">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}
