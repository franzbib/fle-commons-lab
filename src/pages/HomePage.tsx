


export function HomePage() {
  return (
    <main className="page home-page">
      <section className="hero-panel home-hero">
        <p className="eyebrow">Forge ouverte de ressources FLE</p>
        <h1>Des ressources FLE pretes a copier, imprimer, adapter et ameliorer entre enseignants.</h1>
      </section>

      <section className="home-entry-grid" aria-label="Choisir une entree">
        <article className="home-entry-card">
          <p className="eyebrow">Je cherche</p>
          <h2>Chercher une ressource</h2>
          <p>Consultez la bibliotheque de ressources structurees, pretes pour la classe.</p>
          <a className="primary-button" href="#/library" style={{ display: 'inline-block', marginTop: '16px', padding: '12px 24px', background: 'var(--color-amethyst)', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            Ouvrir la bibliotheque
          </a>
        </article>

        <article className="home-entry-card home-entry-card-ai">
          <p className="eyebrow">Je prepare</p>
          <h2>Boite a outils IA</h2>
          <p>Instructions a copier pour vous aider a preparer vos cours avec votre IA habituelle.</p>
          <a className="secondary-button" href="#/ai-workshop" style={{ display: 'inline-block', marginTop: '16px', padding: '12px 24px', border: '2px solid var(--color-amethyst)', color: 'var(--color-amethyst)', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            Ouvrir la boite a outils
          </a>
        </article>

        <article className="home-entry-card">
          <p className="eyebrow">Je partage</p>
          <h2>Proposer une ressource</h2>
          <p>Deposez vos brouillons, idees ou documents, sans aucune competence technique.</p>
          <a className="secondary-button" href="#/contribution-space" style={{ display: 'inline-block', marginTop: '16px', padding: '12px 24px', border: '2px solid var(--color-amethyst)', color: 'var(--color-amethyst)', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            Contribuer
          </a>
        </article>
      </section>
    </main>
  )
}
