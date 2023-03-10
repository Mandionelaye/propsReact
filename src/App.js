//import logo from './logo.svg';
import Profile from "./profill/profile";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import image1 from "./profile.JPG";


function App() {
function handleName(name){return alert(name);};
let fullName="Seydina Mandione mbaye";
let bio="Developpeur Full Stack et aussi etudiant en informatique de developpement d'application web mobile a l'Universite Virtuelle du Senegal et a Gomycode. J'ai 24ans et je suis en 2e annee de licence.";
let profession="Developpeur Full Stack";

  return (
    <>
    <div className="body">
    <div className="container">
    <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
        {image1}
      </Profile> 
    </div>
    </div>
   </>
  );
}

export default App;


