export function ResourceFormatPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Format ouvert</p>
        <h1>Ressources Markdown avec frontmatter YAML</h1>
        <p>
          FLE Commons Lab prepare un format source lisible par les enseignants et exploitable
          par des outils: un fichier Markdown structure, precede de metadonnees YAML.
        </p>
      </header>

      <section>
        <h2>Pourquoi ce format ?</h2>
        <p>
          Markdown facilite la relecture, le versionnage Git et la contribution open source.
          Le frontmatter YAML permet de conserver les informations pedagogiques, numeriques
          et IA sans enfermer les ressources dans une base de donnees prematuree.
        </p>
      </section>

      <section>
        <h2>Ressource source et ressource affichee</h2>
        <p>
          Une ressource Markdown est un format de contribution futur. Les fiches affichees
          dans l'application restent aujourd'hui des donnees TypeScript locales. Aucun import
          automatique n'est actif dans la v0.
        </p>
      </section>

      <section>
        <h2>Contribution future</h2>
        <p>
          Un enseignant pourra proposer un fichier avec titre, niveau, duree, objectifs,
          deroule, support etudiant, guide professeur, corrige, variantes, licence et notes
          sur les droits. La validation humaine restera indispensable avant publication.
        </p>
      </section>

      <section className="non-persistent-note">
        Aucun upload, aucun parser YAML et aucune conversion automatique ne sont implementes
        dans cette version. Le format est documente pour preparer une suite sobre.
      </section>
    </main>
  )
}
