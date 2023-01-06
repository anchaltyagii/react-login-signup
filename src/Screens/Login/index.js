import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { icons } from "../../Assets";
import "./index.scss";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleValidation = () => {};

  const handleLoginSubmit = () => {
    if (email === "abc@gmail.com" && password === "123456") {
      history.push("/home-page");
    } else {
      alert("Password or username is wrong");
    }
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
          <h3>Sign in</h3>
          <div className="container">
            <div className="row form-group mt-2">
              <label class="form-label ps-0">Enter Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="row form-group mt-2">
              <label class="form-label ps-0">Enter Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row mt-3">
              <button
                className={
                  email && password
                    ? "btn btn-primary signin-btn"
                    : "btn btn-primary btn-disable"
                }
                onClick={handleLoginSubmit}
              >
                Sign in
              </button>
            </div>
            <div className="row mt-3">
              <div>
                New? <NavLink to="/signup">Join now</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
