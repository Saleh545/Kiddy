import Header from "../../Components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import Packages from "../Packages/Packages";
import "./about.css";
import { Parallax } from "react-parallax";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  const location = useLocation();

  const backgroundImageUrl =
    "https://preview.colorlib.com/theme/kiddy/images/hero_1.jpg";

  return (
    <div>
      {location.pathname === "/about" && <Header />}

      {location.pathname === "/about" && (
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
                  <span className="ab-tx">Welcome To Our Website</span>
                  <h1>About Us</h1>
                  <p>
                    <Link to="/">Home</Link> <span className="drop">/</span>{" "}
                    <strong>About</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      )}

      <div
        className="about-section "
        style={{
          backgroundColor: location.pathname === "/about" ? "#fff" : "",
        }}
      >
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

     {location.pathname === "/about" &&  <div className="team-section">
        <div className="container">
          <div className="team-center">
            <div className="team-text">
              <span>The Team</span>
              <h2>Meet The Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                nesciunt nemo vel earum maxime neque!
              </p>
            </div>
          </div>
          <div className="team-cards">
            <div className="team-card">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/person_1.jpg"
                alt=""
                className="james1"
              />
              <div className="team-content">
                <span>Founder</span>
                <h1>James Doe</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
            <div className="team-card">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/person_2.jpg"
                alt=""
                className="james2"

              />
              <div className="team-content">
                <span>Founder</span>
                <h1>James Doe</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
            <div className="team-card">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/person_3.jpg"
                alt=""
                className="james3"

              />
              <div className="team-content">
                <span>Founder</span>
                <h1>James Doe</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
            <div className="team-card">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/person_4.jpg"
                alt=""
                className="james4"

              />
              <div className="team-content">
                <span>Founder</span>
                <h1>James Doe</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
            <div className="team-card">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/person_5.jpg"
                alt=""
                className="james5"

              />
              <div className="team-content">
                <span>Founder</span>
                <h1>James Doe</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
            <div className="team-card">
              <img
                src="https://preview.colorlib.com/theme/kiddy/images/person_1.jpg"
                alt=""
                className="james6"

              />
              <div className="team-content">
                <span>Founder</span>
                <h1>James Doe</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsa, sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>}

      <Packages />
      {location.pathname === "/about" && <Footer />}


    </div>
  );
};

export default About;
