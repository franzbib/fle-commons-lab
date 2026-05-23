import type { Resource } from '../types/resource'
import {
  formatResourceTemplate,
  formatResourceType,
  formatSkill,
  formatStatus,
} from '../utils/formatters'
import { Badge } from './Badge'
import { CompactTagList } from './CompactTagList'

type ResourceCardProps = {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <div className="resource-serial">#{resource.id}</div>
      <div className="card-topline">
        <Badge tone="level">{resource.level}</Badge>
        <Badge>{formatResourceType(resource.resourceType)}</Badge>
        <Badge tone="status">{formatStatus(resource.status)}</Badge>
        {resource.normalizationMetadata?.normalizationStatus === 'en_analyse' ? (
          <Badge tone="status">Brouillon / Brut</Badge>
        ) : null}
      </div>
      <h2>
        <a href={`#/resources/${resource.id}`}>{resource.title}</a>
      </h2>
      <p className="resource-summary">{resource.summary}</p>
      <dl className="card-facts">
        <div>
          <dt>Compétence</dt>
          <dd>{formatSkill(resource.mainSkill)}</dd>
        </div>
        <div>
          <dt>Thème</dt>
          <dd>{resource.theme}</dd>
        </div>
        <div>
          <dt>Durée</dt>
          <dd>{resource.durationMinutes} min</dd>
        </div>
      </dl>
      <div className="resource-card-footer">
        <CompactTagList tags={resource.tags} />
        <div className="resource-indicators" aria-label="Indicateurs">
          <span>{formatResourceTemplate(resource.resourceTemplate)}</span>
          {resource.techMetadata?.usesDigitalTool ? <span>NUM</span> : null}
          {resource.aiMetadata?.usesAI ? <span>IA</span> : null}
          {resource.license === 'a_verifier' ? <span>LIC?</span> : null}
          {resource.accessLevel ? <span>ACCÈS</span> : null}
        </div>
      </div>
    </article>
  )
}
