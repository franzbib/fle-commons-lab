import type { Resource, ResourceSectionKey } from '../types/resource'
import {
  formatActivityFormat,
  formatAiAssistanceLevel,
  formatAiUseCase,
  formatBoolean,
  formatClassroomMode,
  formatContributionStatus,
  formatContributionType,
  formatDate,
  formatDigitalFormat,
  formatDurationCategory,
  formatLicense,
  formatResourceTemplate,
  formatResourceType,
  formatReuseReadiness,
  formatSectionLabel,
  formatSkill,
  formatSourceType,
  formatStatus,
  formatTeacherPreparation,
  formatTechnicalDifficulty,
  sectionOrder,
} from '../utils/formatters'
import { Badge } from '../components/Badge'

type AtelierPageProps = {
  resources: Resource[]
  resource?: Resource
}

export function AtelierPage({ resources, resource }: AtelierPageProps) {
  if (resource) {
    return <AtelierResourceDetail resource={resource} />
  }

  return (
    <main className="page atelier-page">
      <header className="page-header">
        <p className="eyebrow">Vue atelier</p>
        <h1>Suivi editorial des ressources</h1>
        <p>
          Cette vue donne acces aux metadonnees, statuts de normalisation, traces techniques et
          informations utiles au travail editorial. Elle ne cree ni authentification, ni role, ni
          backend.
        </p>
      </header>

      <div className="atelier-resource-list">
        {resources.map((item) => (
          <article key={item.id} className="atelier-resource-row">
            <div>
              <div className="card-topline">
                <Badge tone="level">{item.level}</Badge>
                <Badge>{formatResourceType(item.resourceType)}</Badge>
                <Badge tone="status">{formatStatus(item.status)}</Badge>
              </div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </div>
            <a className="secondary-button" href={`#/atelier/${item.id}`}>
              Inspecter
            </a>
          </article>
        ))}
      </div>
    </main>
  )
}

