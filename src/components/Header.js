import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="container">
      <div className="logo">
        <img alt="" height={100} width={100} src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Internet Status:{onlineStatus ? "🙂" : "😔"}
          </li>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="link" to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
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
