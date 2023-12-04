import "./AjouterCategorie.css" ;





const AjouterCategorie = (props) => {
    return(
        <div>
            <div className="Ajouter-Categorie">
                <div className="Emplacement-Ajouter-Categorie">
                    <div className="Annuler" onClick={() => {
                        props.setChoix("Afficher_Categories")
                    }}>
                        <span>
                            <i class="bi bi-arrow-left"></i>
                        </span>
                        <span>
                            Annuler
                        </span>

                    </div>


                    <div className="Champs-TitreC">
                        <span>
                            Titre :
                        </span>
                        <input placeholder="Donner le titre de categorie" type="text" />
                    </div>

                   

                    <div className="Section-Contenu-Paragraphe">
                    <div className="Contenu-Paragraphe">
                        <span>
                            Paragraphe :
                        </span>
                    </div>
                    <div className="input-Contenu-Paragraphe">
                        <textarea placeholder="Ecrire votre paragraphe ... ">
                        
                        </textarea>
                    </div>
                    
                </div>
        

                    <div className="Champs-Image">
                        <span>
                            Image :
                        </span>
                        <input type="text" placeholder="Charger l'image de l'Categorieistrateur" />
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



export default AjouterCategorie ;