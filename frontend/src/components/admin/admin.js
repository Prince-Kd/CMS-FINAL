import React from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
import '../../styles/admin.css';
import {getUser, removeUserSession} from '../../services/auth.service';
import axios from 'axios';


import GenerateReport from './generateReport';
import ViewMember from './viewMember';
import ViewReports from './viewReports';
import swal from 'sweetalert';

const Admin = (props) => {
    const user = getUser();
    const logOut = (e) => {
        e.preventDefault();
        axios.get("http://localhost:5000/api/logout")
        .then(response => {
            swal(response.data.message)
        })
        .catch(error => {
            if(error.response.status === 400){
                swal(error.response.data.message)
            }
        })
        removeUserSession();
        props.history.push('/');
      };
    return(
        <BrowserRouter>
            <div>
                <div id="header">
                <div className="bar">
                    <center>Welcome {user.name}</center>
                <center><strong>
                Administrator
                </strong></center></div>
                </div>
                    <center><ul id="nav">
                        <li>
                            
                        <center><NavLink to="/admin/viewMember" activeStyle={{color: "red"}}><p>View Member</p></NavLink></center>
                        </li>
                        <li>
                            <span></span>
                            <center><NavLink to="/admin/generateReport" activeStyle={{color: 'red'}}><p>Generate Report</p></NavLink></center>
                        </li>
                        <li>
                            <span></span>
                            <center><NavLink to="/admin/viewReports" activeStyle={{color: "red"}}><p>View Reports</p></NavLink></center>
                        </li>
                        <li>
                            <span></span>
                            <center><form onSubmit={e => logOut(e)}>
                            <NavLink to="/"><p>Log Out</p></NavLink>
                                </form></center>
                        </li>
                    </ul>
                    </center>
                    <Switch>
                        <Route exact path="/admin/viewMember" component={ViewMember}></Route>
                        <Route exact path="/admin/generateReport" component={GenerateReport}></Route>
                        <Route exact path="/admin/viewReports" component={ViewReports}></Route>
                    </Switch>
            </div>
        </BrowserRouter>
        
    )
    
}

export default Admin;