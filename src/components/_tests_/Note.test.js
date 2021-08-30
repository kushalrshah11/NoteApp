

import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import {Note} from "../Note";

describe("Notes", () => {
    it("should render the basic fields", () => {
        render(<Note/>);

        expect(screen.getByRole("button", {name: "Edit"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Delete"})).toBeInTheDocument();
        expect(
            screen.getByRole("heading", {name: "Title:"})
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", {name: "Text:"})
        ).toBeInTheDocument();
    });


    it("should validate button are getting called", async () => {
        const mockSave = jest.fn();
        render(<Note edit={mockSave} remove={mockSave}/>);
        fireEvent.click(screen.getByRole("button", {name: "Edit"}));
        expect(mockSave).toBeCalled();

    });

    it("should validate button are getting called", async () => {
        const mockSave = jest.fn();
        render(<Note edit={mockSave} remove={mockSave}/>);
        fireEvent.click(screen.getByRole("button", {name: "Delete"}));
        expect(mockSave).toBeCalled();

    });



});
