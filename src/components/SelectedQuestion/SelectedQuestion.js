import React, { Component } from "react";
import "./SelectedQuestion.css";
import { getSelectedQuestion, getSelectedAnswers } from "../../redux/questionsReducer";
import { connect } from "react-redux";
import ArrowUp from "../../icons and pics/arrow_up.png";
import ArrowDown from "../../icons and pics/arrow_down.png";
import Star from "../../icons and pics/star.png";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
// import Modal from "react-modal";

class SelectedQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true
    };
  }

  componentDidMount() {
    this.props.getSelectedQuestion(this.props.selectedQuestionID);
    this.props.getSelectedAnswers(this.props.selectedQuestionID);
  }

  render() {
    console.log(this.props.selectedQuestionID);
    console.log(this.props.selectedQuestion[0]);
    console.log(this.props.selectedAnswers)
    const selectedQuestion =
      this.props.selectedQuestion && this.props.selectedQuestion[0];
    const answersMapped = this.props.selectedAnswers.map(answer => {
      return (
        <div>
          {answer.answer_desc}
          {answer.display_name}
          {answer.cohort}
          {answer.time_stamp}
        </div>
      )
    })
    return (
      // <Modal
      // isOpen={this.state.showModal}
      // className='selected-question-modal'
      // background=
      // >
      <div className="SelectedQuestion-container">
        <h6 className="SelectedQuestion-header">Question</h6>
        <div className="SelectedQuestion-question-container">
          <div className="SelectedQuestion-title">
            <div className="SelectedQuestion-icons-container">
              <img className="SelectedQuestion-arrow" src={ArrowUp} alt="up" />
              <div>0</div>
              <img
                className="SelectedQuestion-arrow"
                src={ArrowDown}
                alt="down"
              />
              <img className="SelectedQuestion-star" src={Star} alt="star" />
            </div>
            <h3>
              {selectedQuestion.question_title}
              <h6 className="SelectedQuestion-subtitle-details">
              Asked <Moment fromNow>{selectedQuestion.time_stamp}</Moment> by{" "} {selectedQuestion.display_name} from {selectedQuestion.cohort}
              </h6>
            </h3>
          </div>
          <ReactMarkdown
            className="SelectedQuestion-question"
            source={selectedQuestion.question_desc}
            escapeHtml={false}
          ></ReactMarkdown>
        </div>
        <div className="SelectedQuestion-answers-container">
          <h6>Answers</h6>
          {answersMapped}
          <div className="SelectedQuestion-answers-header">All Answers</div>
          <div className="SelectedQuestion-answers-mapped">Answers Mapped</div>
        </div>
      </div>
      // </Modal>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    selectedQuestionID: reduxState.questionsReducer.selectedQuestionID,
    selectedQuestion: reduxState.questionsReducer.selectedQuestion,
    selectedAnswers: reduxState.questionsReducer.selectedAnswers,
    clickedTitle: reduxState.questionsReducer.clickedTitle
  };
};

export default connect(mapStateToProps, { getSelectedQuestion, getSelectedAnswers })(
  SelectedQuestion
);
