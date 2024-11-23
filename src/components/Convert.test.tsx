import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Convert from "./Convert.tsx";

describe("Convert Component", () => {
   it("should display the words 'Convert'", () => {
      render(<Convert/>);
      const convertText = screen.getByText("Convert");
      expect(convertText).toBeInTheDocument();
   });

   it("should be a button", () => {
      render(<Convert/>);
      const convertBtn = screen.getByText("Convert");
      expect(convertBtn.tagName.toLowerCase()).toBe("button");
   });
});