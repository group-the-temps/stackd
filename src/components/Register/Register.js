import React, { Component } from "react";
import {connect} from "react-redux";
import {updateState, registerUser} from "../../redux/authReducer";
import { Link, Redirect} from "react-router-dom";
import "./Register.css";

class Register extends Component {
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
    this.props.registerUser(this.props.display_name, this.props.email, this.props.password, this.props.student_invite_code, this.props.admin_invite_code);
  }

  render() {
    // if (this.props.email) return <Redirect to="/" />
    return (
      <div className="Register-container">
        <h1>Register</h1>
        <form className="Register-form">
          <input onChange={this.handleInput} name="display_name" placeholder="display name" />
          <input onChange={this.handleInput} name="email" placeholder="email" />
          <input onChange={this.handleInput} name="password" placeholder="password" />
          <input onChange={this.handleInput} name="student_invite_code" placeholder="student access code" />
          <input onChange={this.handleInput} name="admin_invite_code" placeholder="admin access code" />
        </form>
        <button onClick={this.handleSubmit}>Register</button>
        <Link to="/login">
          <p>log into existing account</p>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    display_name: reduxState.authReducer.display_name,
    email: reduxState.authReducer.email,
    password: reduxState.authReducer.password,
    student_invite_code:reduxState.authReducer.student_invite_code,
    admin_invite_code: reduxState.authReducer.admin_invite_code
  }
}

export default connect(mapStateToProps, {updateState, registerUser})(Register)
