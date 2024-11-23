import {render, screen} from "@testing-library/react";
import App from "./App";
import {beforeEach} from "vitest";

beforeEach(() => {
   render(<App/>);
});

it("should have a header", () => {
   const header = screen.getByText("Temperature Converter");
   expect(header).toBeInTheDocument();
});
