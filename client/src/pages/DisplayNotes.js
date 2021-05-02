import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "../components/navbar";
import '../css/displayNotes.css';
import not_found from '../images/not_found.jpg';

let type;
let subjectName;
export default class DisplayNotes extends Component{

    constructor(props){
        super();
        this.state={
            documents:[]
        };
    }
    componentDidMount=()=>{
        subjectName= localStorage.getItem('subjectName');
        type = localStorage.getItem('type');
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/getNotes`, {subjectName,type})
        .then(response=>{
            console.log(response);
          this.setState({documents:response.data.documents})  
        })
        .catch(err=>console.log(err));

    }

    render(){
        return(
        <>
        <Navbar></Navbar>
            <div className="display">
            {this.state.documents.length===0?
            <div className="not-found">
            <h1>Oops! No {type} of {subjectName} found, try again later!</h1>
            <img src = {not_found}></img>
            </div>:
                <div>
                {this.state.documents.map((file)=>(
                <div className="display-notes">
                    <h3>{file.subject} - Unit {file.unit}</h3>
                    <h2>{file.other} {file.year}</h2>
                    <p>By - {file.name} ({file.role})</p>
                    <p>
                        <a href={'${process.env.REACT_APP_BACKEND_URL}/api/file/'+file.filename} >View Notes</a>
                    </p>
                </div>
                )

                )}
                <footer className="footer"><p>© Designed & Maintained : Aditi Singh and Gunjan Agarwal| Computer Science & Engineering |  RCEW 2021</p></footer>    
            </div>
            
            }
            
            </div>
            
        </>

        )
    }

        
    
} 