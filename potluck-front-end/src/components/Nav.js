import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ImHome3, ImSwitch, ImHeart, ImSpoonKnife, ImBubbles } from "react-icons/im";
import logo from '../Assets/Potluck.png';
import '../styles/nav.css';

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
            <img className="logo" src={logo} />
          </div>
          <div className="link-container"><Link to="/"><span className="span-icon"><ImHome3 className="menu-icon" /></span><span className="menu-text">Home</span></Link></div>
          <div className="link-container"><Link to="/potluck"><span className="span-icon"><ImSpoonKnife className="menu-icon" /></span><span className="menu-text">Create a Potluck</span></Link></div>
          <div className="link-container"><Link to="/"><span className="span-icon"><ImHeart className="menu-icon" /></span><span className="menu-text">View Potlucks</span></Link></div>
          <div className="link-container"><Link to="/about"><span className="span-icon"><ImBubbles className="menu-icon" /></span><span className="menu-text">About</span></Link></div>
          <div className="link-container"><Link to="/login"><span className="span-icon"><ImSwitch className="menu-icon" /></span><span className="menu-text">Logout</span></Link></div>
        </div>
      }

      <div className="nav-links">
        <a className="menu-open" href="#" onClick={() => setNavToggle(!navToggle)}>Menu</a>
      </div>

      <div className="hello-user">
        <p>Potluck Planner</p>
      </div>

      <div className="logout-container">
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>

    </div>
  )
}

export default Nav
