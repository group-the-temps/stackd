import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="Login-container">
        <h1>Login</h1>
        <form className="Login-form">
          <input placeholder="email" />
          <input placeholder="password" />
        </form>
        <button>Login</button>
        <Link to="/register">
          <p>create new account</p>
        </Link>
      </div>
    );
  }
}
