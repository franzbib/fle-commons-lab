export function CommunityPage() {
  return (
    <main className="page readable-page">
      <header className="page-header">
        <p className="eyebrow">Contribution ouverte</p>
        <h1>Préparer une communauté autour des ressources</h1>
        <p>
          La v0.2 ne crée pas de compte, de forum ou de persistance. Elle montre le cadre
          dans lequel des enseignants pourront proposer, relire et améliorer des ressources,
          sans devoir passer par Git, YAML ou un vocabulaire technique.
        </p>
      </header>

      <section>
        <h2>Comment contribuer plus tard ?</h2>
        <p>
          Un enseignant pourra proposer une ressource, signaler une erreur, ajouter une
          variante, documenter un retour d’usage ou clarifier une licence. Chaque
          contribution devra rester reliée à une ressource précise. Dans la démo actuelle,
          ces parcours sont illustrés par des données locales et une maquette non connectée.
        </p>
      </section>

      <section>
        <h2>Ressource mutualisable</h2>
        <p>
          Une ressource mutualisable indique son niveau, sa durée, ses objectifs, ses
          consignes, son corrigé ou ses critères, son statut, sa licence et ses conditions
          d’adaptation.
        </p>
      </section>

      <section>
        <h2>Droits et licences</h2>
        <p>
          Le projet doit éviter la copie de contenus protégés. Les supports doivent être
          originaux, libres, ou accompagnés d’une vérification claire des droits avant
          publication publique.
        </p>
      </section>

      <section className="non-persistent-note">
        Fonction non persistante dans la v0.2. Les propositions visibles dans les fiches
        ressources sont des exemples locaux qui préparent le futur workflow communautaire.
      </section>
    </main>
  )
}
