import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import searchicon from "../../search_icon.png";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/authReducer";
import { handleOpenTags, handleCloseTags } from "../../redux/tagsReducer";
import Tags from "../Tags/Tags";
import { Tween } from "react-gsap";
import stackd_logo from "../../stackd_logo.png";

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }

  handleTagDropdown = () => {
    if (this.props.clickedTags === false) {
      this.props.handleOpenTags();
    } else {
      this.props.handleCloseTags();
    }
  }

  render() {
    // const {display_name} = this.props
    // console.log(this.props.user[0] && this.props.user[0].user_id)
    // console.log(this.props)
    return (
      <div className="Nav-bar-container">
        <div className="Logo-container">
          <Link to="/">
            <img src={stackd_logo} alt='logo' height="50px" width="160px" />
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
          {this.props.clickedTags === false ? <h3 className='tags-dropdown-button' onClick={this.handleTagDropdown}>Search By Topic <br/> v</h3> : <h3 className='tags-dropdown-button' onClick={this.handleTagDropdown}>Tags <br/> ^</h3>}
          {this.props.clickedTags === true ? (
            <Tween from={{y: '-50px'}} to={{y: '0px', ease: 'Bounce.easeOut'}}>
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
    clickedTags: reduxState.tagsReducer.clickedTags
  }
}


export default connect(mapStateToProps, { logoutUser, handleOpenTags, handleCloseTags })(Header)
