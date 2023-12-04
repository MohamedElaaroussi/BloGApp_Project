

import "./AfficherAdministrateurs.css" ;
import { useEffect , useState } from "react";





const AfficherAdministrateurs = (props) => {

    useEffect(() => {
        console.log("Data") ;
        fetch("http://localhost:3050/Admin").then((Res) => {return (Res.json())}).then(Val => {
            SetData(Val) ;
        });
        
    },[]);

    const [Data, SetData] = useState([]);



    return (
        <div className="AdminSup-Admin">
        <div>

            <div className="RechercheAdmin">
                <div className="BoiteRecherche-Admin">
                    <div className="Icon-Search">
                        <i className="bi bi-search"></i>
                    </div>

                    <input className="ms-5" type="text" placeholder="Entrer l'email d'administrateur ..." />

                </div>

            </div>


            <div className="Recherche-Compositeur-Id">
                <div className="BoiteRecherche-Compositeur">

                    <label>
                        Administrateur :
                    </label>
                    <input className="" type="text" placeholder="Entrer le nom d'administrateur ..." />

                </div>
                <div className="BoiteRecherche-Id">
                    <label>
                        ID :
                    </label>
                    <input className="" type="text" placeholder="Entrer ID ..." />

                </div>


            </div>



            <div className="Ajouter-Admin" onClick={() => {
                props.setChoix("Ajouter_Admin")
            }}>
                <div className="Botton-AjouterAdmin ms-3">
                    <a>
                        Ajouter Admin
                    </a>
                </div>


            </div>


            <div className="Admins">
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Nom Complet
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Mot De Passe
                                </th>
                                <th>

                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {Data.length == 0 ? "" : Data.map((Admin) => {
                            return (
                                <tr key={Admin.id}>
                                    <td>
                                        #{Admin.id}
                                    </td>
                                    <td>
                                        {Admin.NomC}
                                    </td>
                                    <td>
                                        {Admin.Email}
                                    </td>
                                    <td>
                                        {Admin.MotDePasse}
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



export default AfficherAdministrateurs ;