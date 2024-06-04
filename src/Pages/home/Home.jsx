import React from "react";
import Header from "../../Components/Header/Header";
import { IoHome } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaCog } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bring-section">
        <div className="container">
          <div className="bring">
            <div className="bring-text">
              <span>Welcome To Our Website</span>
              <h2>Bring Fun Life To Your Kids</h2>
              <p>Amazing Playground for your kids</p>
              <Link>Learn More</Link>
            </div>
            <div className="bring-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/kid_transparent.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="color-section">
        <div className="container">
          <div className="color-flex">
            <div className="color-card">
              <span>
                <IoHome />
              </span>{" "}
              <h2>Indoor Games</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                nesciunt, mollitia, hic enim id culpa.
              </p>
            </div>
            <div className="color-card color-card-2">
              <span className="color-card-2">
                <IoMdPerson />
              </span>
              <h2>Outdoor Game And Event</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                nesciunt, mollitia, hic enim id culpa.
              </p>
            </div>
            <div className="color-card  color-card-3">
              <span className="color-card-3">
                <FaCog />
              </span>{" "}
              <h2>Camping for Kids</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                nesciunt, mollitia, hic enim id culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
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

      <div className="packages-section">
        <div className="container">
          <div className="packages-text-center">
            <span>Packages You Like</span>
            <h5>Our Packages</h5>
          </div>
          <div className="packages">
            <div className="packages-card">
              <div className="packages-img">
                <img
                  src="https://preview.colorlib.com/theme/kiddy/images/flaticon/svg/001-jigsaw.svg"
                  alt=""
                />
              </div>
              <h3>Indoor Games</h3>
              <p>
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                amet quo corporis distinctio soluta recusandae?
              </p>
              <Link className="p1">Learn More</Link>
            </div>
            <div className="packages-card">
              <div className="packages-img">
                <img
                  src="https://preview.colorlib.com/theme/kiddy/images/flaticon/svg/002-target.svg"
                  alt=""
                />
              </div>
              <h3>Outdoor Game and Event</h3>
              <p>
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                amet quo corporis distinctio soluta recusandae?
              </p>
              <Link className="p2">Learn More</Link>
            </div>
            <div className="packages-card">
              <div className="packages-img">
                <img
                  src="https://preview.colorlib.com/theme/kiddy/images/flaticon/svg/003-mission.svg"
                  alt=""
                />
              </div>
              <h3 className="p-kids">Camping for Kids</h3>
              <p>
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                amet quo corporis distinctio soluta recusandae?
              </p>
              <Link className="p3">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-section">
        <div className="container">
          <div className="pricing">
            <div className="pricing-card">
              <span className="plan">Pricing Plan</span>
              <h4>Our Pricing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                quis cupiditate fugit, voluptatibus ullam, non laboriosam alias
                veniam, ex inventore iure sed?
              </p>
            </div>
            <div className="pricing-card">
              <span className="price">$30</span>
              <h3>Silver Pack</h3>
              <ul>
                <li>
                  <FaCheck />
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <FaCheck />
                  Consectetur adipisicing elit
                </li>
                <li>
                  <FaCheck />
                  Nemo quis cupiditate
                </li>
              </ul>
              <Link>Buy Now</Link>
            </div>
            <div className="pricing-card">
              <span className="price price2">$30</span>
              <h3>Silver Pack</h3>
              <ul>
                <li className="red-done">
                  <FaCheck />
                  Lorem ipsum dolor sit amet
                </li>
                <li className="red-done">
                  <FaCheck />
                  Consectetur adipisicing elit
                </li>
                <li className="red-done">
                  <FaCheck />
                  Nemo quis cupiditate
                </li>
              </ul>
              <Link className="bur-red">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="container">
          <div className="testimonial-center">
            <span>Testimonial</span>
            <h4>What Our Client Says About Us</h4>
          </div>
          <div className="testimonial">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
