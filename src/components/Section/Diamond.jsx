import React from "react";
import { Link } from "react-router-dom";
export const Diamond = ({t}) => {
  return (
    <div className="diamond">
      <Link to="/">{t("back.toMain")}</Link>
      <h1>{t("stones.title")}</h1>
      <ul className="diamondList">
        <li>
          <Link to="/future/">
          <h2>{t("care.stone4")}</h2>
            <img src="./img/stoun/1.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link >
            <h2>{t("stones.title1")}</h2>
            <img src="./img/stoun/2.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("care.stone3")}</h2>
            <img src="./img/stoun/3.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title2")}</h2>
            <img src="./img/stoun/4.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title3")}</h2>
            <img src="./img/stoun/5.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title4")}</h2>
            <img src="./img/stoun/6.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title5")}</h2>
            <img src="./img/stoun/1.jpeg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title6")}</h2>
            <img src="./img/stoun/7.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("care.stone5")}</h2>
            <img src="./img/stoun/8.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link>
            <h2>{t("stones.title7")}</h2>
            <img src="./img/stoun/9.jpg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
