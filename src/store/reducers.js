


const initialState = [];

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            const id = Math.random() * 200 + Math.random() * 200;

            return [
                ...state,
                {
                    id,
                    ...action.note
                }
            ];
        case "REMOVE_NOTE":
            return state.filter(note => note.id !== action.id);
        case 'UPDATE_NOTE':
            return state.map((note) => {
                if (note.id === action.note.id) {
                    return {
                        ...action.note,
                        title: action.note.title,
                        text: action.note.text,
                        editing: !note.editing
                    }
                } else {
                    return note;
                }
            });
        case 'EDIT_NOTE':
            return state.map((note) => {
                if(note.id === action.id)  { return {...note, editing: !note.editing} }  else return note});
        case 'FILTER_NOTE':
            let newState = Object.assign({appliedFilters:[]}, state);
                    console.log(JSON.stringify(newState) + "New State value");
                    console.log(JSON.stringify(state) + " State value");
                    let value = action.note;
                    let filteredVal =  state.filter(note => {
                        return note.title.includes(value) || note.text.includes(value);
                    });
                    // return filteredVal;
                    let appliedFilters = newState.appliedFilters;
                    appliedFilters = addFilterIfNotExists('FILTER_NOTE', appliedFilters);
                    if(value) {
                        let index = appliedFilters.indexOf('FILTER_NOTE');
                        if (index===-1)
                            appliedFilters.push('FILTER_NOTE');
                        newState = filteredVal;

                    }else {

                        let index = appliedFilters.indexOf('FILTER_NOTE');

                        appliedFilters.splice(index, 1);
                        if (appliedFilters.length === 0) {
                            //if there are no filters applied, reset the products to normal.
                            console.log("Here");
                            newState = state;
                }
                }
            return newState;

        default:
            return state;
    }
};




function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index === -1) appliedFilters.push(filter);

    return appliedFilters;
}



export default reducers