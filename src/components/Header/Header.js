import React, { Component } from "react";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";
import searchicon from "../../search_icon.png";
import { connect } from "react-redux";
import { logoutUser, getSession } from "../../redux/authReducer";
import {
  handleOpenTags,
  handleCloseTags,
  updateSearchResults,
  updateSearchState
} from "../../redux/searchReducer";
import { updateQuestionState } from '../../redux/questionsReducer';
import { getProfile } from "../../redux/profileReducer";
import Tags from "../Tags/Tags";
import { Tween } from "react-gsap";
import stackd_logo from "../../stackd_logo.png";
import axios from "axios";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      searchInput: "",
      toggleJS: false,
      toggleCSS: false,
      toggleReact: false,
      toggleNode: false,
      toggleSQL: false
    };
  }

  componentDidMount() {
    this.props.getSession();
  }

  handleJS = () => {
    if (this.state.toggleJS === false) {
      this.setState({ toggleJS: true });
      this.setState({ toggleCSS: false });
      this.setState({ toggleReact: false });
      this.setState({ toggleNode: false });
      this.setState({ toggleSQL: false });
    } else {
      this.setState({ toggleJS: false });
    }
  };

  handleCSS = () => {
    if (this.state.toggleCSS === false) {
      this.setState({ toggleCSS: true });
      this.setState({ toggleJS: false });
      this.setState({ toggleReact: false });
      this.setState({ toggleNode: false });
      this.setState({ toggleSQL: false });
    } else {
      this.setState({ toggleCSS: false });
    }
  };

  handleReact = () => {
    if (this.state.toggleReact === false) {
      this.setState({ toggleReact: true });
      this.setState({ toggleJS: false });
      this.setState({ toggleCSS: false });
      this.setState({ toggleNode: false });
      this.setState({ toggleSQL: false });
    } else {
      this.setState({ toggleReact: false });
    }
  };

  handleNode = () => {
    if (this.state.toggleNode === false) {
      this.setState({ toggleNode: true });
      this.setState({ toggleReact: false });
      this.setState({ toggleJS: false });
      this.setState({ toggleCSS: false });
      this.setState({ toggleSQL: false });
    } else {
      this.setState({ toggleNode: false });
    }
  };

  handleSQL = () => {
    if (this.state.toggleSQL === false) {
      this.setState({ toggleSQL: true });
      this.setState({ toggleReact: false });
      this.setState({ toggleJS: false });
      this.setState({ toggleCSS: false });
      this.setState({ toggleNode: false });
    } else {
      this.setState({ toggleSQL: false });
    }
  };

  handleTagDropdown = () => {
    if (this.props.clickedTags === false) {
      this.props.handleOpenTags();
    } else {
      this.props.handleCloseTags();
      this.setState({ toggleSQL: false });
      this.setState({ toggleReact: false });
      this.setState({ toggleJS: false });
      this.setState({ toggleCSS: false });
      this.setState({ toggleNode: false });
    }
  };

  handleSearch = e => {
    this.setState({ searchInput: e.target.value });
    if (this.state.searchInput.length <= 1) {
      this.props.searchResults.splice(0);
    }
  };

  _handleKeyDown = e => {
    if (
      this.state.searchInput.charAt(0) === "{" &&
      this.state.searchInput.charAt(this.state.searchInput.length - 1) === "}"
    ) {
      return alert("invalid characters");
    } else if (e.key === "Enter") {
      axios
        .get(`/search/tags?tags=${this.state.searchInput}`)
        .then(response => {
          this.props.updateSearchResults(response.data);
          this.props.history.push("/questionslist");
        })
        .catch(() => {
          alert("No Results Found");
        });
    }
  };

  closeAllTags = () => {
    this.setState({ toggleSQL: false });
    this.setState({ toggleReact: false });
    this.setState({ toggleJS: false });
    this.setState({ toggleCSS: false });
    this.setState({ toggleNode: false });
  }

  routeLogin = () => {
    this.props.history.push("/login");
    this.props.handleCloseTags();
    this.closeAllTags()
  };

  logout = async () => {
    await this.props.logoutUser();
    this.props.history.push("/");
    this.closeAllTags();
  };

  viewMyProfile = async () => {
    await this.props.updateQuestionState({
      selectedUserID: this.props.user.user_id,
      selectedUserDisplayName: this.props.user.display_name, 
      selectedUserCohort: this.props.user.cohort, 
      selectedUserBio: this.props.user.bio
    })
    await this.props.getProfile(this.props.selectedUserID);
    this.props.history.push(`/profile/${this.props.selectedUserDisplayName}`);
  };

  render() {
    let {
      toggleJS,
      toggleCSS,
      toggleNode,
      toggleReact,
      toggleSQL
    } = this.state;

    let tagsLoggedOut = "tags-container";
    if (this.props.user.user_id) {
      tagsLoggedOut += "-loggedin";
    }

    let navLoggedOut = "nav-actions-container";
    if (this.props.user.user_id) {
      navLoggedOut += "-loggedin";
    }
    return (
      <div className="Nav-bar-container">
        <div className="Logo-search-container">
          <div className="Logo-container">
            <Link to="/">
              <img src={stackd_logo} alt="logo" />
            </Link>
            <h6>for students, by students</h6>
          </div>
        </div>
        <div className="Search-container">
          <div className="Search-border">
            <img src={searchicon} alt="icon_img" />
            <input
              className="Search-input"
              placeholder="Search a topic..."
              type="text"
              onChange={this.handleSearch}
              onKeyDown={this._handleKeyDown}
            />
          </div>
          {this.props.clickedTags === true ? (
            <Tween to={{ y: "10px" }}>
              <div className={tagsLoggedOut}>
                {this.state.toggleJS ? (
                  <h3 className="topic-selector" onClick={this.handleJS}>
                    JavaScript -
                  </h3>
                ) : (
                  <h3 className="topic-selector" onClick={this.handleJS}>
                    JavaScript +
                  </h3>
                )}
                {this.state.toggleReact ? (
                  <h3 className="topic-selector" onClick={this.handleReact}>
                    React -
                  </h3>
                ) : (
                  <h3 className="topic-selector" onClick={this.handleReact}>
                    React +
                  </h3>
                )}
                {this.state.toggleNode ? (
                  <h3 className="topic-selector" onClick={this.handleNode}>
                    Node -
                  </h3>
                ) : (
                  <h3 className="topic-selector" onClick={this.handleNode}>
                    Node +
                  </h3>
                )}
                {this.state.toggleCSS ? (
                  <h3 className="topic-selector" onClick={this.handleCSS}>
                    HTML/CSS -
                  </h3>
                ) : (
                  <h3 className="topic-selector" onClick={this.handleCSS}>
                    HTML/CSS +
                  </h3>
                )}
                {this.state.toggleSQL ? (
                  <h3 className="topic-selector" onClick={this.handleSQL}>
                    SQL -
                  </h3>
                ) : (
                  <h3 className="topic-selector" onClick={this.handleSQL}>
                    SQL +
                  </h3>
                )}
              </div>
              <Tags
                toggleJS={toggleJS}
                toggleCSS={toggleCSS}
                toggleReact={toggleReact}
                toggleNode={toggleNode}
                toggleSQL={toggleSQL}
                closeAllTags={this.closeAllTags}
              />
            </Tween>
          ) : null}
          {this.props.user[0] || this.props.user.user_id ? (
            <div className={navLoggedOut}>
              {this.props.clickedTags ? (
                <h3
                  className="tags-dropdown-button"
                  onClick={this.handleTagDropdown}
                >
                  Browse by Topic -
                </h3>
              ) : (
                <h3
                  className="tags-dropdown-button"
                  onClick={this.handleTagDropdown}
                >
                  Browse by Topic +
                </h3>
              )}
            </div>
          ) : (
            <div className={navLoggedOut}>
              {this.props.clickedTags ? (
                <h3
                  className="tags-dropdown-button"
                  onClick={this.handleTagDropdown}
                >
                  Browse by Topic -
                </h3>
              ) : (
                <h3
                  className="tags-dropdown-button"
                  onClick={this.handleTagDropdown}
                >
                  Browse by Topic +
                </h3>
              )}
            </div>
          )}
        </div>
        {this.props.user[0] || this.props.user.user_id ? (
          <div className="Nav-links-container">
            <li
              className="Nav-link-1"
              onClick={() => {
                this.props.history.push("/askquestion");
                this.props.handleCloseTags();
              }}
            >
              + Ask Question
            </li>
            <li
              className="Nav-link-1"
              onClick={() => {
                this.props.history.push("/questionslist");
                this.props.handleCloseTags();
                this.props.updateSearchState({ searchResults: [] });
              }}
            >
              View Questions
            </li>

            <li className="Nav-link-2" onClick={this.viewMyProfile}>
              Profile
            </li>

            <li
              onClick={() => {
                this.logout();
                this.props.handleCloseTags();
              }}
              className="Nav-link-2"
            >
              Logout
            </li>
          </div>
        ) : (
          <div className="Nav-links-container">
            <li className="Nav-link-3" onClick={this.routeLogin}>
              Login
            </li>
          </div>
        )}
        {/*  */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.authReducer.user,
    clickedTags: reduxState.searchReducer.clickedTags,
    searchResults: reduxState.searchReducer.searchResults,
    selectedUserID: reduxState.questionsReducer.selectedUserID,
    selectedUserDisplayName: reduxState.questionsReducer.selectedUserDisplayName,
    selectedUserBio: reduxState.questionsReducer.selectedUserBio,
    selectedUserCohort: reduxState.questionsReducer.selectedUserCohort
  };
};

export default withRouter(
  connect(mapStateToProps, {
    logoutUser,
    getSession,
    handleOpenTags,
    handleCloseTags,
    getProfile,
    updateSearchResults,
    updateSearchState,
    updateQuestionState
  })(Header)
);

// module.exports = {
//   _handleKeyDown
// };
