import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import {authenticate, isAuth} from "../../helpers/auth";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/login.css'

const Login = ({history}) => {

    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Sign In'
      });

      const { email, password1 } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
        
      const handleSubmit = e => {
        //console.log(process.env.REACT_APP_API_URL);
        e.preventDefault();
        if (email && password1) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`/api/login`, {
              email,
              password: password1
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Submitted'
                });
                localStorage.setItem('token', res.data.token);
                
        if(isAuth()){
          history.push('/profile');
                
        }
        else {
          history.push('/');
               
        }
       }
                
              );
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Sign In'
              });
              console.log(err);
              toast.error(err.response.data.errors);
            });
        } else {
          toast.error('Please fill all fields');
        }
      };
  

    return ( 
     
        <div className="Signup">
         {!isAuth()?null: <Redirect to = "/profile" />}
            <ToastContainer/>
            <h1>Log In to Notes Gallery</h1>
            <p>Don't have an account? <a href="/register">Sign Up</a></p>
            
            <div className="wrap">
            <div className="box">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" 
                    onChange = {handleChange('email')} 
                    value={email} 
                    required/>
                    <label>Email</label>
                </div>
                <div>
                    <input type="password"
                    onChange = {handleChange('password1')} 
                    value={password1}  required />
                    <label>Password</label>
                </div>
                <input type="checkbox" id="Remember me" name="Remember me" value="Remember me" />
                <label for="Remember me"> Remember me</label>
                <br></br>
                <a href="/forgotPassword">Forgot Password ?</a>
                <br></br>
                <input type="submit" className="loginSubmit" value="Login"/>     
            </form>
            </div>
            </div>
            
        </div>
       
     );
}
 
export default Login;