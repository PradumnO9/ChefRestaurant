import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RES_CARD_URL } from "../utils/constant";

import ReataurantCard from "./RestaurantsCard";
import Shimmer from "./Shimmer";

// import { restaurantsData } from "../utils/data";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(RES_CARD_URL);

    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-between">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-gray-400 py-1 rounded-l-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-300 rounded-r-md border border-solid border-green-400 hover:bg-green-400"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurant.filter((search) =>
                  search.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
        <button
          className="px-4 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResaurant.map((resturant) => {
          return (
            <Link
              key={resturant.info.id}
              to={"/restaurant/" + resturant.info.id}
            >
              <ReataurantCard resData={resturant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
