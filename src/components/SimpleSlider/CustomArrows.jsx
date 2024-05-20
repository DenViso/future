import React from "react";
import "../../App.css"


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "url(/img/sliderPic/arrow.png) no-repeat center center",
        backgroundSize: "contain",
        width: "50px",
        height: "50px",
        
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "url(/img/sliderPic/arrow.png) no-repeat center center",
        backgroundSize: "contain",
        width: "50px",
        height: "50px",
        rotate: "180deg",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };