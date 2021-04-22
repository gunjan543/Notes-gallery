import React from "react";
import '../css/landing.css';
import landing_page from '../images/landing_page.jpg';
import Offer from '../components/offer';
import Branches from '../components/branches';
import Navbar from "../components/navbar";

export default function LandingPage() {
    const streams = ['Computer Science Engineering',"Civil Engineering","Electrical Engineering","Electronics and Communication Engineering"];
    function createEntry(branchName) {
        return (
          <Branches
            name={branchName}
          />
        );
      }
    return(
        <div className="landing">
        <div className="landing-page">
        <Navbar></Navbar>
        <div className="left-landing">
        <img src={landing_page} className="landing-img"></img>
        </div> 
        <div className="right-landing" > 
            <h3><span className="college-notes">College Notes </span>Gallery</h3>
            <p>It is a platform for Peer-to-Peer Notes sharing, where faculties and toppers share their class notes with other students.</p>
            <div class="button-7" id="button-7">
                <div id="dub-arrow"><img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" /></div>
                <a href="#">Let's Go!</a>
           </div>
        </div>
        </div>
        <div className="branch">
        <h2>Select your branch</h2>
        <div className="dictionary">{streams.map(createEntry)}</div>
        </div>
         <Offer/>
        <div className="footer"><p>© Designed & Maintained : Aditi Singh and Gunjan Agarwal| Computer Science & Engineering |  RCEW 2021</p></div>
        </div>
    )
    
}
