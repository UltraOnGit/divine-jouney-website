import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                    <li className="dropdown">
                <Link to="/Collectibles">Features</Link>
                <ul className="submenu">
                    <li><Link to="/Collectibles" >Collectibles</Link></li>
                    <li><Link to="/Weapons">Weapons</Link></li>
                    <li><Link to="/Vaporsteam">Vaporsteam</Link></li>
                </ul>
                </li>
                    <li><Link to="#">About the Creator</Link></li>
                </ul>
        </nav>
    );
};

export default Navbar;
