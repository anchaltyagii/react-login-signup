import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../../Assets";
import "./index.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisterSubmit = () => {
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
          <h3>Register</h3>
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
            <div className="row form-group mt-2">
              <label class="form-label">Confirm Password:</label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="row mt-3">
              <button
                className={
                  email && password
                    ? "btn btn-primary"
                    : "btn btn-primary btn-disable"
                }
                onClick={handleRegisterSubmit}
              >
                Submit
              </button>
            </div>
            <div className="row mt-3">
              <div>
                <NavLink to="/">Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
