import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../styles/nav.css'

function Nav() {
  const [navToggle, setNavToggle] = useState(false);
  const { push } = useHistory()

  const handleLogout = () => {
    localStorage.clear();
    push('/');
  };

  return (
    <div className="nav-header">

      {
        navToggle &&
        <div className="side-menu-container">
          <div className="menu-logo">
            logo here
          </div>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/">Host Potluck</Link></div>
          <div><Link to="/">Create Potluck</Link></div>
          <div><Link to="/">My Potlucks</Link></div>
          <div><Link to="/">Logout</Link></div>
        </div>
      }

      <div className="nav-links">
        <a className="menu-open" href="#" onClick={() => setNavToggle(!navToggle)}>Menu</a>
      </div>

      <div className="hello-user">
        <p>$Component Name</p>
      </div>

      <div className="logout-container">
        <Link onClick={handleLogout}>
          Logout
        </Link>
      </div>

    </div>
  )
}

export default Nav
