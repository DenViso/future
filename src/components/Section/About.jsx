import React from "react";
import { Link } from "react-router-dom";
import "./sectionStyling.css";

export const About = ({ t }) => {
  return (
    <div className="about">
      <Link to="/">{t("back.toMain")}</Link>
      <h1> {t("about.title")}</h1>
      <div className="dip">
        <img src="./img/dipl/1.jpg" alt="" />
        <img src="./img/dipl/2.jpg" alt="" />
      </div>
    </div>
  );
};
