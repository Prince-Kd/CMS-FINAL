import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import '../../styles/admin.css';
import {getUser, removeUserSession} from '../../services/auth.service';

import AddMember from './addMember';
import Manage from './manageMember';
import Attendance from './attendance';

const DataEntry = (props) => {
    const user = getUser();
    const logOut = () => {
        removeUserSession();
        props.history.push('/');
      };
    return(
        <BrowserRouter>
            <div>
                <div id="header">
                    <div className="bar">
                        <center><small>Welcome {user.name}</small></center>
                        <center><strong>
                            Data Entry Personnel
                        </strong></center>
                    </div>
                </div>
                <center>
                    <ul id="nav">
                        <li>
                            
                        <center><NavLink to="/dataEntry/addMember" activeStyle={{color: "red"}}><p>Add Member</p></NavLink></center>
                        </li>
                        <li>
                            <span></span>
                            <center><NavLink to="/dataEntry/manageMember" activeStyle={{color: 'red'}}><p>Manage Member</p></NavLink></center>
                        </li>
                        <li>
                            <span></span>
                            <center><NavLink to="/dataEntry/attendance" activeStyle={{color: "red"}}><p>Record Attendence</p></NavLink></center>
                        </li>
                    
                        <li>
                            <span></span>
                            <center><NavLink to="/" onClick={logOut}><p>Log Out</p></NavLink></center>
                        </li>
                    </ul>
                </center>
                <Switch>
                    <Route exact path="/dataEntry/addMember" component={AddMember}></Route>
                    <Route exact path="/dataEntry/manageMember" component={Manage}></Route>
                    <Route exact path="/dataEntry/attendance" component={Attendance}></Route>
                </Switch>
                <p></p>
            </div>
        </BrowserRouter>
            
    )
}

export default DataEntry;