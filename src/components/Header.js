import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi2";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const [updateUserName, setUpdateUserName] = useState("");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Subscribing to the store using selector
  const cartList = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-50 shadow-md">
      <div className="logo flex items-center">
        <img alt="" className="w-24" src={LOGO_URL} />
        <div className="ml-2">
          <input
            type="text"
            className="p-2 border border-solid border-gray-400 py-1 rounded-l-md"
            placeholder="change username"
            value={updateUserName}
            onChange={(e) => {
              setUpdateUserName(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-gray-300 rounded-r-md border border-solid border-gray-400 hover:bg-gray-400"
            onClick={() => {
              setUserName(updateUserName);
            }}
          >
            Change
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg font-bold border border-solid border-gray-200 rounded-md cursor-pointer hover:bg-gray-200">
            {loggedInUser}
          </li>
          <li className="px-4 text-lg">
            Internet Status:{onlineStatus ? "🙂" : "😔"}
          </li>
          <li className="px-4 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 text-lg">
            <Link to="/cart" className="flex">
              <h1>({cartList.length})</h1>
              <HiShoppingCart size={30} />
            </Link>
          </li>
          <button
            className="px-4 text-lg"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
