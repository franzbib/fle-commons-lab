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
  formatSkill,
  formatSourceType,
  formatStatus,
  formatTeacherPreparation,
  formatTechnicalDifficulty,
} from '../utils/formatters'
import { Badge } from './Badge'
import { CollapsibleSection } from './CollapsibleSection'
import { ResourceCopyActions } from './ResourceCopyActions'

type ResourceDetailProps = {
  resource: Resource
}

const primaryContentSections: ResourceSectionKey[] = [
  'objectives',
  'prerequisites',
  'lessonPlan',
  'studentInstructions',
  'teacherGuide',
  'answerKey',
  'variants',
]

const secondaryContentSections: ResourceSectionKey[] = [
  'usageNotes',
  'techNotes',
  'aiNotes',
  'versionHistory',
]

export function ResourceDetail({ resource }: ResourceDetailProps) {
  const firstObjective = resource.content.objectives?.items[0] ?? 'Objectif à consulter'
  const materialNeeded = resource.materialNeeded.join(', ') || 'Aucun matériel spécifique'

  return (
    <article className="resource-detail">
      <header className="detail-hero">
        <div className="card-topline">
          <Badge tone="level">{resource.level}</Badge>
          <Badge>{formatResourceType(resource.resourceType)}</Badge>
          <Badge>{formatResourceTemplate(resource.resourceTemplate)}</Badge>
          <Badge tone="status">{formatStatus(resource.status)}</Badge>
          {resource.techMetadata?.usesDigitalTool ? <Badge tone="tech">Numérique</Badge> : null}
          {resource.aiMetadata?.usesAI ? <Badge tone="ai">IA documentée</Badge> : null}
        </div>
        <h1>{resource.title}</h1>
        <p>{resource.summary}</p>
        {resource.license === 'a_verifier' ? (
          <p className="warning-note">
            Licence à vérifier avant toute publication ou diffusion publique.
          </p>
        ) : null}
      </header>

      <section className="detail-section quick-start" aria-label="Prise en main rapide">
        <h2>Prise en main rapide</h2>
        <div className="detail-grid quick-facts">
          <Fact label="Niveau" value={resource.level} />
          <Fact label="Durée" value={`${resource.durationMinutes} min`} />
          <Fact label="Compétence" value={formatSkill(resource.mainSkill)} />
          <Fact label="Type" value={formatResourceType(resource.resourceType)} />
          <Fact label="Statut" value={formatStatus(resource.status)} />
          <Fact label="Objectif" value={firstObjective} />
          <Fact label="Modalité" value={formatClassroomMode(resource.classroomMode)} />
          <Fact label="Matériel" value={materialNeeded} />
        </div>
      </section>

      <ResourceCopyActions resource={resource} />

      <section className="detail-section">
        <h2>Contenu pédagogique principal</h2>
        <ContentSections resource={resource} sectionKeys={primaryContentSections} />
      </section>

      <CollapsibleSection title="Métadonnées complètes">
        <div className="detail-grid">
          <Fact label="Catégorie durée" value={formatDurationCategory(resource.durationCategory)} />
          <Fact label="Thème" value={resource.theme} />
          <Fact label="Auteurs" value={resource.authors.join(', ')} />
          <Fact label="Source" value={formatSourceType(resource.sourceType)} />
          <Fact
            label="Préparation enseignant"
            value={formatTeacherPreparation(resource.teacherPreparationLevel)}
          />
          <Fact label="Réutilisabilité" value={formatReuseReadiness(resource.reuseReadiness)} />
          <Fact label="Créée le" value={formatDate(resource.createdAt)} />
          <Fact label="Mise à jour le" value={formatDate(resource.updatedAt)} />
          <Fact
            label="Compétences secondaires"
            value={resource.secondarySkills.map(formatSkill).join(', ') || 'Aucune'}
          />
          <Fact label="Format d'activité" value={formatActivityFormat(resource.activityFormat)} />
          <Fact label="Gabarit" value={formatResourceTemplate(resource.resourceTemplate)} />
          <Fact label="Identifiant" value={resource.id} />
        </div>
        <div className="metadata-tags">
          <h3>Thèmes lexicaux et points de langue</h3>
          <div className="tag-list">
            {[...resource.lexicalThemes, ...resource.grammarPoints].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="metadata-tags">
          <h3>Tags</h3>
          <div className="tag-list">
            {resource.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="IA et numérique">
        <section className="nested-detail-block">
          <h3>Classification technologie</h3>
          {resource.techMetadata ? (
            <>
              <div className="detail-grid">
                <Fact
                  label="Outil numérique"
                  value={formatBoolean(resource.techMetadata.usesDigitalTool)}
                />
                <Fact
                  label="Format numérique"
                  value={formatDigitalFormat(resource.techMetadata.digitalFormat)}
                />
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
                <Fact
                  label="Appareils"
                  value={resource.techMetadata.deviceRequirements.join(', ') || 'Aucun'}
                />
                <Fact
                  label="Vie privée"
                  value={resource.techMetadata.privacyConsiderations.join(', ') || 'Aucune'}
                />
              </div>
            </>
          ) : (
            <p className="muted">Aucune métadonnée numérique spécifique.</p>
          )}
        </section>

        <section className="nested-detail-block">
          <h3>Classification IA</h3>
          {resource.aiMetadata ? (
            <>
              <div className="detail-grid">
                <Fact label="Usage IA" value={formatBoolean(resource.aiMetadata.usesAI)} />
                <Fact label="Cas d'usage" value={formatAiUseCase(resource.aiMetadata.aiUseCase)} />
                <Fact
                  label="Niveau d'assistance"
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
                <Fact label="Risques" value={resource.aiMetadata.risks.join(', ') || 'Aucun'} />
                <Fact
                  label="Garde-fous"
                  value={resource.aiMetadata.safeguards.join(', ') || 'Aucun'}
                />
              </div>
              <p className="non-persistent-note">
                Les usages IA sont documentés pour préparer de futures pratiques. Aucun appel IA
                n'est activé dans cette v0.
              </p>
            </>
          ) : (
            <p className="muted">Aucun usage IA prévu pour cette ressource.</p>
          )}
        </section>
      </CollapsibleSection>

      <CollapsibleSection title="Licence et accès">
        <div className="detail-grid">
          <Fact label="Licence" value={formatLicense(resource.license)} />
          <Fact label="Accès futur" value={resource.accessLevel ?? 'Non renseigné'} />
          <Fact label="Soutenabilité" value={resource.monetizationStatus ?? 'Non renseignée'} />
          <Fact label="Notes d'accès" value={resource.visibilityNotes ?? 'Aucune'} />
          <Fact label="Notes de licence" value={resource.licenseNotes ?? 'Aucune'} />
        </div>
        {resource.license === 'a_verifier' ? (
          <p className="warning-note">
            Cette ressource ne doit pas être publiée largement avant vérification de la licence.
          </p>
        ) : null}
      </CollapsibleSection>

      <CollapsibleSection title="Notes complémentaires">
        <ContentSections resource={resource} sectionKeys={secondaryContentSections} />
      </CollapsibleSection>

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

      <CollapsibleSection title="Retours d'usage">
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
          <p className="muted">Aucun retour d'usage simulé pour cette ressource.</p>
        )}
        <div className="non-persistent-note">
          <strong>Pourquoi les retours d'usage sont importants ?</strong>
          <p>
            Un support mutualisable gagne en valeur quand il garde la trace de ses essais en
            classe: durée réelle, niveau du groupe, points d'appui, difficultés et adaptations.
            Ces retours restent simulés dans la v0.2.
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Propositions d'amélioration">
        {resource.contributionSuggestions && resource.contributionSuggestions.length > 0 ? (
          <div className="feedback-list">
            {resource.contributionSuggestions.map((suggestion) => (
              <article key={suggestion.id} className="feedback-card">
                <div className="card-topline">
                  <Badge>{formatContributionType(suggestion.type)}</Badge>
                  <Badge tone="status">{formatContributionStatus(suggestion.status)}</Badge>
                </div>
                <h3>{suggestion.title}</h3>
                <p>{suggestion.description}</p>
                <p className="muted">
                  Proposé par {suggestion.proposedBy} le {formatDate(suggestion.createdAt)}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="muted">
            Aucune proposition simulée n'est associée à cette ressource pour l'instant.
          </p>
        )}
        <div className="non-persistent-note action-note">
          <div>
            <strong>Proposer une amélioration</strong>
            <p>
              Fonction non persistante dans la v0.2. Cette zone prépare le futur workflow
              communautaire, sans formulaire serveur ni authentification.
            </p>
          </div>
          <button type="button" className="secondary-button" disabled>
            Proposer une amélioration
          </button>
        </div>
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
            <Fact
              label="Préparation numérique"
              value={`${resource.reviewSummary.digitalReadinessScore}/5`}
            />
            <Fact label="Préparation IA" value={`${resource.reviewSummary.aiReadinessScore}/5`} />
          </div>
          <h3>Forces</h3>
          <ul>
            {resource.reviewSummary.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Points à surveiller</h3>
          <ul>
            {resource.reviewSummary.issues.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Recommandations</h3>
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

function ContentSections({
  resource,
  sectionKeys,
}: {
  resource: Resource
  sectionKeys: ResourceSectionKey[]
}) {
  const availableSections = sectionKeys
    .map((sectionKey) => resource.content[sectionKey])
    .filter((section) => section !== undefined)

  if (availableSections.length === 0) {
    return <p className="muted">Aucune section renseignée.</p>
  }

  return (
    <div className="content-grid">
      {availableSections.map((section) => (
        <section key={section.title} className="content-section">
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
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
