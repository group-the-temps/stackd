import axios from "axios";

const initialState = {
    profile: {},
    askedQuestions: [],
    loading: false
};
//ACTIONS
const GET_PROFILE = "GET_PROFILE";
// const GET_ASKED_QUESTIONS = "GET_ASKED_QUESTIONS";
const EDIT_NAME = "EDIT_NAME";
const EDIT_BIO = "EDIT_BIO";
const EDIT_COHORT = "EDIT_COHORT";


//ACTION CREATORS
export function getProfile(user_id) {
    return {
        type: GET_PROFILE,
        payload: axios.get(`/prof/all/${user_id}`)
    };
};

// export function getAskedQuestions(user_id) {
//     return {
//         type: GET_ASKED_QUESTIONS,
//         payload: axios.get(`/prof/askedquestions/${user_id}`)
//     };
// };

export function editBio(bio) {
    return {
        type: EDIT_BIO,
        payload: axios.put("/prof/bio", {
            bio
        })
    };
};

export function editCohort(cohort) {
    return {
        type: EDIT_COHORT,
        payload: axios.put("/prof/cohort", {
            cohort
        })
    };
};

export function editDisplayName(display_name) {
    return {
        type: EDIT_NAME,
        payload: axios.put("/prof/displayname", {
            display_name
        })
    };
};

export default function profileReducer(state = initialState, action) {
    // console.log(state.profile)
    const { payload, type } = action;
    switch (type) {
        case `${GET_PROFILE}_PENDING`:
            return { ...state, loading: true }
        case `${GET_PROFILE}_FULFILLED`:
            return { ...state, loading: false, profile: payload.data }
        // case `${GET_ASKED_QUESTIONS}_PENDING`:
        //     return { ...state, loading: true }
        // case `${GET_ASKED_QUESTIONS}_FULFILLED`:
        //     return { ...state, loading: false, askedQuestions: payload.data }
        case `${EDIT_BIO}_PENDING`:
            return { ...state, loading: true }
        case `${EDIT_BIO}_FULFILLED`:
            let newBio = { ...state.profile }
            newBio = payload.data
            return { ...state, loading: false, profile: newBio }
        case `${EDIT_COHORT}_PENDING`:
            return { ...state, loading: true }
        case `${EDIT_COHORT}_FULFILLED`:
            let newCohort = { ...state.profile }
            newCohort = payload.data
            return { ...state, loading: false, profile: newCohort }
        case `${EDIT_NAME}_PENDING`:
            return { ...state, loading: true }
        case `${EDIT_NAME}_FULFILLED`:
            let newName = { ...state.profile }
            newName = payload.data
            return { ...state, loading: false, profile: newName }
        default:
            return state;
    }
}