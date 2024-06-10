import Header from "../../Components/Header/Header";
import { IoHome } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaCog } from "react-icons/fa";
import "./home.css";
import { Link } from "react-router-dom";
import About from "../About/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Components/Footer/Footer";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Bring from "../../Components/Bring yellow/Bring";



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
      <Pricing/>
      <Testimonial/>
      <Bring/>
      <Footer/>
    </div>
  );
};

export default Home;
