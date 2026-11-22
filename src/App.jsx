import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

const initialEtudiants = [
  {
    id: 1,
    prenom: "Nour Elhouda",
    nom: "SAADOULI",
    email: "noursaadouli58@gmail.com",
    telephone: "+216 96168786",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI2_A",
    ville: "Mahdia",
    image: "/n.jpg",
  },
  {
    id: 2,
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 11 111 111",
    filiere: "Licence Computer Science",
    anneeEtude: "1ère année",
    groupe: "LCS 1",
    ville: "",
    image: "/u.jpg",
  },
  {
    id: 3,
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 27 567 890",
    filiere: "Licence Business Computing",
    anneeEtude: "2ème année",
    groupe: "LBC 2",
    ville: "",
    image: "/r.jpg",
  },
];

function App() {
  const [etudiants, setEtudiants] = useState(initialEtudiants);
  const [recherche, setRecherche] = useState("");

  function ajouterEtudiant() {
    const nouvelId =
      etudiants.length > 0 ? Math.max(...etudiants.map((e) => e.id)) + 1 : 1;

    const nouvelEtudiant = {
      id: nouvelId,
      prenom: "Yassine",
      nom: "Ben Salem",
      email: `yassine.bensalem${nouvelId}@gmail.com`,
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
      image: "/n.jpg",
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id)
    );
  }

  function modifierEtudiant(id) {
    const nouveauPrenom = prompt("Saisir le nouveau prénom :");

    if (nouveauPrenom !== null && nouveauPrenom.trim() !== "") {
      setEtudiants((anciensEtudiants) =>
        anciensEtudiants.map((etudiant) =>
          etudiant.id === id
            ? { ...etudiant, prenom: nouveauPrenom.trim() }
            : etudiant
        )
      );
    }
  }

  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Navbar />

      <div className="toolbar">
        <input
          type="text"
          placeholder="Rechercher par filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="search-input"
        />

        <button type="button" onClick={ajouterEtudiant} className="btn-add">
          + Ajouter un étudiant
        </button>
      </div>

      <main className="students-list">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            id={etudiant.id}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;