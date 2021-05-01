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
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
    <a href="/" className="site-logo"><img src={logo}></img></a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
  
    <a href="/filter" className="upload hvr-bounce-to-top">Upload Notes</a>
    <a href="/" className="upload hvr-bounce-to-top" onClick={signout}>Logout</a>
    <a href="/profile" className="upload hvr-bounce-to-top">Profile</a>
  </div>
</div>

</>
    )
}