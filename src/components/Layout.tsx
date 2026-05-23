import type { ReactNode } from 'react'
import type { AppRoute } from '../App'

type LayoutProps = {
  children: ReactNode
  currentRoute: AppRoute
}

const navItems: Array<{ route: AppRoute; label: string }> = [
  { route: 'home', label: 'Accueil' },
  { route: 'library', label: 'Bibliothèque' },
  { route: 'about', label: 'Vision' },
  { route: 'technology', label: 'Technologies et IA' },
  { route: 'docs', label: 'Documentation' },
]

export function Layout({ children, currentRoute }: LayoutProps) {
  return (
    <div className="app-frame">
      <header className="site-header">
        <a className="brand" href="#/">
          <span className="brand-mark">FLE</span>
          <span>
            <strong>FLE Commons Lab</strong>
            <small>Socle local expérimental</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.route}
              href={item.route === 'home' ? '#/' : `#/${item.route}`}
              aria-current={currentRoute === item.route ? 'page' : undefined}
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
