import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink className="Nav-Item"  to="/message" style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>greeting</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;