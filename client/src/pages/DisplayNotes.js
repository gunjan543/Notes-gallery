import React, {Component} from 'react';
import axios from 'axios';
export default class DisplayNotes extends Component{

    constructor(props){
        super();
        this.state={
            documents:[]
        };
    }
    componentDidMount=()=>{
        let branchname= localStorage.getItem('branchname');
        axios.post('http://localhost:5000/api/getNotes', {branchname})
        .then(response=>{
            console.log(response);
          this.setState({documents:response.data.documents})  
        })
        .catch(err=>console.log(err));

    }

    render(){
        return(
        <>
            <div>
                {this.state.documents.map((file)=>(
                <div>
                    <p>
                        <a href={'http://localhost:5000/api/file/'+file.filename}>Click</a>
                    </p>
                </div>
                )

                )}
            </div>
            

        </>

        )
    }

        
    
} 