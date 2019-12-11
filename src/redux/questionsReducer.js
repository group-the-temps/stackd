import axios from "axios";

const initialState = {
  question: ["test"]
};

const CREATE_QUESTION = "CREATE_QUESTION";

export const createQuestion = newQuestion => {
  return {
    type: CREATE_QUESTION,
    payload: axios.post("/question/create", newQuestion)
  };
};

export default function questionsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${CREATE_QUESTION}_FULFILLED`:
      return {
        question: payload.data
      };
    default:
      return state;
  }
}
