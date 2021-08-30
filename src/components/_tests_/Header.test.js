
import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import {PrimarySearchAppBar} from "../Header";

describe("Testing input search field", () => {
    const props =  {
        filter: jest.fn(),
        notes: {
            notes: [{
                id : 200,
                title: "roma",
                text: "mehta"
            }],
            search: []
        }
    };

    it("handles search", () => {
        render(<PrimarySearchAppBar {...props} />);

        fireEvent.change(document.getElementById("search-field"), { target: { value: "test" }});

        expect(props.filter).toHaveBeenCalledTimes(1);
    });
});
