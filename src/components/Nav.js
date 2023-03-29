import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="wrapper">
            <nav>
                <div className="logoContainer"><img src="" alt="logo" /></div>
                <ul>
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