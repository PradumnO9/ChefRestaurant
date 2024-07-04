import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-50 shadow-md">
      <div className="logo">
        <img alt="" className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">
            Internet Status:{onlineStatus ? "🙂" : "😔"}
          </li>
          <li className="px-4 text-lg">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="px-4 text-lg">
            <Link className="link" to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link className="link" to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg">Cart</li>
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
