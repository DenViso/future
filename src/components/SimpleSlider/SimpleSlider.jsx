import Slider from 'react-slick'
import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    // autoplaySpeed: 000,
     arrows:false,
    // beforeChange: function(currentSlide, nextSlide) {
    //   console.log('before change', currentSlide, nextSlide)
    // }
  }
         return (
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src="./img/sliderPic/1.1.jpg" alt="" />
              </div>
              <div>
              <img src="./img/sliderPic/1.2.jpg" alt="" />
              </div>
              <div>
              <img src="./img/sliderPic/1.jpg" alt="" />
              </div>
              <div>
              <img src="./img/sliderPic/2.jpg" alt="" />
              </div>
              <div>
              <video src="./img/sliderPic/3.mp4" autoPlay loop muted fullscreen='true' style={{width:"100vw"}} ></video>
              </div>
              <div>
                <img src="./img/sliderPic/1.1.jpg" alt="" />
              </div>
              <div>
              <img src="./img/sliderPic/1.2.jpg" alt="" />
              </div>
              <div>
              <img src="./img/sliderPic/1.jpg" alt="" />
              </div>
              <div>
              <img src="./img/sliderPic/2.jpg" alt="" />
              </div>
            </Slider>
          </div>
  )
}
