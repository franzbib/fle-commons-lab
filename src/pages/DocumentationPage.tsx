const docGroups = [
  {
    title: 'Comprendre le projet',
    items: [
      ['README', 'README.md'],
      ['Etat pour agents IA', 'PROJECT_STATE_FOR_LLMS.md'],
      ['Vision', 'docs/vision.md'],
      ['Etat de la demo', 'docs/deployment.md'],
      ['Horizon de reception FLE', 'docs/horizon-reception-product-consequences.md'],
    ],
  },
  {
    title: 'Structurer et contribuer une ressource',
    items: [
      ['Modele de ressource', 'docs/resource-model.md'],
      ['Guide editorial', 'docs/editorial-guidelines.md'],
      ['Format Markdown des ressources', 'docs/markdown-resource-format.md'],
      ['Workflow de conversion', 'docs/conversion-workflow.md'],
      ['Workflow de contribution v0.2', 'docs/contribution-workflow-v0.md'],
      ['Specification du depot brut', 'docs/raw-resource-intake-form-spec.md'],
    ],
  },
  {
    title: 'Technologies, IA et sobriete',
    items: [
      ['Technologies et IA', 'docs/technology-and-ai.md'],
      ['Cadrage Atelier IA & FLE', 'docs/ai-workshop-section-concept.md'],
      ['Implementation Atelier IA & FLE', 'docs/ai-workshop-implementation.md'],
      ['Architecture v0', 'docs/architecture-v0.md'],
      ['Environnement', 'docs/environment.md'],
      ['Checklist de non-regression', 'docs/non-regression-checklist.md'],
      ['Deploiement', 'docs/deployment.md'],
    ],
  },
  {
    title: 'Interface et experience',
    items: [
      ['Identite visuelle v0', 'docs/visual-identity-v0.md'],
      ['Directions visuelles', 'docs/branding-directions.md'],
      ['Notes UI', 'docs/ui-implementation-notes.md'],
      ['Divulgation progressive', 'docs/ux-progressive-disclosure.md'],
      ['Architecture de l’information', 'docs/ux-information-architecture.md'],
      ['Audit editorial des textes', 'docs/editorial-copy-audit.md'],
    ],
  },
  {
    title: 'Communaute et gouvernance',
    items: [
      ['Guide agents IA', 'AGENTS.md'],
      ['Workflow des agents IA', 'docs/agent-workflow.md'],
      ['Modele communautaire', 'docs/community-model.md'],
      ['Roles contributeurs futurs', 'docs/contributor-roles.md'],
      ['Concept espace de contribution', 'docs/contribution-space-concept.md'],
      ['Acces et soutenabilite', 'docs/access-and-sustainability-model.md'],
      ['Journal projet', 'docs/project-journal.md'],
      ['Journal des decisions', 'docs/decision-log.md'],
    ],
  },
  {
    title: 'Explorations et corpus',
    items: [
      ['Experiences de conversion', 'docs/conversion-experiments.md'],
      ['Analyse corpus Drive', 'docs/drive-corpus-analysis.md'],
      ['Collections', 'docs/collections.md'],
      ['Roadmap prudente', 'docs/roadmap-v0.md'],
      ['Workflow Git', 'docs/git-workflow.md'],
    ],
  },
]

export function DocumentationPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Documentation fondatrice</p>
        <h1>Comprendre ce qui existe, ce qui est simulé et ce qui reste futur</h1>
        <p>
          Cette documentation maintient la cohérence entre la démo visible, le modèle de
          ressource, les choix de sobriété et les pistes futures. Elle évite de présenter
          comme actif ce qui est seulement conceptuel.
        </p>
      </header>

      {docGroups.map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <div className="doc-list">
            {group.items.map(([title, path]) => (
              <article key={path}>
                <h3>{title}</h3>
                <code>{path}</code>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
