import React, {Component} from 'react';
import './Tags.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { handleCloseTags } from '../../redux/tagsReducer';

class Tags extends Component {
    constructor() {
        super();

        this.state = {
            searchTag: ''
        }
    }

    clickTag = async e => {
        await this.setState({searchTag: e.target.getAttribute('name')});
        axios.get(`/search/tags?tags=${this.state.searchTag}`).then(response => {
            // console.log(response.data)
            const { tagResults} = this.props;
            tagResults.push(response.data);
            this.props.handleCloseTags();
        }).catch(() => {
            this.props.handleCloseTags();
            alert('No Results Found');
        })
    }

    render() {
        // console.log(this.props.tagResults)
        return (
            <div className='category-container'>
                <div className='category'>
                    <h2 className='category-title'>JavaScript</h2>
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
                <div className='category'>
                    <h2 className='category-title'>HTML/CSS</h2>
                    <ul>
                        <li className='topic' name='HTML/CSS 1' onClick={this.clickTag}>HTML/CSS 1</li>
                        <li className='topic' name='HTML/CSS 2' onClick={this.clickTag}>HTML/CSS 2</li>
                        <li className='topic' name='HTML/CSS 3' onClick={this.clickTag}>HTML/CSS 3</li>
                    </ul>
                </div>
                <div className='category'>
                    <h2 className='category-title'>React</h2>
                    <ul>
                        <li className='topic' name='React 1' onClick={this.clickTag}>React 1</li>
                        <li className='topic' name='React 2' onClick={this.clickTag}>React 2</li>
                        <li className='topic' name='React 3' onClick={this.clickTag}>React 3</li>
                        <li className='topic' name='React 4' onClick={this.clickTag}>React 4</li>
                        <li className='topic' name='React 5' onClick={this.clickTag}>React 5</li>
                        <li className='topic' name='React 6' onClick={this.clickTag}>React 6</li>
                        <li className='topic' name='React 7' onClick={this.clickTag}>React 7</li>
                        <li className='topic' name='Adv. React 1' onClick={this.clickTag}>Adv. React I</li>
                        <li className='topic' name='Adv. React 2' onClick={this.clickTag}>Adv. React II</li>
                    </ul>
                </div>
                <div className='category'>
                    <h2 className='category-title'>Node</h2>
                    <ul>
                        <li className='topic' name='Node 1' onClick={this.clickTag}>Node 1</li>
                        <li className='topic' name='Node 2' onClick={this.clickTag}>Node 2</li>
                        <li className='topic' name='Node 3' onClick={this.clickTag}>Node 3</li>
                        <li className='topic' name='Node 4' onClick={this.clickTag}>Node 4</li>
                        <li className='topic' name='Node 5' onClick={this.clickTag}>Node 5</li>
                    </ul>
                </div>
                <div className='category'>
                    <h2 className='category-title'>SQL</h2>
                    <ul>
                        <li className='topic' name='SQL 1' onClick={this.clickTag}>SQL 1</li>
                        <li className='topic' name='SQL 2' onClick={this.clickTag}>SQL 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        tagResults: reduxState.tagsReducer.tagResults
    }
}

export default connect(mapStateToProps, {handleCloseTags})(Tags);