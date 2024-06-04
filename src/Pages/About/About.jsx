import React from 'react'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
<Header/>
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
    </div>
  )
}

export default About