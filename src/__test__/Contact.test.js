import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom"; // toBeInTheDocument coming from here

test("Should load contact us component", () => {
  render(<ContactUs />);

  // Querying
  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load Button inside contact component", () => {
  render(<ContactUs />);

  const button = screen.getByRole("button");

  // Assertion
  expect(button).toBeInTheDocument();
});

test("Should load input name inside contact component", () => {
  render(<ContactUs />);

  const inputName = screen.getByPlaceholderText("name");

  // Assertion
  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes inside contact component", () => {
  render(<ContactUs />);

  const inputBoxes = screen.getAllByRole("textbox"); // for multiple items use getAll -> returns a array of object

  // Assertion
  expect(inputBoxes.length).toBe(2);
});
