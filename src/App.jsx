import "./App.css";

const nom = "SAADOULI";
const prenom = "Nour Elhouda";
const email = "noursaadouli58@gmail.com";
const telephone = "+216 96168786";
const filiere = "Génie Logiciel et Systèmes d'Information";
const annee = "2ème année";
const groupe = "GLSI2_A";
const ville = "Mahdia";

function App() {
  return (
    <div className="container">
      <div className="fiche">
        <h1>Fiche étudiant</h1>
        <img src="/n.jpg" alt="Photo de l'étudiant" />

        <div className="informations">
          <p><strong>Nom :</strong> {nom}</p>
          <p><strong>Prénom :</strong> {prenom}</p>
          <p><strong>Email :</strong> {email}</p>
          <p><strong>Téléphone :</strong> {telephone}</p>
          <p><strong>Filière :</strong> {filiere}</p>
          <p><strong>Année d'étude :</strong> {annee}</p>
          <p><strong>Groupe :</strong> {groupe}</p>
          <p><strong>Ville :</strong> {ville}</p>
        </div>

        <a href={`mailto:${email}`} className="btn-contact">
          Contacter
        </a>
      </div>
    </div>
  );
}

export default App;