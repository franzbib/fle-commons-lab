import { ResourceDetail } from '../components/ResourceDetail'
import type { Resource } from '../types/resource'

type ResourcePageProps = {
  resource?: Resource
}

export function ResourcePage({ resource }: ResourcePageProps) {
  if (!resource) {
    return (
      <main className="page">
        <section className="empty-state">
          <h1>Ressource introuvable</h1>
          <p>Cette ressource n’existe pas dans les données locales de démonstration.</p>
          <a className="secondary-button" href="#/library">
            Retour à la bibliothèque
          </a>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <a className="back-link" href="#/library">
        Retour à la bibliothèque
      </a>
      <ResourceDetail resource={resource} />
    </main>
  )
}
