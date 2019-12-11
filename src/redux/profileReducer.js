import axios from "axios";

const initialState = {
    profile: {},
    loading: false
};
//ACTIONS
const GET_PROFILE = "GET_PROFILE";
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

export function editBio(bio) {
    return {
        type: EDIT_BIO,
        payload: axios.put("/prof/bio", {
            bio
        })
    }
};

export function editCohort(cohort) {
    return {
        type: EDIT_COHORT,
        payload: axios.put("/prof/cohort", {
            cohort
        })
    }
};

export function editDisplayName(display_name) {
    return {
        type: EDIT_NAME,
        payload: axios.put("/prof/displayname", {
            display_name
        })
    }
};

export default function profileReducer(state = initialState, action) {
    const {payload, type} = action;
    switch(type) {
        case `${GET_PROFILE}_PENDING`:
            return {...state, loading: true}
        case `${GET_PROFILE}_FULFILLED`:
            console.log(state.profile)
            console.log(initialState.profile)
            return {...state, loading: false, profile: payload.data}
        case `${EDIT_BIO}_PENDING`:
            return {...state, loading: true}
        case `${EDIT_BIO}_FULFILLED`:
            return {...state, loading: false, profile: payload.data}
        case `${EDIT_COHORT}_PENDING`:
            return {...state, loading: true}
        case `${EDIT_COHORT}_FULFILLED`:
            return {...state, loading: false, profile: payload.data}
        case `${EDIT_NAME}_PENDING`:
            return {...state, loading: true}
        case `${EDIT_NAME}_FULFILLED`:
            return {...state, loading: false, profile: payload.data}
        default:
            return state;
    }
}