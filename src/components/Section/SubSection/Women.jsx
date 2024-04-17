import React from "react";
import { Link } from "react-router-dom";
export const Women = ({t}) => {
  return (
    <div className="ring">
      <Link to="/future/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section3")}</h2>
      <ul className="ringList">
        <li>
          <Link to="">
            {t("section.section10")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {t("section.section11")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/future/Puset">
            {t("section.section12")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            {t("section.section13")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {t("section.section14")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {t("section.section15")}
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
            {t("section.section17")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {t("section.section18")}
            <img src="" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

// export default Women
