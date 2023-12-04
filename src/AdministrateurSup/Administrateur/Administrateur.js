
import "./Administrateur.css";
import AjouterAdministrateur from "./AjouterAdministrateur/AjouterAdministrateur" ;
import AfficherAdministrateurs from "./AfficherAdministrateurs/AfficherAdministrateurs";
import { useEffect , useState } from "react";

const Administrateur = () => {

    const [Data, SetData] = useState([]);

    const [Choix,setChoix] = useState("Afficher_Admins") ;

    useEffect(() => {
        console.log("Data") ;
        fetch("http://localhost:3050/Admin").then((Res) => {return (Res.json())}).then(Val => {
            SetData(Val) ;
        });
        
    },[]);
    return (
        <div className="Admins">
           {
            Choix == "Afficher_Admins"?<AfficherAdministrateurs setChoix={setChoix}/> : Choix == "Ajouter_Admin" ? <AjouterAdministrateur setChoix={setChoix} /> : ""
           }
        </div> 
    )
}

export default Administrateur;
