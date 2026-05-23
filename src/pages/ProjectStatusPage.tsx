export function ProjectStatusPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Demo publique</p>
        <h1>Etat du projet</h1>
        <p>
          Cette page clarifie ce que la demo locale ou publique montre aujourd'hui, ce qui
          est simule et ce qui n'est pas encore implemente.
        </p>
      </header>

      <section>
        <h2>Ce qui fonctionne dans la v0</h2>
        <ul>
          <li>Bibliotheque locale de ressources FLE de demonstration.</li>
          <li>Filtres par niveau, competence, type, gabarit, theme, statut, usage numerique et IA.</li>
          <li>Fiches detail avec metadonnees pedagogiques, versions et retours d'usage simules.</li>
          <li>Actions locales pour copier le support etudiant, le guide professeur, le corrige ou la fiche complete.</li>
          <li>Rendu d'impression adapte aux fiches ressources.</li>
          <li>Collections locales et pages de presentation du modele communautaire.</li>
          <li>Documentation du format Markdown avec frontmatter YAML.</li>
          <li>Validation locale minimale des exemples Markdown.</li>
          <li>Prototype visuel en 5 etapes pour imaginer le futur depot de ressource brute.</li>
        </ul>
      </section>

      <section>
        <h2>Ce qui est simule</h2>
        <ul>
          <li>Les ressources, collections, versions et retours d'usage sont des donnees locales.</li>
          <li>Les propositions d'amelioration illustrent un futur workflow communautaire.</li>
          <li>Le formulaire de contribution est une maquette locale: il n'envoie et ne stocke rien.</li>
          <li>Les metadonnees IA decrivent des usages possibles sans connecter d'outil.</li>
          <li>Les niveaux d'acces et de soutenabilite sont conceptuels et n'appliquent aucune restriction.</li>
          <li>Les scores d'audit sont uniquement des exemples de structure.</li>
        </ul>
      </section>

      <section>
        <h2>Ce qui n'est pas implemente</h2>
        <ul>
          <li>Aucune base de donnees, aucun backend et aucun Supabase actif.</li>
          <li>Aucune authentification, aucun compte utilisateur et aucun role.</li>
          <li>Aucun upload, stockage de fichier ou import automatique Markdown.</li>
          <li>Aucun paiement, abonnement ou acces reserve actif.</li>
          <li>Aucun commentaire persistant, chat, forum ou notification.</li>
          <li>Aucun appel IA reel, embedding ou recherche vectorielle.</li>
        </ul>
      </section>

      <section className="non-persistent-note">
        La demo ne collecte aucune donnee utilisateur. Elle fonctionne avec des donnees
        statiques embarquees dans le code frontend et ne necessite aucune variable
        d'environnement.
      </section>
    </main>
  )
}
