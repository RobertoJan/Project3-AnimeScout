import { Link } from "react-router-dom";
import animeScoutLogo from '../as-logo.png';

const Nav = () => {
    return (
        <div className="wrapper">
            <nav className="headerNav">
                <div className="logoContainer">
                    <Link to='/' >
                        <img src={animeScoutLogo} alt="AnimeScout logo" />
                    </Link>
                </div>
                <ul className="navLinks" >
                    <Link to='/' >
                        <li>Home</li>
                    </Link>
                    <Link to='about' >
                        <li>About</li>
                    </Link>
                    <Link to='contact' >
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;