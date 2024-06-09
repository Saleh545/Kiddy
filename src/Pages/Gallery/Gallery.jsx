import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import "./gallery.css";
import Bring from "../../Components/Bring yellow/Bring";
import Footer from "../../Components/Footer/Footer";

const Gallery = () => {
  const backgroundImageUrl =  "https://preview.colorlib.com/theme/kiddy/images/hero_1.jpg";
  return (
    <div>
      {location.pathname === "/gallery" && <Header />}

      {location.pathname === "/gallery" && (
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
                  <span className="ab-tx">Gallery</span>
                  <h1>Gallery Of Kids</h1>
                  <p>
                    <Link to="/">Home</Link> <span className="drop">/</span>{" "}
                    <strong>Gallery</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      )}

      <div className="gallery-section">
        <div className="container">
          <div className="gallery-center">
            <span>Our Gallery</span>
            <h4>Gallery Of The Kids</h4>
          </div>

          <div className="gallery-grid">
            <div className="grid-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_1.jpg"
                alt=""
              />
            </div>
            <div className="grid-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_2.jpg"
                alt=""
              />
            </div>
            <div className="grid-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_3.jpg"
                alt=""
              />
            </div>
            <div className="grid-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_4.jpg"
                alt=""
              />
            </div>
            <div className="grid-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_5.jpg"
                alt=""
              />
            </div>
            <div className="grid-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_3.jpg"
                alt=""
              />
            </div>
            <div className="grid-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_2.jpg"
                alt=""
              />
            </div>
            <div className="grid-img">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/img_1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Bring />
      {location.pathname === '/gallery' && <Footer />}
    </div>
  );
};

export default Gallery;
