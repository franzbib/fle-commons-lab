import { useEffect, useMemo, useState } from 'react'
import { Layout } from './components/Layout'
import { demoCollections, demoResources, themes } from './data/demoResources'
import { generatedMarkdownResources } from './data/generatedMarkdownResources'
import { AboutPage } from './pages/AboutPage'
import { AiWorkshopPage } from './pages/AiWorkshopPage'
import { AtelierPage } from './pages/AtelierPage'
import { CollectionPage } from './pages/CollectionPage'
import { CollectionsPage } from './pages/CollectionsPage'
import { CommunityPage } from './pages/CommunityPage'
import { ContributionSpacePage } from './pages/ContributionSpacePage'
import { DocumentationPage } from './pages/DocumentationPage'
import { HomePage } from './pages/HomePage'
import { LibraryPage } from './pages/LibraryPage'
import { ProjectStatusPage } from './pages/ProjectStatusPage'
import { ResourceFormatPage } from './pages/ResourceFormatPage'
import { ResourcePage } from './pages/ResourcePage'
import { TemplatesPage } from './pages/TemplatesPage'
import { TechnologyAndAiPage } from './pages/TechnologyAndAiPage'
import { getCollectionById } from './utils/collections'
import { emptyResourceFilters, type ResourceFiltersValue } from './utils/filters'

const allResources = [...demoResources, ...generatedMarkdownResources]
const allThemes = Array.from(
  new Set([...themes, ...generatedMarkdownResources.map((resource) => resource.theme)]),
).sort()

export type AppRoute =
  | 'home'
  | 'library'
  | 'projectStatus'
  | 'resource'
  | 'resourceFormat'
  | 'collections'
  | 'collection'
  | 'community'
  | 'contributionSpace'
  | 'templates'
  | 'about'
  | 'technology'
  | 'aiWorkshop'
  | 'atelier'
  | 'atelierResource'
  | 'docs'

type ParsedRoute = {
  route: AppRoute
  resourceId?: string
  collectionId?: string
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
  const currentResource = allResources.find(
    (resource) => resource.id === parsedRoute.resourceId,
  )
  const currentCollection = getCollectionById(demoCollections, parsedRoute.collectionId)

  return (
    <Layout currentRoute={parsedRoute.route}>
      {parsedRoute.route === 'home' ? <HomePage /> : null}
      {parsedRoute.route === 'library' ? (
        <LibraryPage
          resources={allResources}
          filters={filters}
          themes={allThemes}
          onFiltersChange={setFilters}
          onFiltersReset={() => setFilters(emptyResourceFilters)}
        />
      ) : null}
      {parsedRoute.route === 'resource' ? <ResourcePage resource={currentResource} /> : null}
      {parsedRoute.route === 'projectStatus' ? <ProjectStatusPage /> : null}
      {parsedRoute.route === 'resourceFormat' ? <ResourceFormatPage /> : null}
      {parsedRoute.route === 'collections' ? (
        <CollectionsPage collections={demoCollections} resources={allResources} />
      ) : null}
      {parsedRoute.route === 'collection' ? (
        <CollectionPage collection={currentCollection} resources={allResources} />
      ) : null}
      {parsedRoute.route === 'community' ? <CommunityPage /> : null}
      {parsedRoute.route === 'contributionSpace' ? <ContributionSpacePage /> : null}
      {parsedRoute.route === 'templates' ? <TemplatesPage /> : null}
      {parsedRoute.route === 'about' ? <AboutPage /> : null}
      {parsedRoute.route === 'technology' ? <TechnologyAndAiPage /> : null}
      {parsedRoute.route === 'aiWorkshop' ? <AiWorkshopPage /> : null}
      {parsedRoute.route === 'atelier' ? <AtelierPage resources={allResources} /> : null}
      {parsedRoute.route === 'atelierResource' ? (
        <AtelierPage resources={allResources} resource={currentResource} />
      ) : null}
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

  if (routeSegment === 'demo' || routeSegment === 'project-status') {
    return { route: 'projectStatus' }
  }

  if (routeSegment === 'resource-format') {
    return { route: 'resourceFormat' }
  }

  if (routeSegment === 'collections' && resourceId) {
    return { route: 'collection', collectionId: resourceId }
  }

  if (routeSegment === 'collections') {
    return { route: 'collections' }
  }

  if (routeSegment === 'community' || routeSegment === 'contribute') {
    return { route: 'community' }
  }

  if (routeSegment === 'contribution-space') {
    return { route: 'contributionSpace' }
  }

  if (routeSegment === 'templates') {
    return { route: 'templates' }
  }

  if (routeSegment === 'about') {
    return { route: 'about' }
  }

  if (routeSegment === 'technology') {
    return { route: 'technology' }
  }

  if (routeSegment === 'ai-workshop') {
    return { route: 'aiWorkshop' }
  }

  if (routeSegment === 'atelier' && resourceId) {
    return { route: 'atelierResource', resourceId }
  }

  if (routeSegment === 'atelier') {
    return { route: 'atelier' }
  }

  if (routeSegment === 'docs') {
    return { route: 'docs' }
  }

  return { route: 'home' }
}

export default App
