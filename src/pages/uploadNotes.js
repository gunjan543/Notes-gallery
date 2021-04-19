import React ,{ useState} from "react";
import './uploadNotes.css';
import $ from 'jquery';
import { Subjects } from '../subjectsData';
export default function UploadNotes() {
	const [ semester, setSemester ] = useState('I');
	const [ branch,setBranch ] = useState("");

	function setValues1(e)
	{
      setSemester(e.target.value);
	}

	function setValues2(e)
	{
      setBranch(e.target.value);
	}
	
    $('.dropdown-el').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#'+$(e.target).attr('for')).prop('checked',true);
      });
      $(document).click(function() {
        $('.dropdown-el').removeClass('expanded');
      });
    return(

<div class="shade">
		<div class="blackboard">
				<form class="form" autocomplete="new-password">
						<p>
								<label>Name: </label>
								<input type="text" autocomplete="new-password"/>
						</p>
						<p>
								<label>Email: </label>
								<input type="email" autocomplete="new-password"/>
						</p>
						<p>
							<label>Role: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
							<span class="select">
							<select name="slct" id="slct">
								<option selected disabled>Choose an option</option>
								<option value="1" >Teacher</option>
								<option value="2" >Student</option>
							</select>
							</span>
    
  		            	</p>
						<p>
								<label>Class: &nbsp; &nbsp;&nbsp;</label>
                                <span class="select">
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
								<label>Semester: </label>
                                <span class="select">
								<select name="slct" id="slct" onChange={setValues1}>
									<option selected disabled>Choose an option</option>
									<option value="I" > I </option>
									<option value="II" > II </option> 
									<option value="III" > III </option>
									<option value="IV" > IV </option>
									<option value="V" > V </option>
									<option value="VI" > VI </option>
									<option value="VII" > VII </option>
									<option value="VIII" > VIII </option>
								</select>
								</span>
    
  			            </p> 
						<p>
								<label>Branch:&nbsp;&nbsp; </label>
                                <span class="select">
								<select name="slct" id="slct" onChange={setValues2}>
									<option selected disabled>Choose an option</option>
									<option value="Computer Science" >Computer Science</option>
									<option value="Electrical" >Electrical</option>
									<option value="Civil" >Civil</option>
									<option value="Electronics and Communication" >Electronics and Communication</option>
								</select>
								</span>
    
  			            </p>
						<p>
								<label>Year: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <span class="select">
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
								<label>Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <span class="select">
								<select name="slct" id="slct">
									<option selected disabled>Choose an option</option>
									<option value="1"> Notes </option>
									<option value="2"> Important Questions </option>
									<option value="3" > Question Papers </option>
								</select>
								</span>
    
  			            </p>  
						  <p>
								<label>Subject:&nbsp;&nbsp; </label>

                                <span class="select">
								<select name="slct" id="slct">
									{
									  Subjects.filter(semester => Subjects.semester).map(filteredSemester => (
										Subjects.filter(branch => Subjects.branch).map(filteredBranch =>
											(
                           
											)
									  )) 	
									}
								<select name="slct" id="slct" onChange={setValues2}>
									<option selected disabled>Choose an option</option>
									<option value="Computer Science" >Computer Science</option>
									<option value="Electrical" >Electrical</option>
									<option value="Civil" >Civil</option>
									<option value="Electronics and Communication" >Electronics and Communication</option>
								</select>
								</span>
    
  			            </p>
						<p>
								<label >Document: </label>
								<span className="upload-file">
								<input type="file" name="upload" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" className="subject-name"/>
								</span>
						</p>
						<p class="wipeout">
								<input type="submit" value="Send" />
						</p>
				</form>
		</div>
</div>
    )
    }