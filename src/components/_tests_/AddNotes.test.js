

import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {AddNotes} from "../AddNotes";

describe("Add Notes", () => {
    it("should render the basic fields", () => {
        render(<AddNotes/>);
        expect(
            screen.getByRole("heading", {name: "Add a Note"})
        ).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Add Note"})).toBeInTheDocument();
        expect(screen.getByRole("textbox", {name: "Title"})).toBeInTheDocument();
        expect(screen.getByRole("textbox", {name: "Text"})).toBeInTheDocument();
    });


    it("should validate form fields of Input Title", async () => {
        const mockSave = jest.fn();
        render(<AddNotes addNote={mockSave}/>);
        fireEvent.input(screen.getByRole("textbox", {name: "Title"}), {
            target: {
                value:
                    "Roma"
            }
        })

    });

    it("should validate form fields of Input Text", async () => {
        const mockSave = jest.fn();
        render(<AddNotes addNote={mockSave}/>);
        fireEvent.input(screen.getByRole("textbox", {name: "Text"}), {
            target: {
                value:
                    "Mehta"
            }
        })

    });

    it("should validate form fields of Button", async () => {
        const mockSave = jest.fn();
        render(<AddNotes addNote={mockSave}/>);
        fireEvent.submit(screen.getByRole("button", {name: "Add Note"}));
        expect(mockSave).toBeCalled();

    });

    it("should handle note fields when the user Adds a Note", () => {
        const mockSave = jest.fn();
        render(<AddNotes addNote={mockSave}/>);
        const addButton = screen.getByRole("button", { name: "Add Note" });

        fireEvent.click(addButton);
        // Ingredient name + recipe name
        expect(screen.getAllByRole("textbox", { name: "Title" })).toHaveLength(1);
        expect(screen.getAllByRole("textbox", { name: "Text" })).toHaveLength(1);

    });


});
