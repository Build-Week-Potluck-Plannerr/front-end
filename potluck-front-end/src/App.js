import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Login from "./components/Login";
import Registration from "./components/Registration";

import PrivateRoute from "./utils/PrivateRoute";
import Potluck from "./components/Potluck";

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <h1>Potluck Planner</h1>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/potluck" component={Potluck} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
