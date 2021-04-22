import React ,{ useState} from "react";
import {useHistory} from "react-router-dom";
import '../css/uploadNotes.css';
import $ from 'jquery';
import { SubjectName } from '../subjectsData';
 

export default function UploadNotes() {
    let history = useHistory();
	let branch = localStorage.getItem('Branch');
	let semester = localStorage.getItem('Semester');
	let result = SubjectName.filter(obj => {return obj.Branch === branch})
	result = result.filter(obj => {return obj.Semester === semester})
    $('.dropdown-el').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(e.target).attr('for')).prop('checked',true);
      });
      $(document).click(function() {
        $('.dropdown-el').removeClass('expanded');
      });

	  function submit(e){
        e.preventDefault();
       history.push("/")
    }
    return(

<div class="shade">
		<div class="blackboard">
				<form class="upload-form" autocomplete="new-password" onSubmit={submit}>
						<p>
								<label>Name: </label>
								<input type="text" autocomplete="new-password"/>
						</p>
						<p>
								<label>Email: </label>
								<input type="email" autocomplete="new-password"/>
						</p>
						<p>
							<label>Role:</label>
							<span class="select" style={{marginLeft:"73px"}}>
							<select name="slct" id="slct" >
								<option selected disabled>Choose an option</option>
								<option value="1" >Teacher</option>
								<option value="2" >Student</option>
							</select>
							</span>
    
  		            	</p>
						<p>
								<label>Class:</label>
                                <span class="select" style={{marginLeft:"66px"}}>
								<select name="slct" id="slct">
									<option selected disabled>Choose an option</option>
									<option value="1" >I year</option>
									<option value="2" >II year</option>
									<option value="3" >III year</option>
									<option value="4" >IV year</option>
								</select>
								</span>
    
  			            </p>
				
						<p>
								<label>Year:</label>
                                <span class="select" style={{marginLeft:"77px"}}>
								<select name="slct" id="slct">
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
								<label>Type:</label>
                                <span class="select" style={{marginLeft:"79px"}}>
								<select name="slct" id="slct">
									<option selected disabled>Choose an option</option>
									<option value="1"> Notes </option>
									<option value="2"> Important Questions </option>
									<option value="3" > Question Papers </option>
								</select>
								</span>
    
  			            </p>  
						  <p>
								<label>Subject:</label>

                                <span class="select" style={{marginLeft:"41px"}}>
								<select name="slct" id="slct">
							    <option selected disabled>Choose an option</option>		
								{
									   result.map((subject) => {
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
                                <span class="select" style={{marginLeft:"79px"}}>
								<select name="slct" id="slct">
									<option selected disabled>Choose an option</option>
									<option value="1"> Notes </option>
									<option value="2"> Important Questions </option>
									<option value="3" > Question Papers </option>
								</select>
								</span>
    
  			            </p>  
						<p>
								<label>Unit:</label>
                                <span class="select" style={{marginLeft:"79px"}}>
								<select name="slct" id="slct">
									<option selected disabled>Choose an option</option>
									<option value="1"> All </option>
									<option value="2"> 1 </option>
									<option value="3" > 2 </option>
									<option value="3" > 3 </option>
									<option value="3" > 4 </option>
									<option value="3" > 5 </option>
									<option value="3" > 6 </option>
									<option value="3" > 7 </option>
									<option value="3" > 8 </option>

								</select>
								</span>
    
  			            </p>    
						<p>
								<label >Document: </label>
								<span className="upload-file" style={{marginLeft:"12px"}}>
								<input type="file" name="upload" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" className="subject-name"/>
								</span>
						</p>
						<p>
								<label>Other: </label>
								<input type="text" autocomplete="new-password"/>
						</p>
						<p class="wipeout">
								<input type="submit" value="Send" />
						</p>
				</form>
		</div>
</div>
    )
    }