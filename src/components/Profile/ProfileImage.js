import React, { Component } from "react";
import { connect } from "react-redux";
import { storage } from "../../config/firebaseConfig";
import axios from "axios";
import "./ProfileImage.css";

class ProfileImage extends Component {
  state = {
    imageUrl: "",
    newImage: ""
  };

  componentDidMount = () => {
    axios.get(`/prof/img/${this.props.selectedUserID}`).then(response => {
      console.log(response);
      this.setState({ imageUrl: response.data[0].img });
    });
  };

  handleImageUpload = e => {
    if (e.target.files[0]) {
      const img = e.target.files[0];
      this.setState({ imageUrl: "loading", newImage: "loading" });
      const uploadTask = storage.ref(`profile_pictures/${img.name}`).put(img);
      uploadTask.on("state_changed", () => {
        storage
          .ref("profile_pictures")
          .child(img.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ imageUrl: url, newImage: url });
          });
      });
    }
  };

  saveImg = async () => {
    await axios.put(`/prof/img/${this.props.selectedUserID}`, {
      img: this.state.newImage
    });
    this.setState({ newImage: "" });
  };

  render() {
    console.log(this.state.imageUrl);
    console.log(this.props.selectedUserID);
    return (
      <div>
        <div>
          <img
            className="profile__image"
            src={this.state.imageUrl}
            alt="Upload a pic!"
          ></img>
        </div>
        <div className="firebase__btns-container">
          <input
            className="firebase__btns"
            type="file"
            onChange={this.handleImageUpload}
          />
          {this.state.newImage !== "" ||
          this.state.newImage === this.state.imageUrl ? (
            <input
              type="button"
              className="firebase__btn2"
              value="Save Image"
              onClick={this.saveImg}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.authReducer.user,
    selectedUserID: reduxState.questionsReducer.selectedUserID
  };
};

export default connect(mapStateToProps)(ProfileImage);
