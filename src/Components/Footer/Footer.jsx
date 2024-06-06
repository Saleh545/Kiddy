import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      
      <footer>
        <div className="container">
          <div className="footer-flex">

            <div className="col-lg-4">
              <h2>About Us</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <h3>Newsletter</h3>

              <form action="" >
                <input type="text" className='form-control'  placeholder='Email'/>
                <input type="submit" value="Send"  className='submit'/>

              </form>
            </div>
            <div className="col-lg-8">
              <div className="navigation">
              <h2>Navigation</h2>
              <ul>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Testimonials</Link>
                </li>
                <li>
                  <Link>Terms of Service</Link>
                </li>
                <li>
                  <Link>Privacy </Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
              </div>
              <div className="navigation">
              <h2>Navigation</h2>
              <ul>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Testimonials</Link>
                </li>
                <li>
                  <Link>Terms of Service</Link>
                </li>
                <li>
                  <Link>Privacy </Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="footer-center">
            <hr />
            <p>Copyright ©2024 All rights reserved | This template is made with <span><FaHeart /></span> by Colorlib</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer