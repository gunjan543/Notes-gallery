import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import '../css/uploadNotes.css';
import $ from 'jquery';

export default function FilterSubjects(props){
    let history = useHistory();
    const [branch, setBranch] = useState("");
    const [semester, setSemester]=useState("");
   
    function onBranchChange(e){
        setBranch(e.target.value);
        localStorage.setItem('Branch', e.target.value);
    }

    function onSemesterChange(e){
        setSemester(e.target.value);
        localStorage.setItem('Semester', e.target.value);
    }

    function submit(e){
        e.preventDefault();
       history.push("/upload")
    }

      $(document).click(function() {
        $('.dropdown-el').removeClass('expanded');
      });
    return(
        <>
        <div class="shade">
		<div class="blackboard" style={{top:"22%"}}>
				<form class="form" autocomplete="new-password" onSubmit={submit}>
                         <p>
                            <label>Semester: </label>
                            <span class="select">
                            <select name="slct" id="slct" onChange={onSemesterChange}>
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
							<label>Branch:</label>
                            <span class="select" style={{marginLeft:"3em"}}>
								<select name="slct" id="slct" onChange={onBranchChange}>
									<option selected disabled>Choose an option</option>
									<option value="Computer Science" >Computer Science</option>
									<option value="Electrical" >Electrical</option>
									<option value="Civil" >Civil</option>
									<option value="Electronics and Communication" >Electronics and Communication</option>
								</select>
							</span>
  			            </p>
                        
                  
                          <p class="wipeout">
								<input type="submit" value="Send" />
						</p>
                    </form>
                </div>
            </div>
        </>
    )
} 