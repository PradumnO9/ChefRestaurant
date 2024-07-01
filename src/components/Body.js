import { useEffect, useState } from "react";

import ReataurantCard from "./RestaurantsCard";
import Shimmer from "./Shimmer";

// import { restaurantsData } from "../utils/data";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.248602&lng=81.609987&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  useEffect(() => {
    fetchData();
    console.log("fetch")
  }, []);

  if (listOfRestaurant.length === 0) {
    return <Shimmer />
  }

  return (
    <div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {listOfRestaurant.map((resturant) => {
          return (
            <ReataurantCard key={resturant.info.id} resData={resturant.info} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
