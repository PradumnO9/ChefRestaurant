import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return(
        <div className="container">
            <div className="logo">
                <img alt="" height={100} width={100} src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;