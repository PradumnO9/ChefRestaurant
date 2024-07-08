import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi2";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { data, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  // Subscribing to the store using selector
  const cartList = useSelector((store) => store.cart.items);

  const handleLogOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex justify-between bg-gray-50 shadow-md sticky top-0 z-10">
      <div className="logo flex items-center">
        <img alt="" className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {data !== null && (
            <div className="flex">
              <li className="px-4 text-lg font-bold border border-solid border-gray-200 rounded-md cursor-pointer hover:bg-gray-200">
                {data.name}
              </li>
              <li className="px-4 text-lg">
                Internet Status:{onlineStatus ? "🙂" : "😔"}
              </li>
              <li className="px-4 text-lg">
                <Link to="/home">Home</Link>
              </li>
              <li className="px-4 text-lg">
                <Link to="/about">About Us</Link>
              </li>
              <li className="px-4 text-lg">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="px-2 text-lg">
                <Link to="/cart" className="flex">
                  <h1>({cartList.length})</h1>
                  <HiShoppingCart size={30} />
                </Link>
              </li>
              <li className="px-4 text-lg border border-solid border-b-gray-400 rounded-lg bg-red-500 text-white hover:bg-red-600">
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </div>
          )}
          {!data && (
            <li className="px-4 text-lg border border-solid border-b-gray-400 rounded-lg bg-green-500 text-white hover:bg-green-600">
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
