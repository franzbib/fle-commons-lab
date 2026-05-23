import { useMemo } from 'react'
import { ResourceCard } from '../components/ResourceCard'
import { ResourceFilters } from '../components/ResourceFilters'
import type { Resource } from '../types/resource'
import type { ResourceFiltersValue } from '../utils/filters'
import { filterResources } from '../utils/filters'

type LibraryPageProps = {
  resources: Resource[]
  filters: ResourceFiltersValue
  themes: string[]
  onFiltersChange: (filters: ResourceFiltersValue) => void
  onFiltersReset: () => void
}

export function LibraryPage({
  resources,
  filters,
  themes,
  onFiltersChange,
  onFiltersReset,
}: LibraryPageProps) {
  const filteredResources = useMemo(
    () => filterResources(resources, filters),
    [filters, resources],
  )

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Bibliothèque locale</p>
        <h1>Ressources pédagogiques FLE</h1>
        <p>
          Filtrez les ressources de démonstration par niveau, compétence, type, thème ou
          statut. Les contenus sont courts et originaux pour montrer le modèle.
        </p>
      </header>

      <ResourceFilters
        filters={filters}
        themes={themes}
        onChange={onFiltersChange}
        onReset={onFiltersReset}
      />

      <div className="results-heading">
        <h2>{filteredResources.length} ressource(s)</h2>
        <span>{resources.length} au total</span>
      </div>

      {filteredResources.length > 0 ? (
        <section className="resource-grid" aria-label="Résultats de la bibliothèque">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </section>
      ) : (
        <p className="empty-state">Aucune ressource ne correspond aux filtres actifs.</p>
      )}
    </main>
  )
}
