

import SlidesNouveaux from "../Composants/Cartes/Nouveaux/SlidesNouveaux";
import SlidesPublic from "../Composants/Cartes/Public/SlidesPublic";
import SlidesTendance from "../Composants/Cartes/Tendance/SlidesTendance";
import Header from "../Composants/Header/Header";
import "./Accueil.css";
import SectionEntreprise from "./SectionEntreprise/SectionEntreprise";
import SectionPubs from "./SectionPubs/SectionPubs";
import SectionPubCompositeurs from "./SectionPubCompositeurs/SectionPubCompositeurs";
import SectionSupport from "./SectionSupport/SectionSupport";
import SectionReputation from "./SectionReputation/SectionReputation";
import Footer from "../Composants/Footer/Footer";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Article from "./Article/Article";



const Accueil = () => {
    
    const location = useLocation();

    const currentPath = location.pathname;

    
  

    
    return (
        <div className="Page-Accueil-Cover">

            <div className="Page-Accueil">
                <div className="Emplacement-Header">
                    <Header />
                </div>
                

                {currentPath == "/Article" ? "" : <div>
            
                <div className="Emplacement-Section-Pubs">
                <SectionPubs />
            </div>

            <div className="Emplacement-Slides-Tendance">
                <SlidesTendance />
            </div>

            <div className="Emplacement-Section-Entreprise">
             <SectionEntreprise />
            </div>

            <div className="Emplacement-Slides-Public">
            <SlidesPublic/>
            
            </div>

            <div className="Emplacement-Slides-Nouveaux">
            <SlidesNouveaux/>
            
            </div>

            <div className="Emplacement-Section-Pub-Compositeur">
            <SectionPubCompositeurs />
            </div>
            </div>}
               

                <div className="Emplacement-Section-Support">
                <SectionSupport />
                </div>

                <div className="Emplacement-Section-Reputation">
                <SectionReputation />
                </div>

                <div className="Emplacement-Footer">
                <Footer />
                </div>




            </div>

        </div>
    );
}



export default Accueil;