function AtelierResourceDetail({ resource }: { resource: Resource }) {
  return (
    <main className="page atelier-page">
      <a className="back-link" href="#/atelier">
        Retour a la vue atelier
      </a>
      <header className="detail-hero">
        <div className="card-topline">
          <Badge tone="level">{resource.level}</Badge>
          <Badge>{formatResourceType(resource.resourceType)}</Badge>
          <Badge>{formatResourceTemplate(resource.resourceTemplate)}</Badge>
          <Badge tone="status">{formatStatus(resource.status)}</Badge>
        </div>
        <h1>{resource.title}</h1>
        <p>{resource.summary}</p>
        <a className="secondary-button" href={`#/resources/${resource.id}`}>
          Voir la fiche publique
        </a>
      </header>

      <section className="detail-section">
        <h2>Metadonnees principales</h2>
        <div className="detail-grid">
          <Fact label="Identifiant" value={resource.id} />
          <Fact label="Niveau" value={resource.level} />
          <Fact label="Duree" value={`${resource.durationMinutes} min`} />
          <Fact label="Categorie duree" value={formatDurationCategory(resource.durationCategory)} />
          <Fact label="Competence" value={formatSkill(resource.mainSkill)} />
          <Fact
            label="Competences secondaires"
            value={resource.secondarySkills.map(formatSkill).join(', ') || 'Aucune'}
          />
          <Fact label="Theme" value={resource.theme} />
          <Fact label="Type" value={formatResourceType(resource.resourceType)} />
          <Fact label="Gabarit" value={formatResourceTemplate(resource.resourceTemplate)} />
          <Fact label="Format" value={formatActivityFormat(resource.activityFormat)} />
          <Fact label="Modalite" value={formatClassroomMode(resource.classroomMode)} />
          <Fact label="Statut technique" value={formatStatus(resource.status)} />
          <Fact label="Reutilisation" value={formatReuseReadiness(resource.reuseReadiness)} />
          <Fact label="Licence" value={formatLicense(resource.license)} />
          <Fact label="Source" value={formatSourceType(resource.sourceType)} />
          <Fact
            label="Preparation enseignant"
            value={formatTeacherPreparation(resource.teacherPreparationLevel)}
          />
          <Fact label="Auteurs" value={resource.authors.join(', ')} />
          <Fact label="Creee le" value={formatDate(resource.createdAt)} />
          <Fact label="Mise a jour le" value={formatDate(resource.updatedAt)} />
        </div>
      </section>

      <section className="detail-section">
        <h2>Normalisation et publication</h2>
        <div className="detail-grid">
          <Fact
            label="Format source"
            value={resource.normalizationMetadata?.originalFormat ?? 'Non renseigne'}
          />
          <Fact
            label="Source Markdown"
            value={resource.normalizationMetadata?.originalSourceUrl ?? 'Non renseignee'}
          />
          <Fact
            label="Statut pedagogique"
            value={resource.normalizationMetadata?.normalizationStatus ?? 'Non renseigne'}
          />
          <Fact
            label="Contributeur source"
            value={resource.normalizationMetadata?.submittedBy ?? 'Non renseigne'}
          />
          <Fact label="Notes de contexte" value={resource.visibilityNotes ?? 'Aucune'} />
          <Fact label="Notes de licence" value={resource.licenseNotes ?? 'Aucune'} />
          <Fact
            label="Alerte juridique"
            value={resource.normalizationMetadata?.legalWarning ?? 'Aucune'}
          />
        </div>
      </section>

      <section className="detail-section">
        <h2>Sections extraites</h2>
        <div className="content-grid">
          {sectionOrder.map((sectionKey) => (
            <AtelierSection key={sectionKey} resource={resource} sectionKey={sectionKey} />
          ))}
        </div>
      </section>

      <section className="detail-section">
        <h2>Technologie et IA</h2>
        <div className="content-grid">
          <article className="content-section">
            <h3>Numerique</h3>
            {resource.techMetadata ? (
              <ul>
                <li>Outil numerique: {formatBoolean(resource.techMetadata.usesDigitalTool)}</li>
                <li>Format: {formatDigitalFormat(resource.techMetadata.digitalFormat)}</li>
                <li>Internet requis: {formatBoolean(resource.techMetadata.requiresInternet)}</li>
                <li>Compte requis: {formatBoolean(resource.techMetadata.requiresAccount)}</li>
                <li>
                  Difficulte: {formatTechnicalDifficulty(resource.techMetadata.technicalDifficulty)}
                </li>
                <li>Outils: {resource.techMetadata.digitalTools.join(', ') || 'Aucun'}</li>
                <li>
                  Vie privee: {resource.techMetadata.privacyConsiderations.join(', ') || 'Aucune'}
                </li>
              </ul>
            ) : (
              <p className="muted">Aucune metadonnee numerique.</p>
            )}
          </article>
          <article className="content-section">
            <h3>IA</h3>
            {resource.aiMetadata ? (
              <ul>
                <li>Usage IA: {formatBoolean(resource.aiMetadata.usesAI)}</li>
                <li>Cas d'usage: {formatAiUseCase(resource.aiMetadata.aiUseCase)}</li>
                <li>
                  Assistance: {formatAiAssistanceLevel(resource.aiMetadata.aiAssistanceLevel)}
                </li>
                <li>IA face apprenant: {formatBoolean(resource.aiMetadata.studentFacingAI)}</li>
                <li>
                  Controle enseignant: {formatBoolean(resource.aiMetadata.teacherControlRequired)}
                </li>
                <li>Risques: {resource.aiMetadata.risks.join(', ') || 'Aucun'}</li>
                <li>Garde-fous: {resource.aiMetadata.safeguards.join(', ') || 'Aucun'}</li>
              </ul>
            ) : (
              <p className="muted">Aucune metadonnee IA.</p>
            )}
          </article>
        </div>
      </section>

      <section className="detail-section">
        <h2>Historique, retours et audit</h2>
        <div className="content-grid">
          <article className="content-section">
            <h3>Versions</h3>
            <ul>
              {resource.versions.map((version) => (
                <li key={version.id}>
                  {version.versionNumber} - {version.label} - {formatStatus(version.status)}
                  <br />
                  {version.changelog.join(' ')}
                </li>
              ))}
            </ul>
          </article>
          <article className="content-section">
            <h3>Retours d'usage</h3>
            {resource.usageFeedbacks && resource.usageFeedbacks.length > 0 ? (
              <ul>
                {resource.usageFeedbacks.map((feedback) => (
                  <li key={feedback.id}>
                    {feedback.authorName}: {feedback.whatWorked} Difficultes: {feedback.difficulties}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">Aucun retour d'usage.</p>
            )}
          </article>
          <article className="content-section">
            <h3>Propositions</h3>
            {resource.contributionSuggestions && resource.contributionSuggestions.length > 0 ? (
              <ul>
                {resource.contributionSuggestions.map((suggestion) => (
                  <li key={suggestion.id}>
                    {formatContributionType(suggestion.type)} -{' '}
                    {formatContributionStatus(suggestion.status)}: {suggestion.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">Aucune proposition.</p>
            )}
          </article>
          <article className="content-section">
            <h3>Audit simule</h3>
            {resource.reviewSummary ? (
              <ul>
                <li>Clarite: {resource.reviewSummary.clarityScore}/5</li>
                <li>Reutilisation: {resource.reviewSummary.reusabilityScore}/5</li>
                <li>Progression: {resource.reviewSummary.progressionScore}/5</li>
                <li>Forces: {resource.reviewSummary.strengths.join(', ')}</li>
                <li>Points a surveiller: {resource.reviewSummary.issues.join(', ')}</li>
              </ul>
            ) : (
              <p className="muted">Aucun audit.</p>
            )}
          </article>
        </div>
      </section>
    </main>
  )
}

function AtelierSection({
  resource,
  sectionKey,
}: {
  resource: Resource
  sectionKey: ResourceSectionKey
}) {
  const section = resource.content[sectionKey]

  if (!section) {
    return (
      <article className="content-section content-section-empty">
        <h3>{formatSectionLabel(sectionKey)}</h3>
        <p className="muted">Section absente.</p>
      </article>
    )
  }

  return (
    <article className="content-section">
      <h3>{section.title}</h3>
      <ul>
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="fact">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}
