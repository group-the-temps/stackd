import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./authReducer";
import tagsReducer from "./tagsReducer";

const root = combineReducers({
    authReducer,
    tagsReducer
})

export default createStore(root, applyMiddleware(promise));