import React, { Component } from 'react';
import './Tags.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { handleCloseTags } from '../../redux/searchReducer';
import { Tween } from 'react-gsap'

class Tags extends Component {
    constructor() {
        super();

        this.state = {
            searchTag: ''
        }
    }

    clickTag = async e => {
        await this.setState({ searchTag: e.target.getAttribute('name') });
        this.props.tagResults.splice(0);
        axios.get(`/search/tags?tags=${this.state.searchTag}`).then(response => {
            const { tagResults } = this.props;
            tagResults.push(response.data);
            this.props.handleCloseTags();
            console.log(this.props.tagResults[0]);
        }).catch(() => {
            this.props.handleCloseTags();
            alert('No Results Found');
        })
    }

    render() {
        let {toggleJS, toggleCSS, toggleNode, toggleReact, toggleSQL} = this.props;
        let notLoggedIn = "category"
        if (this.props.user.user_id) {
            notLoggedIn += "-loggedin"
        }
        console.log(this.state.searchTag);
        return (
            <div>
                {toggleJS === true ?
                    <Tween to={{ y: '75px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' name='JavaScript 1' onClick={this.clickTag}>JavaScript 1</li>
                                <li className='topic' name='JavaScript 2' onClick={this.clickTag}>JavaScript 2</li>
                                <li className='topic' name='JavaScript 3' onClick={this.clickTag}>JavaScript 3</li>
                                <li className='topic' name='JavaScript 4' onClick={this.clickTag}>JavaScript 4</li>
                                <li className='topic' name='JavaScript 5' onClick={this.clickTag}>JavaScript 5</li>
                                <li className='topic' name='JavaScript 6' onClick={this.clickTag}>JavaScript 6</li>
                                <li className='topic' name='JavaScript 7' onClick={this.clickTag}>JavaScript 7</li>
                                <li className='topic' name='Vanilla JS 1' onClick={this.clickTag}>Vanilla JS 1</li>
                                <li className='topic' name='Vanilla JS 2' onClick={this.clickTag}>Vanilla JS 2</li>
                            </ul>
                        </div>
                    </Tween>
                    : toggleReact === true ?
                    <Tween to={{ y: '130px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' name='React 1' onClick={this.clickTag}>React 1</li>
                                <li className='topic' name='React 2' onClick={this.clickTag}>React 2</li>
                                <li className='topic' name='React 3' onClick={this.clickTag}>React 3</li>
                                <li className='topic' name='React 4' onClick={this.clickTag}>React 4</li>
                                <li className='topic' name='React 5' onClick={this.clickTag}>React 5</li>
                                <li className='topic' name='React 6' onClick={this.clickTag}>React 6</li>
                                <li className='topic' name='React 7' onClick={this.clickTag}>React 7</li>
                                <li className='topic' name='Adv. React 1' onClick={this.clickTag}>Adv. React 1</li>
                                <li className='topic' name='Adv. React 2' onClick={this.clickTag}>Adv. React 2</li>
                            </ul>
                        </div>
                    </Tween>
                    : toggleNode === true ?
                    <Tween to={{ y: '185px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' name='Node 1' onClick={this.clickTag}>Node 1</li>
                                <li className='topic' name='Node 2' onClick={this.clickTag}>Node 2</li>
                                <li className='topic' name='Node 3' onClick={this.clickTag}>Node 3</li>
                                <li className='topic' name='Node 4' onClick={this.clickTag}>Node 4</li>                                        <li className='topic' name='Node 5' onClick={this.clickTag}>Node 5</li>
                            </ul>
                        </div>
                    </Tween>
                    : toggleCSS === true ?
                    <Tween to={{ y: '240px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' name='HTML/CSS 1' onClick={this.clickTag}>HTML/CSS 1</li>
                                <li className='topic' name='HTML/CSS 2' onClick={this.clickTag}>HTML/CSS 2</li>
                                <li className='topic' name='HTML/CSS 3' onClick={this.clickTag}>HTML/CSS 3</li>
                            </ul>
                        </div>
                    </Tween>
                    : toggleSQL === true ?
                    <Tween to={{ y: '290px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' name='SQL 1' onClick={this.clickTag}>SQL 1</li>
                                <li className='topic' name='SQL 2' onClick={this.clickTag}>SQL 2</li>
                            </ul>
                        </div>
                    </Tween>
                    : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        tagResults: reduxState.searchReducer.tagResults,
        clickedTags: reduxState.searchReducer.clickedTags,
        user: reduxState.authReducer.user
    }
}

export default connect(mapStateToProps, { handleCloseTags })(Tags);