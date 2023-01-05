import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <NavLink to="">Home</NavLink>
      <NavLink to="">About Us</NavLink>
      <NavLink to="">Services</NavLink>
    </div>
  );
};

export default NavBar;
