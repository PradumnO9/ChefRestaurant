import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL, MENU_ITEM_IMG_URL } from "../utils/constant";
import LoadingSpinner from "./LoadingSpinner";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <LoadingSpinner />;
  }

  const { areaName, avgRating, city, costForTwoMessage, name, sla } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <div className="food-items">
        <h1>{name}</h1>
        <h3>
          {areaName}, {city}
        </h3>
        <p>{costForTwoMessage}</p>
        <h4>{avgRating} stars</h4>
      </div>
      <div>
        <h2>Menu</h2>
        <hr />
        {itemCards.map((item) => {
          return (
            <div key={item.card.info.id}>
              <div className="food-item">
                <div className="food-itemInfo">
                  <h2>{item.card.info.name}</h2>
                  <h4>
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}
                    /-
                  </h4>
                  <p>{item.card.info.description}</p>
                </div>
                <img
                  className="food-itemImg"
                  alt=""
                  src={MENU_ITEM_IMG_URL + item.card.info.imageId}
                />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
