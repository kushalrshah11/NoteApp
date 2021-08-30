import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EditNotes } from "../EditNotes";


describe("Edit Notes", () => {
    it("should render the basic fields", () => {
        render(<EditNotes/>);

        expect(screen.getByRole("button", {name: "Update"})).toBeInTheDocument();
        expect(screen.getByRole("textbox", {name: "Title"})).toBeInTheDocument();
        expect(screen.getByRole("textbox", {name: "Text"})).toBeInTheDocument();
    });


    it("should validate form fields of Input Title", async () => {
        const mockSave = jest.fn();
        render(<EditNotes update={mockSave}/>);
        fireEvent.input(screen.getByRole("textbox", {name: "Title"}), {
            target: {
                value:
                    "Loria"
            }
        })

    });

    it("should validate form fields of Input Text", async () => {
        const mockSave = jest.fn();
        render(<EditNotes update={mockSave}/>);
        fireEvent.input(screen.getByRole("textbox", {name: "Text"}), {
            target: {
                value:
                    "Daisy"
            }
        })

    });

    it("should validate form fields of Button", async () => {
        const mockSave = jest.fn();
        render(<EditNotes update={mockSave}/>);
        fireEvent.submit(screen.getByRole("button", {name: "Update"}));
        expect(mockSave).toBeCalled();

    });

    it("should handle note fields when the user Update a Note", () => {
        const mockSave = jest.fn();
        render(<EditNotes update={mockSave}/>);
        const addButton = screen.getByRole("button", { name: "Update" });

        fireEvent.click(addButton);
        // Ingredient name + recipe name
        expect(screen.getAllByRole("textbox", { name: "Title" })).toHaveLength(1);
        expect(screen.getAllByRole("textbox", { name: "Text" })).toHaveLength(1);

    });


});
