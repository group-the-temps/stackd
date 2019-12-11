import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

const root = combineReducers({
    authReducer,
    profileReducer
})

export default createStore(root, applyMiddleware(promise));