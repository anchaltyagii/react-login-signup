import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../../Assets";
import "./index.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = () => {
    console.log("Submitted");
  };

  return (
    <>
      <div className="d-flex">
        <div className="login-img-wrapper">
          <img
            src={icons.login_banner}
            alt="login-image"
            height="100%"
            width="100%"
          />
        </div>
        <div className="login-wrapper">
          <h3>Login Form</h3>
          <div className="container">
            <div className="row form-group mt-2">
              <label class="form-label">Enter Email:</label>
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row form-group mt-2">
              <label class="form-label">Enter Password:</label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row mt-3">
              <button
                className={
                  email && password
                    ? "btn btn-primary"
                    : "btn btn-primary btn-disable"
                }
                onClick={handleLoginSubmit}
              >
                Login
              </button>
            </div>
            <div className="row mt-3">
              <div>
                New? <NavLink to="/signup">SignUp</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
