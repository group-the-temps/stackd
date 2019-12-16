import React, { Component } from "react";
import "./SelectedQuestion.css";
import { getSelectedQuestion } from "../../redux/questionsReducer";
import { connect } from "react-redux";
import ArrowUp from "../../icons and pics/arrow_up.png";
import ArrowDown from "../../icons and pics/arrow_down.png";
import Star from "../../icons and pics/star.png";
import ReactMarkdown from "react-markdown";

class SelectedQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getSelectedQuestion(this.props.selectedQuestionID);
  }

  render() {
    console.log(this.props.selectedQuestionID);
    console.log(this.props.selectedQuestion[0]);
    const selectedQuestion =
      this.props.selectedQuestion && this.props.selectedQuestion[0];
    return (
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
                Asked 6 hours ago by Pat (not actual data)
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
          <div className="SelectedQuestion-answers-header">All Answers</div>
          <div className="SelectedQuestion-answers-mapped">Answers Mapped</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    selectedQuestionID: reduxState.questionsReducer.selectedQuestionID,
    selectedQuestion: reduxState.questionsReducer.selectedQuestion
  };
};

export default connect(mapStateToProps, { getSelectedQuestion })(
  SelectedQuestion
);