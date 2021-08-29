import {createStore} from "redux";

import { combineReducers } from "redux";
import reducers from "./reducers";
import reducerSearchString from "./reducerSearchString";


const reducer =  combineReducers({
    counter: reducers,
    name : reducerSearchString
});

const store = createStore(reducer);

export default store;