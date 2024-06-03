import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";

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
      </div>
    </div>
  );
};

export default Header;
