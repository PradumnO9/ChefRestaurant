import { render, screen } from "@testing-library/react";
import ReataurantCard from "../components/RestaurantsCard";
import MOCK_DATA from "./mocks/resDataMocks.json";
import "@testing-library/jest-dom";

it("Should render Resturant Card component with props data", () => {
  render(<ReataurantCard resData={MOCK_DATA} />);

  const resCard = screen.getByText("La Pino'z Pizza");

  expect(resCard).toBeInTheDocument();
});
