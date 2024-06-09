import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCloseOutline, IoLocationSharp } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";



const Header = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    document.body.style.overflow = open ? 'visible' : 'hidden';
  };
  return (
    <div className="header">
      <div className="container">
        <header>
          <div className="logo">
            <Link to="/">
              Kiddy
              <span>.</span>
            </Link>
          </div>
          <div className="quick-contact">
            <div className="quick quick1">
              <IoLocationSharp />
              <p>
                34 Street Name, City Name Here, <br /> United States
              </p>
            </div>
            <div className="quick quick2">
              <LuClock9 />
              <p>
                Sunday - Friday 8:00AM - 4:00PM
                <br /> Saturday CLOSED
              </p>
            </div>
          </div>
        </header>
        <nav >
          <ul className={`site-menu ${open ? "open" : ""}`}>
          <li>
              <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to="/packages" onClick={toggleMenu}>Packages</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={toggleMenu}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/pricing" onClick={toggleMenu}>Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
            </li>
            <IoCloseOutline className="close" onClick={toggleMenu}/>

          </ul>
          <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
          <div className="social">
            <ul>
              <li>
                <Link to="https://www.facebook.com/ " className="fb"><FaFacebookF /></Link>
              </li>
              <li>
                <Link to="https://www.twitter.com/" className="twitter"><FaTwitter /></Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/" className="in"><FaLinkedinIn /></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
