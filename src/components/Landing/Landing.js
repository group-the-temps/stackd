import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Pat from "../../icons and pics/pat profile.jpg";
import Ben from "../../icons and pics/ben profile.jpg";
import Shane from "../../icons and pics/shane profile.jpg";
import James from "../../icons and pics/james profile.jpg";
import DevMountain from "../../icons and pics/devmountain logo.png";
import LevelUp from "../../icons and pics/level up.png";
import Ask from "../../icons and pics/ask.png";
import ContactUs from "../ContactUs/ContactUs";

export default class Landing extends Component {
  render() {
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
                <Link to="/questionslist">
                  <button>Start Learning</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Landing-features">
          <div className="Landing-features-header">
            <h3>Features</h3>
          </div>
          <div className="Landing-features-container">
            <div className="Landing-features-feature">
              <img src={Ask} alt="Feature Icon" />
              <h3>Ask questions </h3>
              <h6>
                Quickly and easily ask your questions to the community of
                software developers.
              </h6>
            </div>
            <div className="Landing-features-feature">
              <img src={LevelUp} alt="Feature Icon" />
              <h3>Level up</h3>
              <h6>
                Earn points by asking good questions and providing helpful
                answers.
              </h6>
            </div>
            <div className="Landing-features-feature">
              <img src={DevMountain} alt="Feature Icon" />
              <h3>DevMountain Network</h3>
              <h6>
                Ask curriculum specific questions to current and former
                DevMountain students.
              </h6>
            </div>
          </div>
        </div>
        <div className="Landing-aboutus">
          <div className="Landing-aboutus-header">
            <h3>The Stack'd Dev Team</h3>
          </div>
          <div className="Landing-aboutus-container">
            <div className="Landing-aboutus-person">
              <img src={Ben} alt="Profile pic" />
              <h3>Ben Anderson</h3>
              <h6>
                Ben's about section goes here. This will be a short write up of
                each person
              </h6>
            </div>
            <div className="Landing-aboutus-person">
              <img src={James} alt="Profile pic" />
              <h3>James Blount</h3>
              <h6>
                Jame's about section goes here. This will be a short write up of
                each person
              </h6>
            </div>
            <div className="Landing-aboutus-person">
              <img src={Pat} alt="Profile pic" />
              <h3>Pat Thibodeau</h3>
              <h6>
                Pat's about section goes here. This will be a short write up of
                each person
              </h6>
            </div>
            <div className="Landing-aboutus-person">
              <img src={Shane} alt="Profile pic" />
              <h3>Shane Gallatin</h3>
              <h6>
                Shane's about section goes here. This will be a short write up
                of each person
              </h6>
            </div>
          </div>
          <div>
            <div className="Landing-contactus-header">
              <h3>Contact Us</h3>
            </div>
            <section className="Landing-contactus-container">
              <ContactUs className="Landing-contactus-form" />
            </section>
          </div>
        </div>
      </>
    );
  }
}
