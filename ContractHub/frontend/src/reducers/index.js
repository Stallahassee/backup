import {combineReducers} from 'redux';
import auth from "./auth";

const store = combineReducers({
  auth,
})

export default store;
