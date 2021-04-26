import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {isAuth} from "../helpers/auth";
import {Redirect} from 'react-router-dom';
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
        {!isAuth() ? <Redirect to='/login' /> : null}
        <div class="shade">
		<div class="blackboard" style={{top:"20%"}}>
				<form class="form" autocomplete="new-password" onSubmit={submit}>
                         <p style={{marginTop:"8rem",marginLeft:"3em"}}>
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
						<p style={{marginLeft:"3em",paddingRight:"5em"}}>
							<label style={{marginRight:"1em"}}>Branch:</label>
                            <span class="select" >
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
								<input type="submit" value="Next" />
						</p>
                    </form>
                </div>
            </div>
        </>
    )
} 