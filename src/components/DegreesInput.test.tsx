import {beforeEach, describe, expect} from "vitest";
import DegreesInput from "./DegreesInput.tsx";
import {render, screen} from "@testing-library/react";

describe("DegreesInput Component", () => {
   beforeEach(() => {
      render(<DegreesInput/>);
   });

   it("should display the word 'Degrees'", () => {
      const degreeTextElement = screen.getByText(/Degrees/);
      expect(degreeTextElement).toBeInTheDocument();
   });

   it("should have an input box", () => {
      const degreeInputElement = screen.getByLabelText(/Degrees/);
      expect(degreeInputElement).toBeInTheDocument();
   });
});