
import React from "react";
import {addNote, editNote, filterNote, removeNote, updateNote} from "../../store/actions";


describe("Notes", () => {
    it("should create an action with ADD_NOTE type", () => {
        const note = {
            title: "roma",
            text: "mehta"
        };
        const expectation = {
            type: "ADD_NOTE",
            note
        };

        expect(addNote(note)).toEqual(expectation);
    });

    it("should create an action with UPDATE_NOTE type", () => {
        const note = {
            title: "joy",
            text: "romeo"
        };
        const expectation = {
            type: "UPDATE_NOTE",
            note
        };

        expect(updateNote(note)).toEqual(expectation);
    });

    it("should create an action with REMOVE_NOTE type", () => {
        const id = 200
        const expectation = {
            type: "REMOVE_NOTE",
            id
        };

        expect(removeNote(id)).toEqual(expectation);
    });


    it("should create an action with EDIT_NOTE type", () => {
        const id = 300
        const expectation = {
            type: "EDIT_NOTE",
            id
        };

        expect(editNote(id)).toEqual(expectation);
    });

    it("should create an action with SEARCH_SIMPLE type", () => {
        const text = "Test";
        const expectation = {
            type: "SEARCH_SIMPLE",
            text
        };

        expect(filterNote(text)).toEqual(expectation);
    });



});


