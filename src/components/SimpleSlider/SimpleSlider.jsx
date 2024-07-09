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
        {/* <div>
          <LazyLoad>
            {" "}
            <img
              loading="lazy"
              className="slideImg"
              src="./img/sliderPic/1.1.jpg"
              alt=""
            />
          </LazyLoad>
        </div> */}
        <div>
          <LazyLoad>
            <img
              loading="lazy"
              className="slideImg"
              src="./img/sliderPic/1.2.jpg"
              alt=""
            />
          </LazyLoad>
        </div>
        <div>
          <LazyLoad>
            <img
              loading="lazy"
              className="slideImg"
              src="./img/sliderPic/1.jpg"
              alt=""
            />
          </LazyLoad>
        </div>
        <div>
          <LazyLoad>
            <img
              loading="lazy"
              className="slideImg"
              src="./img/sliderPic/2.jpg"
              alt=""
            />
          </LazyLoad>
        </div>

        {/* <div>
          <LazyLoad>
            <img
              loading="lazy"
              className="slideImg"
              src="./img/sliderPic/1.1.jpg"
              alt=""
            />
          </LazyLoad>
        </div> */}
        <div>
          <LazyLoad>
            <img
              loading="lazy"
              className="slideImg"
              src="./img/sliderPic/1.2.jpg"
              alt=""
            />
          </LazyLoad>
        </div>
        <div>
          <LazyLoad>
            <img
              loading="lazy"
              className="slideImg"
              src="./img/sliderPic/1.jpg"
              alt=""
            />
          </LazyLoad>
        </div>
        <div>
          <LazyLoad>
            <img
              loading="lazy"
              className="slideImg"
              src="./img/sliderPic/2.jpg"
              alt=""
            />
          </LazyLoad>
        </div>
      </Slider>
    </div>
  );
};
