import axios from "axios";

const initialState = {
  createQuestion: [],
  allQuestions: [],
  selectedQuestionID: "",
  selectedAnswerID: "",
  selectedQuestion: [{}],
  selectedAnswers: [{}],
  clickedTitle: false,
  answerCount: [],
  createAnswer: [],
  likedQuestionCount: '',
  selectedUserID: 0,
  selectedUserDisplayName:'',
  selectedUserBio: '',
  selectedUserCohort: ''
};

const CREATE_QUESTION = "CREATE_QUESTION";
const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS";
const UPDATE_QUESTION_STATE = "UPDATE_QUESTION_STATE";
const GET_SELECTED_QUESTION = "GET_SELECTED_QUESTION";
const GET_SELECTED_ANSWERS = "GET_SELECTED_ANSWERS";
const CREATE_ANSWER = "CREATE_ANSWER";

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

export const getSelectedAnswers = question_id => {
  return {
    type: GET_SELECTED_ANSWERS,
    payload: axios.get(`/question/selected/answers/${question_id}`)
  };
};

export const createAnswer = (question_id, user_id, newAnswer) => {
  return {
    type: CREATE_ANSWER,
    payload: axios.post(`/question/create/answer/${question_id}`, {
      user_id: user_id,
      answer_desc: newAnswer
    })
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
        allQuestions: payload.data[0],
        answerCount: payload.data[1]
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
    case `${GET_SELECTED_ANSWERS}_FULFILLED`:
      return {
        ...state,
        selectedAnswers: payload.data
      };
    case `${CREATE_ANSWER}_FULFILLED`:
      return {
        ...state,
        createAnswer: payload.data
      };
    default:
      return state;
  }
}
