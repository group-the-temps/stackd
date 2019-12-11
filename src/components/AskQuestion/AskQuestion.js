import React, { Component } from "react";
import ReactQuill from "react-quill";
import "./AskQuestion.css";
import "react-quill/dist/quill.snow.css";
import { createQuestion } from "../../redux/questionsReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";

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
  };

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
                <ReactQuill
                  value={this.state.question_desc}
                  onChange={this.handleQuillChange}
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
                <p>{this.state.testing}</p>
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
