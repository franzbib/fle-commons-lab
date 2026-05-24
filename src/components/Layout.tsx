import type { ReactNode } from 'react'
import type { AppRoute } from '../App'
import logoMarkUrl from '../../assets/branding/logo-temp.svg'

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
  { route: 'aiWorkshop', label: 'Atelier IA & FLE' },
  { route: 'atelier', label: 'Atelier' },
  { route: 'docs', label: 'Documentation' },
]

function isCurrentRoute(currentRoute: AppRoute, itemRoute: AppRoute) {
  return (
    currentRoute === itemRoute ||
    (currentRoute === 'collection' && itemRoute === 'collections') ||
    (currentRoute === 'atelierResource' && itemRoute === 'atelier')
  )
}

export function Layout({ children, currentRoute }: LayoutProps) {
  return (
    <div className="app-frame">
      <header className="site-header">
        <a className="brand" href="#/">
          <img className="brand-mark" src={logoMarkUrl} alt="" aria-hidden="true" />
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
                    : item.route === 'aiWorkshop'
                      ? '#/ai-workshop'
                      : item.route === 'atelier'
                        ? '#/atelier'
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
