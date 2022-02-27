import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue">
        <NavLink to="/" className="brand-logo">
          Kira
        </NavLink>
        <ul className="right hide-on-med-and-down" id="nav-mobile">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/terminal">Terminal</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
