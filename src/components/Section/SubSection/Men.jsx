import React from "react";
import { Link } from "react-router-dom";

export const Men = ({ t }) => {
  return (
    <div className="ring">
      <Link to="/future/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section4")}</h2>
      <ul className="ringList">
        <li>
          <Link to="">
            {t("section.section19")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {t("section.section16")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            {t("section.section20")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            {t("section.section21")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            {t("section.section18")}
            <img src="" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

// export default Men
