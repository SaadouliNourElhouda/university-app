import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

const etudiants = [
  {
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
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 11 111 111",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Sousse",
    image: "/u.jpg",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="students-list">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;