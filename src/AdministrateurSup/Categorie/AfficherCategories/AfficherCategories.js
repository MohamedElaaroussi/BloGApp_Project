import "./AfficherCategories.css" ;
import { useEffect , useState } from "react";




const AfficherCategories = (props) => {

    const [Data, SetData] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:3040/Categories").then((Res) => {return (Res.json())}).then(Val => {
            SetData(Val) ;
        });
    },[]);
 
    return(
        <div className="CategoriesAdmin">
            <div>

                <div className="RechercheCategorie">
                    <div className="BoiteRecherche-Categorie">
                        <div className="Icon-Search">
                            <i className="bi bi-search"></i>
                        </div>

                        <input className="ms-5" type="text" placeholder="Entrer le titre d’Categorie ..." />

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



                <div className="Ajouter-Categorie" onClick={() => {
                    props.setChoix("Ajouter_Categorie")
                }}>
                    <div className="Botton-AjouterCategorie ms-2">
                        <a>
                            Ajouter Catégorie
                        </a>
                    </div>


                </div>


                <div className="Categories">
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Titre de Catégorie
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
                            {Data.length == 0 ? "" : Data.map((Categorie) => {
                                return (
                                    <tr key={Categorie.id}>
                                        <td>
                                            #{Categorie.id}
                                        </td>
                                        <td>
                                            {Categorie.TitreCat}
                                        </td>
                                        <td>
                                            {Categorie.Compositeur}
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
    ) ;


}


export default AfficherCategories ;


