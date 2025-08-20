import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import { expect } from "vitest";

test("should load contact component heading", () => {
  render(<Contact />);

  const heading = screen.getByText("Contact Us");

  expect(heading).toBeInTheDocument();
});

test("should load contact component button", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should have 2 input box", ()=>{
    render(<Contact/>);

    const inputCount = screen.getAllByRole("textbox");

    expect(inputCount.length).toBe(3);
})
 