import React, { Component } from "react";
import {
  updateTagsState,
  handleOpenTags,
  handleCloseTags
} from "../../redux/searchReducer";
import {
  getAllQuestions,
  updateQuestionState
} from "../../redux/questionsReducer";
import "./QuestionsList.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import SelectedQuestion from "../SelectedQuestion/SelectedQuestion";
// import Modal from "react-modal"

class QuestionsList extends Component {
  constructor() {
    super();

    this.state = {
      // clickedTitle: false
    }
  }
  componentDidMount() {
    this.props.updateTagsState();
    this.props.getAllQuestions();
  }

  render() {
    // console.log(this.props.searchResults);
    console.log(this.props.clickedTitle)
    console.log(this.props);
    console.log(this.props.allQuestions);
    // const questionsMapped =
    //   this.props.searchResults &&
    //   this.props.searchResults.map(search => {
    //     return <h1>{search.question_title}</h1>;
    //   });
    const mappedAllQuestions = this.props.allQuestions.map(question => {
      console.log(question.time_stamp);
      return (
        <div className="QuestionsList-question-container">
          <div className="QuestionsList-question-left">
            <div className="QuestionsList-question-box">
              <li>{question.total_vote_count}</li>
              <li>Liked</li>
            </div>
            <div className="QuestionsList-question-box">
              <li>0</li>
              <li>Saved</li>
            </div>
          </div>
          <div className="QuestionsList-question-right">
            <h1
              className="QuestionsList-question-title"
              onClick={() => {
                this.props.updateQuestionState({
                  selectedQuestionID: question.question_id,
                  clickedTitle: true
                });
                this.props.history.push(
                  `/selectedquestion/${question.question_id}`
                );
                
              }}
            >
              {question.question_title}
            </h1>
            {/* <h3>{question.cohort}</h3> */}
            {/* <h3>{question.question_desc}</h3> */}

            <h5>
              Asked <Moment fromNow>{question.time_stamp}</Moment> by{" "}
              {question.display_name} from {question.cohort}
            </h5>
            <h5>0 Answers Submitted</h5>
          </div>
        </div>
      );
    });
    return (
      <div className="QuestionsList-container">
        {/* <div>{questionsMapped}</div> */}
        <h1 className="QuestionsList-header">All Questions</h1>
        <div className="QuestionsList-mapped-container">
          {mappedAllQuestions}
        </div>
        {/* {this.props.clickedTitle ? <SelectedQuestion showModal={this.state.showModal}/> : null} */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    clickedTags: reduxState.searchReducer.clickedTags,
    searchResults: reduxState.searchReducer.searchResults[0],
    allQuestions: reduxState.questionsReducer.allQuestions,
    selectedQuestionID: reduxState.questionsReducer.selectedQuestionID,
    clickedTitle: reduxState.questionsReducer.clickedTitle
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
