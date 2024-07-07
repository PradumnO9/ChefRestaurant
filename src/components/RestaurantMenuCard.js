import { useDispatch } from "react-redux";
import { MENU_ITEM_IMG_URL } from "../utils/constant";
import { addItem } from "../redux/cartSlice";

const RestaurantMenuCard = (props) => {
  const { cardInfo } = props;
  const { name, defaultPrice, price, description, imageId } = cardInfo;

  const dispatch = useDispatch();

  const handleAddClick = (cardInfo) => {
    //dispatch an action
    dispatch(addItem(cardInfo));
  }

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="mt-6 w-9/12">
          <h2 className="font-bold text-xl">{name}</h2>
          <h4 className="mt-2 font-bold">
            {defaultPrice / 100 || price / 100}
            /-
          </h4>
          <p>{description}</p>
        </div>
        <div className="w-3/12">
          <div onClick={() => handleAddClick(cardInfo)} className="absolute font-bold bg-white text-green-400 px-4 py-2 rounded-lg shadow-md cursor-pointer">
            <button>Add</button>
          </div>
          <img
            className="rounded-r-md"
            alt=""
            src={MENU_ITEM_IMG_URL + imageId}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

// Higher Order Component
export const WithVegLabel = (RestaurantMenuCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-500 text-white mx-2 p-2 rounded-md">
          Veg
        </label>
        <RestaurantMenuCard {...props} />
      </div>
    );
  };
};

export default RestaurantMenuCard;
