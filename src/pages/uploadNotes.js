import React from "react";
import './uploadNotes.css';
import $ from 'jquery';
export default function UploadNotes() {
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
								<input type="text" autocomplete="new-password"/>
						</p>
						<p>
								<label>Phone: </label>
								<input type="tel" autocomplete="new-password"/>
						</p>
						<p>
								<label>Subject: </label>
                                <span class="select">
  <select name="slct" id="slct">
    <option selected disabled>Choose an option</option>
    <option value="1" className="subject-name">Pure CSS</option>
    <option value="2">No JS</option>
    <option value="3">Nice!</option>
  </select>
</span>
    
  			</p>
						<p>
								<label>Message: </label>
								<textarea></textarea>
						</p>
						<p class="wipeout">
								<input type="submit" value="Send" />
						</p>
				</form>
		</div>
</div>
    )
    }