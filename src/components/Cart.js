import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="font-bold text-center text-3xl">
        <h1 className="mt-24">Cart is empty!!</h1>
        <h1 className="mt-24">Please add something to cart.</h1>
      </div>
    );
  }

  return (
    <div className="m-4 p-4">
      <h1 className="text-3xl font-bold text-center">Cart</h1>
      <div className="mx-52 mt-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Total Price: </h1>
          <button
            className="m-1 px-2 py-1 text-xl font-bold border border-solid border-gray-400 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={clearCartHandler}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} itemList={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
