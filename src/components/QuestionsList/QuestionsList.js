import React, { Component } from "react";
import {
  updateTagsState,
  handleOpenTags,
  handleCloseTags
} from "../../redux/searchReducer";
import { getAllQuestions, updateQuestionState } from '../../redux/questionsReducer';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class QuestionsList extends Component {
  componentDidMount() {
    this.props.updateTagsState();
    this.props.getAllQuestions();
  }

  render() {
    console.log(this.props.searchResults);
    console.log(this.props.allQuestions);
    const questionsMapped =
      this.props.searchResults &&
      this.props.searchResults.map(search => {
        return <h1>{search.question_title}</h1>;
      });
    const mappedAllQuestions = this.props.allQuestions.map((question) => {
      return (
        <div>
          <div>
            <h1
              onClick={() => {
                this.props.updateQuestionState({ selectedQuestionID: question.question_id });
                this.props.history.push(`/selectedquestion/${question.question_id}`);
              }}>
              {question.question_title}</h1>
            <h2>{question.display_name}</h2>
            <h3>{question.cohort}</h3>
          </div>
          <h3>{question.question_desc}</h3>
          <h5>{question.time_stamp}</h5>
        </div>
      )
    });
    return <div>
      <div>{questionsMapped}</div>
      <div>{mappedAllQuestions}</div>
    </div>;
  }
}

const mapStateToProps = reduxState => {
  return {
    clickedTags: reduxState.searchReducer.clickedTags,
    searchResults: reduxState.searchReducer.searchResults[0],
    allQuestions: reduxState.questionsReducer.allQuestions,
    selectedQuestionID: reduxState.questionsReducer.selectedQuestionID
  };
};

export default withRouter(
  connect(mapStateToProps, {
    updateTagsState,
    handleOpenTags,
    handleCloseTags,
    getAllQuestions,
    updateQuestionState
  })(QuestionsList)
);
