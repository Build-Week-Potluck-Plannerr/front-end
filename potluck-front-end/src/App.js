import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <div>
        <h1>Potluck Planner</h1>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Registration />
        </Route>

      </div>
    </Router>
  );
}

export default App;
