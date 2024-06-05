import Header from "../../Components/Header/Header";
import { IoHome } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaCog } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import "./home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Packages from "../Packages/Packages";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
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

      <About />

      <Packages />

      <Pricing />

      <div className="testimonial-section">
        <div className="container">
          <div className="testimonial-center">
            <span>Testimonial</span>
            <h4>What Our Client Says About Us</h4>
          </div>

          <div className="testimonial">
            <div className="slider-container">
              <Slider {...settings}>
              
                <div className="alaaaaa">
                  <div className="test-card">
                    <div className="test-flex">
                        <img
                          src="https://preview.colorlib.com/theme/kiddy/images/person_3.jpg"
                          alt=""
                        />
                      <div className="test-text">
                        <h1>Jeff Woodland</h1>
                        <span>Partner</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam earum libero rem maxime magnam.
                          Similique esse ab earum, autem consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="alaaaaa">
                  <div className="test-card">
                    <div className="test-flex">
                        <img
                          src="https://preview.colorlib.com/theme/kiddy/images/person_1.jpg"
                          alt=""
                        />
                      <div className="test-text">
                        <h1>Jeff Woodland</h1>
                        <span>Partner</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam earum libero rem maxime magnam.
                          Similique esse ab earum, autem consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="alaaaaa">
                  <div className="test-card">
                    <div className="test-flex">
                        <img
                          src="https://preview.colorlib.com/theme/kiddy/images/person_2.jpg"
                          alt=""
                        />
                      <div className="test-text">
                        <h1>Jeff Woodland</h1>
                        <span>Partner</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam earum libero rem maxime magnam.
                          Similique esse ab earum, autem consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
