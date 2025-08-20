import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { expect } from "vitest";
import { MemoryRouter , Link } from "react-router-dom";

test("it should render bofy component", () => {
  render(
    <MemoryRouter>
      <Body />
    </MemoryRouter>
  ); 

  const topRatedButton = screen.getByRole("button", { name: /Top Rated/i });

  fireEvent.click(topRatedButton);

  expect(topRatedButton).toBeInTheDocument();
});
