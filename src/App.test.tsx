import {render, screen} from "@testing-library/react";
import App from "./App";
import {UserEvent, userEvent} from "@testing-library/user-event";
import {beforeEach, expect} from "vitest";
import {celsiusToFahrenheit, fahrenheitToCelsius} from "./testData.ts";

let user: UserEvent;
let degreesInput: HTMLElement;
let tempType: HTMLElement;
let convertBtn: HTMLElement;

beforeEach(() => {
   user = userEvent.setup();
   render(<App/>);

   degreesInput = screen.getByLabelText(/degrees/i);
   tempType = screen.getByLabelText(/type/i);
   convertBtn = screen.getByRole("button", {name: /convert/i});
});

it("should have a header", () => {
   const header = screen.getByText("Temperature Converter");
   expect(header).toBeInTheDocument();
});

it("should render converted result when converter button is clicked (F->C)", async () => {
   await user.type(degreesInput, "50");
   await user.selectOptions(tempType, "fahrenheit");
   await user.click(convertBtn);

   const result = screen.getByText("10.00");
   const resultUnit = screen.getByText("°C");
   expect(result).toBeInTheDocument();
   expect(resultUnit).toBeInTheDocument();
});

it("should render converted result when converter button is clicked (C->F)", async () => {
   await user.type(degreesInput, "500");
   await user.selectOptions(tempType, "celsius");
   await user.click(convertBtn);

   const result = screen.getByText("932.00");
   const resultUnit = screen.getByText("°F");
   expect(result).toBeInTheDocument();
   expect(resultUnit).toBeInTheDocument();
});

it.each(fahrenheitToCelsius)("renders correctly for converting fahrenheit to celsius",
   async ({
             fahrenheit,
             celsius
          }) => {
      await user.type(degreesInput, fahrenheit.toString());
      await user.selectOptions(tempType, "fahrenheit");
      await user.click(convertBtn);

      const result = screen.getByTestId("result");
      const resultUnit = screen.getByText("°C");
      expect(Number(result.textContent)).toBeCloseTo(celsius, 1);
      expect(resultUnit).toBeInTheDocument();
   });

it.each(celsiusToFahrenheit)("renders correctly for converting celsius to fahrenheit",
   async ({
             celsius,
             fahrenheit
          }) => {
      await user.type(degreesInput, celsius.toString());
      await user.selectOptions(tempType, "celsius");
      await user.click(convertBtn);

      const result = screen.getByTestId("result");
      const resultUnit = screen.getByText("°F");
      expect(Number(result.textContent)).toBeCloseTo(fahrenheit, 1);
      expect(resultUnit).toBeInTheDocument();
   });
