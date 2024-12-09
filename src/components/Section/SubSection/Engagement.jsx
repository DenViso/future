import React from "react";
// import LazyLoad from 'react-lazyload';
import { Link } from "react-router-dom";

export const Engagement = ({ t }) => {
  return (
    <div className="ring">
      <Link className="back" to="/Ring">
        {t("back.toJewelry")}
      </Link>
      <h1>{t("section.section1")}</h1>
      <ul className="ringList">
        <li>
          <Link to="Inner/47">
            {t("section.section5")}
            {/* <LazyLoad> */}
              <img
                className="ringImg"
                loading="lazy"
                src="/img/sect/jew/1eng/1.jpg"
                alt=""
              />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link to="Inner/48">
            {t("section.section6")}
            {/* <LazyLoad> */}
              <img
                className="ringImg"
                loading="lazy"
                src="/img/sect/jew/1eng/2.jpg"
                alt=""
              />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link to="Inner/51">
            {t("section.section7")}
            {/* <LazyLoad> */}
              <img
                className="ringImg"
                loading="lazy"
                src="/img/sect/jew/1eng/3.jpg"
                alt=""
              />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link to="Inner/50">
            {t("section.section8")}
            {/* <LazyLoad> */}
              <img
                className="ringImg"
                loading="lazy"
                src="/img/sect/jew/1eng/4.jpg"
                alt=""
              />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          {/* знайти назву каталога */}
          <Link to="Inner/49">
            {t("section.section9")}
            {/* <LazyLoad> */}
              <img
                className="ringImg"
                loading="lazy"
                src="/img/sect/jew/1eng/5.jpg"
                alt=""
              />
            {/* </LazyLoad> */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

// export default Engagement
