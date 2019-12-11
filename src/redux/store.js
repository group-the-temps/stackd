import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import searchReducer from "./searchReducer";

const root = combineReducers({
    authReducer,
    searchReducer,
    profileReducer
})

export default createStore(root, applyMiddleware(promise));