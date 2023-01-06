import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { icons } from "../../Assets";
import "./index.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const history = useHistory();
  const handleRegisterSubmit = () => {
    alert("Submitted Successfully");
    history.push("/");
  };

  const handleValidation = () => {
    if (password === confirmPassword) {
      handleRegisterSubmit();
    } else {
      setPasswordError("password and confirm password is not same");
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
          <h3>Sign Up</h3>
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
            <div className="row form-group mt-2">
              <label class="form-label ps-0">Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>{passwordError && <p className="error-msg">{passwordError}</p>}</div>
            
            <div className="row mt-3">
              <button
                className={
                  email && password && confirmPassword
                    ? "btn btn-primary signin-btn"
                    : "btn btn-primary btn-disable"
                }
                onClick={handleValidation}
              >
                Sign Up
              </button>
            </div>
            <div className="row mt-3">
              <div>
                Already a user? <NavLink to="/">Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
