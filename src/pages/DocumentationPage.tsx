const docs = [
  ['Vision', 'docs/vision.md'],
  ['Architecture v0', 'docs/architecture-v0.md'],
  ['Modèle de ressource', 'docs/resource-model.md'],
  ['Guide éditorial', 'docs/editorial-guidelines.md'],
  ['Modele communautaire', 'docs/community-model.md'],
  ['Collections', 'docs/collections.md'],
  ['Workflow de contribution v0.2', 'docs/contribution-workflow-v0.md'],
  ['Format Markdown des ressources', 'docs/markdown-resource-format.md'],
  ['Workflow de conversion', 'docs/conversion-workflow.md'],
  ['Experiences de conversion', 'docs/conversion-experiments.md'],
  ['Technologies et IA', 'docs/technology-and-ai.md'],
  ['Environnement', 'docs/environment.md'],
  ['Workflow Git', 'docs/git-workflow.md'],
  ['Checklist', 'docs/non-regression-checklist.md'],
  ['Roadmap prudente', 'docs/roadmap-v0.md'],
  ['Guide de contribution brouillon', 'docs/contribution-guide-draft.md'],
]

export function DocumentationPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Documentation fondatrice</p>
        <h1>Reprendre le projet sans repartir de zéro</h1>
        <p>
          Les fichiers ci-dessous fixent les décisions de sobriété, le modèle pédagogique
          et les pistes futures à ne pas implémenter prématurément.
        </p>
      </header>

      <section className="doc-list">
        {docs.map(([title, path]) => (
          <article key={path}>
            <h2>{title}</h2>
            <code>{path}</code>
          </article>
        ))}
      </section>
    </main>
  )
}
