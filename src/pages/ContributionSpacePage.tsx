import { contributorRoleLabels, contributorRoles } from '../types/community'

const contributionPaths = [
  'Proposer une ressource structuree',
  'Ameliorer une ressource existante',
  "Ajouter un retour d'usage",
  'Proposer une variante',
  'Signaler un probleme de licence',
  'Participer a une relecture',
  "Suivre l'etat d'une contribution",
]

export function ContributionSpacePage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Concept communautaire</p>
        <h1>Futur espace de contribution</h1>
        <p>
          Cette page presente une hypothese de gouvernance future. Elle ne cree aucun compte,
          aucun role reel et aucune contribution persistante.
        </p>
      </header>

      <section>
        <h2>Futurs roles possibles</h2>
        <div className="doc-list">
          {contributorRoles.map((role) => (
            <article key={role}>
              <h3>{contributorRoleLabels[role]}</h3>
              <p>
                Role descriptif pour penser la contribution future. Aucun droit technique
                n'est applique dans la v0.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Parcours de contribution envisages</h2>
        <ul>
          {contributionPaths.map((path) => (
            <li key={path}>{path}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Garde-fous</h2>
        <ul>
          <li>Rester centre sur les ressources, pas sur un flux social.</li>
          <li>Pas de messagerie privee en premiere version.</li>
          <li>Pas de forum general en premiere version.</li>
          <li>Pas de notifications temps reel en premiere version.</li>
          <li>Pas de reputation complexe en premiere version.</li>
          <li>Validation pedagogique humaine requise.</li>
        </ul>
      </section>

      <section className="non-persistent-note">
        Tout est conceptuel dans cette page. Aucun backend, aucune authentification et aucun
        workflow de permission ne sont implementes.
      </section>
    </main>
  )
}
