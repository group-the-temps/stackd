import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import QuestionsList from "./components/QuestionsList/QuestionsList";
import SelectedQuestion from "./components/SelectedQuestion/SelectedQuestion";

export default (
  <Switch>
    <Route component={Landing} exact path="/" />
    <Route component={Register} path="/register" />
    <Route component={Login} path="/login" />
    <Route component={Profile} path="/profile/:id" />
    <Route component={Profile} path="/profile" />
    <Route component={QuestionsList} path="/questionslist" />
    <Route component={AskQuestion} path="/askquestion" />
    <Route component={SelectedQuestion} path="/selectedquestion/:question_id" />
    <Route render={() => <h1>404 - Not Found</h1>} />
  </Switch>
);
