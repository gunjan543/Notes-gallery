import React from 'react';
import "../css/subjects.css";
import Navbar from "../components/navbar";
import {useHistory} from "react-router-dom";

export default function Type(){
    let history = useHistory();

    function submitSubject(subject)
    {
      localStorage.setItem('type', subject);
      history.push("/displayNotes");
    }
    return(
        <>
        <Navbar></Navbar>
        <h1 className="subject-heading">What are you looking for ?</h1>
        <div className="row subject-row type-row">
            <div className="col-md-4 col-sm-6 col-xs-12 hvr-bounce-to-right type-col" onClick={()=>{submitSubject('Notes')}}>Notes</div>
            <div className="col-md-4 col-sm-6 col-xs-12 hvr-bounce-to-right type-col" onClick={()=>{submitSubject('Question Papers')}}>Question Papers</div>
            <div className="col-md-4 col-sm-6 col-xs-12 hvr-bounce-to-right type-col" onClick={()=>{submitSubject('Important Questions')}}>Important Questions</div>
        </div>
        
        </>
    )
} 