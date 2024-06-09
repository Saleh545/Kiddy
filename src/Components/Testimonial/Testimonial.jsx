import React from 'react'
import Slider from 'react-slick'
import "./testimonial.css"
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
  return (
    <div>
          <div className="testimonial-section">
        <div className="container">
          <div className="testimonial-center">
            <span>Testimonial</span>
            <h4>What Our Client Says About Us</h4>
          </div>
          <div className="testimonial">
            <div className="slider-container">
              <Slider {...settings}>
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
                        elit. Aliquam earum libero rem maxime magnam. Similique
                        esse ab earum, autem consectetur.
                      </p>
                    </div>
                  </div>
                </div>
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
                        elit. Aliquam earum libero rem maxime magnam. Similique
                        esse ab earum, autem consectetur.
                      </p>
                    </div>
                  </div>
                </div>
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
                        elit. Aliquam earum libero rem maxime magnam. Similique
                        esse ab earum, autem consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="testimontial-text">
              <div className="card-center">
                <h5 className="color-1">3423</h5>
                <p>Happy Client</p>
              </div>

              <div className="card-center">
                <h5 className="color-2">4398</h5>
                <p>Members</p>
              </div>

              <div className="card-center">
                <h5 className="color-3">50+</h5>
                <p>Staffs</p>
              </div>

              <div className="card-center">
                <h5 className="color-4">2000+</h5>
                <p>Our Followers</p>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial