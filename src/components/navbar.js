import React from 'react';
import '../css/navbar.css';
import logo from '../images/logo.png'
export default function Navbar(){
  
    return(<>
  <header className="header-area">
  
  <div className="navbar-area blurred-box">
    <div className="container">
      <nav className="site-navbar">
        <a href="#home" className="site-logo"><img src={logo}></img></a>
        <ul>
          <li><a href="/filter" className="upload hvr-bounce-to-top">Upload Notes</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
</>
    )
}