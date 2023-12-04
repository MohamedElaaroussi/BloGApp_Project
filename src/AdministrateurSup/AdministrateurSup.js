import React, { useState } from "react";

import "./AdministrateurSup.css";


import Menu from "./Menu/Menu";
import Article from "./Article/Article" ;
import Categorie from "./Categorie/Categorie";
// import AjouterAdmin from "./AjouterAdministrateur/AjouterAdministrateur";

// import AjouterAdmin from "./Administrateur/AjouterAdministrateur/AjouterAdministrateur" ;

import Administrateur from "./Administrateur/Administrateur";


const AdministrateurSup = () => {

    const [ChoixAdmin,setChoixAdmin] = useState("Admin") ;

    return (
        <div className="AdministrateurSup">
            <div>
                <div>
                    <div>
                        <Menu ChoixAdmin={setChoixAdmin}  />
                    </div>
                    <div> 
                  {
                    ChoixAdmin == "Admin" ? <Administrateur /> : ChoixAdmin == "Article" ? <Article /> : ChoixAdmin == "Categorie" ? <Categorie /> : ChoixAdmin == "Profil" ? "" : ""    
                  }
                    </div>
                </div>
            </div>
        </div>
    )


}


export default AdministrateurSup ;