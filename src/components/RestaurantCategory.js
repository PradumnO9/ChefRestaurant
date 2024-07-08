import RestaurantMenuCard, { WithVegLabel } from "./RestaurantMenuCard";
import { RiArrowDownWideLine } from "react-icons/ri";

const RestaurantCategory = (props) => {
  const { data, showItems, setListIndex } = props;
  const { title, itemCards } = data;

  // Higher Order Component
  const RestaurantMenuCardWithVegLabel = WithVegLabel(RestaurantMenuCard);

  const handleClick = () => {
    setListIndex();
  };

  return (
    <div>
      <div
        className="flex justify-between bg-gray-50 shadow-lg p-3 rounded-md cursor-pointer my-2"
        onClick={handleClick}
      >
        <h1 className="font-bold text-2xl mb-2">
          {title} ({itemCards.length})
        </h1>
        <span className="mr-2 mt-1">
          <RiArrowDownWideLine size={30} />
        </span>
      </div>
      {showItems && (
        <div className="my-4 mx-4">
          <hr />
          {itemCards.map((item) => {
            const { isVeg, id } = item?.card?.info;
            return (
              <div key={id} data-testid="foodItems">
                {isVeg === 1 ? (
                  <RestaurantMenuCardWithVegLabel cardInfo={item?.card?.info} />
                ) : (
                  <RestaurantMenuCard cardInfo={item?.card?.info} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
