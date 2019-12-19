import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "./AskQuestion.css";
// import hljs from "highlight.js";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.bubble.css";
import "highlight.js/styles/darkula.css";
import "highlight.js/styles/github.css";
import "highlight.js/styles/docco.css";

import "react-quill/dist/quill.snow.css";
import { createQuestion } from "../../redux/questionsReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
const hljs = require("highlight.js");
// import javascript from "highlight.js/lib/languages/javascript";

// const ReactMarkdown = require("react-markdown/with-html");
// hljs.registerLanguage("javascript", javascript);
hljs.initHighlightingOnLoad();
hljs.listLanguages();
hljs.configure({
  // languages: ["javascript", "ruby", "python", "rust"],
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

// Modal.setAppElement("#root");

export class AskQuestion extends Component {
  state = {
    question_title: "",
    question_desc: "",
    tags: "",
    testing: "",
    time_stamp: "",
    showModal: true
  };

  handleTagChange = e => {
    this.setState({ tags: e.target.value.toLowerCase() });
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
    // const codeDesc = "<code>" + this.state.question_desc + "</code>";
    const codeDesc = this.state.question_desc;
    this.setState({ testing: this.state.question_desc });

    this.props.createQuestion({ ...this.state, question_desc: codeDesc });
    this.setState({ showModal: false });
  };

  // static modules = {
  //   toolbar: {
  //     container: "#toolbar"
  //   }
  // };

  // static formats = [
  //   "header",
  //   "font",
  //   "size",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  //   "color",
  //   "code-block"
  // ];

  render() {
    console.log(this.props);

    return (
      <>
        <div className="Landing-container">
          <div className="Landing-main-container">
            <div className="Landing-heading">
              <h1>Ask questions. Get answers.</h1>
            </div>
            <div className="Landing-overview">
              <h6>
                Learning to code is hard enough. So why do it alone? This is why
                we created Stack'd - an exclusive site for DevMountain students.
              </h6>

              <h6>
                With Stack'd you can seek help by asking questions, give help by
                replying to questions, or save questions/topics for reviewing at
                a later date.
              </h6>
              <div className="Landing-button">
                <button
                  onClick={() => {
                    this.props.updateSearchState({ searchResults: [] });
                    this.props.history.push("/questionslist");
                  }}
                >
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="AskQuestion-background">
          <Modal
            className="questions-modal"
            isOpen={this.state.showModal}
            ariaHideApp={false}
          >
            <div className="AskQuestion-container">
              <div className="AskQuestion-form">
                <button
                  onClick={() => {
                    this.props.history.push("/questionslist");
                  }}
                >
                  X
                </button>
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
                    Explain your question in detail and include necessary
                    details
                  </h6>
                  {/* <CustomToolbar /> */}
                  <ReactQuill
                    value={this.state.question_desc}
                    onChange={this.handleQuillChange}
                    theme="snow"
                    modules={modules}
                    formats={formats}
                  />
                </div>
                <div className="AskQuestion-tags">
                  <h3>Tags</h3>
                  <h6>Add some tags to your question</h6>
                  <input
                    name="tags"
                    placeholder="e.g. variables"
                    onChange={this.handleTagChange}
                  />
                </div>
                <div className="AskQuestion-submit">
                  <button
                    className="AskQuestion-submit-button"
                    onClick={async e => {
                      await this.handleSubmit(e);
                      this.props.history.push("/questionslist");
                    }}
                  >
                    Submit
                  </button>
                </div>
                {/* <div className="Markdown-render-test">
                <h1>REVIEW/TESTING (delete later)</h1>
                <ReactMarkdown source={this.state.testing} escapeHtml={false} />
              </div> */}
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(null, {
    createQuestion
  })(AskQuestion)
);
