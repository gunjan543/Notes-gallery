import React, {useState,useEffect} from 'react';
import Navbar from "../components/navbar";
import Axios from 'axios';
import '../css/profile.css';


export default function Profile(){
   
    let[notes, setNotes] = useState([]);
    let {_id,name} = JSON.parse(localStorage.getItem('user'));
    useEffect(() =>
    {
    Axios
    .post(`http://localhost:5000/api/getProfileNotes`, {id:_id})
    .then( res=>{ 
        console.log(res.data);
        setNotes(res.data.documents);
    })
    },[]);

    function deleteNote(id){
   
        Axios
        .get('http://localhost:5000/api/deleteNote/'+id)
        .then((response)=>{
            if(response.data.success){
                alert("Note has been successfully deleted");
                setNotes(notes.filter(el=>el._id!==id));
            }
        })
        .catch(err => alert(err));
    }

    return(
        <>
        <Navbar></Navbar>
        <section className="profile-table">
            <h1>Hello, <span style={{textTransform:"capitalize"}}>{name}</span></h1>
            
                <table>
                <thead>
                    <tr>
                    <th>Subject Name</th>
                    <th>Type</th>
                    <th>Unit</th>
                    <th>Semester</th>
                    <th>Preview</th>
                    <th>Delete</th>
                    </tr>
                </thead>  
                <tbody>
                    {notes.map((note)=>{
                        return(
                    <tr>
                    <td>{note.subject}</td>
                    <td>{note.type}</td>
                    <td>{note.unit}</td>
                    <td>{note.semester}</td>
                    <td> <a href={'http://localhost:5000/api/file/'+note.filename}>Preview</a></td>
                    <td onClick={()=>{deleteNote(note._id)}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash delete" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg></td>
                    </tr>
                        )
                    })}
                </tbody>
                </table>
          
        </section>
       
        </>
    )
} 