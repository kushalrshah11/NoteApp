


const initialState = [];

const reducerNotes = (state = initialState, action) => {
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
        default:
            return state;
    }
};




export default reducerNotes