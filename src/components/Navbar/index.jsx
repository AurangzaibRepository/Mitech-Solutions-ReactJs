import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';

function Navbar() {
  return (
    <div className="nav">
      { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
      <label id="menu-title">MiTech Solutions</label>
      <div className="navmenu">
        <NavLink className="navlink" to="/" activestyle="true">
          Home
        </NavLink>
        <NavLink className="navlink" to="/services" activestyle="true">
          Services
        </NavLink>
        <NavLink className="navlink" to="/portfolio" activestyle="true">
          Portfolio
        </NavLink>
        <NavLink className="navlink" to="/blogs" activestyle="true">
          Blogs
        </NavLink>
        <NavLink className="navlink" to="/about" activestyle="true">
          About us
        </NavLink>
        <NavLink className="navlink" to="/contact" activestyle="true">
          Contact us
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
