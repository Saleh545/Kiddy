import React from 'react'
import Header from '../../Components/Header/Header'
import { Link, useLocation } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import "./pricing.css"
import { Parallax } from 'react-parallax';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Footer from '../../Components/Footer/Footer';
const Pricing = () => {
  const backgroundImageUrl =
  "https://preview.colorlib.com/theme/kiddy/images/hero_1.jpg";
  const location = useLocation();

  return (
    <div>
    {location.pathname === '/pricing' && <Header />}

    {location.pathname === "/pricing" && (
        <Parallax
          bgImage={backgroundImageUrl}
          strength={300}
          bgImageStyle={{
            filter: "brightness(80%) contrast(100%)",
          }}
        >
          <div style={{ height: "777px" }}>
            <div className="hero-about">
              <div className="container">
                <div className="about-content">
                  <span className="ab-tx">Pricing</span>
                  <h1>Our Pricing</h1>
                  <p>
                    <Link to="/">Home</Link> <span className="drop">/</span>{" "}
                    <strong>Pricing</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      )}
    
    
    
    
    
    
    
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
              <p className="price">
                <span>$30</span>
              </p>
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
            <p className="price price2">
                <span>$70</span>
              </p>              <h3>Golden Pack</h3>
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

      <Testimonial/>
      {location.pathname === '/pricing' && <Footer />}

    </div>
  )
}

export default Pricing