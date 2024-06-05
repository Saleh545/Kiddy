import React from 'react'
import Header from '../../Components/Header/Header'
import { Link, useLocation } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const location = useLocation();

  return (
    <div>
    {location.pathname === '/pricing' && <Header />}

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
              <h3>Golden Pack</h3>
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
    </div>
  )
}

export default Pricing