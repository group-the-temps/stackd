import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";

const root = combineReducers({
    authReducer,
    searchReducer
})

export default createStore(root, applyMiddleware(promise));