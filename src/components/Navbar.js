import React from "react";
import { Link } from 'react-router-dom';
import DarkModeBox from './DarkModeBox';

function Navbar(props) {
  return (
    <div className="navbar-div">
      <nav className={ props.darkMode ? "dark-mode-navbar navbar" : "navbar" }>
        <ul className="navbar-ul">
            <li><Link to="/">Search</Link></li>
            <li><Link to="/Saved-Recipes">Saved Recipes</Link></li>
            <li><Link to="/Documentation">Documentation</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
        <div className="dark-mode-box-div">
          <DarkModeBox darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
