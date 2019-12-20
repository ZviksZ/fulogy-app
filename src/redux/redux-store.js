import {combineReducers, createStore} from 'redux';
import commonReducer                  from "./commonReducer.js";
import constructReducer               from "./constructReducer.js";

let reducers = combineReducers({
   construct: constructReducer,
   common: commonReducer
});

const store = createStore(reducers);

export default store;