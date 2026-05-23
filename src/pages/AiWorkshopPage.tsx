import { useMemo, useState } from 'react'
import { Badge } from '../components/Badge'
import { CopyPromptButton } from '../components/CopyPromptButton'
import { aiTutorials, initiationPaths, promptRecipes } from '../data/aiWorkshop'
import {
  aiDifficultyLevels,
  aiWorkshopCategories,
  type AiDifficultyLevel,
  type AiRiskLevel,
  type AiWorkshopCategory,
} from '../types/aiWorkshop'

const categoryLabels: Record<AiWorkshopCategory, string> = {
  prise_en_main: 'Prise en main',
  preparer_activite: 'Préparer une activité',
  simplifier_adapter: 'Simplifier / adapter',
  creer_exercices: 'Créer des exercices',
  corriger_remedier: 'Corriger / remédier',
  differencier: 'Différencier',
  verifier_reponse_ia: 'Vérifier une réponse IA',
  creer_corrige: 'Créer un corrigé',
  preparer_oral: 'Préparer l’oral',
}

const difficultyLabels: Record<AiDifficultyLevel, string> = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
}

const riskLabels: Record<AiRiskLevel, string> = {
  faible: 'Risque faible',
  modere: 'Risque modéré',
  eleve: 'Risque élevé',
}

export function AiWorkshopPage() {
  const [categoryFilter, setCategoryFilter] = useState<'all' | AiWorkshopCategory>('all')
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | AiDifficultyLevel>('all')

  const filteredPrompts = useMemo(
    () =>
      promptRecipes.filter((prompt) => {
        const matchesCategory = categoryFilter === 'all' || prompt.category === categoryFilter
        const matchesDifficulty =
          difficultyFilter === 'all' || prompt.difficulty === difficultyFilter

        return matchesCategory && matchesDifficulty
      }),
    [categoryFilter, difficultyFilter],
  )

  return (
    <main className="page ai-workshop-page">
      <header className="page-header">
        <p className="eyebrow">Atelier IA & FLE</p>
        <h1>Utiliser l’IA comme brouillon, jamais comme pilote automatique</h1>
        <p>
          Cette section accompagne les enseignants de FLE avec des tutoriels courts, des
          prompts copiables et des garde-fous. Aucune IA n’est intégrée au site: les prompts
          sont à copier dans l’outil choisi par l’enseignant, puis à relire humainement.
        </p>
      </header>

      <section className="detail-section ai-safety-panel">
        <h2>Garde-fous non négociables</h2>
        <div className="intro-grid">
          <article>
            <h3>Données</h3>
            <p>Ne copiez jamais de données personnelles d’étudiants dans un outil IA.</p>
          </article>
          <article>
            <h3>Vérification</h3>
            <p>Relisez le niveau, les consignes, les exemples et les corrigés avant usage.</p>
          </article>
          <article>
            <h3>Jugement enseignant</h3>
            <p>L’IA peut aider au brouillon; elle ne décide pas de l’objectif pédagogique.</p>
          </article>
        </div>
      </section>

      <section>
        <h2>Parcours d’initiation</h2>
        <div className="intro-grid">
          {initiationPaths.map((path) => (
            <article key={path.title}>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Mini-tutoriels</h2>
        <div className="resource-grid">
          {aiTutorials.map((tutorial) => (
            <article key={tutorial.id} className="resource-card">
              <div className="card-topline">
                <Badge tone="ai">{categoryLabels[tutorial.category]}</Badge>
                <Badge>{difficultyLabels[tutorial.difficulty]}</Badge>
                <Badge>{tutorial.estimatedTime}</Badge>
              </div>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.summary}</p>
              <p className="muted">{tutorial.targetTeacherNeed}</p>
              <div className="content-section">
                <h4>Étapes</h4>
                <ol>
                  {tutorial.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="tag-list">
                {tutorial.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="results-heading">
          <h2>Bibliothèque de prompts</h2>
          <span>{filteredPrompts.length} prompts affichés</span>
        </div>

        <div className="filters-panel ai-workshop-filters">
          <label className="field">
            <span>Catégorie</span>
            <select
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(event.target.value as 'all' | AiWorkshopCategory)
              }
            >
              <option value="all">Toutes</option>
              {aiWorkshopCategories.map((category) => (
                <option key={category} value={category}>
                  {categoryLabels[category]}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Difficulté</span>
            <select
              value={difficultyFilter}
              onChange={(event) =>
                setDifficultyFilter(event.target.value as 'all' | AiDifficultyLevel)
              }
            >
              <option value="all">Toutes</option>
              {aiDifficultyLevels.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficultyLabels[difficulty]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="prompt-list">
          {filteredPrompts.map((prompt) => (
            <article key={prompt.id} className="prompt-card">
              <div className="card-topline">
                <Badge tone="ai">{categoryLabels[prompt.category]}</Badge>
                <Badge>{difficultyLabels[prompt.difficulty]}</Badge>
                <Badge tone={prompt.riskLevel === 'eleve' ? 'status' : 'neutral'}>
                  {riskLabels[prompt.riskLevel]}
                </Badge>
              </div>
              <h3>{prompt.title}</h3>
              <p>{prompt.pedagogicalUse}</p>
              <pre className="prompt-text">{prompt.promptText}</pre>
              <CopyPromptButton promptText={prompt.promptText} />
              <div className="prompt-meta-grid">
                <PromptInfo title="Entrée nécessaire" items={prompt.requiredInput} />
                <PromptInfo title="Vérifications" items={prompt.verificationChecklist} />
                <PromptInfo title="Risques" items={prompt.risks} />
                <PromptInfo title="Adaptations" items={prompt.adaptationIdeas} />
              </div>
              <p className="non-persistent-note">
                Sortie attendue: {prompt.expectedOutput}. Contrôle enseignant:{' '}
                {prompt.teacherControlLevel}.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function PromptInfo({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="prompt-info">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
