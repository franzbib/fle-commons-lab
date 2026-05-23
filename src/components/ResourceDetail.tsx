import type { Resource } from '../types/resource'
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
  formatSkill,
  formatSourceType,
  formatStatus,
  formatTeacherPreparation,
  formatTechnicalDifficulty,
  sectionOrder,
} from '../utils/formatters'
import { Badge } from './Badge'
import { CollapsibleSection } from './CollapsibleSection'
type ResourceDetailProps = {
  resource: Resource
}

export function ResourceDetail({ resource }: ResourceDetailProps) {
  return (
    <article className="resource-detail">
      <header className="detail-hero">
        <div className="card-topline">
          <Badge tone="level">{resource.level}</Badge>
          <Badge>{formatResourceType(resource.resourceType)}</Badge>
          <Badge>{formatResourceTemplate(resource.resourceTemplate)}</Badge>
          <Badge tone="status">{formatStatus(resource.status)}</Badge>
          {resource.techMetadata?.usesDigitalTool ? <Badge>Numérique</Badge> : null}
          {resource.aiMetadata?.usesAI ? <Badge>IA documentée</Badge> : null}
        </div>
        <h1>{resource.title}</h1>
        <p>{resource.summary}</p>
        {resource.license === 'a_verifier' ? (
          <p className="warning-note">
            Licence à vérifier avant toute publication ou diffusion publique.
          </p>
        ) : null}
      </header>

      <section className="detail-section">
        <h2>Prise en main rapide</h2>
        <div className="detail-grid">
          <Fact label="Niveau" value={resource.level} />
          <Fact label="Durée" value={`${resource.durationMinutes} min`} />
          <Fact label="Compétence principale" value={formatSkill(resource.mainSkill)} />
          <Fact label="Modalité" value={formatClassroomMode(resource.classroomMode)} />
          <Fact label="Format" value={formatActivityFormat(resource.activityFormat)} />
        </div>
      </section>

      <CollapsibleSection title="Métadonnées complètes et classification">
        <section className="detail-grid" style={{ marginBottom: '14px' }}>
          <Fact label="Thème" value={resource.theme} />
          <Fact label="Catégorie durée" value={formatDurationCategory(resource.durationCategory)} />
          <Fact label="Licence" value={formatLicense(resource.license)} />
          <Fact label="Auteurs" value={resource.authors.join(', ')} />
          <Fact label="Source" value={formatSourceType(resource.sourceType)} />
          <Fact label="Préparation" value={formatTeacherPreparation(resource.teacherPreparationLevel)} />
          <Fact label="Réutilisabilité" value={formatReuseReadiness(resource.reuseReadiness)} />
          <Fact label="Créée le" value={formatDate(resource.createdAt)} />
          <Fact
            label="Compétences secondaires"
            value={resource.secondarySkills.map(formatSkill).join(', ') || 'Aucune'}
          />
        </section>
        <div className="tag-list">
          {[...resource.lexicalThemes, ...resource.grammarPoints].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Classification technologie">
        {resource.techMetadata ? (
          <div className="detail-grid">
            <Fact label="Outil numérique" value={formatBoolean(resource.techMetadata.usesDigitalTool)} />
            <Fact label="Format numérique" value={formatDigitalFormat(resource.techMetadata.digitalFormat)} />
            <Fact label="Internet requis" value={formatBoolean(resource.techMetadata.requiresInternet)} />
            <Fact label="Compte requis" value={formatBoolean(resource.techMetadata.requiresAccount)} />
            <Fact
              label="Difficulté technique"
              value={formatTechnicalDifficulty(resource.techMetadata.technicalDifficulty)}
            />
            <Fact
              label="Outils suggérés"
              value={resource.techMetadata.digitalTools.join(', ') || 'Aucun'}
            />
          </div>
        ) : (
          <p className="muted">Aucune métadonnée numérique spécifique.</p>
        )}
      </CollapsibleSection>

      <CollapsibleSection title="Classification IA">
        {resource.aiMetadata ? (
          <>
            <div className="detail-grid">
              <Fact label="Usage IA" value={formatBoolean(resource.aiMetadata.usesAI)} />
              <Fact label="Cas d’usage" value={formatAiUseCase(resource.aiMetadata.aiUseCase)} />
              <Fact
                label="Niveau d’assistance"
                value={formatAiAssistanceLevel(resource.aiMetadata.aiAssistanceLevel)}
              />
              <Fact
                label="IA face étudiant"
                value={formatBoolean(resource.aiMetadata.studentFacingAI)}
              />
              <Fact
                label="Contrôle enseignant requis"
                value={formatBoolean(resource.aiMetadata.teacherControlRequired)}
              />
              <Fact
                label="Outils suggérés"
                value={resource.aiMetadata.suggestedTools.join(', ') || 'Aucun'}
              />
            </div>
            <p className="non-persistent-note" style={{ marginTop: '14px' }}>
              Les usages IA sont documentés pour préparer de futures pratiques. Aucun appel IA
              n’est activé dans cette v0.
            </p>
          </>
        ) : (
          <p className="muted">Aucun usage IA prévu pour cette ressource.</p>
        )}
      </CollapsibleSection>

      <CollapsibleSection title="Tags (Mots-clés)">
        <div className="tag-list">
          {resource.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </CollapsibleSection>

      <section className="detail-section">
        <h2>Contenu pédagogique</h2>
        <div className="content-grid">
          {sectionOrder.map((sectionKey) => {
            const section = resource.content[sectionKey]

            if (!section) {
              return null
            }

            return (
              <section key={sectionKey} className="content-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </section>

      <CollapsibleSection title="Versions simulées">
        <ol className="timeline">
          {resource.versions.map((version) => (
            <li key={version.id}>
              <strong>
                {version.versionNumber} · {version.label}
              </strong>
              <span>
                {formatDate(version.createdAt)} · {version.createdBy} ·{' '}
                {formatStatus(version.status)}
              </span>
              <ul>
                {version.changelog.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </CollapsibleSection>

      <CollapsibleSection title="Retours d’usage">
        {resource.usageFeedbacks && resource.usageFeedbacks.length > 0 ? (
          <div className="feedback-list">
            {resource.usageFeedbacks.map((feedback) => (
              <article key={feedback.id} className="feedback-card">
                <h3 style={{ margin: 0, fontSize: '1rem' }}>{feedback.authorName}</h3>
                <p className="muted" style={{ marginBottom: '8px' }}>
                  {feedback.context} · {feedback.groupLevel} · {feedback.actualDurationMinutes} min
                </p>
                <p>
                  <strong>Ce qui a fonctionné:</strong> {feedback.whatWorked}
                </p>
                <p>
                  <strong>Difficultés:</strong> {feedback.difficulties}
                </p>
                <p>
                  <strong>Suggestion:</strong> {feedback.suggestedChanges}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="muted">Aucun retour d’usage simulé pour cette ressource.</p>
        )}
      </CollapsibleSection>

      <CollapsibleSection title="Propositions d’amélioration">
        {resource.contributionSuggestions && resource.contributionSuggestions.length > 0 ? (
          <div className="feedback-list">
            {resource.contributionSuggestions.map((suggestion) => (
              <article key={suggestion.id} className="feedback-card">
                <div className="card-topline" style={{ marginBottom: '8px' }}>
                  <Badge>{formatContributionType(suggestion.type)}</Badge>
                  <Badge tone="status">{formatContributionStatus(suggestion.status)}</Badge>
                </div>
                <h3 style={{ margin: 0, fontSize: '1rem' }}>{suggestion.title}</h3>
                <p>{suggestion.description}</p>
                <p className="muted" style={{ marginTop: '8px' }}>
                  Proposé par {suggestion.proposedBy} le {formatDate(suggestion.createdAt)}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="muted">
            Aucune proposition n'est associée à cette ressource pour l'instant.
          </p>
        )}
      </CollapsibleSection>

      {resource.reviewSummary ? (
        <CollapsibleSection title="Audit simulé">
          <div className="score-grid">
            <Fact label="Clarté" value={`${resource.reviewSummary.clarityScore}/5`} />
            <Fact label="Réutilisation" value={`${resource.reviewSummary.reusabilityScore}/5`} />
            <Fact label="Progression" value={`${resource.reviewSummary.progressionScore}/5`} />
            <Fact
              label="Fiabilité linguistique"
              value={`${resource.reviewSummary.languageReliabilityScore}/5`}
            />
            <Fact label="Préparation numérique" value={`${resource.reviewSummary.digitalReadinessScore}/5`} />
            <Fact label="Préparation IA" value={`${resource.reviewSummary.aiReadinessScore}/5`} />
          </div>
          <h3 style={{ fontSize: '1rem', marginTop: '16px' }}>Forces</h3>
          <ul>
            {resource.reviewSummary.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 style={{ fontSize: '1rem', marginTop: '16px' }}>Recommandations</h3>
          <ul>
            {resource.reviewSummary.recommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CollapsibleSection>
      ) : null}
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
