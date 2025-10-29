import { LOGO_URL } from "../utils/constant";


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img height="60" src={LOGO_URL} alt="logo" className="logo-img" />
            </div>
            <div className="navbar">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;