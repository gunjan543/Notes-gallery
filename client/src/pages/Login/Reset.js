import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';

import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = ({match}) => {
  const history = useHistory();
    const [formData, setFormData] = useState({
        password1: '',
        password2: '',
        token: '',
      textChange: 'Submit'
    });
      const { password1, password2, token } = formData;
      
      useEffect(() => {
          let token = match.params.token
          if(token) {
              setFormData({...formData, token,})
          }
          
      }, [])
    const handleChange = text => e => {
      setFormData({ ...formData, [text]:e.target.value});
    };
      const handleSubmit = e => {
      e.preventDefault();
      if ((password1 === password2) && password1 && password2) {
        setFormData({ ...formData });
        axios
          .put(`/api/resetpassword`, {
              newPassword: password1,
              resetPasswordLink: token
          })
          .then(res => {
              setFormData({
                ...formData,
                 password1: '',
                password2: ''
              });
              toast.success(res.data.message);
              history.push('/login')
            
          })
          .catch(err => {
            toast.error('Something is wrong try again');
          });
      } else {
        toast.error('Passwords don\'t matches');
      }
    };

    return ( 

        <div className="Signup">
            <ToastContainer/>
            <h1>Forgot Password?</h1>
            <p>Don't have an account? <a href="/register">Sign Up</a></p>
            
            <div className="wrap">
            <div className="box">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="password" 
                    onChange = {handleChange('password1')} 
                    value={password1} 
                    required/>
                    <label>Password</label>
                </div>
            
                <div>
                    <input type="password" 
                    onChange = {handleChange('password2')} 
                    value={password2} 
                    required/>
                    <label>Confirm Password</label>
                </div>

                <br></br>
                <input type="submit" name="Submit" value="submit" />
            </form>
           
            </div>
        </div>
        </div>
     );
}
 
export default ResetPassword;