import React from "react";
import { MENU_ITEM_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const CartItem = ({ itemList, index }) => {

  const dispatch = useDispatch();

  const deleteItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div data-testid="cartItems" className="flex justify-between my-2">
      <div className="mt-6 w-9/12">
        <h2 className="font-bold text-xl">{itemList.name}</h2>
        <h4 className="mt-2 font-bold">
          {itemList.defaultPrice / 100 || itemList.price / 100}
          /-
        </h4>
        <p>{itemList.description}</p>
      </div>
      <div className="w-3/12">
        <div
          className="absolute font-bold bg-white border border-solid border-gray-300 text-green-400 px-4 py-2 rounded-lg shadow-md cursor-pointer"
          onClick={() => deleteItem(index)}
        >
          <button>Delete</button>
        </div>
        <img
          className="rounded-r-md"
          alt=""
          src={MENU_ITEM_IMG_URL + itemList.imageId}
        />
      </div>
    </div>
  );
};

export default CartItem;
