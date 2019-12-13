import React, { Component } from "react";
import {
  updateTagsState,
  handleOpenTags,
  handleCloseTags
} from "../../redux/searchReducer";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class QuestionsList extends Component {
  componentDidMount() {
    this.props.updateTagsState();
  }
  render() {
    console.log(this.props.searchResults);
    const questionsMapped =
      this.props.searchResults &&
      this.props.searchResults.map(search => {
        return <h1>{search.question_title}</h1>;
      });
    return <div>{questionsMapped}</div>;
  }
}

const mapStateToProps = reduxState => {
  return {
    clickedTags: reduxState.searchReducer.clickedTags,
    searchResults: reduxState.searchReducer.searchResults[0]
  };
};

export default withRouter(
  connect(mapStateToProps, {
    updateTagsState,
    handleOpenTags,
    handleCloseTags
  })(QuestionsList)
);
