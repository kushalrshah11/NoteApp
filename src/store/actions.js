export const addNote = note => {
    return {
        type: "ADD_NOTE",
        note
    };
};

export const removeNote = id => {
    return {
        type: "REMOVE_NOTE",
        id
    };
};


export const updateNote = note => {
    return {
        type: "UPDATE_NOTE",
        note
    };
};


export const editNote = id => {
    return {
        type: "EDIT_NOTE",
        id
    };
};

export const filterNote = text => {
    return {
        type: "SEARCH_SIMPLE",
        text
    };
}

