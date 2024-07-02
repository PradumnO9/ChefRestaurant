import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ReataurantCard from "./RestaurantsCard";
import Shimmer from "./Shimmer";

// import { restaurantsData } from "../utils/data";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredResaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.248602&lng=81.609987&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredResaurant.map((resturant) => {
          return (
            <Link className="link" key={resturant.info.id} to={"/restaurant/"+resturant.info.id}><ReataurantCard resData={resturant.info} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
