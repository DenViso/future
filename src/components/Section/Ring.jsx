import React from "react";
import { Link } from "react-router-dom";
export const Ring = ({t}) => {
  return (
    <div className="ring">
      <Link to="/future/">{t("back.toMain")}</Link>
      <h1>{t("section.title")}</h1>
      <ul className="ringList">
        <li>
          <Link to="/future/Engagement">
            {t("section.section1")}
            <img src="./img/subsect/1.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/WeddingRings">
            {t("section.section2")}
            <img src="./img/subsect/2.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/Women">
            {t("section.section3")}
            <img src="./img/subsect/3.png" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/Men">
            {t("section.section4")}
            <img src="./img/subsect/4.png" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
