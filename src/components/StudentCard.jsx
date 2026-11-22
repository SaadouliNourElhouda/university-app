import { useState } from "react";
import "./StudentCard.css";

function StudentCard({
  etudiant,
  id,
  prenom,
  nom,
  email,
  telephone,
  filiere,
  anneeEtude,
  groupe,
  ville,
  image,
  onSupprimer,
  onModifier,
}) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  const data = etudiant || {
    id,
    prenom,
    nom,
    email,
    telephone,
    filiere,
    anneeEtude,
    groupe,
    ville,
    image,
  };

  const villeAffichee = data.ville || "Non renseignée";

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      <img src={data.image} alt={`Photo de ${data.prenom} ${data.nom}`} />
      <h2>Fiche étudiant</h2>
      <p>
        <strong>Nom & Prénom :</strong> {data.prenom} {data.nom}
      </p>
      <p>
        <strong>Filière :</strong> {data.filiere}
      </p>
      <p>
        <strong>Année d'étude :</strong> {data.anneeEtude}
      </p>
      <p>
        <strong>Groupe :</strong> {data.groupe}
      </p>
      <p>
        <strong>Ville :</strong> {villeAffichee}
      </p>

      {coordonneesVisibles && (
        <div className="coordonnees">
          <p>
            <strong>Email :</strong> {data.email}
          </p>
          <p>
            <strong>Téléphone :</strong> {data.telephone}
          </p>
        </div>
      )}

      <div className="card-actions">
        <button type="button" onClick={basculerCoordonnees}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>

        <a href={`mailto:${data.email}`} className="btn-contact">
          Contacter
        </a>

        <button type="button" onClick={() => onModifier(data)}>
          Modifier
        </button>

        <button type="button" onClick={() => onSupprimer(data.id)}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;