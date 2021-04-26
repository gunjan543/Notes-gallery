import React from 'react';
import '../css/navbar.css';
import logo from '../images/logo.png'
import {removeCookie, removeLocalStorage,isAuth} from '../helpers/auth';
import {useHistory} from "react-router-dom";

export default function Navbar(){
  let history = useHistory();
  function signout(){
    removeCookie('token');
    removeLocalStorage('user');
    history.push('/');
  }
    return(<>
  <header className="header-area">
  
  <div className="navbar-area blurred-box">
    <div className="container">
      <nav className="site-navbar">
        <a href="#home" className="site-logo"><img src={logo}></img></a>
       
           {!isAuth()?
           <ul className="navbar-1">
            <li><a href="/filter" className="upload hvr-bounce-to-top">Upload Notes</a></li>
          <li><a href="/login" className="upload hvr-bounce-to-top">Login</a></li>
          </ul>
          :
          <ul className="navbar-2">
          <li><a href="/filter" className="upload hvr-bounce-to-top">Upload Notes</a></li>
          <li><a href="/" className="upload hvr-bounce-to-top" onClick={signout}>Logout</a></li>
          <li><a href="/profile" className="upload hvr-bounce-to-top">Profile</a></li>
          </ul>  
           }
      </nav>
    </div>
  </div>
</header>
</>
    )
}