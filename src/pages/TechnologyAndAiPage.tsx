export function TechnologyAndAiPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Technologies et IA</p>
        <h1>Documenter les usages, sans automatiser trop tôt</h1>
        <p>
          FLE Commons Lab doit pouvoir accueillir des pratiques numériques et IA, mais la
          v0 n’appelle aucune API. Les usages sont décrits, discutés et encadrés.
        </p>
      </header>

      <section>
        <h2>Position de principe</h2>
        <p>
          L’IA ne remplace ni le jugement enseignant, ni l’observation de classe, ni la
          responsabilité pédagogique. Elle peut aider à reformuler, comparer, vérifier ou
          scénariser, mais seulement avec un contrôle explicite.
        </p>
      </section>

      <section>
        <h2>Dans cette v0</h2>
        <p>
          Les ressources peuvent indiquer un usage numérique ou IA possible. Ces champs
          servent à classer, filtrer et préparer l’architecture. Aucun appel OpenAI,
          Claude, Gemini ou autre fournisseur n’est effectué.
        </p>
      </section>

      <section>
        <h2>Principes de prudence</h2>
        <ul>
          <li>Transparence sur le rôle de l’outil.</li>
          <li>Contrôle enseignant obligatoire pour les usages sensibles.</li>
          <li>Aucune donnée personnelle d’apprenant dans un outil externe.</li>
          <li>Vérification des sources et des réponses générées.</li>
          <li>Alternative sans IA quand c’est possible.</li>
          <li>Coûts et comptes utilisateurs à éviter en v0.</li>
        </ul>
      </section>

      <section>
        <h2>Pistes futures</h2>
        <p>
          Audit pédagogique déclenché manuellement, conversion de supports, suggestion de
          variantes, repérage de consignes floues, aide à la création de corrigés,
          métadonnées assistées, recherche sémantique et recommandations. Rien de cela
          n’est branché aujourd’hui.
        </p>
      </section>
    </main>
  )
}
