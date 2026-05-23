import { useEffect, useMemo, useState } from 'react'
import { Layout } from './components/Layout'
import { demoResources, themes } from './data/demoResources'
import { AboutPage } from './pages/AboutPage'
import { DocumentationPage } from './pages/DocumentationPage'
import { HomePage } from './pages/HomePage'
import { LibraryPage } from './pages/LibraryPage'
import { ResourcePage } from './pages/ResourcePage'
import { TechnologyAndAiPage } from './pages/TechnologyAndAiPage'
import { emptyResourceFilters, type ResourceFiltersValue } from './utils/filters'

export type AppRoute = 'home' | 'library' | 'resource' | 'about' | 'technology' | 'docs'

type ParsedRoute = {
  route: AppRoute
  resourceId?: string
}

function App() {
  const [locationHash, setLocationHash] = useState(window.location.hash)
  const [filters, setFilters] = useState<ResourceFiltersValue>(emptyResourceFilters)

  useEffect(() => {
    const handleHashChange = () => setLocationHash(window.location.hash)
    const routePolling = window.setInterval(() => {
      setLocationHash((currentHash) =>
        currentHash === window.location.hash ? currentHash : window.location.hash,
      )
    }, 250)
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.clearInterval(routePolling)
    }
  }, [])

  const parsedRoute = useMemo(() => parseHash(locationHash), [locationHash])
  const currentResource = demoResources.find(
    (resource) => resource.id === parsedRoute.resourceId,
  )

  return (
    <Layout currentRoute={parsedRoute.route}>
      {parsedRoute.route === 'home' ? <HomePage /> : null}
      {parsedRoute.route === 'library' ? (
        <LibraryPage
          resources={demoResources}
          filters={filters}
          themes={themes}
          onFiltersChange={setFilters}
          onFiltersReset={() => setFilters(emptyResourceFilters)}
        />
      ) : null}
      {parsedRoute.route === 'resource' ? <ResourcePage resource={currentResource} /> : null}
      {parsedRoute.route === 'about' ? <AboutPage /> : null}
      {parsedRoute.route === 'technology' ? <TechnologyAndAiPage /> : null}
      {parsedRoute.route === 'docs' ? <DocumentationPage /> : null}
    </Layout>
  )
}

function parseHash(hash: string): ParsedRoute {
  const normalizedHash = hash.replace(/^#\/?/, '')
  const [routeSegment, resourceId] = normalizedHash.split('/')

  if (!routeSegment) {
    return { route: 'home' }
  }

  if (routeSegment === 'library') {
    return { route: 'library' }
  }

  if (routeSegment === 'resources') {
    return { route: 'resource', resourceId }
  }

  if (routeSegment === 'about') {
    return { route: 'about' }
  }

  if (routeSegment === 'technology') {
    return { route: 'technology' }
  }

  if (routeSegment === 'docs') {
    return { route: 'docs' }
  }

  return { route: 'home' }
}

export default App
