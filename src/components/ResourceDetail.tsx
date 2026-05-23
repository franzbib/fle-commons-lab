import type { Resource } from '../types/resource'
import {
  formatActivityFormat,
  formatAiAssistanceLevel,
  formatAiUseCase,
  formatBoolean,
  formatClassroomMode,
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

      <section className="detail-grid" aria-label="Métadonnées générales">
        <Fact label="Durée" value={`${resource.durationMinutes} min`} />
        <Fact label="Catégorie durée" value={formatDurationCategory(resource.durationCategory)} />
        <Fact label="Thème" value={resource.theme} />
        <Fact label="Licence" value={formatLicense(resource.license)} />
        <Fact label="Auteurs" value={resource.authors.join(', ')} />
        <Fact label="Source" value={formatSourceType(resource.sourceType)} />
        <Fact label="Préparation enseignant" value={formatTeacherPreparation(resource.teacherPreparationLevel)} />
        <Fact label="Réutilisabilité" value={formatReuseReadiness(resource.reuseReadiness)} />
        <Fact label="Créée le" value={formatDate(resource.createdAt)} />
        <Fact label="Mise à jour le" value={formatDate(resource.updatedAt)} />
      </section>

      <section className="detail-section">
        <h2>Classification pédagogique</h2>
        <div className="detail-grid">
          <Fact label="Compétence principale" value={formatSkill(resource.mainSkill)} />
          <Fact
            label="Compétences secondaires"
            value={resource.secondarySkills.map(formatSkill).join(', ') || 'Aucune'}
          />
          <Fact label="Format d’activité" value={formatActivityFormat(resource.activityFormat)} />
          <Fact label="Modalité" value={formatClassroomMode(resource.classroomMode)} />
        </div>
        <div className="tag-list">
          {[...resource.lexicalThemes, ...resource.grammarPoints].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <h2>Classification technologie</h2>
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
      </section>

      <section className="detail-section">
        <h2>Classification IA</h2>
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
            <p className="non-persistent-note">
              Les usages IA sont documentés pour préparer de futures pratiques. Aucun appel IA
              n’est activé dans cette v0.
            </p>
          </>
        ) : (
          <p className="muted">Aucun usage IA prévu pour cette ressource.</p>
        )}
      </section>

      <section className="detail-section">
        <h2>Tags</h2>
        <div className="tag-list">
          {resource.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

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

      <section className="detail-section">
        <h2>Versions simulées</h2>
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
      </section>

      <section className="detail-section">
        <h2>Retours d’usage</h2>
        {resource.usageFeedbacks && resource.usageFeedbacks.length > 0 ? (
          <div className="feedback-list">
            {resource.usageFeedbacks.map((feedback) => (
              <article key={feedback.id} className="feedback-card">
                <h3>{feedback.authorName}</h3>
                <p className="muted">
                  {feedback.context} · {feedback.groupLevel} · {feedback.actualDurationMinutes}{' '}
                  min
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
        <div className="non-persistent-note">
          Zone illustrative: aucun retour n’est enregistré dans la v0.
        </div>
      </section>

      {resource.reviewSummary ? (
        <section className="detail-section">
          <h2>Audit simulé</h2>
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
          <h3>Forces</h3>
          <ul>
            {resource.reviewSummary.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Recommandations</h3>
          <ul>
            {resource.reviewSummary.recommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
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
