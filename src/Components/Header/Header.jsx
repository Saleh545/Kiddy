import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./header.css";

const Header = () => {
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
        <nav>
          <ul className="site-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/packages">Packages</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
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
