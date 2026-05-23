export function ResourceFormatPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Format ouvert</p>
        <h1>Ressources Markdown avec frontmatter YAML</h1>
        <p>
          FLE Commons Lab prépare un format source expérimental: un fichier Markdown
          structuré, précédé de métadonnées YAML. Ce format aide les contributeurs
          techniques, mais il n’est pas le parcours principal de l’enseignant ordinaire.
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
          automatique n'est actif dans la v0: un exemple Markdown n'est donc pas encore une
          ressource validée ni affichée automatiquement.
        </p>
      </section>

      <section>
        <h2>Validation locale</h2>
        <p>
          La commande <code>npm run validate:resources</code> vérifie les exemples Markdown
          présents dans <code>examples/resources-markdown/</code>. Elle contrôle seulement
          la structure minimale: frontmatter, champs obligatoires, sections attendues et
          quelques valeurs contrôlées.
        </p>
      </section>

      <section>
        <h2>Contribution future</h2>
        <p>
          Un enseignant pourra proposer un fichier avec titre, niveau, duree, objectifs,
          deroule, support etudiant, guide professeur, corrige, variantes, licence et notes
          sur les droits. La validation humaine restera indispensable avant publication:
          niveau, consignes, corrigé, droit d’auteur et licence ne sont pas validés par le
          script.
        </p>
      </section>

      <section className="non-persistent-note">
        Aucun upload, aucun parser YAML complet et aucune conversion automatique ne sont
        implémentés dans cette version. Le format est documenté pour préparer une suite
        sobre, relisible et juridiquement prudente.
      </section>
    </main>
  )
}
