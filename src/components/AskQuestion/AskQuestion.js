import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "./AskQuestion.css";
import "react-quill/dist/quill.snow.css";
import { createQuestion } from "../../redux/questionsReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
// const ReactMarkdown = require("react-markdown/with-html");

/*
 * Custom toolbar component including the custom heart button and dropdowns
 */
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
    <button className="ql-code-block" />
  </div>
);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

Modal.setAppElement('#root')

class AskQuestion extends Component {
  state = {
    question_title: "",
    question_desc: "",
    tags: "",
    testing: "",
    showModal: true
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e);
  };

  handleQuillChange = value => {
    this.setState({ question_desc: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ testing: this.state.question_desc });
    this.props.createQuestion(this.state);
    this.setState({showModal: false});
  };

  static modules = {
    toolbar: {
      container: "#toolbar"
    }
  };

  static formats = [
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
    "color",
    "code-block"
  ];

  render() {
    console.log(this.props);

    return (
      <div className="AskQuestion-background">
        <Modal className="questions-modal" isOpen={this.state.showModal}>
          <div className="AskQuestion-container">
            <div className="AskQuestion-form">
              <button onClick={() => this.props.history.push("/")}>X</button>
              <div className="AskQuestion-title">
                <h3>Title</h3>
                <h6>At a high-level, what's your question?</h6>
                <input
                  name="question_title"
                  placeholder="e.g. What's the difference between var, let, and const?"
                  onChange={this.handleChange}
                />
              </div>
              <div className="AskQuestion-body">
                <h3>Body</h3>
                <h6>
                  Explain your question in detail and include necessary details
                </h6>
                <CustomToolbar />
                <ReactQuill
                  value={this.state.question_desc}
                  onChange={this.handleQuillChange}
                  modules={AskQuestion.modules}
                  formats={AskQuestion.formats}
                />
              </div>
              <div className="AskQuestion-tags">
                <h3>Tags</h3>
                <h6>Add some tags to your question</h6>
                <input
                  name="tags"
                  placeholder="e.g. variables"
                  onChange={this.handleChange}
                />
              </div>
              <div className="AskQuestion-submit">
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
              <div>
                <h1>REVIEW/TESTING (delete later)</h1>
                <ReactMarkdown source={this.state.testing} escapeHtml={false} />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState);
  return {
    // question: reduxState.questionsReducer.question
  };
};

export default withRouter(
  connect(mapStateToProps, {
    createQuestion
  })(AskQuestion)
);
