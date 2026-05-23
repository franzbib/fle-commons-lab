import {
  cefrLevels,
  editorialStatuses,
  resourceSkills,
  resourceTemplates,
  resourceTypes,
} from '../types/resource'
import {
  formatResourceTemplate,
  formatResourceType,
  formatSkill,
  formatStatus,
} from '../utils/formatters'
import type { ResourceFiltersValue } from '../utils/filters'

type ResourceFiltersProps = {
  filters: ResourceFiltersValue
  themes: string[]
  onChange: (filters: ResourceFiltersValue) => void
  onReset: () => void
}

export function ResourceFilters({
  filters,
  themes,
  onChange,
  onReset,
}: ResourceFiltersProps) {
  return (
    <section className="filters-panel" aria-label="Filtres de bibliothèque">
      <label className="field field-wide">
        <span>Recherche</span>
        <input
          type="search"
          value={filters.search}
          placeholder="Titre, résumé, tag, thème..."
          onChange={(event) => onChange({ ...filters, search: event.target.value })}
        />
      </label>
      <label className="field">
        <span>Niveau</span>
        <select
          value={filters.level}
          onChange={(event) =>
            onChange({ ...filters, level: event.target.value as ResourceFiltersValue['level'] })
          }
        >
          <option value="all">Tous</option>
          {cefrLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Compétence principale</span>
        <select
          value={filters.mainSkill}
          onChange={(event) =>
            onChange({
              ...filters,
              mainSkill: event.target.value as ResourceFiltersValue['mainSkill'],
            })
          }
        >
          <option value="all">Toutes</option>
          {resourceSkills.map((skill) => (
            <option key={skill} value={skill}>
              {formatSkill(skill)}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Type</span>
        <select
          value={filters.resourceType}
          onChange={(event) =>
            onChange({
              ...filters,
              resourceType: event.target.value as ResourceFiltersValue['resourceType'],
            })
          }
        >
          <option value="all">Tous</option>
          {resourceTypes.map((type) => (
            <option key={type} value={type}>
              {formatResourceType(type)}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Gabarit</span>
        <select
          value={filters.resourceTemplate}
          onChange={(event) =>
            onChange({
              ...filters,
              resourceTemplate: event.target.value as ResourceFiltersValue['resourceTemplate'],
            })
          }
        >
          <option value="all">Tous</option>
          {resourceTemplates.map((template) => (
            <option key={template} value={template}>
              {formatResourceTemplate(template)}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Thème</span>
        <select
          value={filters.theme}
          onChange={(event) => onChange({ ...filters, theme: event.target.value })}
        >
          <option value="all">Tous</option>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Statut</span>
        <select
          value={filters.status}
          onChange={(event) =>
            onChange({ ...filters, status: event.target.value as ResourceFiltersValue['status'] })
          }
        >
          <option value="all">Tous</option>
          {editorialStatuses.map((status) => (
            <option key={status} value={status}>
              {formatStatus(status)}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Usage numérique</span>
        <select
          value={filters.usesDigitalTool}
          onChange={(event) =>
            onChange({
              ...filters,
              usesDigitalTool: event.target.value as ResourceFiltersValue['usesDigitalTool'],
            })
          }
        >
          <option value="all">Tous</option>
          <option value="yes">Oui</option>
          <option value="no">Non</option>
        </select>
      </label>
      <label className="field">
        <span>Usage IA</span>
        <select
          value={filters.usesAI}
          onChange={(event) =>
            onChange({ ...filters, usesAI: event.target.value as ResourceFiltersValue['usesAI'] })
          }
        >
          <option value="all">Tous</option>
          <option value="yes">Oui</option>
          <option value="no">Non</option>
        </select>
      </label>
      <button type="button" className="secondary-button" onClick={onReset}>
        Réinitialiser
      </button>
    </section>
  )
}
