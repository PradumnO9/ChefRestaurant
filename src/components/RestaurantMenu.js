import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [listIndex, setListIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <LoadingSpinner />;
  }

  const { areaName, avgRating, city, costForTwoMessage, name, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="text-center mt-4">
        <h1 className="font-bold text-3xl">{name}</h1>
        <h3 className="font-bold text-xl mt-4">
          {areaName}, {city}
        </h3>
        <p className="mt-2">{costForTwoMessage}</p>
        <h4 className="font-bold mt-2">{avgRating} stars</h4>
        <h5 className="font-bold mt-2">{sla?.slaString}</h5>
      </div>
      <div className="mx-52 mt-4">
        {categories.map((category, index) => {
          return (
            // Controlled Component
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === listIndex ? true : false}
              setListIndex={() => setListIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
