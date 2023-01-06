import React from "react";
import { Route, Switch } from "react-router-dom";
import version from "../package.json";
import Login from "./Screens/Login";
import SignUp from "./Screens/Signup";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Screens/Home";
import About from "./Screens/AboutUs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home-page" component={Home} />
        <Route exact path="/about-us" component={About} />
      </Switch>
    </div>
  );
}

export default App;
