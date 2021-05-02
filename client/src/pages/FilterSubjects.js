import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {isAuth} from "../helpers/auth";
import {Redirect} from 'react-router-dom';
import '../css/uploadNotes.css';
import $ from 'jquery';
import Navbar from "../components/navbar";

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
        <Navbar></Navbar>
        {!isAuth() ? <Redirect to='/login' /> : null}
        <div className="shade">
		<div className="blackboard" style={{top:"20%"}}>
				<form className="form" autocomplete="new-password" onSubmit={submit}>
                         <p style={{marginTop:"8rem",marginLeft:"3em"}}>
                            <label>Semester: </label>
                            <span class="select">
                            <select name="slct" id="slct" onChange={onSemesterChange}>
                                <option selected disabled>Choose an option</option>
                                <option value="I" > I </option>
                                <option value="I" > II </option> 
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
                            <span className="select" >
								<select name="slct" id="slct" onChange={onBranchChange}>
									<option selected disabled>Choose an option</option>
									<option value="Computer Science Engineering" >Computer Science</option>
									<option value="Electrical Engineering" >Electrical</option>
									<option value="Civil Engineering" >Civil</option>
									<option value="Electronics and Communication Engineering"  >Electronics and Communication</option>
								</select>
							</span>
  			            </p>
                        
                  
                          <p className="wipeout">
								<input type="submit" value="Next" />
						</p>
                    </form>
                </div>
            </div>
        </>
    )
} 