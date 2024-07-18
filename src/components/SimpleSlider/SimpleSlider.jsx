import Slider from "react-slick";
import React from "react";
import { NextArrow, PrevArrow } from "./CustomArrows";
import LazyLoad from "react-lazyload";

export const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {['1.2.jpg', '1.jpg', '2.jpg'].map((img, index) => (
          <div key={index}>
            <LazyLoad>
              <img
                loading="lazy"
                className="slideImg"
                src={`./img/sliderPic/${img}`}
                alt={`Slide ${index + 1}`}
              />
            </LazyLoad>
          </div>
        ))}
      </Slider>
    </div>
  );
};
