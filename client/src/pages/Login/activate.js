import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {  isAuth } from '../../helpers/auth';
import { Redirect } from 'react-router-dom';


const Activate = ({ match, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true
  });

  useEffect(() => {

    /*get token from params */
    let token = match.params.token;
    let { name } = jwt.decode(token);
   
    if (token) {
      setFormData({ ...formData, name, token });
    }

  
  }, [match.params]);
  const { name, token} = formData;

  const handleSubmit = e => {
    
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/activation`, {
        token
      })
      .then(res => {
        setFormData({
          ...formData,
          show: false
        });
     
        toast.success(res.data.message);
        history.push('/login');
      })
      .catch(err => {
        toast.error(err.response.data.errors);
      });
  };
  return ( 
    <div>
    {isAuth() ? <Redirect to='/' /> : null}

        <ToastContainer/>
        <div id="wrapper">
        <div className="lt">
        <form onSubmit={handleSubmit}>
             <h2>Welcome {name}</h2>
             <input type="submit" name="Activate your Account" value="Activate your Account" />
             <p>Or sign up again</p>
             <input type="submit" name="Sign Up" value="Sign Up" />
        </form>
        </div>
        </div>
        

        </div>
 );

};

export default Activate;