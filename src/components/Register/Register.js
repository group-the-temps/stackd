import React, { Component } from "react";
import {connect} from "react-redux";
import {updateState, registerUser} from "../../redux/authReducer";
import { Link, Redirect} from "react-router-dom";
import "./Register.css";
import Modal from "react-modal";
import axios from 'axios';

Modal.setAppElement('#root');

class Register extends Component {
  constructor(){
    super()
    this.state = {
      error: false,
      showModal: true
    }
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal = () => {
    this.setState({showModal: false})
  }

  handleInput = e => {
    this.props.updateState({[e.target.name]: e.target.value}) 

  }

  handleSubmit = e => {
    e.preventDefault()
    this.sendWelcomeEmail();
    this.props.registerUser(this.props.email, this.props.password, this.props.display_name, this.props.student_invite_code, this.props.admin_invite_code)
    .then(this.setState({showModal: false}))
    .catch(err => console.log(err));
  }

  sendWelcomeEmail = () => {
    const userName = this.props.display_name;
    const userEmail = this.props.email;
    axios({
        method: "POST",
        url: "http://localhost:3000/send",
        data: {
            userName,
            userEmail
        }
    });
};

  render() {

    return (
      <div className="Register-container">
        <Modal
          isOpen={this.state.showModal}
          className="register-modal"
          >
            <h1 className="register-header">Register</h1>
        <form className="Register-form">
          <input className="register-input" onChange={this.handleInput} name="display_name" placeholder="display name" />
          <input className="register-input" onChange={this.handleInput} name="email" placeholder="email" />
          <input className="register-input" onChange={this.handleInput} name="password" placeholder="password" />
          <input className="register-input" onChange={this.handleInput} name="student_invite_code" placeholder="student access code" />
          <input className="register-input" onChange={this.handleInput} name="admin_invite_code" placeholder="admin access code" />
        </form>
        <button className="register-button" onClick={this.handleSubmit}>Register</button>
        <Link to="/login">
          <p className="existing-account">log into existing account</p>
        </Link>
        <button className="register-button" onClick={this.handleCloseModal}>Close</button>
          </Modal>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    display_name: reduxState.authReducer.display_name,
    email: reduxState.authReducer.email,
    password: reduxState.authReducer.password,
    img: reduxState.authReducer.img,
    student_invite_code:reduxState.authReducer.student_invite_code,
    admin_invite_code: reduxState.authReducer.admin_invite_code,
    user: reduxState.authReducer.user
  }
}

export default connect(mapStateToProps, {updateState, registerUser})(Register)
