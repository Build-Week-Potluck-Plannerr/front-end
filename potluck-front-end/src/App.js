import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

import PrivateRoute from "./utils/PrivateRoute";
import Potluck from "./components/Potluck";

function App() {
  return (
    <Router>
      <div>
        <h1>Potluck Planner</h1>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/potluck" component={Potluck} />
      </div>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/register" component={Registration} />
    </Router>
  );
}

export default App;

