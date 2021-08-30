import reducerNotes from "../../store/reducerNotes";


const defaultState = []




const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;





describe ( " Reducer", () => {
    test("should return default state when state is not undefined", () => {
        expect(reducerNotes(undefined, {type: "ACTION_TYPE"})).toEqual(defaultState);
    });

    test("should return expected state for ADD_NOTE action type and specific state",()=>{

        expect(reducerNotes(defaultState,{type : "ADD_NOTE"})).toEqual([
            ...defaultState,
            {
                id: 200
            }
       ]);
    });

    test("should return expected state for REMOVE_NOTE action type and specific state",()=>{


        expect(reducerNotes(defaultState,{type : "REMOVE_NOTE"})).toEqual([
        ]);
    });

    test("should return expected state for EDIT_NOTE action type and specific state",()=>{

        const previousState = [{
            id: 2001,
            title: "roma",
            text: "mehta",
            editing: "true"
        }];
        expect(reducerNotes(previousState,{type : "EDIT_NOTE"})).toEqual([
            {
                id: 2001,
                title: "roma",
                text: "mehta",
                editing: "true"
            }
        ]);
    });


})