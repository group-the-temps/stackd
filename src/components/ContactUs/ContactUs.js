import React, { Component } from 'react'
import axios from 'axios';
// import {Redirect} from 'react-router-dom';
import './ContactUs.css';

export default class ContactUs extends Component {

    state = {
        senderName: "",
        senderEmail: "",
        senderMessage: "",
    }

    componentDidMount() {
    }
    
    handleMessaging = () => {
        const senderName = this.state.senderName;
        const senderEmail = this.state.senderEmail;
        const senderMessage = this.state.senderMessage;
        axios({
            method: "POST",
            url: "http://localhost:3000/send/to/us",
            data: {
                senderName,
                senderEmail,
                senderMessage,
            }
        }).then( () => {
            this.setState({
                senderName: "",
                senderEmail: "",
                senderMessage: ""
            })
            alert("Message Sent");
            document.getElementsByClassName("contact__inner__container2").reset();
        })
        
    }

    handleContactChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="main__container">
                <form className="contact__container">
                    {/* <div className="contact__header">
                        <h1>Get In Touch</h1>
                    </div> */}
                    {/* <section className="contact__inner__container1">
                        <h4>Name</h4>
                        <h4>Email</h4>
                        <h4>Message</h4>
                    </section> */}
                    <section className="contact__inner__container2">
                        <input className="contact__inputs"type="text" name="senderName" placeholder="Name" onChange={this.handleContactChange}/>
                        <input className="contact__inputs"type="email" name="senderEmail" placeholder="Email" onChange={this.handleContactChange}/>
                        <input className="contact__inputs"type="text" name="senderMessage" placeholder="Message" onChange={this.handleContactChange}/>
                        <div className="contact__send">
                            <input className="contact__send__btn" type="submit" value="Submit" onClick={this.handleMessaging}/>
                        </div>
                    </section>
                </form>
            </div>
        )
    }
};
