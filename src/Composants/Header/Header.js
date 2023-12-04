
import { useNavigate , Link } from "react-router-dom";
import "./Header.css";




const Header = () => {

    const Navigate = useNavigate() ; 
    return (
        <div className="Header">
            <div className="Logo">
                <img src="./Logo/logoBlogAPP.png" />
            </div>
            <div className="Boite-Recherche">
                <div className="Icon-Search">
                    <i className="bi bi-search"></i>
                </div>

                <input type="text" placeholder="Rechercher un article ..." />
            </div>

            <div className="Bottons">
                <div className="Login">
                    <button onClick={() => Navigate("/Authentification")}>
                        Login
                    </button>
                </div>
                <div className="Register">
                    <button onClick={() => Navigate("/Authentification")}>
                        Register
                    </button>
                </div>

            </div>
        </div>
    );
};


export default Header;