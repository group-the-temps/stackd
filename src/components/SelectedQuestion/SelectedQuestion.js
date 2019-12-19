import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import hljs from "highlight.js";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";
import "highlight.js/styles/github.css";
import "highlight.js/styles/docco.css";
import "./SelectedQuestion.css";
import "react-quill/dist/quill.snow.css";
import {
  getSelectedQuestion,
  getSelectedAnswers,
  createAnswer
} from "../../redux/questionsReducer";
import { connect } from "react-redux";
import ArrowUp from "../../icons and pics/arrow_up.png";
import ArrowDown from "../../icons and pics/arrow_down.png";
import Star from "../../icons and pics/star.png";
import Like from "../../icons and pics/like.png";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getQuestionLikes, getAnswerLikes } from "../../redux/likesReducer";
import axios from "axios";
import Highlight from "react-highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import CodeBlock from "./CodeBlock";
import SyntaxHighlighter from "react-syntax-highlighter";
import virtualizedRenderer from "react-syntax-highlighter-virtualized-renderer";
import { darkula } from "react-syntax-highlighter/dist/esm/styles/hljs/";
// const ReactMarkdown = require("react-markdown/with-html");
// import Modal from "react-modal";
hljs.registerLanguage("javascript", javascript);
hljs.configure({
  languages: ["javascript", "ruby", "python", "rust"],
  useBr: false
});

