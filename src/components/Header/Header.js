import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import searchicon from "../../search_icon.png";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/authReducer";
import { handleOpenTags, handleCloseTags } from "../../redux/searchReducer";
import Tags from "../Tags/Tags";
import { Tween } from "react-gsap";
import stackd_logo from "../../stackd_logo.png";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      searchInput: ''
    }
  }

  handleTagDropdown = () => {
    if (this.props.clickedTags === false) {
      this.props.handleOpenTags();
    } else {
      this.props.handleCloseTags();
    }
  }

  handleSearch = e => {
    this.setState({searchInput: e.target.value})
    if(this.state.searchInput === '') {
      this.props.searchResults.splice(0);
    } 
  }

  _handleKeyDown = e => {
    if (e.key === 'Enter') {
      axios.get(`/search/title?title=${this.state.searchInput}`).then(response => {
        this.props.searchResults.push(response.data)
        console.log(this.props.searchResults[0])
      }).catch(() => {
        alert('No Results Found');
      })
    }
  }

  render() {
    return (
      <div className="Nav-bar-container">
        <div className="Logo-container">
          <Link to="/">
            <img src={stackd_logo} alt='logo' height="60px" width="190px" />
          </Link>
        </div>
        <div className="Search-container">
          <div className="Search-border">
            <img src={searchicon} alt="icon_img" />
            <input
              className="Search-input"
              placeholder="Search..."
              type="text"
              onChange={this.handleSearch}
              onKeyDown={this._handleKeyDown}
            />
          </div>
          {this.props.clickedTags === false ? <h3 className='tags-dropdown-button' onClick={this.handleTagDropdown}>Search By Topic <br /> v</h3> : <h3 className='tags-dropdown-button' onClick={this.handleTagDropdown}>Search By Topic <br /> ^</h3>}
          {this.props.clickedTags === true ? (
            <Tween from={{ y: '-50px' }} to={{ y: '10px', ease: 'Bounce.easeOut' }}>
              <div className="tags-container">
                <Tags clickedTags={this.state.clickedTags} />
              </div>
            </Tween>
          ) : null}
        </div>
        <div className="Nav-links-container">
          {this.props.user[0] || this.props.user.user_id ? (
            <>
              <li className="Nav-link">Questions</li>
              <li className="Nav-link">Topics</li>
              <li onClick={this.props.logoutUser} className="Nav-link">Logout</li>
            </>
          ) : (<> <Link to="/login">
            <li className="Nav-link">Login</li>
          </Link></>)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.authReducer.user,
    clickedTags: reduxState.searchReducer.clickedTags,
    searchResults: reduxState.searchReducer.searchResults
  }
}


export default connect(mapStateToProps, { logoutUser, handleOpenTags, handleCloseTags })(Header)
