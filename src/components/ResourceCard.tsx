import type { Resource } from '../types/resource'
import {
  formatResourceTemplate,
  formatResourceType,
  formatSkill,
  formatStatus,
} from '../utils/formatters'
import { Badge } from './Badge'

type ResourceCardProps = {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <div className="card-topline">
        <Badge tone="level">{resource.level}</Badge>
        <Badge>{formatResourceType(resource.resourceType)}</Badge>
        <Badge>{formatResourceTemplate(resource.resourceTemplate)}</Badge>
        <Badge tone="status">{formatStatus(resource.status)}</Badge>
        {resource.techMetadata?.usesDigitalTool ? <Badge>Numérique</Badge> : null}
        {resource.aiMetadata?.usesAI ? <Badge>IA documentée</Badge> : null}
      </div>
      <h2>
        <a href={`#/resources/${resource.id}`}>{resource.title}</a>
      </h2>
      <p>{resource.summary}</p>
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
      <div className="tag-list" aria-label="Tags">
        {resource.tags.slice(0, 5).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}
