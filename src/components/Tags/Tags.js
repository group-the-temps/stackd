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
                                <li className='topic' 
                                name='JavaScript 1, Script Tags, Variables, Datatypes, Data Types, Functions, Scope, Lexical, Declaration, Expression, Let, If Statement'
                                 onClick={this.clickTag}>JavaScript 1</li>
                                <li className='topic' 
                                name='JavaScript 2, Objects, Dot Notation, Square Bracket, Square Bracket Notation, Array, Arrays, Array Methods, Push, Pop, Splice, Slice, Shift, Unshift, Callbacks, For Loops, Ternary' 
                                onClick={this.clickTag}>JavaScript 2</li>
                                <li className='topic' 
                                name='JavaScript 3, For-In Loops, For In Loops, Destructuring, Higher Order Functions, indexOf, forEach, map, filter' 
                                onClick={this.clickTag}>JavaScript 3</li>
                                <li className='topic' 
                                name='JavaScript 4, Context, Implicit Context, Default Context, Explicit Context, Arrow Functions, Private vs. Public, Classes, This' 
                                onClick={this.clickTag}>JavaScript 4</li>
                                <li className='topic' 
                                name='JavaScript 5, Closures, Prototypes, Constructor Functions, Nested Closures' 
                                onClick={this.clickTag}>JavaScript 5</li>
                                <li className='topic' 
                                name='JavaScript 6, Review JavaScript' 
                                onClick={this.clickTag}>JavaScript 6</li>
                                <li className='topic' 
                                name='JavaScript 7, Work on What you have not turned in'
                                 onClick={this.clickTag}>JavaScript 7</li>
                                <li className='topic' 
                                name='Vanilla JS, Event Listeners, The DOM, The Virtual DOM' 
                                onClick={this.clickTag}>Vanilla JS</li>
                                <li className='topic' 
                                name='Testing, Unit Test, Component Test, unmountComponentAtNode, createElement, expect, toBe, Simulate.click, Simulate.change' 
                                onClick={this.clickTag}>JS Testing</li>
                            </ul>
                        </div>
                    </Tween>
                    : toggleReact === true ?
                    <Tween to={{ y: '130px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' 
                                name='React 1, create-react-app, Component, JSX, Component Based Architecture, Import, Export, Data Flow, Unidirectional Data Flow, The Virtual DOM, State, this.state, Update State' 
                                onClick={this.clickTag}>React 1</li>
                                <li className='topic' name='React 2, this.props, Props, Component in a Component, Update State in another Component, Updating State in another Component' 
                                onClick={this.clickTag}>React 2</li>
                                <li className='topic' 
                                name='React 3, Review React' 
                                onClick={this.clickTag}>React 3</li>
                                <li className='topic' 
                                name='React 4, LifeCycle Hooks, LifeCycle, componentDidMount, HTTP Requests, Client-Server Model, Client Server Model, axios, URLs, async, defer, Web App Landscape' 
                                onClick={this.clickTag}>React 4</li>
                                <li className='topic' 
                                name='React 5, Router, react-router-dom, routes, HashRouter, Route, Link, this.props.history.push, Params with Routes, withRouter' 
                                onClick={this.clickTag}>React 5</li>
                                <li className='topic' 
                                name='React 6, Redux, redux-promise-middleware, redux promise middleware, Store, Reducer, Immutable Data, Redux Pattern, ' 
                                onClick={this.clickTag}>React 6</li>
                                <li className='topic' 
                                name='React 7, React Redux, redux-promise-middleware, redux promise middleware, connect, mapStateToProps, Axios in Redux' 
                                onClick={this.clickTag}>React 7</li>
                                <li className='topic' 
                                name='Adv. React 1, Higher Order Components, RenderProps, PropTypes, HoC' 
                                onClick={this.clickTag}>Adv. React 1</li>
                                <li className='topic' 
                                name='Adv. React 2, Hooks, useEffect, useState, React Hooks' 
                                onClick={this.clickTag}>Adv. React 2</li>
                            </ul>
                        </div>
                    </Tween>
                    : toggleNode === true ?
                    <Tween to={{ y: '185px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' 
                                name='Node 1, NPM, NPM i, NPM install, package.json, package-lock.json, yarn, nodemon, modules, module.exports, Endpoints, res.status, res.json, res.send, Query Parameters, URL Parameters, Server' 
                                onClick={this.clickTag}>Node 1</li>
                                <li className='topic' 
                                name='Node 2, Middleware, redux-promise-middleware' 
                                onClick={this.clickTag}>Node 2</li>
                                <li className='topic' 
                                name='Node 3, massive, dotenv, .env, Connecting to Database, Connect to Database'
                                 onClick={this.clickTag}>Node 3</li>
                                <li className='topic' 
                                name='Node 4, Session, Express Session, express-session, Express Server Front to Back' 
                                onClick={this.clickTag}>Node 4</li>                                        
                                <li className='topic' 
                                name='Node 5, bcrypt, bcrypt.js, Authentication, cookies' 
                                onClick={this.clickTag}>Node 5</li>
                            </ul>
                        </div>
                    </Tween>
                    : toggleCSS === true ?
                    <Tween to={{ y: '240px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' 
                                name='HTML/CSS 1, Reset CSS, CSS Selectors, Margin, Border, Padding, Box Model, Tags, Meta Tags' 
                                onClick={this.clickTag}>HTML/CSS 1</li>
                                <li className='topic' 
                                name='HTML/CSS 2, Position, Display, Display Flex, Clearfix Hack, Overflow' 
                                onClick={this.clickTag}>HTML/CSS 2</li>
                                <li className='topic' 
                                name='HTML/CSS 3, Media Queries, Animations, Transitions, Keyframes, Media' 
                                onClick={this.clickTag}>HTML/CSS 3</li>
                            </ul>
                        </div>
                    </Tween>
                    : toggleSQL === true ?
                    <Tween to={{ y: '290px' }}>
                        <div className={notLoggedIn}>
                            <ul>
                                <li className='topic' 
                                name='SQL 1, Postgres, PostgresSQL, Sequel, Primary Key, Schemas, WHERE, Adding, Updating, Removing, SELECT, SELECT *'
                                onClick={this.clickTag}>SQL 1</li>
                                <li className='topic' 
                                name='SQL 2, Alter Table, Order By, Subqueries, Foreign Key, Drop Tables' 
                                onClick={this.clickTag}>SQL 2</li>
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