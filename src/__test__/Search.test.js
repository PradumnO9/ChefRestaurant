import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "./mocks/resCardsMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Restaurant Cards for Pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSeaarch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSeaarch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchButton);

  // screen should render 3 cards after pizza search
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(3);
});

it("Should Filter Top Rated Restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(17);
});
