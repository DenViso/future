import React from "react";
import { Link } from "react-router-dom";

export const Puset = ({ t, Inner }) => {
  return (
    <div className="ring">
      <Link to="/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section12")}</h2>
      <ul className="ringList">
        <li>
          <Link to="Inner">
            {t("section.section5")}
            <img src="/img/women/puset/solo.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {t("section.section6")}
            <img src="/img/women/puset/solop.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            {t("section.section7")}
            <img src="/img/women/puset/solof.JPG" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            {t("section.section8")}
            <img src="/img/women/puset/fantasyp.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            {t("section.section9")}
            <img src="/img/women/puset/color.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
            {" "}
            {t("section.section22")}
            <img src="/img/women/puset/nostone.jpg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
