import "./Categorie.css" ;

import { useEffect,useState } from "react";

import AfficherCategories from "./AfficherCategories/AfficherCategories";
import AjouterCategorie from "./AjouterCategorie/AjouterCategorie";

const Categorie = () => {


    const [Choix , setChoix] = useState("Ajouter_Categorie") ;


    return (
        <div className="Categories">
        {
            Choix == "Afficher_Categories" ? <AfficherCategories setChoix = {setChoix} /> : Choix == "Ajouter_Categorie" ? <AjouterCategorie setChoix = {setChoix} /> : ""
        }
        </div>
    );
}



export default Categorie ;