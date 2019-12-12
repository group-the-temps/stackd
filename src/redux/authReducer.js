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
export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
        payload: axios.get(`/auth/logout`)
    }

}

// export function editDisplayName(display_name) {
//     return {
//         type: EDIT_NAME,
//         payload: axios.put("/prof/displayname", {
//             display_name
//         })
//     }
// };

export default function authReducer(state = initialState, action) {
    console.log(state.user)
    const { payload, type } = action;
    switch (type) {
        case UPDATE_STATE:
            return { ...state, ...payload }
        case `${REGISTER_USER}_PENDING`:
            return { ...state, loading: true }
        case `${REGISTER_USER}_FULFILLED`:
            console.log(payload.data);
            return { ...state, loading: false, user: payload.data }
        case `${LOGIN_USER}_PENDING`:
            return { ...state, loading: true }
        case `${LOGIN_USER}_FULFILLED`:
            return { ...state, loading: false, user: payload.data }
        case `${LOGOUT_USER}_PENDING`:
            return { ...state, loading: true }
        case `${LOGOUT_USER}_FULFILLED`:
            return { ...state, loading: false, user: {} }
        // case `${EDIT_NAME}_PENDING`:
        //     return { ...state, loading: true }
        // case `${EDIT_NAME}_FULFILLED`:
        //     let newName = { ...state.user }
        //     newName = payload.data
        //     return { ...state, loading: false, profile: newName, display_name: newName.display_name }

        default:
            return state;
    }
}