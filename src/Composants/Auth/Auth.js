

import "./Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Auth = () => {
   



   const Navigate = useNavigate() ;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Error , setError] = useState(false) ;
    
   
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login verification
    fetch('http://localhost:4040/User')
      .then((response) => response.json())
      .then((data) => {
        const foundUser = data.find(
          (user) => user.email === email && user.password === password
        );

        if (foundUser) {
          
          console.log(foundUser) ;

          if(foundUser.isAdmin){
            Navigate("/AdminSup") ;
          }
        } else {
         setError(true) ;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };




    let changeForm = (e) => {
    
        let switchCtn = document.querySelector("#switch-cnt");
        let switchC1 = document.querySelector("#switch-c1");
        let switchC2 = document.querySelector("#switch-c2");
        let switchCircle = document.querySelectorAll(".switch__circle");
     
        let aContainer = document.querySelector("#a-container");
        let bContainer = document.querySelector("#b-container");
       
        switchCtn.classList.add("is-gx");


        setTimeout(function(){
            switchCtn.classList.remove("is-gx");
        }, 1500)
    
        switchCtn.classList.toggle("is-txr");
        switchCircle[0].classList.toggle("is-txr");
        switchCircle[1].classList.toggle("is-txr");
    
        switchC1.classList.toggle("is-hidden");
        switchC2.classList.toggle("is-hidden");
        aContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-z200");
    }
    





    return (
      <div className="Auth">
      <div className="main">

      <div className="container a-container" id="a-container">

          <form className="form" id="a-form" method="" action="">
              <h2 className="form_title title">Create Account</h2>

              <div className="form__icons">
                  <img className="form__icon" src="" />

              </div>

              <input className="form__input" type="text" placeholder="Name" />
              <input className="form__input" type="text" placeholder="Email" />
              <input className="form__input" type="password" placeholder="Password" />
              <button className="form__button button submit">SIGN UP</button>

          </form>

      </div>

      <div className="container b-container" id="b-container">
      <form className="form" id="b-form" onSubmit={handleSubmit}>
    <img className="imglogin" src="logoBlogAPP.png" alt="" />

    <h2 className="form_title title">Sign in to Website</h2>
    <div className="form__icons">
    <img className="form__icon" src="" alt="" />
    <img className="form__icon" src="" />
    <img className="form__icon" src="" />
    </div>
    <input onChange={(e) =>  setEmail(e.target.value)} className={Error?"form__input border border-danger" :"form__input"} type="text" placeholder="Email" />
    <input onChange={(e) => setPassword(e.target.value)} className={Error?"form__input border border-danger" :"form__input"} type="password" placeholder="Password" /><span className="form__link">Forgot your password?</span>
    <button className="form__button button submit">SIGN IN</button>
  </form>
</div>

<div className="switch" id="switch-cnt">
  <div className="switch__circle"></div>
  <div className="switch__circle switch__circle--t"></div>
  <div className="switch__container" id="switch-c1">
    <img className="imglogin1" src="logoBlogAPP.png" alt="" />

    <h2 className="switch__title title">Welcome Back !</h2>
    <p className="switch__description description">To keep connected with us please login with your personal info</p>
    <button className="switch__button button switch-btn" onClick={changeForm}>SIGN IN</button>
  </div>
  <div className="switch__container is-hidden" id="switch-c2">
    <h2 className="switch__title title">Hello Friend !</h2>
    <p className="switch__description description">Enter your personal details and start journey with us</p>
    <button className="switch__button button switch-btn" onClick={changeForm}>SIGN UP</button>
  </div>
</div>

  </div>
      </div>
    )


}



export default Auth;