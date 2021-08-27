import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Potluck from "./components/Potluck";
import About from "./components/About";
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <PrivateRoute path="/potluck" component={Potluck} /> */}
        <Route path="/potluck" component={Potluck} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
