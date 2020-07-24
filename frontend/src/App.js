import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Admin from './components/admin/admin';
import DataEntry from './components/dataEntry/dataEntry';
import Accounts from './components/accounts/accounts';

const App = () => {
 
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/dataEntry" component={DataEntry} />
            <Route exact path="/accounts" component={Accounts} />
          </Switch>
        </div>
    </Router>
  );
};

export default App;
