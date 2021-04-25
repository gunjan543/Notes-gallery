import React from 'react';
import '../css/navbar.css';
import logo from '../images/logo.png'
import {isAuth} from "../helpers/auth";
export default function Navbar(){
  
    return(<>
  <header className="header-area">
  
  <div className="navbar-area blurred-box">
    <div className="container">
      <nav className="site-navbar">
        <a href="#home" className="site-logo"><img src={logo}></img></a>
       
           {!isAuth()?
           <ul>
            <li><a href="/filter" className="upload hvr-bounce-to-top">Upload Notes</a></li>
          <li><a href="/login" className="upload hvr-bounce-to-top">Login</a></li>
          </ul>
          :
          <ul>
          <li><a href="/filter" className="upload hvr-bounce-to-top">Upload Notes</a></li>
          <li><a href="/logout" className="upload hvr-bounce-to-top">Logout</a></li>
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