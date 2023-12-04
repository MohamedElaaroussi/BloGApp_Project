import "./AjouterArticle.css";



const AjouterArticle = () => {

    return (
        <div className="Section-Ajouter-Article">
            <div className="Botton-Annuler">
                <span className="Icone-Annuler mt-1 me-2">
                    <ion-icon name="arrow-back-circle-outline"></ion-icon>
                </span>
                <span>
                    Annuler
                </span>
            </div>

            <div className="Section-Titre-Article">
                <div className="Titre-Article">
                    <span>
                        Titre d'article :
                    </span>
                </div>
                <div className="input-Titre-Article">
                    <input type="text" placeholder="Donner une titre á l'article" />
                </div>
                
            </div>

            <div className="Bordure">
            </div>

            <div className="Section-Paragraphe">
            <div className="Section-Titre-Paragraphe">
                <div className="Titre-Paragraphe">
                    <span>
                        Titre de paragraphe :
                    </span>
                </div>
                <div className="input-Titre-Paragraphe">
                    <input type="text" placeholder="Donner une titre au paragraphe ..." />
                </div>
                
            </div>

            <br />

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



            <div className="Section-Chargement-Fichier">
            <div className="input-Contenu-Fichier">
            <input type="file" />

            </div>
            </div>
            </div>



            

            

           
          




        </div>
    );

}

export default AjouterArticle;