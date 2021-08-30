import {createStore} from "redux";

import { combineReducers } from "redux";
import reducerNotes from "./reducerNotes";
import reducerSearchString from "./reducerSearchString";


const reducer =  combineReducers({
    notes : reducerNotes,
    search : reducerSearchString
});

const store = createStore(reducer);

export default store;