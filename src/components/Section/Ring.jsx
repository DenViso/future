import React from "react";
import { Link } from "react-router-dom";
export const Ring = ({t}) => {
  return (
    <div className="ring">
      <Link className="back backposition" to="/">{t("back.toMain")}</Link>
      <h1>{t("section.title")}</h1>
      <ul className="ringList">
        <li>
          <Link to="/Engagement">
            {t("section.section1")}
            <img src="/img/subsect/1.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Inner/53">
            {t("section.section2")}
            <img src="/img/subsect/2.png" alt="" />
          </Link>
        </li>
        </ul>
       
        <ul className="ringList">
        <li>
          <Link to="/Women">
            {t("section.section3")}
            <img src="/img/subsect/3.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/Men">
            {t("section.section4")}
            <img src="/img/subsect/4.png" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
