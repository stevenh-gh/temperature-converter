import {beforeEach, describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import TempType from "./TempType";

describe("TempTest Component", () => {
   beforeEach(() => {
      render(<TempType/>);
   });

   it("should display the word 'Type'", () => {
      const typeText = screen.getByText("Type");
      expect(typeText).toBeInTheDocument();
   });

   it("should display the label 'Type'", () => {
      const typeLabel = screen.getByText("Type");
      expect(typeLabel.tagName.toLowerCase()).toBe("label");
   });

   it("should have a dropdown menu", () => {
      const tempTypeDropDown = screen.getByLabelText("Type");
      expect(tempTypeDropDown.tagName.toLowerCase()).toBe("select");
   });

   it("should have option 'Fahrenheit'", () => {
      const fahrenheitOption = screen.getByText("Fahrenheit");
      expect(fahrenheitOption).toBeInTheDocument();
      expect(fahrenheitOption.tagName.toLowerCase()).toBe("option");
   });

   it("should have option 'Celsius'", () => {
      const celsiusOption = screen.getByText("Celsius");
      expect(celsiusOption).toBeInTheDocument();
      expect(celsiusOption.tagName.toLowerCase()).toBe("option");
   });
});