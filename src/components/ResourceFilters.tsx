import { accessLevels } from '../types/access'
import {
  cefrLevels,
  editorialStatuses,
  resourceLicenses,
  resourceSkills,
  resourceTemplates,
  resourceTypes,
  sourceTypes,
  teacherPreparationLevels,
  durationCategories,
} from '../types/resource'
import {
  formatLicense,
  formatResourceTemplate,
  formatResourceType,
  formatSkill,
  formatSourceType,
  formatStatus,
  formatTeacherPreparation,
  formatDurationCategory,
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
      <div className="filters-essential">
        <label className="field field-wide">
          <span>Recherche</span>
          <input
            type="search"
            value={filters.search}
            placeholder="Titre, résumé, mot-clé, thème..."
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
          <span>Compétence</span>
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
          <span>Type d'activité</span>
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
          <span>Durée</span>
          <select
            value={filters.durationCategory}
            onChange={(event) =>
              onChange({ ...filters, durationCategory: event.target.value as ResourceFiltersValue['durationCategory'] })
            }
          >
            <option value="all">Toutes</option>
            {durationCategories.map((duration) => (
              <option key={duration} value={duration}>
                {formatDurationCategory(duration)}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Prêt pour la classe</span>
          <select
            value={filters.readyForClass}
            onChange={(event) =>
              onChange({ ...filters, readyForClass: event.target.value as ResourceFiltersValue['readyForClass'] })
            }
          >
            <option value="all">Tous</option>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>
        </label>

        <label className="field">
          <span>Avec corrigé</span>
          <select
            value={filters.hasAnswerKey}
            onChange={(event) =>
              onChange({ ...filters, hasAnswerKey: event.target.value as ResourceFiltersValue['hasAnswerKey'] })
            }
          >
            <option value="all">Tous</option>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>
        </label>

        <label className="field">
          <span>Avec guide prof</span>
          <select
            value={filters.hasTeacherGuide}
            onChange={(event) =>
              onChange({ ...filters, hasTeacherGuide: event.target.value as ResourceFiltersValue['hasTeacherGuide'] })
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
      </div>

      <details className="advanced-filters-panel">
        <summary>Afficher les filtres avancés</summary>
        <div className="advanced-filters-grid">
          
          <label className="field">
            <span>Statut éditorial</span>
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

          <label className="field">
            <span>Accès futur</span>
            <select
              value={filters.accessLevel}
              onChange={(event) =>
                onChange({
                  ...filters,
                  accessLevel: event.target.value as ResourceFiltersValue['accessLevel'],
                })
              }
            >
              <option value="all">Tous</option>
              {accessLevels.map((level) => (
                <option key={level} value={level}>
                  {formatLooseLabel(level)}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Licence</span>
            <select
              value={filters.license}
              onChange={(event) =>
                onChange({
                  ...filters,
                  license: event.target.value as ResourceFiltersValue['license'],
                })
              }
            >
              <option value="all">Toutes</option>
              {resourceLicenses.map((license) => (
                <option key={license} value={license}>
                  {formatLicense(license)}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Préparation</span>
            <select
              value={filters.teacherPreparationLevel}
              onChange={(event) =>
                onChange({
                  ...filters,
                  teacherPreparationLevel: event.target.value as ResourceFiltersValue['teacherPreparationLevel'],
                })
              }
            >
              <option value="all">Toutes</option>
              {teacherPreparationLevels.map((level) => (
                <option key={level} value={level}>
                  {formatTeacherPreparation(level)}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Source</span>
            <select
              value={filters.sourceType}
              onChange={(event) =>
                onChange({
                  ...filters,
                  sourceType: event.target.value as ResourceFiltersValue['sourceType'],
                })
              }
            >
              <option value="all">Toutes</option>
              {sourceTypes.map((sourceType) => (
                <option key={sourceType} value={sourceType}>
                  {formatSourceType(sourceType)}
                </option>
              ))}
            </select>
          </label>
        </div>
      </details>
    </section>
  )
}

function formatLooseLabel(value: string): string {
  return value.replaceAll('_', ' ')
}
