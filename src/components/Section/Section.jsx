import React from "react";
import {  Link,  Router } from "react-router-dom";


export const Section = ({t}) => {
  return (
  <>
      <div className="section">
        <ul className="sectionList">
          <li className="sectionPart">
            <Link to="/future/Ring">
              <h2>{t("dropMenu.sec1")}</h2>
              <img src="./img/logo/section/ring.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/Diamond">
              <h2>{t("dropMenu.sec2")}</h2>
              <img src="./img/logo/section/diamond.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/Services">
              <h2>{t("dropMenu.sec3")}</h2>
              <img src="./img/logo/section/Services.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/Care">
              <h2>{t("dropMenu.sec4")}</h2>
              <img src="./img/logo/section/care.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/Reviews">
              <h2>{t("dropMenu.sec5")}</h2>
              <img src="./img/logo/section/reviews.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/future/About">
              <h2>{t("dropMenu.sec6")}</h2>
              <img src="./img/logo/section/team.png" alt="" />
            </Link>
          </li>
        </ul>
     
      </div>
    </> 
  );
};
