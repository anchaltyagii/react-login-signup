import React from "react";
import { Route, Switch } from "react-router-dom";
import version from "../package.json";
import Login from "./Screens/Login";
import SignUp from "./Screens/Signup";
import "./App.scss";

function App() {
  return (
    <div className="App">
      Astro website
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      <div>version: {version.version}</div>
    </div>
  );
}

export default App;
