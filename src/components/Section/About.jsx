import React from "react";
import { Link } from "react-router-dom";
import "./sectionStyling.css";

export const About = ({ t }) => {
  return (
    <div className="about">
      <Link className="back" to="/">{t("back.toMain")}</Link>
      <h1> {t("about.title")}</h1>
      <div className="dip">
        <img src="/img/dipl/1.JPG" alt="" />
        <img src="/img/dipl/2.JPG" alt="" />
      </div>
    </div>
  );
};
