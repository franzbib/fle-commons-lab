export function AboutPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Vision prudente</p>
        <h1>Un laboratoire de communs pédagogiques FLE</h1>
        <p>
          Le projet explore une idée simple: les supports créés par les enseignants
          gagnent en valeur lorsqu’ils deviennent structurés, relisibles, versionnés et
          partageables. La v0 montre cette logique avec des données locales et des
          ressources fictives, sans compte utilisateur.
        </p>
      </header>

      <section>
        <h2>Pourquoi ce projet ?</h2>
        <p>
          Beaucoup de supports FLE circulent sous forme de fichiers isolés, difficiles à
          retrouver, comparer ou améliorer. FLE Commons Lab cherche à préparer un terrain
          commun: une ressource doit pouvoir être comprise rapidement, copiée, imprimée,
          adaptée et relue par d’autres.
        </p>
      </section>

      <section>
        <h2>Plus qu’une banque de fiches</h2>
        <p>
          Une banque de fiches accumule des documents. Un commun pédagogique garde aussi
          le contexte: objectifs, niveau, durée, corrigé, licence, versions, retours
          d’usage et propositions d’amélioration. C’est cette mémoire qui rend une
          ressource vraiment améliorable.
        </p>
      </section>

      <section>
        <h2>Ce que la v0 n’est pas</h2>
        <p>
          Cette première version n’est pas une communauté, pas un outil d’IA, pas une base
          de données, pas un espace de contribution persistant et pas un service payant.
          Elle documente ces pistes futures sans les coder.
        </p>
      </section>

      <section>
        <h2>Ce que la v0 prépare</h2>
        <p>
          Elle prépare un modèle de ressource, une bibliothèque locale, des exemples
          pédagogiques, des sections éditoriales et une documentation suffisamment claire
          pour qu’un enseignant, un développeur ou un agent IA puisse reprendre le travail.
        </p>
      </section>

      <section>
        <h2>Accès, licences et soutenabilité</h2>
        <p>
          Le socle du projet reste open source et aucun paiement n’est actif. Certaines
          ressources pourraient plus tard avoir des conditions d’accès différentes selon leur
          origine, leur licence ou un cadre institutionnel, mais ces choix devront être
          documentés, discutés et distincts du code ouvert. Aucun accès réservé n’est
          appliqué dans la démo actuelle.
        </p>
      </section>
    </main>
  )
}
