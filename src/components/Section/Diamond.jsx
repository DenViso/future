import React from "react";
import { Link } from "react-router-dom";
// import LazyLoad from "react-lazyload";
export const Diamond = ({ t }) => {
  return (
    <div className="diamond">
      <Link className="back " to="/">
        {t("back.toMain")}
      </Link>
      <h1>{t("stones.title")}</h1>
      <ul className="diamondList">
        <li>
          <Link to="/">
            <h2>{t("care.stone4")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/1.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title1")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/2.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("care.stone3")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/3.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title2")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/4.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title3")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/5.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title4")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/6.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title5")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/1.jpeg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title6")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/7.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("care.stone5")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/8.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title7")}</h2>
            {/* <LazyLoad> */}
            <img className="diamondImg" loading="lazy" src="./img/stoun/9.jpg" alt="" />
            {/* </LazyLoad> */}
          </Link>
        </li>
      </ul>
    </div>
  );
};
