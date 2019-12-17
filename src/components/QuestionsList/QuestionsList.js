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
// import SelectedQuestion from "../SelectedQuestion/SelectedQuestion";
// import Modal from "react-modal"

class QuestionsList extends Component {
  constructor() {
    super();

    this.state = {
      // clickedTitle: false
    };
  }
  componentDidMount() {
    this.props.updateTagsState();
    this.props.getAllQuestions();
  }

  render() {
    // console.log(this.props.searchResults);
    // console.log(this.props.clickedTitle);
    // console.log(this.props);
    // console.log(this.props.allQuestions);
    // console.log(this.props.searchResults);
    // console.log(this.props.answerCount);
    // const questionsMapped =
    //   this.props.searchResults &&
    //   this.props.searchResults.map(search => {
    //     return <h1>{search.question_title}</h1>;
    //   });
    if (this.props.searchResults.length > 0) {
      var mappedAllQuestions = this.props.searchResults.map(question => {
        const mappedCount = this.props.answerCount.map(answer => {
          if (question.question_id === answer.question_id) {
            for (let i = 0; i < answer.count.length; i++) {
              if (answer.count[i] !== undefined) {
                return <h5>{answer.count} Answers Submitted</h5>;
              }
            }
          }
        });
        return (
          <div className="QuestionsList-question-container">
            <div className="QuestionsList-question-left">
              <div className="QuestionsList-question-box">
                <li>{question.likes_count}</li>
                <li>Liked</li>
              </div>
              {/* <div className="QuestionsList-question-box">
                <li>0</li>
                <li>Saved</li>
              </div> */}
            </div>
            <div className="QuestionsList-question-right">
              <h1
                className="QuestionsList-question-title"
                onClick={() => {
                  this.props.updateQuestionState({
                    selectedQuestionID: question.question_id
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
              {mappedCount}
            </div>
          </div>
        );
      });
    } else {
      mappedAllQuestions = this.props.allQuestions.map(question => {
        const mappedCount = this.props.answerCount.map(answer => {
          if (question.question_id === answer.question_id) {
            for (let i = 0; i < answer.count.length; i++) {
              if (answer.count[i] !== undefined) {
                return <h5>{answer.count} Answers Submitted</h5>;
              }
            }
          }
        });
        return (
          <div className="QuestionsList-question-container">
            <div className="QuestionsList-question-left">
              <div className="QuestionsList-question-box">
                <li>{question.likes_count}</li>
                <li>Liked</li>
              </div>
              {/* <div className="QuestionsList-question-box">
                <li>0</li>
                <li>Saved</li>
              </div> */}
            </div>
            <div className="QuestionsList-question-right">
              {/* <h1
                className="QuestionsList-question-title"
                onClick={() => {
                  this.props.updateQuestionState({
                    selectedQuestionID: question.question_id
                  });
                  this.props.history.push(
                    `/selectedquestion/${question.question_id}`
                  );
                }}
              >
                {question.question_title}
              </h1> */}
              {/* <h3>{question.cohort}</h3> */}
              {/* <h3>{question.question_desc}</h3> */}
              {/* <div className="QuestionsList-question-right"> */}
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
              {mappedCount}
            </div>
          </div>
          //   </div>
        );
      });
    }
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
    searchResults: reduxState.searchReducer.searchResults,
    allQuestions: reduxState.questionsReducer.allQuestions,
    selectedQuestionID: reduxState.questionsReducer.selectedQuestionID,
    clickedTitle: reduxState.questionsReducer.clickedTitle,
    answerCount: reduxState.questionsReducer.answerCount
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
