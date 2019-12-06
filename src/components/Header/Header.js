import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import searchicon from "../../search_icon.png";

export default class Header extends Component {
  render() {
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
          <Link to="/login">
            <li className="Nav-link">Login</li>
          </Link>
          <Link to="/register">
            <li className="Nav-link">Register</li>
          </Link>
        </div>
      </div>
    );
  }
}
