import React from "react";
import { Link } from "react-router-dom";
// import LazyLoad from "react-lazyload";


export const Ring = ({ t }) => {
  return (
    <div className="ring">
      <Link className="back backposition" to="/">
        {t("back.toMain")}
      </Link>
      <h1>{t("section.title")}</h1>
      <ul className="ringList">
        <li>
          <Link to="/Engagement">
            {t("section.section1")}
            
              <img className ="ringImg" loading="lazy" src="/img/sect/jew/1eng.jpg" alt="" />
           
          </Link>
        </li>
        <li>
          <Link to="/Inner/53">
            {t("section.section2")}
          
              <img className ="ringImg" loading="lazy" src="/img/sect/jew/2weRing.jpg" alt="" />
            
          </Link>
        </li>
      </ul>

      <ul className="ringList">
        <li>
          <Link to="/Women">
            {t("section.section3")}
            
              <img className ="ringImg" loading="lazy" src="/img/sect/jew/3wom.jpg" alt="" />
            
          </Link>
        </li>
        <li>
          <Link to="/Men">
            {t("section.section4")}
           
              <img className ="ringImg" loading="lazy" src="/img/sect/jew/4man.jpg" alt="" />
            
          </Link>
        </li>
      </ul>
    </div>
  );
};
