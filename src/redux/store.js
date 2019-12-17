import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import searchReducer from "./searchReducer";
import questionsReducer from "./questionsReducer";
import likesReducer from "./likesReducer";

const root = combineReducers({
    authReducer,
    searchReducer,
    profileReducer,
    questionsReducer,
    likesReducer
})

export default createStore(root, applyMiddleware(promise));