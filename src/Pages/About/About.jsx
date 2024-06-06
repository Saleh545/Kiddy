import React from "react";
import Header from "../../Components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import Packages from "../Packages/Packages";
import "./about.css";

const About = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/about" && <Header />}

      <div className="about-section">
        <div className="container">
          <div className="about">
            <div className="about-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_1.jpg"
                alt=""
              />
            </div>
            <div className="about-text">
              <span>About Us</span>
              <h2>Bring Fun Life To Your Kids</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                harum, magni sequi nostrum maxime enim.Magnam id atque dicta
                deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem
                accusamus, earum veritatis, laudantium.
              </p>
              <Link>More About Us</Link>
            </div>
          </div>
        </div>
      </div>


<div className="team-section">
  <div className="container">
    <div className="team-center">
      <div className="team-text">

      <span>The Team</span>
      <h2>Meet The Team</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>
    </div>
      </div>
      <div className="team-cards">

        <div className="team-card">
          <img src="https://preview.colorlib.com/theme/kiddy/images/person_2.jpg" alt="" />
        <div className="team-content">
          <span>Founder</span>
          <h1>James Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
        </div>
        </div>
        <div className="team-card">
          <img src="https://preview.colorlib.com/theme/kiddy/images/person_2.jpg" alt="" />
        <div className="team-content">
          <span>Founder</span>
          <h1>James Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
        </div>
        </div>
        <div className="team-card">
          <img src="https://preview.colorlib.com/theme/kiddy/images/person_2.jpg" alt="" />
        <div className="team-content">
          <span>Founder</span>
          <h1>James Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
        </div>
        </div>
        <div className="team-card">
          <img src="https://preview.colorlib.com/theme/kiddy/images/person_2.jpg" alt="" />
        <div className="team-content">
          <span>Founder</span>
          <h1>James Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
        </div>
        </div>
        <div className="team-card">
          <img src="https://preview.colorlib.com/theme/kiddy/images/person_2.jpg" alt="" />
        <div className="team-content">
          <span>Founder</span>
          <h1>James Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
        </div>
        </div>
        <div className="team-card">
          <img src="https://preview.colorlib.com/theme/kiddy/images/person_2.jpg" alt="" />
        <div className="team-content">
          <span>Founder</span>
          <h1>James Doe</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
        </div>
        </div>

      </div>
  </div>
</div>
      <Packages />
    </div>
  );
};

export default About;
