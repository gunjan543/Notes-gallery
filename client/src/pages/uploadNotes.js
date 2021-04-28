import Axios from 'axios'; 
import React ,{ Component} from "react";
import '../css/uploadNotes.css';
import $ from 'jquery';
import { SubjectName } from '../subjectsData';


export default class UploadNotes extends Component {
	constructor(props){
        
        super();
        let {name,_id} = JSON.parse(localStorage.getItem('user'));
        let branch = localStorage.getItem('Branch');
	    let semester = localStorage.getItem('Semester'); 
		let result= [];
		this.state = {
            name: name,
			userId:_id,
            branch:branch,
			semester:semester,
			role:'',
			year:'',
			subject:'',
			type:'',
			unit:'',
			other:'',
			uploadedDocument:{},
			uploadedDocumentUrl:''
        };
		
		console.log(branch);
		this.result = SubjectName.filter(obj => { return obj.Branch === branch });
		this.result = this.result.filter(obj => { return obj.Semester === semester });
        $('.dropdown-el').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(e.target).attr('for')).prop('checked',true);
         });
		$(document).click(function() {
			$('.dropdown-el').removeClass('expanded');
		});
	
	}

	uploadDoc = (e) =>{
		this.setState({...this.state, uploadedDocument:e.target.files[0]}, ()=>{

		});
		
	}


	handleChange = text => e => {
		
	this.setState({ ...this.state, [text]: e.target.value });
	
	};
	
	submit = (e) =>{
        e.preventDefault();
       this.props.history.push("/")
    }
    
	uploadDocument = () =>{
		let formData = new FormData();
		formData.append('file', this.state.uploadedDocument);
		formData.append('name', this.state.name);
		formData.append('userId', this.state.userId);
		formData.append('branch', this.state.branch);
		formData.append('semester', this.state.semester);
		formData.append('role', this.state.role);
		formData.append('year', this.state.year);
		formData.append('subject', this.state.subject);
		formData.append('type', this.state.type);
		formData.append('unit', this.state.unit);
		formData.append('other', this.state.other);
		console.log(formData);
		Axios.post('http://localhost:5000/api/uploadNotes1', formData)
		.then((response) => {
			response.data.success ? alert('File successfully uploaded') : alert('File already exists');
			this.props.history.push('/');
		})
		.catch(err => console.log(err));
	}
	
	handleSubmit = e => {
        e.preventDefault();

        this.setState({...this.state});
		this.uploadDocument();
      
    };    
	render(){
    return(

<div class="shade">
		<div class="blackboard">
				<form class="upload-form" autocomplete="new-password" onSubmit={this.handleSubmit}>
						<p>
							<label>Role:</label>
					<span class="select" style={{marginLeft:"73px"}} onChange={this.handleChange('role')}>
							<select name="role" id="slct" >
								<option selected disabled>Choose an option</option>
								<option value="Teacher" >Teacher</option>
								<option value="Student" >Student</option>
							</select>
							</span>
    
  		            	</p>
				
						<p>
							<label>Year:</label>
							<span class="select" style={{marginLeft:"77px"}} onChange={this.handleChange('year')}>
							<select name="year" id="slct">
								<option selected disabled>Choose an option</option>
								<option value="1" > 2021 </option>
								<option value="2" > 2020 </option> 
								<option value="3" > 2019 </option>
								<option value="3" > 2018 </option>
								<option value="3" > 2017 </option>
								<option value="3" > 2016 </option>
								<option value="3" > 2015 </option>
								<option value="3" > 2014 </option>
								<option value="3" > 2013 </option>
								<option value="3" > 2012 </option>
								<option value="3" > 2011 </option>
								<option value="3" > 2010 </option>
							</select>
							</span>
    
  			            </p> 
						  <p>
								<label>Subject:</label>

                                <span class="select" style={{marginLeft:"41px"}} onChange={this.handleChange('subject')}>
								<select name="slct" id="slct">
							    <option selected disabled>Choose an option</option>		
								{
									   this.result.map((subject) => {
										{ 
											return subject.Subjects.map((eachSubject) =>{
											   return <option>{eachSubject}</option>
												}	)
										}
									   })

									}  
								
									</select>
								</span>
    
  			            </p>
						  <p>
								<label>Type:</label>
                                <span class="select" style={{marginLeft:"79px"}} onChange={this.handleChange('type')}>
								<select name="slct" id="slct">
									<option selected disabled>Choose an option</option>
									<option value="Notes"> Notes </option>
									<option value="Important Questions"> Important Questions </option>
									<option value="Question Papers"> Question Papers </option>
								</select>
								</span>
    
  			            </p>  
						<p>
								<label>Unit:</label>
                                <span class="select" style={{marginLeft:"79px"}} onChange={this.handleChange('unit')}>
								<select name="slct" id="slct">
									<option selected disabled>Choose an option</option>
									<option value="All"> All </option>
									<option value="1"> 1 </option>
									<option value="2" > 2 </option>
									<option value="3" > 3 </option>
									<option value="4" > 4 </option>
									<option value="5" > 5 </option>
									<option value="6" > 6 </option>
									<option value="7" > 7 </option>
									<option value="8" > 8 </option>

								</select>
								</span>
    
  			            </p>   
						  <p>
							<span onChange={this.handleChange('other')}>
								<label>Other: </label>
								<input type="text" autocomplete="new-password"/>
								</span>
						</p> 
						<p>
								<label >Document: </label>
								<span className="upload-file" style={{marginLeft:"0px"}}>
								<input type="file" name="upload" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" className="subject-name" onChange={this.uploadDoc}/>
								</span>
						</p>

						<p class="wipeout">
								<input type="submit" value="Submit" />
						</p>
				</form>
		</div>
</div>
    )
    }
}