import { useState } from "react";
import "./StudentForm.css";

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant,
}) {
  const [nom, setNom] = useState(etudiantAModifier?.nom || "");
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
  const [email, setEmail] = useState(etudiantAModifier?.email || "");
  const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
  const [anneeEtude, setAnneeEtude] = useState(
    etudiantAModifier?.anneeEtude || ""
  );
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
  const [ville, setVille] = useState(etudiantAModifier?.ville || "");
  const [image, setImage] = useState(etudiantAModifier?.image || "/n.jpg");
  const [erreurs, setErreurs] = useState({});

  function validerFormulaire() {
    const nouvellesErreurs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nom.trim()) {
      nouvellesErreurs.nom = "Nom est obligatoire";
    }

    if (!prenom.trim()) {
      nouvellesErreurs.prenom = "Prenom est obligatoire";
    }

    if (!email.trim()) {
      nouvellesErreurs.email = "Email est obligatoire";
    } else if (!emailRegex.test(email.trim())) {
      nouvellesErreurs.email = "Format d'email invalide";
    }

    if (!telephone.trim()) {
      nouvellesErreurs.telephone = "Téléphone est obligatoire";
    }

    if (!filiere.trim()) {
      nouvellesErreurs.filiere = "Filière est obligatoire";
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleImageChange(e) {
    const fichier = e.target.files[0];
    if (fichier) {
      setImage(URL.createObjectURL(fichier));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

    const donneesEtudiant = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere: filiere.trim(),
      anneeEtude: anneeEtude.trim(),
      groupe: groupe.trim(),
      ville: ville.trim(),
      image: image || "/n.jpg",
    };

    if (etudiantAModifier) {
      onModifierEtudiant({
        ...etudiantAModifier,
        ...donneesEtudiant,
      });
    } else {
      onAjouterEtudiant(donneesEtudiant);
      setNom("");
      setPrenom("");
      setEmail("");
      setTelephone("");
      setFiliere("");
      setAnneeEtude("");
      setGroupe("");
      setVille("");
      setImage("/n.jpg");
      setErreurs({});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="student-form" noValidate>
      <h2>{etudiantAModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}</h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Saisir le nom"
        />
        {erreurs.nom && <p className="error-msg">{erreurs.nom}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prenom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Saisir le prénom"
        />
        {erreurs.prenom && <p className="error-msg">{erreurs.prenom}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemple@domaine.com"
        />
        {erreurs.email && <p className="error-msg">{erreurs.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Telephone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="+216 00 000 000"
        />
        {erreurs.telephone && <p className="error-msg">{erreurs.telephone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
          <option value="Génie Logiciel et Systèmes d'Information">
            Génie Logiciel et Systèmes d'Information
          </option>
          <option value="Licence Computer Science">
            Licence Computer Science
          </option>
          <option value="Licence Business Computing">
            Licence Business Computing
          </option>
        </select>
        {erreurs.filiere && <p className="error-msg">{erreurs.filiere}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="anneeEtude">Annee d'etude :</label>
        <input
          type="text"
          id="anneeEtude"
          name="anneeEtude"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
          placeholder="Ex: 2ème année"
        />
      </div>

      <div className="form-group">
        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          name="groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
          placeholder="Ex: GLSI 2"
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          placeholder="Ex: Mahdia"
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image :</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <button type="submit" className="btn-submit">
        {etudiantAModifier ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}

export default StudentForm;