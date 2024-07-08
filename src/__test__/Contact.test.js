import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom"; // toBeInTheDocument coming from here

describe("Contact Us test cases", () => {

  // beforeAll(() => {
  //   console.log("Before All");
  // })

  // beforeEach(() => {
  //   console.log("Before Each");
  // })

  // afterAll(() => {
  //   console.log("After All");
  // })

  // afterEach(() => {
  //   console.log("After Each");
  // })

  test("Should load contact us component", () => {
    render(<ContactUs />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load Button inside contact component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  // it() and test() both are same only name different
  it("Should load input name inside contact component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside contact component", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox"); // for multiple items use getAll -> returns a array of object

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
