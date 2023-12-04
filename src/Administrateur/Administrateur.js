import React, { useState } from "react";

import "./Administrateur.css";


import Menu from "./Menu/Menu";
import Article from "./Article/Article" ;
import Categorie from "./Categorie/Categorie";


import AjouterArticle from "./Article/AjouterArticle/AjouterArticle";


const Administrateur = () => {

    const [ChoixAdmin,setChoixAdmin] = useState("Article") ;

    return (
        <div className="Administrateur">
            <div>
                <div>
                    <div>
                        <Menu ChoixAdmin={setChoixAdmin}  />
                    </div>
                    <div> 
                    {
                        ChoixAdmin == "Article" ? <AjouterArticle /> : <Categorie />
                    }

                    </div>
                </div>
            </div>
        </div>
    )


}


export default Administrateur;