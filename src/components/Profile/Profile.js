import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfile, editBio, editDisplayName, editCohort} from '../../redux/profileReducer';
import './Profile.css';

class Profile extends Component {

    state = {
        error: false,
        editBio: false,
        bio: "",
        editCohort: false,
        cohort: "",
        editName: false,
        display_name: ""
    }

    componentDidMount() {
        this.props.getProfile(this.props.user_id);
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
        this.props
        .editBio(this.state.bio)
        .then( () => {
            this.setState({
                bio: "",
                editBio: false
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
    
    handleEditName = (e) => {
        e.preventDefault();
        this.props
        .editDisplayName(this.state.display_name)
        .then( () => {
            this.setState({
                display_name: "",
                editName: false
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
                cohort: "",
                editCohort: false
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

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        console.log(this.props.user_id)
        const {display_name, img, bio, cohort} = this.props.profile;
        return (
            <main className="page__container">
                <div className="profile__container">
                    <div className="left__innerCont">
                        <section className="img__section">
                            <div>img{img}</div>
                            <label>{`166 CRUDability`}</label>
                        </section>
                    </div>
                    <div className="right__innerCont">
                        <section className="name__bio__section">
                            <label className="profile__name">{display_name}</label>
                            <button className="edit__name__btn" onClick={this.handleOpenName}>
                                <i className="fas fa-edit fa-1x"></i>
                            </button>
                            {this.state.editName ?
                                (
                                    <>
                                        <input name="display_name" placeholder="New Display Name" onChange={this.handleChange} />
                                        <input className="save__changes__btn" type="button" value="Save Changes" onClick={this.handleEditName} />
                                    </>
                                ) : null}
                            <div>
                                <label className="profile__bio">{bio}</label>
                                <button className="edit__bio__btn" onClick={this.handleOpenBio}>
                                    <i className="fas fa-edit fa-1x"></i>
                                </button>
                            </div>
                            {this.state.editBio ? 
                                (
                                <>
                                    <input name="bio" placeholder="Tell us a little about yourself." onChange={this.handleChange} />
                                    <input className="save__changes__btn" type="button" value="Save Changes" onClick={this.handleEditBio} />
                                </>
                                ) : null}

                        </section>
                        <section className="extra__info__section">
                            <label>answers</label>
                            <label>questions</label>
                            <label>Cohort: {cohort}</label>
                            <button className="edit__cohort__btn" onClick={this.handleOpenCohort}>
                                <i class="fas fa-edit fa-1x"></i>
                            </button>
                            {this.state.editCohort ? 
                                (
                                <>
                                    <input name="cohort" placeholder="DM 26 Rules All." onChange={this.handleChange} />
                                    <input className="save__changes__btn" type="button" value="Save Changes" onClick={this.handleEditCohort} />
                                </>
                                ) : null}

                        </section>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        profile: reduxState.profileReducer.profile,
        id: reduxState.profileReducer.profile.user_id,
        user_id: reduxState.authReducer.user.user_id
    }
}

export default connect(mapStateToProps, {getProfile, editBio, editDisplayName, editCohort})(Profile);