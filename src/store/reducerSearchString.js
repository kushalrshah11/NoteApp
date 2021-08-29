
const initialState = [];


const reducerSearchString = (state = initialState, action) => {
    if (action.type === "SEARCH_SIMPLE") {
        return action.text;
    }
    return state || null;

}


export default reducerSearchString