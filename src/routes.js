import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AskQuestion from "./components/AskQuestion/AskQuestion";

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={Register} path="/register" />
    <Route component={Login} path="/login" />
    <Route component={AskQuestion} path="/askquestion" />
    <Route render={() => <h1>404 - Not Found</h1>} />
  </Switch>
);
