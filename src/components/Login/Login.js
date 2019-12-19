import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser, updateState } from "../../redux/authReducer";
import "./Login.css";
import { connect } from "react-redux";
import Modal from "react-modal";



export class Login extends Component {
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
      .then(() => {
        this.setState({ showModal: false });
        this.props.history.push("/questionslist");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <div className="Landing-container">
          <div className="Landing-main-container">
            <div className="Landing-heading">
              <h1>Ask questions. Get answers.</h1>
            </div>
            <div className="Landing-overview">
              <h6>
                Learning to code is hard enough. So why do it alone? This is why
                we created Stack'd - an exclusive site for DevMountain students.
              </h6>

              <h6>
                With Stack'd you can seek help by asking questions, give help by
                replying to questions, or save questions/topics for reviewing at
                a later date.
              </h6>
              <div className="Landing-button">
                <button
                  onClick={() => {
                    this.props.updateSearchState({ searchResults: [] });
                    this.props.history.push("/questionslist");
                  }}
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Login-container">
          <Modal isOpen={this.state.showModal} className="login-modal" ariaHideApp={false}>
            <Link to="/">
              <button className="close-button" onClick={this.handleCloseModal}>
                X
              </button>
            </Link>
            <h1 className="login-header">Login</h1>
            <form className="Login-form" autoComplete="nope">
              <input
                className="login-input"
                onChange={this.handleInput}
                name="email"
                placeholder="email"
                autoComplete="off"
              />
              <input
                className="login-input"
                onChange={this.handleInput}
                type="password"
                name="password"
                placeholder="password"
                autoComplete="off"
              />
            </form>
            <button className="modal-button" onClick={this.handleSubmit}>
              Login
            </button>
            <Link to="/register">
              <p className="new-account">create new account</p>
            </Link>
          </Modal>
        </div>
      </>
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
