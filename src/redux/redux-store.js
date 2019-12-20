import {combineReducers, createStore} from 'redux';
import constructReducer             from "./constructReducer.js";

let reducers = combineReducers({
   construct: constructReducer
});

const store = createStore(reducers);

window.store = store

export default store;