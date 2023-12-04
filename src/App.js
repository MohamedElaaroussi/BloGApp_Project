import React from "react";
// import Header from "./Composants/Header/Header";
// import Accueil from "./Accueil/Accueil";

// import Administrateur from "./Administrateur/Administrateur" ;
import AdministrateurSup from "./AdministrateurSup/AdministrateurSup";

import Accueil from "./Accueil/Accueil";

import Auth from "./Composants/Auth/Auth";
import Administrateur from "./AdministrateurSup/Administrateur/Administrateur";

import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';





const App = () => {
  

  return (

    <div>
   <Router>
   <Routes>

   <Route  exact path="/" element={<Accueil />} />
   <Route path="/AdminSup"  element={<AdministrateurSup />} />
   <Route path="/Authentification" element={<Auth />} />
   <Route path="/Article" element={<Accueil />} />


 
   </Routes>
   </Router>
    </div>
  ) ;
}

export default App ;

