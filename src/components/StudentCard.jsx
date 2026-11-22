import { useState } from "react";
import "./StudentCard.css";

function StudentCard({
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
  const villeAffichee = ville || "Non renseignée";

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      <img src={image} alt={`Photo de ${prenom} ${nom}`} />
      <h2>Fiche étudiant</h2>
      <p>
        <strong>Nom & Prénom :</strong> {prenom} {nom}
      </p>
      <p>
        <strong>Filière :</strong> {filiere}
      </p>
      <p>
        <strong>Année d'étude :</strong> {anneeEtude}
      </p>
      <p>
        <strong>Groupe :</strong> {groupe}
      </p>
      <p>
        <strong>Ville :</strong> {villeAffichee}
      </p>

      {coordonneesVisibles && (
        <div className="coordonnees">
          <p>
            <strong>Email :</strong> {email}
          </p>
          <p>
            <strong>Téléphone :</strong> {telephone}
          </p>
        </div>
      )}

      <div className="card-actions">
        <button type="button" onClick={basculerCoordonnees}>
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>

        <a href={`mailto:${email}`} className="btn-contact">
          Contacter
        </a>

        <button type="button" onClick={() => onModifier(id)}>
          Modifier
        </button>

        <button type="button" onClick={() => onSupprimer(id)}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;