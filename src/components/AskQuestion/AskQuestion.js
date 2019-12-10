import React, { Component } from "react";
import ReactQuill from "react-quill";
import "./AskQuestion.css";
import "react-quill/dist/quill.snow.css";

export default class AskQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", complete: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ text: value });
    console.log(value);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ complete: this.state.text });
  };
  render() {
    return (
      <>
        <div className="AskQuestion-container">
          <div className="AskQuestion-header">
            <h1>Ask a question</h1>
          </div>
          <div className="AskQuestion-form">
            <div className="AskQuestion-title">
              <h3>Title</h3>
              <h6>At a high-level, what's your question?</h6>
              <input placeholder="e.g. What's the difference between var, let, and const?" />
            </div>
            <div className="AskQuestion-body">
              <h3>Body</h3>
              <h6>
                Explain your question in detail and include necessary details
              </h6>
              <ReactQuill
                value={this.state.text}
                onChange={this.handleChange}
              />
            </div>
            <div className="AskQuestion-tags">
              <h3>Tags</h3>
              <h6>Add some tags to your question</h6>
              <input placeholder="e.g. variables" />
            </div>
            <div className="AskQuestion-submit">
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
            <div>
              <h1>REVIEW/TESTING (delete later)</h1>
              <p>{this.state.complete}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