const modules = {
  syntax: {
    highlight: text => hljs.highlightAuto(text).value
  },
  toolbar: [
    ["bold", "italic", "underline", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ],
  clipboard: {
    matchVisual: false
  }
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block"
];
/*
 * Custom toolbar component including the custom heart button and dropdowns
 */
// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select className="ql-font">
//       <option value="arial" selected>
//         Arial
//       </option>
//       <option value="comic-sans">Comic Sans</option>
//       <option value="courier-new">Courier New</option>
//       <option value="georgia">Georgia</option>
//       <option value="helvetica">Helvetica</option>
//       <option value="lucida">Lucida</option>
//     </select>
//     <select className="ql-size">
//       <option value="extra-small">Size 1</option>
//       <option value="small">Size 2</option>
//       <option value="medium" selected>
//         Size 3
//       </option>
//       <option value="large">Size 4</option>
//     </select>
//     <select className="ql-align" />
//     <select className="ql-color" />
//     <select className="ql-background" />
//     <button className="ql-clean" />
//     <button className="ql-code-block" />
//   </div>
// );

// Add sizes to whitelist and register them
// const Size = Quill.import("formats/size");
// Size.whitelist = ["extra-small", "small", "medium", "large"];
// Quill.register(Size, true);

// Add fonts to whitelist and register them
// const Font = Quill.import("formats/font");
// Font.whitelist = [
//   "arial",
//   "comic-sans",
//   "courier-new",
//   "georgia",
//   "helvetica",
//   "lucida"
// ];
// Quill.register(Font, true);

class SelectedQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      answer_desc: ""
    };
  }

  componentDidMount() {
    this.props.getSelectedQuestion(this.props.selectedQuestionID);
    this.props.getSelectedAnswers(this.props.selectedQuestionID);
    this.props.getQuestionLikes(
      this.props.selectedQuestionID,
      this.props.user_id
    );
  }
  handleQuillChange = value => {
    this.setState({ answer_desc: value });
  };

  likeQuestion = () => {
    if (this.props.likedQuestion.length === 0) {
      axios.post('/liked/question/bool', {
        question_id: this.props.selectedQuestionID,
        user_id: this.props.user_id
      }).then(() => {
        axios.put(`/liked/question/${this.props.selectedQuestionID}`)
      })
    } else {
      alert('You can only like a question one time!')
    }
  }

  // likeAnswer = () => {
  //   this.props.getAnswerLikes
  // }

  handleSubmit = async e => {
    // console.log(this.props);
    e.preventDefault();
    // this.setState({ testing: this.state.question_desc });
    await this.props.createAnswer(
      this.props.selectedQuestionID,
      this.props.user_id,
      this.state.answer_desc
    );
    this.setState({ showModal: false, answer_desc: "" });
  };

  //   static modules = {
  //     toolbar: {
  //       container: "#toolbar"
  //     }
  //   };

  //   static formats = [
  //     "header",
  //     "font",
  //     "size",
  //     "bold",
  //     "italic",
  //     "underline",
  //     "strike",
  //     "blockquote",
  //     "list",
  //     "bullet",
  //     "indent",
  //     "link",
  //     "image",
  //     "color",
  //     "code-block"
  //   ];

  render() {
    console.log(this.props.likedQuestion);
    // console.log(this.props.selectedQuestionID);
    // console.log(this.props.selectedQuestion[0]);
    // console.log(this.props.selectedAnswers);
    const selectedQuestion =
      this.props.selectedQuestion && this.props.selectedQuestion[0];
    const answersMapped = this.props.selectedAnswers.map(answer => {
      console.log(answer.answer_id)
      return (
        <div>
          <div className="SelectedQuestion-answer-container">
            <div className="SelectedQuestion-title">
              <div className="SelectedQuestion-icons-container">
                {this.props.user.user_id ? <div className="SelectedQuestion-icons-container-count">
                  {answer.likes_count}
                </div> : null}
                {this.props.user.user_id ? <div className="SelectedQuestion-like-box">
                  <img className="SelectedQuestion-arrow" src={Like} alt="up" onClick={() => {
                    this.props.getAnswerLikes(answer.answer_id, this.props.user_id).then(async () => {
                      if (this.props.likedAnswer.length === 0) {
                        await axios.post('/liked/answer/bool', {
                          answer_id: answer.answer_id,
                          user_id: this.props.user_id
                        });
                        axios.put(`/liked/answer/${answer.answer_id}`);
                      } else {
                        alert('You can only like an answer one time!')
                      }
                    })
                  }} />
                  Like
                </div> : null}
                {/* <img
                className="SelectedQuestion-arrow"
                src={ArrowDown}
                alt="down"
              />
              <img className="SelectedQuestion-star" src={Star} alt="star" /> */}
              </div>

              <h6 className="SelectedQuestion-subtitle-details" onClick={ async () => {
                await this.props.updateQuestionState({
                  selectedUserID: answer.user_id,
                  selectedUserDisplayName: answer.display_name,
                  selectedUserBio: answer.bio,
                  selectedUserCohort: answer.cohort
                })
                this.props.history.push(`/profile/${answer.display_name}`);
              }}>
                Submitted <Moment fromNow={answer.time_stamp}></Moment> by{" "}
                {answer.display_name} from {answer.cohort}
              </h6>
            </div>
            <ReactMarkdown
              className="SelectedQuestion-question"
              renderers={{ inlineCode: CodeBlock }}
              source={answer.answer_desc}
              escapeHtml={false}
            ></ReactMarkdown>
          </div>
        </div>
      );
    });
    return (
      // <Modal
      // isOpen={this.state.showModal}
      // className='selected-question-modal'
      // background=
      // >
      <div className="SelectedQuestion-container">
        <h6 className="SelectedQuestion-header">Question</h6>
        <div className="SelectedQuestion-question-background">
          <div className="SelectedQuestion-question-container">
            <div className="SelectedQuestion-title">
              <div className="SelectedQuestion-icons-container">
                {this.props.user.user_id ? <div className="SelectedQuestion-icons-container-count">{this.props.likedQuestionCount}</div> : null}
                {this.props.user.user_id ? <div className="SelectedQuestion-like-box">
                  <img className="SelectedQuestion-arrow" src={Like} alt="up" onClick={this.likeQuestion} />
                  Like
                </div> : null}
              </div>
              <h3>
                {selectedQuestion.question_title}
                <h6 className="SelectedQuestion-subtitle-details" onClick={ async () => {
                await this.props.updateQuestionState({
                  selectedUserID: selectedQuestion.user_id,
                  selectedUserDisplayName: selectedQuestion.display_name,
                  selectedUserBio: selectedQuestion.bio,
                  selectedUserCohort: selectedQuestion.cohort
                })
                this.props.history.push(`/profile/${selectedQuestion.display_name}`);
              }}>
                  Asked <Moment fromNow>{selectedQuestion.time_stamp}</Moment>{" "}
                  by {selectedQuestion.display_name} from{" "}
                  {selectedQuestion.cohort}
                </h6>
              </h3>
            </div>

            <ReactMarkdown
              className="SelectedQuestion-question"
              source={selectedQuestion.question_desc}
              renderers={{ inlineCode: CodeBlock }}
              escapeHtml={false}
            ></ReactMarkdown>
          </div>
        </div>
        <h6 className="SelectedQuestion-header">Answers</h6>
        <div className="SelectedQuestion-answers-container">
          {/* <h6 className="SelectedQuestion-answers-header">SubmittedAnswers</h6> */}
          {answersMapped}
          {/* <div className="SelectedQuestion-answers-header">All Answers</div>
          <div className="SelectedQuestion-answers-mapped">Answers Mapped</div> */}
          {this.props.user.user_id ? (
            <div className="SubmitAnswer-body">
              <h6>Submit your answer below!</h6>
              <br />
              {/* <CustomToolbar /> */}

              <ReactQuill
                value={this.state.answer_desc}
                onChange={this.handleQuillChange}
                theme="snow"
                modules={modules}
                formats={formats}
              />

              <div className="SubmitAnswer-button-box">
                <button onClick={this.handleSubmit}>Submit Your Answer</button>
              </div>
            </div>
          ) : null}
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
    clickedTitle: reduxState.questionsReducer.clickedTitle,
    user: reduxState.authReducer.user,
    user_id: reduxState.authReducer.user.user_id,
    likedQuestionCount: reduxState.questionsReducer.likedQuestionCount,
    likedQuestion: reduxState.likesReducer.likedQuestion,
    likedAnswer: reduxState.likesReducer.likedAnswer
  };
};

export default connect(mapStateToProps, {
  getSelectedQuestion,
  getSelectedAnswers,
  createAnswer,
  getQuestionLikes,
  getAnswerLikes
})(SelectedQuestion);
