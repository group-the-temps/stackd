import axios from 'axios';

const initialState = {
    likedQuestion: [],
    likedAnswer: []
}

const LIKED_QUESTIONS = "LIKED_QUESTIONS";
const LIKED_ANSWERS = "LIKED_ANSWERS";

export const getQuestionLikes = (question_id) => {
    return {
        type: LIKED_QUESTIONS,
        payload: axios.get(`/question/liked/${question_id}`)
    }
}

export const getAnswerLikes = (answer_id) => {
    return {
        type: LIKED_ANSWERS,
        payload: axios.get(`/answer/liked/${answer_id}`)
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
        case `${LIKED_ANSWERS}_FULFILLED`:
            return {
                ...state,
                likedAnswer: payload.data
            }

        default:
            return state
    }
}