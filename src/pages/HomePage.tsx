import { demoResources } from '../data/demoResources'

const activeItems = [
  'bibliotheque locale',
  'fiches ressources',
  'onglets apprenant / prof',
  'copie et impression',
  'atelier IA statique',
  'prompts copiables',
]

const experimentalItems = [
  'ressources de demonstration',
  'format Markdown',
  'validateur local',
  'modele de contribution',
]

const inactiveItems = [
  'pas de compte',
  'pas de paiement',
  'pas de backend',
  'pas d’IA integree',
  'pas de collecte',
]

export function HomePage() {
  return (
    <main className="page home-page">
      <section className="hero-panel home-hero">
        <p className="eyebrow">Forge ouverte de ressources FLE</p>
        <h1>Deux portes d’entree pour preparer, reutiliser et ameliorer des cours de FLE.</h1>
        <p>
          FLE Commons Lab est une demo statique: elle permet d’explorer des ressources
          structurees et un atelier IA pedagogique sans compte, sans paiement, sans backend,
          sans collecte et sans appel IA reel.
        </p>
      </section>

      <section className="home-entry-grid" aria-label="Choisir une entree">
        <article className="home-entry-card">
          <p className="eyebrow">Je cherche une ressource FLE</p>
          <h2>Bibliotheque de ressources FLE</h2>
          <p>
            Consultez {demoResources.length} ressources structurees, ouvrez la fiche
            apprenant, gardez les corriges et notes prof separes, puis copiez ou imprimez ce
            qui sert en classe.
          </p>
          <ul>
            <li>contenu apprenant projetable;</li>
            <li>corriges et guide professeur a part;</li>
            <li>alertes Avant la seance pour preparer materiel, groupes ou projection.</li>
          </ul>
          <a className="primary-button" href="#/library">
            Explorer les ressources
          </a>
        </article>

        <article className="home-entry-card home-entry-card-ai">
          <p className="eyebrow">Je veux utiliser l’IA pour preparer mes cours</p>
          <h2>Atelier IA & FLE</h2>
          <p>
            Decouvrez des usages IA prudents pour enseignants: mini-tutoriels, prompts
            commentes, exemples remplis et checklists de verification.
          </p>
          <ul>
            <li>prompts a copier dans l’outil choisi par l’enseignant;</li>
            <li>garde-fous CECRL, donnees personnelles et droits d’auteur;</li>
            <li>aucune IA integree au site.</li>
          </ul>
          <a className="secondary-button" href="#/ai-workshop">
            Ouvrir l’Atelier IA & FLE
          </a>
        </article>
      </section>

      <section className="project-state-grid" aria-label="Etat actuel du projet">
        <article>
          <h2>Actif maintenant</h2>
          <StatusList items={activeItems} />
        </article>
        <article>
          <h2>Experimental</h2>
          <StatusList items={experimentalItems} />
        </article>
        <article>
          <h2>Non actif</h2>
          <StatusList items={inactiveItems} />
        </article>
      </section>
    </main>
  )
}

function StatusList({ items }: { items: string[] }) {
  return (
    <ul className="status-chip-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
