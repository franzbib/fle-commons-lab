import { useMemo, useState } from 'react'
import { Badge } from '../components/Badge'
import { CopyPromptButton } from '../components/CopyPromptButton'
import { aiTutorials, globalCefrCaution, initiationPaths, promptRecipes } from '../data/aiWorkshop'
import {
  aiDifficultyLevels,
  aiWorkshopCategories,
  type AiDifficultyLevel,
  type AiRiskLevel,
  type AiWorkshopCategory,
} from '../types/aiWorkshop'

const categoryLabels: Record<AiWorkshopCategory, string> = {
  prise_en_main: 'Prise en main',
  preparer_activite: 'Preparer une activite',
  simplifier_adapter: 'Simplifier / adapter',
  creer_exercices: 'Creer des exercices',
  corriger_remedier: 'Corriger / remedier',
  differencier: 'Differencier',
  verifier_reponse_ia: 'Verifier une reponse IA',
  creer_corrige: 'Creer un corrige',
  preparer_oral: 'Preparer l’oral',
}

const difficultyLabels: Record<AiDifficultyLevel, string> = {
  debutant: 'Debutant',
  intermediaire: 'Intermediaire',
  avance: 'Avance',
}

const riskLabels: Record<AiRiskLevel, string> = {
  faible: 'Risque faible',
  modere: 'Risque modere',
  eleve: 'Risque eleve',
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
        <div style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '16px', borderRadius: '4px', border: '1px solid #f87171', fontWeight: 'bold', marginBottom: '16px' }}>
          Ce site n’integre pas d’IA. Les instructions proposees ici sont a copier dans votre outil habituel : ChatGPT, Claude, Gemini ou autre.
        </div>
        <p className="eyebrow">Atelier IA — boite a outils</p>
        <h1>Utiliser l’IA comme brouillon, jamais comme pilote automatique</h1>
        <p>
          Cette section accompagne les enseignants de FLE avec des tutoriels courts, des instructions a copier et des garde-fous.
        </p>
      </header>

      <section className="detail-section ai-safety-panel">
        <h2>Garde-fous non negociables</h2>
        <div className="intro-grid">
          <article>
            <h3>Donnees</h3>
            <p>Ne copiez jamais de donnees personnelles d’etudiants dans un outil IA.</p>
          </article>
          <article>
            <h3>Verification</h3>
            <p>Relisez le niveau, les consignes, les exemples et les corriges avant usage.</p>
          </article>
          <article>
            <h3>Jugement enseignant</h3>
            <p>L’IA peut aider au brouillon; elle ne decide pas de l’objectif pedagogique.</p>
          </article>
        </div>
        <p className="non-persistent-note">{globalCefrCaution}</p>
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
                <h4>Etapes</h4>
                <ol>
                  {tutorial.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <PromptInfo title="Garde-fous" items={tutorial.safeguards} />
              <PromptInfo title="Pieges a eviter" items={tutorial.commonPitfalls} />
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
          <h2>Boite a outils IA : instructions a copier</h2>
          <span>{filteredPrompts.length} instructions affichees</span>
        </div>

        <div className="filters-panel ai-workshop-filters">
          <label className="field">
            <span>Categorie</span>
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
            <span>Difficulte</span>
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
              {prompt.cefrCaution ? (
                <p className="cefr-caution">
                  <strong>Garde-fou CECRL.</strong> {prompt.cefrCaution}
                </p>
              ) : null}

              <h4 className="prompt-block-title">Instruction modele</h4>
              <pre className="prompt-text">{prompt.promptText}</pre>
              <CopyPromptButton promptText={prompt.promptText} label="Copier l'instruction modele" />

              <h4 className="prompt-block-title">Exemple rempli</h4>
              <pre className="prompt-text prompt-text-example">{prompt.filledExample}</pre>
              <CopyPromptButton promptText={prompt.filledExample} label="Copier l'exemple rempli" />

              <div className="prompt-meta-grid">
                <PromptInfo title="Ce que vous devez fournir" items={prompt.requiredInput} />
                <PromptInfo
                  title="Ce que l'enseignant doit verifier"
                  items={prompt.verificationChecklist}
                />
                <PromptInfo title="Risques" items={prompt.risks} />
                <PromptInfo title="Adaptations" items={prompt.adaptationIdeas} />
              </div>
              <p className="non-persistent-note">
                Ce que l'IA va produire: {prompt.expectedOutput}. Controle enseignant:{' '}
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
