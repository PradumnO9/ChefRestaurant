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
      <div className="text-center mt-4">
        <h1 className="font-bold text-3xl">{name}</h1>
        <h3 className="font-bold text-xl mt-4">
          {areaName}, {city}
        </h3>
        <p className="mt-2">{costForTwoMessage}</p>
        <h4 className="font-bold mt-2">{avgRating} stars</h4>
        <h5 className="font-bold mt-2">{sla?.slaString}</h5>
      </div>
      <div className="mx-52">
        <h2 className="font-bold text-2xl">Menu</h2>
        <hr />
        {itemCards.map((item) => {
          const { id, name, defaultPrice, price, description, imageId } = item?.card?.info;
          return (
            <div key={id}>
              <div className="flex justify-between my-2">
                <div className="mt-6">
                  <h2 className="font-bold text-xl">{name}</h2>
                  <h4 className="mt-2 font-bold">
                    {defaultPrice / 100 ||
                      price / 100}
                    /-
                  </h4>
                  <p>{description}</p>
                </div>
                <img
                  className="rounded-r-md"
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
