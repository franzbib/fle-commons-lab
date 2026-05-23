import { demoResources } from '../data/demoResources'

export function HomePage() {
  return (
    <main className="page">
      <section className="hero-panel">
        <p className="eyebrow">Projet open source expérimental</p>
        <h1>Transformer des supports FLE dispersés en communs pédagogiques structurés.</h1>
        <p>
          FLE Commons Lab est une forge ouverte de ressources FLE. La v0 est une démo
          statique: elle permet de consulter, filtrer, copier et imprimer des fiches
          locales, sans compte, sans paiement, sans backend, sans Supabase et sans appel IA.
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
            Les ressources de démonstration testent le modèle: support étudiant, guide
            professeur, corrigé, versions, retours d’usage et propositions simulées.
          </p>
        </article>
        <article>
          <h2>Démo statique, trajectoire ouverte</h2>
          <p>
            Les contributions, l’audit IA, les accès membres et Supabase sont documentés
            comme pistes futures. Rien de tout cela n’est actif dans cette version.
          </p>
        </article>
        <article>
          <h2>Copier, imprimer, adapter</h2>
          <p>
            L’interface privilégie le point de vue enseignant: comprendre vite une fiche,
            récupérer les blocs utiles et garder la trace des améliorations possibles.
          </p>
        </article>
      </section>
    </main>
  )
}
