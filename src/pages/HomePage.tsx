import { demoResources } from '../data/demoResources'

export function HomePage() {
  return (
    <main className="page">
      <section className="hero-panel">
        <p className="eyebrow">Projet open source expérimental</p>
        <h1>Transformer des supports FLE dispersés en communs pédagogiques structurés.</h1>
        <p>
          FLE Commons Lab pose un premier socle local pour consulter, organiser et
          documenter des ressources pédagogiques FLE. Cette v0 fonctionne sans backend,
          sans IA, sans Supabase et sans variable d’environnement obligatoire.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#/library">
            Ouvrir la bibliothèque
          </a>
          <a className="secondary-button" href="#/about">
            Comprendre la vision
          </a>
        </div>
      </section>

      <section className="intro-grid" aria-label="Résumé de la v0">
        <article>
          <h2>{demoResources.length} ressources locales</h2>
          <p>
            Les données sont stockées en TypeScript pour stabiliser le modèle avant toute
            persistance.
          </p>
        </article>
        <article>
          <h2>Fondations avant plateforme</h2>
          <p>
            Contributions, audit IA et Supabase sont anticipés dans l’architecture et la
            documentation, pas implémentés.
          </p>
        </article>
        <article>
          <h2>Supports vivants</h2>
          <p>
            Chaque ressource prévoit versions simulées, retours d’usage et sections
            pédagogiques réutilisables.
          </p>
        </article>
      </section>
    </main>
  )
}
