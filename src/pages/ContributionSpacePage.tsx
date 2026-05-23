import { useState } from 'react'
import { contributorRoleLabels, contributorRoles } from '../types/community'

const contributionPaths = [
  'Proposer une ressource brute',
  'Améliorer une ressource existante',
  "Ajouter un retour d'usage",
  'Proposer une variante',
  'Signaler un problème de licence',
  'Participer à une relecture',
  "Suivre l'état d'une contribution",
]

export function ContributionSpacePage() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNext = () => setStep((s) => Math.min(s + 1, 5))
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Concept communautaire</p>
        <h1>Futur espace de contribution</h1>
        <p>
          Cette page montre comment un enseignant pourrait plus tard proposer une ressource,
          une correction ou un retour d'usage. Elle ne crée aucun compte et n'enregistre rien.
        </p>
      </header>

      <section className="prototype-form-section">
        <div>
          <h2>Démonstration du futur dépôt de ressource brute</h2>
          <p>
            Prototype visuel: ce formulaire incarne la méthode du "brouillon bienveillant".
            Rien n'est envoyé, rien n'est stocké et aucune donnée n'est collectée dans la v0.
          </p>
        </div>

        {isSubmitted ? (
          <div className="wizard-success">
            <h3>Bien reçu ! 🎉</h3>
            <p>
              Votre aide permet au projet de rester gratuit et indépendant. Ce dépôt compterait 
              comme une participation active.
            </p>
            <div className="non-persistent-note action-note">
              <strong>Attention : Dans cette version statique, rien n'est envoyé ni enregistré.</strong>
              <p>Il s'agit d'une pure démonstration visuelle.</p>
            </div>
            <button className="primary-button" onClick={() => { setStep(1); setIsSubmitted(false); }}>
              Proposer autre chose
            </button>
          </div>
        ) : (
          <form className="prototype-form wizard-form" onSubmit={handleSubmit} aria-label="Prototype de proposition">
            
            <div className="wizard-progress">
              <span>Étape {step} sur 5</span>
              <progress value={step} max={5}></progress>
            </div>

            {step === 1 && (
              <fieldset className="wizard-step">
                <legend>Quelle est votre proposition aujourd'hui ?</legend>
                <p className="wizard-help">Toutes les contributions sont précieuses : une séquence complète, un exercice gribouillé, ou même une simple remarque sur une fiche existante.</p>
                <div className="radio-group-vertical">
                  <label><input type="radio" name="prop_type" defaultChecked /> Une activité ou un exercice</label>
                  <label><input type="radio" name="prop_type" /> Une évaluation</label>
                  <label><input type="radio" name="prop_type" /> Une idée ou un retour d'expérience</label>
                  <label><input type="radio" name="prop_type" /> Une adaptation d'une ressource du site</label>
                  <label><input type="radio" name="prop_type" /> Un corrigé manquant</label>
                </div>
                <label className="field" style={{ marginTop: '1.5rem' }}>
                  <span>Titre provisoire (facultatif)</span>
                  <input placeholder="Ex. Débattre autour des transports en ville" />
                </label>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset className="wizard-step">
                <legend>Collez votre contenu</legend>
                <p className="wizard-help">L'équipe de relecture pourra ensuite aider à structurer la ressource.</p>
                <label className="field field-wide">
                  <textarea
                    rows={8}
                    placeholder="Collez ici votre texte, vos consignes, ou décrivez votre activité..."
                  />
                </label>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset className="wizard-step">
                <legend>À qui s'adresse cette activité ?</legend>
                <label className="field">
                  <span>Niveau estimé</span>
                  <select defaultValue="">
                    <option value="" disabled>Choisissez un niveau...</option>
                    <option>A1</option>
                    <option>A2</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>C1</option>
                    <option>C2</option>
                    <option>Je ne sais pas trop</option>
                  </select>
                </label>
                <label className="field">
                  <span>Objectif principal</span>
                  <input placeholder="Ex. Apprendre à se présenter, réviser le passé composé..." />
                </label>
                <label className="field">
                  <span>Durée estimée (facultatif)</span>
                  <select defaultValue="">
                    <option value="" disabled>Choisissez...</option>
                    <option>Moins de 15 min</option>
                    <option>15-30 min</option>
                    <option>1h</option>
                    <option>Plus d'1h</option>
                  </select>
                </label>
              </fieldset>
            )}

            {step === 4 && (
              <fieldset className="wizard-step">
                <legend>D'où vient ce document ?</legend>
                <p className="wizard-help">Pour protéger le projet FLE Commons Lab, nous ne pouvons pas publier de textes ou d'images copiés d'un manuel édité commercialement.</p>
                <div className="radio-group-vertical">
                  <label><input type="radio" name="prop_source" defaultChecked /> C'est moi qui l'ai entièrement créé.</label>
                  <label><input type="radio" name="prop_source" /> C'est basé sur un document authentique externe (article, vidéo, brochure).</label>
                  <label><input type="radio" name="prop_source" /> C'est inspiré d'une ressource existante, mais je l'ai fortement modifiée.</label>
                </div>
                <label className="field" style={{ marginTop: '1.5rem', flexDirection: 'row', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <input type="checkbox" />
                  <span style={{ fontWeight: 'normal', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    J'accepte que ma ressource soit mise au propre et partagée gratuitement aux autres professeurs sous licence libre.
                  </span>
                </label>
              </fieldset>
            )}

            {step === 5 && (
              <fieldset className="wizard-step">
                <legend>Un grand merci !</legend>
                <p className="wizard-help">Votre aide permet au projet de rester gratuit et indépendant. Ce dépôt comptera comme une participation active.</p>
                <label className="field">
                  <span>Pseudonyme ou Prénom (facultatif)</span>
                  <input placeholder="Sous quel nom souhaitez-vous être crédité ?" />
                </label>
                <div className="non-persistent-note action-note" style={{ marginTop: '2rem' }}>
                  <div>
                    <strong>Prototype non connecté dans la v0</strong>
                    <p>
                      Cette zone prépare un futur parcours simple pour enseignants. Elle ne transmet
                      aucune information.
                    </p>
                  </div>
                </div>
              </fieldset>
            )}

            <div className="wizard-actions">
              {step > 1 ? (
                <button type="button" className="secondary-button" onClick={handlePrev}>
                  Précédent
                </button>
              ) : (
                <div /> /* Placeholder for flex spacing */
              )}
              
              {step < 5 ? (
                <button type="button" className="primary-button" onClick={handleNext}>
                  Suivant
                </button>
              ) : (
                <button type="submit" className="primary-button">
                  Terminer la démonstration
                </button>
              )}
            </div>
          </form>
        )}
      </section>

      <section>
        <h2>Contribuer plus tard, simplement</h2>
        <p>
          La contribution ne devra pas obligatoirement commencer par une ressource parfaite. Un
          enseignant pourra aider en proposant une idée, en signalant une erreur, en ajoutant un
          corrigé, en adaptant une fiche, en racontant un usage en classe ou en participant à une
          relecture.
        </p>
      </section>

      <section>
        <h2>Futurs rôles possibles</h2>
        <div className="doc-list">
          {contributorRoles.map((role) => (
            <article key={role}>
              <h3>{contributorRoleLabels[role]}</h3>
              <p>
                Rôle descriptif pour penser la contribution future. Aucun droit technique
                n'est appliqué dans la v0.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Parcours de contribution envisagés</h2>
        <ul>
          {contributionPaths.map((path) => (
            <li key={path}>{path}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Garde-fous</h2>
        <ul>
          <li>Rester centré sur les ressources, pas sur un flux social.</li>
          <li>Pas de messagerie privée en première version.</li>
          <li>Pas de forum général en première version.</li>
          <li>Pas de notifications temps réel en première version.</li>
          <li>Pas de réputation complexe en première version.</li>
          <li>Validation pédagogique humaine requise.</li>
        </ul>
      </section>

      <section className="non-persistent-note">
        Tout est conceptuel dans cette page. Aucun backend, aucune authentification et aucun
        workflow de permission ne sont implémentés.
      </section>
    </main>
  )
}
