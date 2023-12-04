import "./Article.css";
import AfficherArticles from "./AfficherArticles/AfficherArticles";

import AjouterArticle from "./AjouterArticles/AjouterArticle";


import { useEffect, useState } from "react";

const Article = () => {

   
    const [Choix , setChoix] = useState("Afficher_Articles") ;

    return (
        <div className="Articles">
            {
                Choix == "Afficher_Articles" ? <AfficherArticles setChoix = {setChoix} /> : Choix == "Ajouter_Article" ? <AjouterArticle setChoix = {setChoix} /> : ""
            }
        </div>
    );
}






export default Article;


