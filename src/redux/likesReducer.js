import axios from 'axios';

const initialState = {
    likedQuestion: []
}

const LIKED_QUESTIONS = "LIKED_QUESTIONS";

export const getQuestionLikes = (question_id) => {
    return {
        type: LIKED_QUESTIONS,
        payload: axios.get(`/question/liked/${question_id}`)
    }
}

export default function likesReducer(state=initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case `${LIKED_QUESTIONS}_FULFILLED`:
            return {
                ...state,
                likedQuestion: payload.data
            }


        default:
            return state
    }
}