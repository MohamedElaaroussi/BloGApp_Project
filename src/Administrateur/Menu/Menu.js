
import "./Menu.css";
import React, { useState } from "react";




const Menu = (props) => {

    const [Slide,setSlide] = useState("Cursor-Slide-1") ;


    const ChangerArticle = () => {
        props.ChoixAdmin("Article") ;
        setSlide("Cursor-Slide-1") ;
    }

    const ChangerCategorie = () => {
        props.ChoixAdmin("Categorie") ;
        setSlide("Cursor-Slide-2") ;

    }
    return (
        <div>
            <div className="MenuAdmin">
                <div className="SlideAdmin">
                    <div className={Slide}>
                    </div>
                    <div onClick={ChangerArticle} className="SlideAdminArticle">
                        <div className="Icone-Blog">
                            <i className="bi bi-bootstrap"></i>
                        </div>
                        <span className="Span-Article">
                            Articles
                        </span>
                    </div>

                    <div className="SlideAdminCat" onClick={ChangerCategorie}>
                        <div className="Icone-Cat">
                            <i className="bi bi-app-indicator"></i>
                        </div>
                        <span className="Span-Categorie">
                            Catégorie
                        </span>
                    </div>


                    <div className="SlideAdminProfil">
                        <div className="Icone-Profil">
                            <i className="bi bi-person"></i>
                        </div>
                        <span className="Span-Profil">
                            Profil
                        </span>
                    </div>


                    <div className="SlideAdminLogOut mt-2">
                        <div className="Icone-LogOut">
                            <i className="bi bi-box-arrow-left"></i>
                        </div>
                        <span className="Span-Deconnexion mt-2">
                            Déconnexion
                        </span>
                    </div>


                </div>


            </div>

        </div>
    );
}



export default Menu;