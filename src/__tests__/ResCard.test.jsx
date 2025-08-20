import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { mockRestaurant } from "../mocks/resData";

test("should render and have props", () => {
  render(<RestaurantCard restaurant={mockRestaurant} />);

  expect(screen.getByText("Shriji Namkeen")).toBeInTheDocument();
});
