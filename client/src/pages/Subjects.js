import { each } from 'jquery';
import React from 'react';
import { SubjectName } from '../subjectsData';
import Navbar from "../components/navbar";
import {useHistory} from "react-router-dom";
import "../css/subjects.css";

export default function Subjects(){
    let history = useHistory();
    let branchname = localStorage.getItem('branchname');
    let result=SubjectName.filter(obj => { return obj.Branch === branchname });

    function submitSubject(subject)
    {
      localStorage.setItem('subjectName', subject);
      history.push("/type");
      console.log(subject);
    }
 
    return(
        <>
        <Navbar></Navbar>
        <h1 className="subject-heading">Select Subject</h1>
        <div class="row subject-row ">
            {
                result.map((subject) => {
                    { 
                        return subject.Subjects.map((eachSubject) =>{
                           return  <div onClick={()=>{submitSubject(eachSubject)}} class="col-md-3 col-sm-6 col-xs-12 subject hvr-bounce-to-right">{eachSubject}</div>
                            }	)
                    }
                   })
            }
        </div>
        <div className="footer"><p>© Designed & Maintained : Aditi Singh and Gunjan Agarwal| Computer Science & Engineering |  RCEW 2021</p></div>
        </>
    )
} 