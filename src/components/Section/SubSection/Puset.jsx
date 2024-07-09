import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

export const Puset = ({ t }) => {
  return (
    <div className="ring">
      <Link className="back" to="/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section12")}</h2>
      <ul className="ringList">
        <li>
          {/* соло */}
          <Link to="Inner/35">
            {t("section.section5")}
            <LazyLoad><img className="ringImg" loading="lazy" src="/img/sect/jew/pus/1.jpg" alt="" /></LazyLoad>
          </Link>
        </li>
        <li>
          {/* соло+розсип */}
          <Link to="inner/33">
            {t("section.section6")}
            <LazyLoad><img className="ringImg" loading="lazy" src="/img/sect/jew/pus/2.jpg" alt="" /></LazyLoad>
          </Link>
        </li>
        <li>
          {/* соло фантаз.діам */}
          <Link to="inner/32">
            {" "}
            {t("section.section7")}
            <LazyLoad><img className="ringImg" loading="lazy" src="/img/sect/jew/pus/3.jpg" alt="" /></LazyLoad>
          </Link>
        </li>
        <li>
          {/* фантаз. з розсип */}
          <Link to="inner/34">
            {" "}
            {t("section.section8")}
            <LazyLoad><img className="ringImg" loading="lazy" src="/img/sect/jew/pus/4.jpg" alt="" /></LazyLoad>
          </Link>
        </li>
        <li>
          {/* кольорові камні */}
          <Link to="inner/37">
            {" "}
            {t("section.section9")}
            <LazyLoad><img className="ringImg" loading="lazy" src="/img/sect/jew/pus/5.jpg" alt="" /></LazyLoad>
          </Link>
        </li>
        <li>
          {/* без каменів */}
          <Link to="inner/36">
            {" "}
            {t("section.section22")}
            <LazyLoad><img className="ringImg" loading="lazy" src="/img/sect/jew/pus/6.jpg" alt="" /></LazyLoad>
          </Link>
        </li>
      </ul>
    </div>
  );
};
