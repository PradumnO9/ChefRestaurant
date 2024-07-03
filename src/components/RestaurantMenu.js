import { useParams } from "react-router-dom";
import { MENU_ITEM_IMG_URL } from "../utils/constant";
import LoadingSpinner from "./LoadingSpinner";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
        <h5>{sla?.slaString}</h5>
      </div>
      <div className="food-itemContainer">
        <h2>Menu</h2>
        <hr />
        {itemCards.map((item) => {
          const { id, name, defaultPrice, price, description, imageId } = item?.card?.info;
          return (
            <div key={id}>
              <div className="food-item">
                <div className="food-itemInfo">
                  <h2>{name}</h2>
                  <h4>
                    {defaultPrice / 100 ||
                      price / 100}
                    /-
                  </h4>
                  <p>{description}</p>
                </div>
                <img
                  className="food-itemImg"
                  alt=""
                  src={MENU_ITEM_IMG_URL + imageId}
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
