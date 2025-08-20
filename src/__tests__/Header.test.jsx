import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../Redux/appStore";
import { MemoryRouter } from "react-router-dom";

test("Should load with the login and logout button", () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //cart items
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument(); 

  expect(logoutButton).toBeInTheDocument();

  expect(loginButton).toBeInTheDocument(); 
});
