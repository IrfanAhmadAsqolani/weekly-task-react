import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

jest.mock("axios");

describe("Search", () => {
    test("fetches stories from an API and displays them", async () => {
        const stories = [
            { objectID: "1", title: "Test1" },
            { objectID: "2", title: "Test2" },
            { objectID: "3", title: "Test3" },
            { objectID: "4", title: "Test4" },
        ];

        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { hits: stories } })
        );

        render(<Search />);

        await act(async () => {
            await userEvent.click(screen.getByRole("button"));
        });

        const items = await screen.findAllByRole("listitem");
        expect(items).toHaveLength(4);
    });

    test("fetches stories from an API and fails", async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error("Error Jaringan"))
        );

        render(<Search />);

        await act(async () => {
            await userEvent.click(screen.getByRole("button"));
        });

        const message = await screen.findByText(/Ada yang error/);
        expect(message).toBeInTheDocument();
    });
    
});