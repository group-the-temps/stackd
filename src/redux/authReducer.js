import axios from 'axios';
const initialState = {
    display_name: '',
    email: '',
    password: '',
    student_invite_code: '',
    admin_invite_code: '',
    img: '',
    user: {},
    askedQuestions: [],
    loading: false,
    isAdmin: false
}
const UPDATE_STATE = 'UPDATE_STATE';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_SESSION = 'GET_SESSION';
const GET_ASKED_QUESTIONS = "GET_ASKED_QUESTIONS";

// const EDIT_NAME = "EDIT_NAME";

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
            admin_invite_code,
            img: `https://robohash.org/${email}`
        })
    }
}
export const loginUser = (email, password) => {

    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', {
            email,
            password

        })
    }

}

export function getAskedQuestions(user_id) {
    return {
        type: GET_ASKED_QUESTIONS,
        payload: axios.get(`/prof/askedquestions/${user_id}`)
    };
};

export const getSession = () => {
    return {
        type: GET_SESSION,
        payload: axios.get('/auth/session')
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
        payload: axios.get(`/auth/logout`)
    }

}

export default function authReducer(state = initialState, action) {
    // console.log(state.user)
    console.log(state.askedQuestions)
    const { payload, type } = action;
    switch (type) {
        case UPDATE_STATE:
            return { ...state, ...payload }
        case `${REGISTER_USER}_PENDING`:
            return { ...state, loading: true }
        case `${REGISTER_USER}_FULFILLED`:
            // console.log(payload.data);
            return { ...state, loading: false, user: payload.data }
        case `${LOGIN_USER}_PENDING`:
            return { ...state, loading: true }
        case `${LOGIN_USER}_FULFILLED`:
            return { ...state, loading: false, user: payload.data }
        case `${GET_ASKED_QUESTIONS}_PENDING`:
            return { ...state, loading: true }
        case `${GET_ASKED_QUESTIONS}_FULFILLED`:
            return { ...state, loading: false, askedQuestions: payload.data }
        case `${LOGOUT_USER}_PENDING`:
            return { ...state, loading: true }
        case `${LOGOUT_USER}_FULFILLED`:
            return { ...state, loading: false, user: {} }

        default:
            return state;
    }
}