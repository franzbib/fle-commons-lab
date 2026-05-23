import { contributorRoleLabels, contributorRoles } from '../types/community'

const contributionPaths = [
  'Proposer une ressource brute',
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
          Cette page montre comment un enseignant pourrait plus tard proposer une ressource,
          une correction ou un retour d'usage. Elle ne cree aucun compte et n'enregistre rien.
        </p>
      </header>

      <section className="prototype-form-section">
        <div>
          <h2>Proposer une ressource brute</h2>
          <p>
            Prototype visuel: ce formulaire montre les informations utiles pour demarrer une
            future contribution. Dans la v0, rien n'est envoye, rien n'est stocke et aucune donnee
            utilisateur n'est collectee.
          </p>
        </div>
        <form className="prototype-form" aria-label="Prototype de proposition de ressource brute">
          <label className="field">
            <span>Titre provisoire</span>
            <input disabled placeholder="Ex. Debattre autour des transports en ville" />
          </label>
          <label className="field">
            <span>Niveau approximatif</span>
            <select disabled defaultValue="">
              <option value="">A choisir plus tard</option>
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
            </select>
          </label>
          <label className="field">
            <span>Type de ressource</span>
            <select disabled defaultValue="">
              <option value="">A choisir plus tard</option>
              <option>Exercice</option>
              <option>Sequence</option>
              <option>Evaluation</option>
              <option>Activite orale</option>
              <option>Fiche</option>
            </select>
          </label>
          <label className="field">
            <span>Duree estimee</span>
            <input disabled placeholder="Ex. 45 minutes" />
          </label>
          <label className="field field-wide">
            <span>Texte brut ou description</span>
            <textarea
              disabled
              placeholder="Coller ici une consigne, un plan de seance, une idee d'activite ou une description courte."
            />
          </label>
          <fieldset className="prototype-fieldset">
            <legend>Le support contient-il deja un corrige ?</legend>
            <label>
              <input type="radio" disabled /> Oui
            </label>
            <label>
              <input type="radio" disabled /> Non
            </label>
            <label>
              <input type="radio" disabled /> A completer
            </label>
          </fieldset>
          <fieldset className="prototype-fieldset">
            <legend>
              Le document contient-il un texte, une image ou un support dont vous n'etes pas
              l'auteur ?
            </legend>
            <label>
              <input type="radio" disabled /> Oui
            </label>
            <label>
              <input type="radio" disabled /> Non
            </label>
            <label>
              <input type="radio" disabled /> Je ne sais pas
            </label>
          </fieldset>
          <div className="non-persistent-note action-note">
            <div>
              <strong>Prototype non connecte dans la v0</strong>
              <p>
                Cette zone prepare un futur parcours simple pour enseignants. Elle ne transmet
                aucune information.
              </p>
            </div>
            <button type="button" className="secondary-button" disabled>
              Envoyer plus tard
            </button>
          </div>
        </form>
      </section>

      <section>
        <h2>Contribuer plus tard, simplement</h2>
        <p>
          La contribution ne devra pas obligatoirement commencer par une ressource parfaite. Un
          enseignant pourra aider en proposant une idee, en signalant une erreur, en ajoutant un
          corrige, en adaptant une fiche, en racontant un usage en classe ou en participant a une
          relecture.
        </p>
      </section>

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
