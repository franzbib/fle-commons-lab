import type { ReactNode } from 'react'
import type { AppRoute } from '../App'

type LayoutProps = {
  children: ReactNode
  currentRoute: AppRoute
}

const navItems: Array<{ route: AppRoute; label: string }> = [
  { route: 'home', label: 'Accueil' },
  { route: 'projectStatus', label: 'Demo' },
  { route: 'library', label: 'Bibliotheque' },
  { route: 'collections', label: 'Collections' },
  { route: 'community', label: 'Communaute' },
  { route: 'contributionSpace', label: 'Contribuer' },
  { route: 'templates', label: 'Gabarits' },
  { route: 'resourceFormat', label: 'Format' },
  { route: 'about', label: 'Vision' },
  { route: 'technology', label: 'Technologies et IA' },
  { route: 'docs', label: 'Documentation' },
]

function isCurrentRoute(currentRoute: AppRoute, itemRoute: AppRoute) {
  return currentRoute === itemRoute || (currentRoute === 'collection' && itemRoute === 'collections')
}

export function Layout({ children, currentRoute }: LayoutProps) {
  return (
    <div className="app-frame">
      <header className="site-header">
        <a className="brand" href="#/">
          <span className="brand-mark">FLE</span>
          <span>
            <strong>FLE Commons Lab</strong>
            <small>Socle local experimental</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.route}
              href={
                item.route === 'home'
                  ? '#/'
                  : item.route === 'projectStatus'
                    ? '#/demo'
                    : item.route === 'resourceFormat'
                      ? '#/resource-format'
                      : item.route === 'contributionSpace'
                        ? '#/contribution-space'
                        : `#/${item.route}`
              }
              aria-current={isCurrentRoute(currentRoute, item.route) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      {children}
    </div>
  )
}
