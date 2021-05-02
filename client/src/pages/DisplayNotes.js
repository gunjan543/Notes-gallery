import React, {Component} from 'react';
import axios from 'axios';
import Navbar from "../components/navbar";
import '../css/displayNotes.css'
export default class DisplayNotes extends Component{

    constructor(props){
        super();
        this.state={
            documents:[]
        };
    }
    componentDidMount=()=>{
        let subjectName= localStorage.getItem('subjectName');
        let type= localStorage.getItem('type');
        axios.post('http://localhost:5000/api/getNotes', {subjectName,type})
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
                {this.state.documents.map((file)=>(
                <div className="display-notes">
                    <h3>{file.subject} - Unit {file.unit}</h3>
                    <h2>{file.other} {file.year}</h2>
                    <p>By - {file.name} ({file.role})</p>
                    <p>
                        <a href={'http://localhost:5000/api/file/'+file.filename} >View Notes</a>
                    </p>
                </div>
                )

                )}
            </div>
            
            <footer className="footer"><p>© Designed & Maintained : Aditi Singh and Gunjan Agarwal| Computer Science & Engineering |  RCEW 2021</p></footer>    

        </>

        )
    }

        
    
} 