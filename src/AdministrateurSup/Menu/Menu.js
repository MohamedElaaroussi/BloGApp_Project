
import "./Menu.css";
import React, { useState } from "react";




const Menu = (props) => {

    const [Slide,setSlide] = useState("Cursor-Slide-0") ;


    const ChangerArticle = () => {
        props.ChoixAdmin("Article") ;
        setSlide("Cursor-Slide-1") ;
    }

    const ChangerCategorie = () => {
        props.ChoixAdmin("Categorie") ;
        setSlide("Cursor-Slide-2") ;

    }



    const ChangerAdmin = () => {
        props.ChoixAdmin("Admin") ;
        setSlide("Cursor-Slide-0") ;
    }


    const ChangerProfil = () => {
        props.ChoixAdmin("Profil") ;
        setSlide("Cursor-Slide-3") ;
    }



    const ChangerDeconnexion = () => {
        props.ChoixAdmin("Profil") ;
        setSlide("Cursor-Slide-4") ;
    }


    return (
        <div>
            <div className="MenuAdminSup">
                <div className="SlideAdminSup">
                    <div className={Slide}>
                    </div>


                    <div onClick={ChangerAdmin} className="SlideAdmin-Admin">
                        <div className="Icone-Admin">
                        <i class="bi bi-people"></i>
                        </div>
                        <span className="Span-Administrateur mt-2">
                            Administrateurs
                        </span>
                    </div>

                    <div onClick={ChangerArticle} className="SlideAdminArticle">
                        <div className="Icone-Blog">
                            <i className="bi bi-bootstrap"></i>
                        </div>
                        <span className="Span-Article mt-1">
                            Articles
                        </span>
                    </div>

                    <div className="SlideAdminCat" onClick={ChangerCategorie}>
                        <div className="Icone-Cat">
                            <i className="bi bi-app-indicator"></i>
                        </div>
                        <span className="Span-Categorie mt-1">
                            Catégorie
                        </span>
                    </div>


                    <div onClick={ChangerProfil} className="SlideAdminProfil">
                        <div className="Icone-Profil">
                            <i className="bi bi-person"></i>
                        </div>
                        <span className="Span-Profil mt-2">
                            Profil
                        </span>
                    </div>


                    <div onClick={ChangerDeconnexion} className="SlideAdminLogOut">
                        <div className="Icone-LogOut">
                            <i className="bi bi-box-arrow-left"></i>
                        </div>
                        <span className="Span-Deconnexion mt-1">
                            Déconnexion
                        </span>
                    </div>


                </div>


            </div>

        </div>
    );
}



export default Menu;