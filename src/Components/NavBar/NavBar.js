import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { icons } from "../../Assets";
import "./NavBar.scss";

const NavBar = () => {
  const router = useRouteMatch();
  console.log(router.path);
  console.log(window.location.pathname);
  return (
    <div className="navbar-wrapper">
      <div className="logo-img-wrapper">
        <img src={icons.login_banner} height="100%" width="100%" />
      </div>
      <div className="navlinks-wrapper">
        <NavLink to="/home-page" style={{ color: "#000" }}>
          <div
            className={
              router.path === "/home-page" ? "nav-title-active" : "nav-title"
            }
          >
            Home
          </div>
        </NavLink>
        <NavLink to="/about-us" style={{ color: "#000" }}>
          <div
            className={
              router.path === "/about-us" ? "nav-title-active" : "nav-title"
            }
          >
            About Us
          </div>
        </NavLink>
        <NavLink to="/contact" style={{ color: "#000" }}>
          <div
            className={
              router.path === "/contact" ? "nav-title-active" : "nav-title"
            }
          >
            Contact Us
          </div>
        </NavLink>
        <NavLink to="/services" style={{ color: "#000" }}>
          <div
            className={
              router.path === "/services" ? "nav-title-active" : "nav-title"
            }
          >
            Services
          </div>
        </NavLink>
      </div>
      <div className="version-wrapper">version: 1.0.0</div>
    </div>
  );
};

export default NavBar;
