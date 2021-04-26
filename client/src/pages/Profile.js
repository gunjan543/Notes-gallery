import React, {useState, useEffect} from 'react';
import Navbar from "../components/navbar";
import Axios from 'axios';
import '../css/profile.css'

export default function Profile(){
   
    let[notes, setNotes] = useState([]);
    let {_id,name} = JSON.parse(localStorage.getItem('user'));
    useEffect( ()=>{

    
    Axios
    .post(`http://localhost:5000/api/getNotes`, {id:_id})
    .then( res=>{ 
        setNotes(res.data);
    })

},[]);

    return(
        <>
        <Navbar></Navbar>
        <section>
        <h1>Hello, <span style={{textTranform:"title-case"}}>{name}</span></h1>
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
            <thead>
                <tr>
                <th>Subject Name</th>
                <th>Type</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Preview</th>
                </tr>
            </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
                {notes.map((note)=>{
                    return(
                        <tr>
                <td>{note.subject}</td>
                <td>{note.type}</td>
                <td>{note.branch}</td>
                <td>{note.semester}</td>
                <td>{note.document}</td>
                </tr>
                    )
                })}
               
            </tbody>
            </table>
        </div>
        </section>
        </>
    )
} 