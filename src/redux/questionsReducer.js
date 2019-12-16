import axios from "axios";

const initialState = {
  createQuestion: [],
  allQuestions: [],
  selectedQuestionID: "",
  selectedQuestion: [{}]
};

const CREATE_QUESTION = "CREATE_QUESTION";
const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
const UPDATE_QUESTION_STATE = "UPDATE_QUESTION_STATE";
const GET_SELECTED_QUESTION = "GET_SELECTED_QUESTION";

export const createQuestion = newQuestion => {
  return {
    type: CREATE_QUESTION,
    payload: axios.post("/question/create", newQuestion)
  };
};

export const getAllQuestions = () => {
  return {
    type: GET_ALL_QUESTIONS,
    payload: axios.get("/question/all")
  };
};

export const updateQuestionState = e => {
  return {
    type: UPDATE_QUESTION_STATE,
    payload: e
  };
};

export const getSelectedQuestion = question_id => {
  return {
    type: GET_SELECTED_QUESTION,
    payload: axios.get(`/question/selected/${question_id}`)
  };
};

export default function questionsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${CREATE_QUESTION}_FULFILLED`:
      return {
        ...state,
        createQuestion: payload.data
      };
    case `${GET_ALL_QUESTIONS}_FULFILLED`:
      return {
        ...state,
        allQuestions: payload.data
      };
    case "UPDATE_QUESTION_STATE":
      return {
        ...state,
        ...payload
      };
    case `${GET_SELECTED_QUESTION}_FULFILLED`:
      return {
        ...state,
        selectedQuestion: payload.data
      };

    default:
      return state;
  }
}
