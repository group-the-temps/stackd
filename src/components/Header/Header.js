import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import searchicon from "../../search_icon.png";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/authReducer";

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: false
    }
  }
  render() {
    // const {display_name} = this.props
    console.log(this.props.user[0] && this.props.user[0].user_id)
    console.log(this.props)
    return (
      <div className="Nav-bar-container">
        <div className="Logo-container">
          <Link to="/">
            <h1>stackd logo</h1>
          </Link>
        </div>
        <div className="Search-container">
          <div className="Search-border">
            <img src={searchicon} alt="icon_img" />
            <input
              className="Search-input"
              placeholder="Search..."
              type="text"
            />
          </div>
        </div>
        <div className="Nav-links-container">
        {this.props.user[0] || this.props.user.user_id ? (
          <>
          <li className="Nav-link">Questions</li> 
          <li className="Nav-link">Topics</li>
          <li onClick={this.props.logoutUser} className="Nav-link">Logout</li>
          </>
        ) : ( <> <Link to="/login">
            <li className="Nav-link">Login</li>
          </Link>
          <Link to="/register">
            <li className="Nav-link">Register</li>
          </Link> </>)

      }
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.authReducer.user
  }
}


export default connect(mapStateToProps, {logoutUser})(Header)
