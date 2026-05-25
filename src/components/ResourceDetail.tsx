import type { Resource, ResourceSectionKey } from '../types/resource'
import {
  formatClassroomMode,
  formatLicense,
  formatResourceTemplate,
  formatResourceType,
  formatSkill,
  formatStatus,
} from '../utils/formatters'
import { Badge } from './Badge'
import { ResourceDetailTabs, type ResourceDetailTab } from './ResourceDetailTabs'
import { ResourceViewActions } from './ResourceViewActions'
import { TeacherPreparationAlerts } from './TeacherPreparationAlerts'
import { formatLearnerViewForCopy, formatTeacherViewForCopy } from '../utils/resourceText'

type ResourceDetailProps = {
  resource: Resource
}

const learnerContentSections: ResourceSectionKey[] = [
  'objectives',
  'prerequisites',
  'studentInstructions',
]

const teacherContentSections: ResourceSectionKey[] = [
  'lessonPlan',
  'teacherGuide',
  'answerKey',
  'variants',
  'usageNotes',
]

export function ResourceDetail({ resource }: ResourceDetailProps) {
  const firstObjective = resource.content.objectives?.items[0] ?? 'Objectif à consulter'
  const materialNeeded = resource.materialNeeded.join(', ') || 'Aucun matériel spécifique'
  const tabs: ResourceDetailTab[] = [
    {
      id: 'overview',
      label: "Vue d'ensemble",
      description:
        "Aide à décider rapidement si la ressource convient avant d'ouvrir le contenu complet.",
      content: (
        <OverviewTab
          resource={resource}
          firstObjective={firstObjective}
          materialNeeded={materialNeeded}
        />
      ),
    },
    {
      id: 'learner',
      label: 'Contenu apprenant',
      description:
        'Espace projetable ou distribuable : les corrigés, notes professeur et audits sont masqués.',
      content: <LearnerTab resource={resource} />,
    },
    {
      id: 'teacher',
      label: 'Corrigés & Notes prof',
      description:
        "Espace enseignant : animation, corrigés, variantes et retours d'usage.",
      content: <TeacherTab resource={resource} />,
    },
  ]

  return (
    <article className="resource-detail">
      <header className="detail-hero">
        <div className="card-topline">
          <Badge tone="level">{resource.level}</Badge>
          <Badge>{formatResourceType(resource.resourceType)}</Badge>
          <Badge>{formatResourceTemplate(resource.resourceTemplate)}</Badge>
          <Badge tone="status">{formatPublicStatus(resource)}</Badge>
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
        <a className="atelier-link" href={`#/atelier/${resource.id}`}>
          Vue atelier
        </a>
      </header>

      <ResourceDetailTabs tabs={tabs} defaultTabId="overview" />
    </article>
  )
}

function OverviewTab({
  resource,
  firstObjective,
  materialNeeded,
}: {
  resource: Resource
  firstObjective: string
  materialNeeded: string
}) {
  return (
    <>
      <section className="detail-section quick-start" aria-label="Prise en main rapide">
        <h2>Prise en main rapide</h2>
        <div className="detail-grid quick-facts">
          <Fact label="Niveau" value={resource.level} />
          <Fact label="Durée" value={`${resource.durationMinutes} min`} />
          <Fact label="Compétence" value={formatSkill(resource.mainSkill)} />
          <Fact label="Type" value={formatResourceType(resource.resourceType)} />
          <Fact label="Statut" value={formatPublicStatus(resource)} />
          <Fact label="Objectif" value={firstObjective} />
          <Fact label="Modalité" value={formatClassroomMode(resource.classroomMode)} />
          <Fact label="Matériel" value={materialNeeded} />
        </div>
      </section>

      <TeacherPreparationAlerts resource={resource} variant="summary" />

      <section className="detail-section">
        <h2>Aperçu du déroulé</h2>
        <LessonPlanPreview resource={resource} />
      </section>

      <section className="detail-section public-use-summary">
        <h2>Usage public</h2>
        <div className="detail-grid quick-facts">
          <Fact label="Thème" value={resource.theme} />
          <Fact
            label="Compétences associées"
            value={resource.secondarySkills.map(formatSkill).join(', ') || 'Aucune'}
          />
          <Fact label="Licence" value={formatLicense(resource.license)} />
          <Fact label="Documents" value={describeAvailableDocuments(resource)} />
        </div>
        <p className="muted">
          Les métadonnées complètes, l'historique, l'audit et les notes de normalisation sont
          regroupés dans la vue atelier.
        </p>
      </section>
    </>
  )
}

function LearnerTab({ resource }: { resource: Resource }) {
  return (
    <>
      <div className="learner-mode-note">
        Mode projection / apprenant : les corrigés, notes professeur, retours d'usage et audits
        sont masqués dans cet onglet.
      </div>

      <ResourceViewActions
        copyLabel="Copier la fiche étudiant"
        copyText={formatLearnerViewForCopy(resource)}
        printLabel="Imprimer la fiche étudiant"
      />

      <section className="detail-section learner-content-section document-view document-view-learner">
        <h2>Fiche étudiant</h2>
        <p className="document-view-intro">
          Document à projeter, distribuer ou copier pour les apprenants. Les réponses et les
          notes professeur n'apparaissent pas ici.
        </p>
        <ContentSections
          resource={resource}
          sectionKeys={learnerContentSections}
          variant="learner"
        />
      </section>
    </>
  )
}

