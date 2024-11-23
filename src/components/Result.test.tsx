import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Result from "./Result.tsx";

describe("Result Component", () => {
   it("should display the word 'Result'", () => {
      render(<Result/>);
      const resultText = screen.getByText("Result");
      expect(resultText).toBeInTheDocument();
   });
});