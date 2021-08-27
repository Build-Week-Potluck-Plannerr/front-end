import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";

import PrivateRoute from "./utils/PrivateRoute";
import Potluck from "./components/Potluck";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <PrivateRoute path="/potluck" component={Potluck} /> */}
        <Route path="/potluck" component={Potluck} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
