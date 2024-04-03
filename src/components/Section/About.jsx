import React from "react";
import { Link } from "react-router-dom";
import "./sectionStyling.css";

export const About = () => {
  return (
    <div className="about">
      <Link to="/future/">Hа головну</Link>
      <h1> Ми найкращі!</h1>
      <div className="dip">
      <img
        
        src="./img/dipl/1.jpg"
        alt=""
      />
      <img
        
        src="./img/dipl/2.jpg"
        alt=""
      />
      </div>
    </div>
  );
};
