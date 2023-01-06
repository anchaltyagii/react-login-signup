import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="right-layout-wrapper">
      <div>
        <NavBar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
