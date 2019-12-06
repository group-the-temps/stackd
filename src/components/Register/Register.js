import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default class Register extends Component {
  render() {
    return (
      <div className="Register-container">
        <h1>Register</h1>
        <form className="Register-form">
          <input placeholder="display name" />
          <input placeholder="email" />
          <input placeholder="password" />
          <input placeholder="access code" />
        </form>
        <button>Register</button>
        <Link to="/login">
          <p>log into existing account</p>
        </Link>
      </div>
    );
  }
}
