import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser, updateState } from "../../redux/authReducer";
import "./Login.css";
import { connect } from "react-redux";
import Modal from "react-modal";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      showModal: true
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleInput = e => {
    this.props.updateState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .loginUser(this.props.email, this.props.password)
      .then(this.setState({ showModal: false }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="Login-container">
        <Modal isOpen={this.state.showModal} className="login-modal">
          <h1 className="login-header">Login</h1>
          <form className="Login-form">
            <input
              className="login-input"
              onChange={this.handleInput}
              name="email"
              placeholder="email"
            />
            <input
              className="login-input"
              onChange={this.handleInput}
              type="password"
              name="password"
              placeholder="password"
            />
          </form>
          <button className="modal-button" onClick={this.handleSubmit}>
            Login
          </button>
          <Link to="/register">
            <p className="new-account">create new account</p>
          </Link>
          <Link to="/">
            <button className="modal-button" onClick={this.handleCloseModal}>
              Close
            </button>
          </Link>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    email: reduxState.authReducer.email,
    password: reduxState.authReducer.password
  };
};

export default connect(mapStateToProps, { loginUser, updateState })(Login);
