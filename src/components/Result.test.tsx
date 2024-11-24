import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Result from "./Result.tsx";

describe("Result Component", () => {
   it("should display the word 'Result'", () => {
      render(<Result/>);
      const resultText = screen.getByText("Result");
      expect(resultText).toBeInTheDocument();
   });

   it("should display whatever number is passed into it as a prop", () => {
      render(<Result num={5}/>);
      const displayedResult = screen.getByText("5");
      expect(displayedResult).toBeInTheDocument();
   });

   it("should display notation that is opposite to degree type that is passed into it as a prop", () => {
      render(<Result num={10} degType="fahrenheit"/>);
      const displayedResult = screen.getByText("°F");
      expect(displayedResult).toBeInTheDocument();
   });
});