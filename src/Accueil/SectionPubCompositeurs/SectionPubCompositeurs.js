import "./SectionPubCompositeurs.css";






const SectionPubCompositeurs = () => {
    return (
        <div className="SectionPubCompositeurs">
            <div className="Image-Compositeur">
                <img src="./Compositeur/P_IMAGE.png" />
            </div>
            <div className="Section-2">
                <div className="ConsulterC_Titre">
                    <span>
                        Consulter l'équipe rédactionnelle ...
                    </span>
                </div>

                <button className="Botton-Voir-Plus">
                Voir plus
                </button>
            </div>
        </div>
    );
}


export default SectionPubCompositeurs;