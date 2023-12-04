import "./AjouterAdministrateur.css";





const AjouterAdmin = (props) => {
    return (
        <div>
            <div className="Ajouter-Admin">
                <div className="Emplacement-Ajouter-Admin">
                    <div className="Annuler" onClick={() => {
                        props.setChoix("Afficher_Admins")
                    }}>
                        <span>
                            <i class="bi bi-arrow-left"></i>
                        </span>
                        <span>
                            Annuler
                        </span>

                    </div>


                    <div className="Champs-NomC">
                        <span>
                            Nom complet :
                        </span>
                        <input placeholder="Entrer le nom complet" type="text" />
                    </div>

                    <div className="Champs-Email">
                        <span>
                            Email :
                        </span>
                        <input type="text" placeholder="Entrer l'email d'administrateur" />
                    </div>

                    <div className="Champs-MotDePasse">
                        <span>
                            Mot de passe :
                        </span>
                        <input type="text" placeholder="Entrer un mot de passe" />
                    </div>


                    <div className="Champs-Image">
                        <span>
                            Image :
                        </span>
                        <input type="text" placeholder="Charger l'image de l'administrateur" />
                    </div>


 
                    <div className="Botton-Enregistrer">
                    <button>
                    <span>
                    Enregistrer

                    </span>
                    </button>
                    
                    </div>




                </div>

                <div className="Forme-1">
             <img src="Shaps/Chape_1.png" />
                
                </div>


            </div>


        </div>
    );
}





export default AjouterAdmin;