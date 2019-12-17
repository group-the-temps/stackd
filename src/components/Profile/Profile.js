import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfile, editBio, editDisplayName, editCohort, getAskedQuestions} from '../../redux/profileReducer';
import ProfileImage from './ProfileImage';
import './Profile.css';

class Profile extends Component {

    state = {
        error: false,
        editBio: false,
        bio: "",
        editCohort: false,
        cohort: "",
        editName: false,
        display_name: "",
        showProfileName: false,
        showProfileBio: false,
        showProfileCohort: false,
        askedQuestions: []
    }

    componentDidMount() {
        this.props.getProfile(this.props.user_id);
        // this.handleGetAskedQuestions();
        this.props.getAskedQuestions(this.props.profile.user_id)
        // .then( (response) => {
        //     this.setState({askedQuestions: response.data})
        // })
    }

    handleGetAskedQuestions = () => {
    }

    handleOpenBio = () => {
        if (this.state.editBio === false) {
            this.setState({editBio: true});
        } else {
            this.setState({editBio: false});
        }
    }
    handleOpenName = () => {
        if (this.state.editName === false) {
            this.setState({editName: true});
        } else {
            this.setState({editName: false});
        }
    }
    handleOpenCohort = () => {
        if (this.state.editCohort === false) {
            this.setState({editCohort: true});
        } else {
            this.setState({editCohort: false});
        }
    }

    handleEditBio = (e) => {
        e.preventDefault();
        // console.log(this.props)
        this.props
        .editBio(this.state.bio)
        .then( () => {
            this.setState({
                editBio: false,
                showProfileBio: true
            })
            this.props.history.push("/profile");
            this.props.getProfile(this.props.user_id);
            this.setState({
                bio: this.props[0].bio,
            })
        })
        .catch( () => {
            this.setState({
                error: true
            });
        });
    };
    
    handleEditName = (e) => {
        e.preventDefault();
        this.props
        .editDisplayName(this.state.display_name)
        .then( () => {
            this.setState({
                display_name: this.props.profile.display_name,
                editName: false,
                showProfileName: true
            })
            this.props.history.push("/profile");
            this.props.getProfile(this.props.user_id);
        })
        .catch( () => {
            this.setState({
                error: true
            });
        });
    };

    handleEditCohort = (e) => {
        e.preventDefault();
        this.props
        .editCohort(this.state.cohort)
        .then( () => {
            this.setState({
                showProfileCohort: true,
                editCohort: false
            })
            this.props.history.push("/profile");
            this.props.getProfile(this.props.user_id);
            this.setState({
                cohort: this.props[0].cohort
            })
        })
        .catch( () => {
            this.setState({
                error: true
            });
        });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        console.log(this.state.display_name)
        console.log(this.state)
        console.log(this.state.askedQuestions)
        // console.log(this.props.user)
        // console.log(this.props.profile)
        const {display_name, bio, cohort} = this.props.user;
        return (
            <main className="page__container">
                <div className="profile__container">
                    <div className="left__innerCont">
                        <section className="img__section">
                            <ProfileImage user_id={this.props.user_id} />
                            <div className="cohort__cont">
                                {!this.state.showProfileCohort ? <label>Cohort: {cohort}</label> : <label>Cohort: {this.state.cohort}</label>}
                                <div className="cohort__edit">
                                    <button className="edit__cohort__btn" onClick={this.handleOpenCohort}>
                                        <i className="fas fa-edit fa-1x"></i>
                                    </button>
                                </div>
                            </div>
                            {this.state.editCohort ? 
                                (
                                <>
                                    <input name="cohort" placeholder="e.g.  DM26" onChange={this.handleChange} />
                                    <div>
                                        <input className="save__changes__btn" type="button" value="Save Changes" onClick={this.handleEditCohort} />
                                        <input className="close__btn" type="button" value="Cancel" onClick={this.handleOpenCohort} />
                                    </div>
                                </>
                                ) : null}
                            <label>{`166 CRUDability`}</label>
                        </section>
                    </div>
                    <div className="right__innerCont">
                        <section className="name__bio__section">
                            <div className="cont">
                            <section className="name__container">
                                {!this.state.showProfileName ? <label className="profile__name">{display_name}</label> : <label className="profile__name">{this.state.display_name}</label>}
                            </section>
                                <button className="edit__name__btn" onClick={this.handleOpenName}>
                                    <i className="fas fa-edit fa-1x"></i>
                                </button>
                            </div>
                            {this.state.editName ?
                                (
                                    <>
                                        <input className="name__input" name="display_name" placeholder="New Display Name" onChange={this.handleChange} />
                                        <div>
                                            <input className="save__changes__btn" type="button" value="Save Changes" onClick={this.handleEditName} />
                                            <input className="close__btn" type="button" value="Cancel" onClick={this.handleOpenName} />
                                        </div>
                                    </>
                                ) : null}
                            <div className="cont">
                            <section className="bio__container">
                                <h2 className="bio__header">About Me:</h2>
                                {!this.state.showProfileBio ? <p className="profile__bio">{bio}</p> : <p className="profile__bio">{this.state.bio}</p>}
                            </section>
                                <button className="edit__bio__btn" onClick={this.handleOpenBio}>
                                    <i className="fas fa-edit fa-1x"></i>
                                </button>
                            </div>
                            {this.state.editBio ? 
                                (
                                <>
                                    <textarea className="bio__input" name="bio" placeholder="Tell us a little about yourself." onChange={this.handleChange} />
                                    <div>
                                        <input className="save__changes__btn" type="button" value="Save Changes" onClick={this.handleEditBio} />
                                        <input className="close__btn" type="button" value="Cancel" onClick={this.handleOpenBio} />
                                    </div>
                                </>
                                ) : null}
                        </section>
                    </div>
                </div>
                        <section className="extra__info__section">
                            <div className="profile__questions">
                                <label>Asked Questions List</label>
                                <h1>{this.state.askedQuestions}</h1>
                            </div>
                            {/* <div className="profile__questions">
                                <label>Saved Questions List</label>
                            </div> */}
                        </section>
            </main>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        profile: reduxState.profileReducer.profile,
        id: reduxState.profileReducer.profile.user_id,
        user: reduxState.authReducer.user,
        user_id: reduxState.authReducer.user.user_id

    }
}

export default connect(mapStateToProps, {getProfile, editBio, editDisplayName, editCohort, getAskedQuestions})(Profile);