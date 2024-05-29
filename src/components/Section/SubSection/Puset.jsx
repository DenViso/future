import React from "react";
import { Link } from "react-router-dom";

export const Puset = ({ t }) => {
  return (
    <div className="ring">
      <Link to="/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section12")}</h2>
      <ul className="ringList">
        <li>
          {/* соло */}
          <Link to="Inner/35">
            {t("section.section5")}
            <img src="/img/women/puset/solo.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* соло+розсип */}
          <Link to="inner/33">
            {t("section.section6")}
            <img src="/img/women/puset/solop.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* соло фантаз.діам */}
          <Link to="inner/32">
            {" "}
            {t("section.section7")}
            <img src="/img/women/puset/solof.JPG" alt="" />
          </Link>
        </li>
        <li>
          {/* фантаз. з розсип */}
          <Link to="inner/34">
            {" "}
            {t("section.section8")}
            <img src="/img/women/puset/fantasyp.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* кольорові камні */}
          <Link to="inner/37">
            {" "}
            {t("section.section9")}
            <img src="/img/women/puset/color.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* без каменів */}
          <Link to="inner/36">
            {" "}
            {t("section.section22")}
            <img src="/img/women/puset/nostone.jpg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
