import React from "react";
import Header from "../../Components/Header/Header";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import "./contact.css";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  const backgroundImageUrl =
    "https://preview.colorlib.com/theme/kiddy/images/hero_1.jpg";

  return (
    <div>
      <Header />

      {location.pathname === "/contact" && (
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
                  <span className="ab-tx">Contact</span>
                  <h1>Get In Touch</h1>
                  <p>
                    <Link to="/">Home</Link> <span className="drop">/</span>{" "}
                    <strong>Contact</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      )}

      <div className="contact-section">
        <div className="container">
          <div className="contact-center">
            <div className="contact-text">
              <h5>Get In Touch Using The Contact Form</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                assumenda, dolorum necessitatibus eius earum voluptates sed!
              </p>
            </div>
          </div>

          <div className="contact-flex">
            <div className="contact-form">
              <form action="#">
                <div className="fullname">
                  <input
                    type="text"
                    className="input"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Last name"
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    placeholder="Email adress"
                    className="input"
                  />
                </div>
                <div className="message">
                  <textarea
                    name=""
                    id=""
                    placeholder="Write your message."
                    style={{height: '244px'}}
                  ></textarea>
                </div>
                <div className="form-btn">
                  <input type="submit" value="Send Message" />{" "}
                </div>
              </form>
            </div>

            <div className="contact-info">
              <h3>Contact Info</h3>
              <div className="adress">
                <span>Adress:</span>
                <p>34 Street Name, City Name Here, United States</p>
              </div>
              <div className="phone">
                <span>Phone:</span>
                <p>+1 242 4942 290</p>
              </div>
              <div className="email">
                <span>Email:</span>
                <p>info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default Contact;
