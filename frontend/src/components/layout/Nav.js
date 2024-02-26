import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
  return (
    <nav className="centrar1">
      <NavLink to="/" exact activeClassName="active" className="nav-link">
        HOME
      </NavLink>
      <NavLink to="/nosotras" activeClassName="active" className="nav-link">
        Nosotras
      </NavLink>
      <NavLink to="/inspiracion" activeClassName="active" className="nav-link">
        Inspiracion
      </NavLink>
      <NavLink to="/fans" activeClassName="active" className="nav-link">
        Fans
      </NavLink>
      <NavLink to="/contacto" activeClassName="active" className="nav-link">
        Contacto
      </NavLink>
    </nav>
  );
};

export default Nav;
