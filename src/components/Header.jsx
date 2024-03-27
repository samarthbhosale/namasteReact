import {SWIGGY_LOGO} from "../utils/links";
import SWIGGY_ICON from '../../images/swiggy.svg';

const Header = () => {
    return (
        <div className="header">
            <link rel="icon" href={SWIGGY_ICON} />
            <div className="logo-container">
                <img className="logo" src={SWIGGY_LOGO}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;