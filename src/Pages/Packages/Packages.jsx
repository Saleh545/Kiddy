import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';

const Packages = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/packages' && <Header />}

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
                  alt="Indoor Games"
                />
              </div>
              <h3>Indoor Games</h3>
              <p>
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                amet quo corporis distinctio soluta recusandae?
              </p>
              <Link to="/packages/indoor-games" className="p1">Learn More</Link>
            </div>
            <div className="packages-card">
              <div className="packages-img">
                <img
                  src="https://preview.colorlib.com/theme/kiddy/images/flaticon/svg/002-target.svg"
                  alt="Outdoor Game and Event"
                />
              </div>
              <h3>Outdoor Game and Event</h3>
              <p>
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                amet quo corporis distinctio soluta recusandae?
              </p>
              <Link to="/packages/outdoor-games" className="p2">Learn More</Link>
            </div>
            <div className="packages-card">
              <div className="packages-img">
                <img
                  src="https://preview.colorlib.com/theme/kiddy/images/flaticon/svg/003-mission.svg"
                  alt="Camping for Kids"
                />
              </div>
              <h3>Camping for Kids</h3>
              <p>
                Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                amet quo corporis distinctio soluta recusandae?
              </p>
              <Link to="/packages/camping-for-kids" className="p3">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
