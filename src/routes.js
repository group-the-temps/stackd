import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={Register} path="/register" />
    <Route component={Login} path="/login" />
    <Route render={() => <h1>404 - Not Found</h1>} />
  </Switch>
);
