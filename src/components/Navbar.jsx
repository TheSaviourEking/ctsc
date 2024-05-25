import { NavLink, Link } from "react-router-dom";

/** FONT AWESOME */
import { FaBars, FaCaretDown } from "react-icons/fa";
import { useState, useEffect } from "react";

import './Navbar.css';

const Navbar = () => {
    const linkClass = ({ isActive }) => {
        return isActive ? 'active nav-link' : 'nav-link';
    };

    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(null);

    const toggleMenu = () => {
        setShowMenu((prevMenu) => !prevMenu);
    }

    useEffect(() => {
        const navMenu = document.getElementById('nav-menu');
        if (!showMenu) {
            navMenu.classList.add('show');
        } else {
            navMenu.classList.remove('show')
        }
    }, [showMenu]);

    return (
        <header>
            <nav className="ctsc-navbar">
                <div className="ctsc-logo" id="logo">
                    <Link to="/">CRACKING THE STYLE CODE</Link>
                </div>
                <ul className="nav-menu" id="nav-menu">
                    <li className="nav-item">
                        <NavLink className={linkClass} to="/" end>Home</NavLink>
                    </li>
                    {/* DROPDOWN ONE */}
                    <li className="nav-item dropdown">
                        <NavLink className={linkClass} to="/mkpo-nnyin">Mkpo Nnyin <FaCaretDown /></NavLink>
                        <ul className="dropdown-content">
                            <li><NavLink to="/events">Ibom Events</NavLink></li>
                            <li><NavLink to="/services">Ibom Services</NavLink></li>
                            <li><NavLink to="/partners">Ibom Partners</NavLink></li>
                            <li><NavLink to="/jobs">Ibom Jobs</NavLink></li>
                        </ul>
                    </li>
                    {/* DROPDOWN TWO */}
                    <li className="nav-item dropdown">
                        <NavLink className={linkClass} to="/news-and-stories">News & Stories <FaCaretDown /></NavLink>
                        <ul className="dropdown-content">
                            <li><NavLink to="/feature-stories">Feature Story</NavLink></li>
                            <li><NavLink to="/personal-growth">Personal Growth</NavLink></li>
                            <li><NavLink to="/readers-corner">Reader's Corner</NavLink></li>
                            <li><NavLink to="/ctsc-interviews">CTSC Interviews</NavLink></li>
                            <li><NavLink to="/our-culture">Our Culture</NavLink></li>
                        </ul>
                    </li>
                    {/* DROPDOWN THREE */}
                    <li className="nav-item dropdown">
                        <div className="nav-link">About CTSCode <FaCaretDown /></div>
                        {/* <div className={linkClass}>About CTSCode <FaCaretDown /></div> */}
                        <ul className="dropdown-content">
                            <li><NavLink to="/about-us">About Us</NavLink></li>
                            <li><NavLink to="/ctsc-team">CTSC Team</NavLink></li>
                            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                            <li><NavLink to="/signup">Sign Up</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <FaBars className='nav-toggle' onClick={toggleMenu} />
            </nav>
        </header>
    );
};

export default Navbar;
