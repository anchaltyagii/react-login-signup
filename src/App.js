import React from "react";
import { Route, Switch } from "react-router-dom";
import version from "../package.json";
import Login from "./Screens/Login";
import SignUp from "./Screens/Signup";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
