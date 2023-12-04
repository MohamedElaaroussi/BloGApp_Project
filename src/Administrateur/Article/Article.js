import "./Article.css";
// import React from "react";

import { useEffect, useState } from "react";

const Article = () => {

    const [Data, SetData] = useState([]);

    useEffect(() => {
        console.log("Data") ;
        fetch("http://localhost:3030/Articles").then((Res) => {return (Res.json())}).then(Val => {
            SetData(Val) ;
        });
        
    },[]);

    return (
        <div className="ArticlesAdmin">
            <div>

                <div className="RechercheArticle">
                    <div className="BoiteRecherche-Article">
                        <div className="Icon-Search">
                            <i className="bi bi-search"></i>
                        </div>

                        <input className="ms-5" type="text" placeholder="Entrer le titre d’article ..." />

                    </div>

                </div>


                <div className="Recherche-Compositeur-Id">
                    <div className="BoiteRecherche-Compositeur">

                        <label>
                            Compositeur :
                        </label>
                        <input className="" type="text" placeholder="Entrer le nom de compositeur ..." />

                    </div>
                    <div className="BoiteRecherche-Id">
                        <label>
                            ID :
                        </label>
                        <input className="" type="text" placeholder="Entrer ID ..." />

                    </div>


                </div>



                <div className="Ajouter-Article">
                    <div className="Botton-AjouterArticle ms-3">
                        <a>
                            Ajouter Article
                        </a>
                    </div>


                </div>


                <div className="Articles">
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Titre
                                    </th>
                                    <th>
                                        Compositeur
                                    </th>
                                    <th>

                                    </th>
                                    <th>

                                    </th>
                                    <th>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {Data.length == 0 ? "" : Data.map((Article) => {
                                    return (
                                        <tr key={Article.id}>
                                            <td>
                                                #{Article.id}
                                            </td>
                                            <td>
                                                {Article.Titre}
                                            </td>
                                            <td>
                                                {Article.Compositeur}
                                            </td>
                                            <td className="Voir">
                                                Voir
                                            </td>
                                            <td className="Modifier">
                                                Modifier
                                            </td>
                                            <td className="Supprimer">
                                                Supprimer
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>


                        </table>
                    </div>
                </div>





            </div>
        </div>
    );
}






export default Article;