function TeacherTab({ resource }: { resource: Resource }) {
  return (
    <>
      <ResourceViewActions
        copyLabel="Copier le guide prof + corrigé"
        copyText={formatTeacherViewForCopy(resource)}
        printLabel="Imprimer le guide prof + corrigé"
      />

      <TeacherPreparationAlerts resource={resource} />

      <section className="detail-section document-view document-view-teacher">
        <h2>Guide professeur, corrigé et variantes</h2>
        <p className="document-view-intro">
          Espace réservé à l'enseignant : animation, corrigés, critères, variantes et retours
          d'usage. Cette partie ne doit pas être projetée comme fiche apprenant.
        </p>
        <ContentSections
          resource={resource}
          sectionKeys={teacherContentSections}
          variant="teacher"
        />
      </section>
    </>
  )
}

function LessonPlanPreview({ resource }: { resource: Resource }) {
  const lessonPlanItems = resource.content.lessonPlan?.items.slice(0, 3) ?? []

  if (lessonPlanItems.length === 0) {
    return <p className="muted">Aucun aperçu du déroulé n'est renseigné.</p>
  }

  return (
    <ol className="lesson-plan-preview">
      {lessonPlanItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  )
}

function ContentSections({
  resource,
  sectionKeys,
  variant = 'default',
}: {
  resource: Resource
  sectionKeys: ResourceSectionKey[]
  variant?: 'default' | 'learner' | 'teacher'
}) {
  const availableSections = sectionKeys.flatMap((sectionKey) => {
    const section = resource.content[sectionKey]

    return section ? [{ sectionKey, section }] : []
  })

  if (availableSections.length === 0) {
    return <p className="muted">Aucune section renseignée.</p>
  }

  return (
    <div className={`content-grid document-grid document-grid-${variant}`}>
      {availableSections.map(({ sectionKey, section }) => (
        <section
          key={section.title}
          className={`content-section document-section document-section-${variant} document-section-${sectionKey}`}
        >
          <span className="document-section-label">{formatSectionAudience(sectionKey)}</span>
          <h3>{section.title}</h3>
          <ul className="document-list">
            {section.items.filter(Boolean).map((item) => (
              <DocumentItem key={item} item={item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

function DocumentItem({ item }: { item: string }) {
  const lines = item
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
  const isSubheading = lines.length === 1 && looksLikeDocumentSubheading(item)

  if (isSubheading) {
    return <li className="document-subheading">{item}</li>
  }

  if (lines.length > 1) {
    return (
      <li className="document-item document-item-multiline">
        {lines.map((line) => (
          <span
            key={line}
            className={looksLikeDocumentSubheading(line) ? 'document-line-heading' : 'document-line'}
          >
            {line}
          </span>
        ))}
      </li>
    )
  }

  return <li className="document-item">{item}</li>
}

function looksLikeDocumentSubheading(item: string) {
  const trimmed = item.trim()
  const hasEditorialMarkers = /^—\s+.{1,80}\s+—$/.test(trimmed) || /^-\s+.{1,80}\s+-$/.test(trimmed)
  const knownHeadings = [
    'situation',
    'verbes utiles',
    'intention pedagogique',
    'intention pédagogique',
    'public conseille',
    'public conseillé',
    'duree et formats possibles',
    'durée et formats possibles',
    'points de vigilance',
    'gestion possible en classe',
    'conseils de correction',
    'pronoms dans le recit:',
    'pronoms dans le récit:',
    'justifications utiles pour les cas sensibles:',
    'reponses ouvertes. verifier:',
    'réponses ouvertes. vérifier:',
    'exemple acceptable:',
    'notes de normalisation',
    'a completer apres test en classe:',
    'à compléter après test en classe:',
  ]

  return (
    /^[A-F]\.\s/.test(trimmed) ||
    hasEditorialMarkers ||
    knownHeadings.includes(trimmed.toLowerCase()) ||
    (trimmed.length <= 52 && /:$/.test(trimmed))
  )
}

function formatSectionAudience(sectionKey: ResourceSectionKey) {
  if (['objectives', 'prerequisites', 'studentInstructions'].includes(sectionKey)) {
    return 'Fiche étudiant'
  }

  if (sectionKey === 'answerKey') {
    return 'Corrigé'
  }

  return 'Professeur'
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="fact">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  )
}

function describeAvailableDocuments(resource: Resource) {
  const available = [
    resource.content.studentInstructions ? 'fiche étudiant' : null,
    resource.content.teacherGuide ? 'guide professeur' : null,
    resource.content.answerKey ? 'corrigé' : null,
  ].filter(Boolean)

  return available.length > 0 ? available.join(', ') : 'Sections à compléter'
}

function formatPublicStatus(resource: Resource) {
  if (
    resource.status === 'brouillon' &&
    resource.normalizationMetadata?.normalizationStatus === 'en_normalisation'
  ) {
    return 'En normalisation'
  }

  return formatStatus(resource.status)
}
