import { resourceTemplates } from '../types/resource'
import { formatResourceTemplate } from '../utils/formatters'

const templateDescriptions: Record<(typeof resourceTemplates)[number], string> = {
  conversation_guidee: 'Cadre de prise de parole avec expressions utiles et rôles simples.',
  document_declencheur: 'Support court qui lance une observation, une discussion ou une tâche.',
  grammaire_inductive: 'Observation d’exemples avant formulation de la règle.',
  lexique_actif: 'Réemploi du lexique dans une tâche courte et contextualisée.',
  jeu_pedagogique: 'Dispositif ludique avec objectif langagier explicite.',
  sequence_complete: 'Ensemble d’activités liées sur une ou plusieurs séances.',
  evaluation: 'Tâche avec critères, corrigé ou barème.',
  remediation: 'Support ciblé pour reprendre une difficulté repérée.',
  projet_collaboratif: 'Production collective avec rôles et étapes.',
  atelier_numerique: 'Activité qui mobilise un outil numérique identifié.',
  scenario_ia: 'Usage IA encadré, explicite et contrôlé par l’enseignant.',
  analyse_de_document: 'Lecture, écoute ou observation guidée d’un document.',
  production_assistee: 'Aide structurée à la production orale ou écrite.',
  autre: 'Gabarit provisoire à remplacer dès qu’une catégorie plus précise existe.',
}

export function TemplatesPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Gabarits pédagogiques</p>
        <h1>Classer des formats d’enseignement, pas seulement des fichiers</h1>
        <p>
          Les gabarits rendent les ressources plus réutilisables: ils décrivent une forme
          pédagogique transférable, adaptable et améliorable.
        </p>
      </header>

      <section className="doc-list">
        {resourceTemplates.map((template) => (
          <article key={template}>
            <h2>{formatResourceTemplate(template)}</h2>
            <p>{templateDescriptions[template]}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
