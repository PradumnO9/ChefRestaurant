import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA from "./mocks/resMenuMockList.json";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu Component, Add to Cart, Cart Items, Clear Cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Juices (9)");

  fireEvent.click(accordionHeader);

  const foodItemsArray = screen.getAllByTestId("foodItems");

  expect(foodItemsArray.length).toBe(9);

  const addButton = screen.getAllByRole("button", { name: "Add" });

  // Before Add -> Header -> cart (0)
  expect(screen.getByText("(0)")).toBeInTheDocument();

  fireEvent.click(addButton[0]);

  const cartItemsList = screen.getAllByTestId("cartItems");

  expect(cartItemsList.length).toBe(1);

  // After 1 item add -> Header -> cart (1)
  expect(screen.getByText("(1)")).toBeInTheDocument();

  fireEvent.click(addButton[1]);

  // After 2 items add -> Header -> cart (2)
  expect(screen.getByText("(2)")).toBeInTheDocument();

  // click Clear Cart Button
  fireEvent.click(screen.getByText("Clear Cart"));

  // After Clear Cart -> Header -> cart (0)
  expect(screen.getByText("(0)")).toBeInTheDocument();

  expect(screen.getByText("Cart is empty!!")).toBeInTheDocument();
});
