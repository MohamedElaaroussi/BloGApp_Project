import "./Footer.css" ;




const Footer = () => {

    return(
        <div className="Footer">
        <div className="Logo">
                <img src="./Logo/logoBlogAPP.png" />
        </div>
        <div className="Links">
        <div className="Adress">
        <span>
        ADRESS : 
        </span><span className="mt-1">
        6391 Elgin St. Celina, Delaware 10299
        
        </span>
        </div>
        <div className="Phone">
        <span>
        PHONE :
        </span>
        <span className="mt-1">
        +84 1102 2703
        </span>
        </div>
        <div className="Email">
        <span>
        EMAIL :
        </span>
        <span className="mt-1 ms-1">
        Blog_App_41@gmail.com 
        </span>
        
        </div>
        
        </div>


        <div className="Social">
        <span>
        SOCIAL :
        </span> 

       <div>
       <span >
       <ion-icon name="logo-instagram"></ion-icon>
       </span>

       <span >
       <ion-icon name="logo-twitch"></ion-icon>
       </span>

       <span >
       <ion-icon name="logo-whatsapp"></ion-icon>
       </span>
       </div>

        </div>
        </div>
    )


}


export default Footer ;