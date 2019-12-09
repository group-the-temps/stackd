import React, { Component } from "react";
import { Link } from "react-router-dom";
import {loginUser, updateState} from "../../redux/authReducer";
import "./Login.css";
import { connect } from "react-redux";

class Login extends Component {
  constructor(){
    super()
    this.state = {
      error: false
    }
  }
  handleInput = e => {
    this.props.updateState({[e.target.name]: e.target.value}) 

  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.props.email, this.props.password);
  }
  render() {
    return (
      <div className="Login-container">
        <h1>Login</h1>
        <form className="Login-form">
          <input onChange={this.handleInput} name="email" placeholder="email" />
          <input onChange={this.handleInput} type="password" name="password" placeholder="password" />
        </form>
        <button onClick={this.handleSubmit}>Login</button>
        <Link to="/register">
          <p>create new account</p>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    email: reduxState.authReducer.email,
    password: reduxState.authReducer.password

  }
}

export default connect(mapStateToProps, {loginUser, updateState})(Login)