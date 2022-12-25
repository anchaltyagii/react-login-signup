import React from "react";
import "./index.scss";

const Login = () => {
  return (
    <div>
      Login Form
      <div className="container">
        <div className="row form-group">
          <label class="form-label">Enter Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
          />
        </div>
        <div className="row form-group">
          <label>Enter Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
          />
        </div>
        <div className="row mt-5">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
