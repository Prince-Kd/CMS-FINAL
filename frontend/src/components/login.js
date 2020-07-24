import React, { useState} from "react";
import '../login/css/style.css';
import '../login/fonts/material-icon/css/material-design-iconic-font.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

import swal from 'sweetalert'


import logo from './church-logo.png'

import {setUserSession} from "../services/auth.service";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handler = (e) => {
    e.preventDefault()
    setError(null);
    setLoading(true);

    let request = {
      username: username,
      password: password
    }
    axios.post("http://localhost:5000/api/login", request)
    .then(response => {
      setLoading(true);
      setUserSession(response.data.message)
      
      if(response.data.message.role === 1){
        swal(`Login Successful, Welcome ${response.data.message.name}`)
        props.history.push('/admin')
      }else if (response.data.message.role === 2){
        swal(`Login Successful, Welcome ${response.data.message.name}`)
        props.history.push('/dataEntry')
      }else if (response.data.message.role === 3){
        swal(`Login Successful, Welcome ${response.data.message.name}`)
        props.history.push('/accounts')
      }
        
    }).catch(error => {
      setLoading(false)
      if(error.response.status === 400){
        setError(error.response.data.message);
      } 
      else {
        swal('Something went wrong. Please try agiain.')
      }
    });
  }


  return (
    <div>
      <div className="header">
        <div>
         <img className="logo" src={logo} alt="logo"/>
        </div>
        <div>
          <center className="h2">GLOBAL EVANGELICAL CHURCH</center>
          <center className="sub-heading">Grace Family Chapel, Adenta</center> 
        </div>
                      
      </div>
      <div className="main">
          <center className="sub-head">CHURCH MANAGEMENT SYSTEM</center>
          <section className="sign-in">
            <div className="container">
              <div className="signin-content">
                <div className="signin-image">
                  <figure><img src={logo} alt="logo"/></figure>
                </div>
            
                <div className="signin-form">
                    <h2 className="form-title">Sign in</h2>
                    <form onSubmit={e => handler(e)} className="register-form" id="login-form">
                        <div className="form-group">
                            <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                            <input 
                            type="text" 
                            name="username" 
                            id="your_name" 
                            placeholder="Username" 
                            value={username}
                            onChange={onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                            <input 
                            type="password" 
                            name="password" 
                            id="your_pass" 
                            placeholder="Password"
                            value={password}
                            onChange={onChangePassword}
                            />
                            {error && <><small style={{color: 'red'}}>{error}</small><br/></>}
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                            <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                        </div>
                        <div className="form-group form-button">
                            <input 
                            type="submit"  
                            id="signin" 
                            className="form-submit" 
                            value={loading ? 'loading...' : 'Login'}
                            disabled={loading}
                            /><br/><br/>
                            <Link to="/register" className="signup-image-link">Create an account</Link>
                        </div>
                    </form> 
                </div> 
              </div>
            </div>
          </section>
      </div> 
    </div>
  );
};

export default Login;
