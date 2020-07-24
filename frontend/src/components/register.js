import React, { useState} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

import {useForm} from 'react-hook-form';

import swal from 'sweetalert'

import '../register/css/style.css';

import logo from './church-logo.png'


const Register = (props) => {
  const {register, errors} = useForm();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };
  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  
  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };

  const handler = (e) => {
    e.preventDefault()
    setLoading(true);

    let request = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
      role: role
    }
    axios.post("http://localhost:5000/api/register", request)
    .then(response => {
      setLoading(true);
      swal(response.data.message)   
      props.history.push('/')     
    }).catch(err => {
      setLoading(false)
      if(err.response.status === 400){
        swal(err.response.data.message);
      } 
      else {
        swal(err.response.data.message);
      }
    })
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
          <div className="container1">
            <div className="signin-content">
              <div className="signin-form">
                <center><h2 className="form-title">Register</h2></center>
                <form onSubmit={e => handler(e)} className="register-form" id="login-form">
                  <div>                        
                    <div className="form-group">
                        <label for="your_name">Firstname</label><br/><br/>
                        <input 
                        type="text" 
                        name="firstname" 
                        id="your_name" 
                        placeholder="Firstname" 
                        value={firstname}
                        onChange={onChangeFirstname}
                        ref={register({
                          required:
                          { value:  true ,
                            message: "Required"
                          }
                        })}
                        />
                        {errors.firstname && <><small style={{color: 'red'}}>{errors.firstname.message}</small><br/></>}
                    </div>
                    <div className="form-group">
                        <label for="your_name">Lastname</label><br/><br/>
                        <input 
                        type="text" 
                        name="lastname" 
                        id="your_name" 
                        placeholder="Lastname" 
                        value={lastname}
                        onChange={onChangeLastname}
                        />
                    </div>
                    <div className="form-group">
                        <label for="your_name">Email</label><br/><br/>
                        <input 
                        type="text" 
                        name="email" 
                        id="your_name" 
                        placeholder="Email" 
                        value={email}
                        onChange={onChangeEmail}
                       />
                    </div>
                    <div className="form-group">
                        <label for="name">Select Role</label><br/><br/>
                        <select className="name" value={role} onChange={onChangeRole} 
                         name="role" style={{width: 180}} >
                            <option className="name">~Role~</option>
                            <option className="name" value="1">Admin</option>
                            <option className="name" value="2">Data Entry</option>
                            <option className="name" value="3">Accounts Member</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="your_name">Username</label><br/><br/>
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
                        <label for="your_pass">Password</label><br/><br/>
                        <input 
                        type="password" 
                        name="password" 
                        id="your_pass1" 
                        placeholder="Password" 
                        value={password}
                        onChange={onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label for="your_pass">Confirm Password</label><br/><br/>
                        <input 
                        name="pass2"
                        type="password" 
                        id="your_pass2" 
                        placeholder="Confirm Password"
                        />
                    </div>    
                    <div className="form-group form-button">
                        <input type="submit" name="signin" id="signin" className="form-submit" value={loading ? 'loading...' : 'Submit'}
                            disabled={loading}/><br/><br/>
                        <Link to="/" className="signup-image-link">Already a member, Sign in</Link>
                    </div>
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

export default Register;

