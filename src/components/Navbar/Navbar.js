import './Navbar.css';
import logo from "./logo.png";

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { FaHome, FaRegBookmark, FaCoins, FaChartBar, FaUserAstronaut, FaPhotoVideo } from "react-icons/fa";

function Navbar() {
    const { pathname } = useLocation();
    const [navbarFixed, setNavbarFixed] = useState(false);
    // Responsive
    const [menuOpened, setMenuOpened] = useState(false);

    const changeNavbar = () => {
        setNavbarFixed(window.scrollY > 118);
    }

    window.addEventListener("scroll", changeNavbar);

    return (
        <nav className={navbarFixed ? "Navbar fixed" : "Navbar"}>
            <div className="logo">
                <Link to="/" className="link-img">
                    <img src={logo} className={pathname === "/" ? "img-logo actived" : "img-logo"} alt="logo" height={70} draggable={false}/>
                </Link>
                <div className="flex-column">
                    <span className="server">Sigma Roleplay</span>
                    <span className="placeholder">French FiveM Server</span>
                </div>
            </div>
            <ul className={menuOpened ? "links active" : "links"}>
                {/* <Link className={pathname === "/" ? "link-route focused" : "link-route"} to="/"><FaHome/> Acceuil</Link> */}
                <Link className={pathname === "/rules" ? "link-route focused" : "link-route"} to="/rules"><FaRegBookmark/> Règlement</Link>
                <Link className={pathname === "/shop" ? "link-route focused" : "link-route"} to="/shop"><FaCoins/> Boutique</Link>
                <Link className={pathname === "/gallery" ? "link-route focused" : "link-route"} to="/gallery"><FaPhotoVideo/> Gallerie</Link>
                <Link className={pathname === "/top-server" ? "link-route focused" : "link-route"} to="/top-server"><FaChartBar/> Top-Serveur</Link>
                <Link className={pathname === "/about" ? "link-route focused" : "link-route"} to="/about"><FaUserAstronaut/> A Propos</Link>
            </ul>
            <div className="hamburger" onClick={() => setMenuOpened(!menuOpened)}>
                {!menuOpened ? <FaBars/> : <RiCloseFill/>}
            </div>
        </nav>
    );
}

export default Navbar;
