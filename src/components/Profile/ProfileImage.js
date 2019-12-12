import React, { Component } from 'react'
import { connect } from 'react-redux';
import { storage } from '../../config/firebaseConfig';
import axios from 'axios';

class ProfileImage extends Component {

    state = {
        imageUrl: ''
         
    }

    componentDidMount = () => {
        
        axios.get('/prof/img').then( response => {
            console.log(response);
            this.setState({ imageUrl: response.data[0].img })
        })
    }

    handleImageUpload = e => {
        if (e.target.files[0]) {
            const img = e.target.files[0];
            const uploadTask = storage.ref(`profile_pictures/${img.name}`)
            .put(img);
            uploadTask.on('state_changed',
            () => {
                storage.ref('profile_pictures').child(img.name).getDownloadURL()
                    .then(url => {
                        this.setState({imageUrl: url});
                })
            })
        }
    };

    saveImg = async () => {
        await axios.put(`/prof/img/${this.props.user.user_id}`, {
            img: this.state.imageUrl
        });
    }

    render() {
        console.log(this.state.imageUrl);
        console.log(this.props.user.user_id)
        return (
            <div>
                <div>
                    <img src={this.state.imageUrl} alt="Upload a pic!" height='50px' width='50px'></img>
                    <input type="file" onChange={this.handleImageUpload} />
                </div>
                <button onClick={this.saveImg}>Save Changes</button>
            </div>

        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.authReducer.user
    }
}

export default connect(mapStateToProps)(ProfileImage);