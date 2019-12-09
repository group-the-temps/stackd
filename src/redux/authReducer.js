import axios from 'axios';
const initialState = {
    display_name: '',
    email: '',
    password: '',
    student_invite_code: '',
    admin_invite_code: '',
    img: '',
    user: {},
    loading: false,
    isAdmin: false
}
const UPDATE_STATE = 'UPDATE_STATE';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}
export const registerUser = (email, password, display_name, student_invite_code, admin_invite_code) => {
    
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', {
            email, 
            password,
            display_name,
            student_invite_code,
            admin_invite_code
        })
    }
}
export const loginUser = (email, password, isAdmin) => {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', {
            email,
            password,
            isAdmin
        })
    }
}
export default function authReducer(state = initialState, action) {
    const { payload, type } = action;
    switch(type) {
        case UPDATE_STATE:
            return {...state, ...payload}
        case `${REGISTER_USER}_PENDING`:
            return {...state, loading: true}
        case `${REGISTER_USER}_FULFILLED`:
            return {...state, loading: false, user: payload.data}
        case `${LOGIN_USER}_PENDING`:
            return {...state, loading: true}
        case `${LOGIN_USER}_FULFILLED`:
            return {...state, loading: false, user: payload.data, img: payload.data.img}
        case `${LOGOUT_USER}_PENDING`:
            return {...state, loading: true}
        case `${LOGOUT_USER}_FULFILLED`:
            return {...state, loading: false, user: {}}
        default:
            return state;
    }
}