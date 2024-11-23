import {render, screen} from "@testing-library/react";
import App from "./App";

it("should have a header", () => {
   render(<App/>);
   const header = screen.getByText("Temperature Converter");
   expect(header).toBeInTheDocument();
});