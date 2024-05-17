import React from "react";
import { Link } from "react-router-dom";
export const Women = ({t}) => {
  return (
    <div className="ring">
      <Link to="/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section3")}</h2>
      <ul className="ringList">
        <li>
          <Link to="WomenInner/16">
            {t("section.section10")}
            <img src="/img/women/wr.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* todo */}
          <Link to="WomenInner/"> 
            {t("section.section11")}
            <img src="/img/women/wt.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* todo */}
          <Link to="/Puset">
            {t("section.section12")}
            <img src="/img/women/p.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="WomenInner/7">
            {" "}
            {t("section.section13")}
            <img src="/img/women/e.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* todo */}
          <Link to="WomenInner/">
            {t("section.section14")}
            <img src="/img/women/c.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="WomenInner/8">
            {t("section.section15")}
            <img src="/img/women/susp.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* todo */}
          <Link to="womenInner/4">
            {t("section.section16")}
            <img src="/img/women/chain.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="WomenInner/2">
            {" "}
            {t("section.section17")}
            <img src="/img/women/bracel.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* todo */}
          <Link to="WomenInner/3">
            {t("section.section18")}
            <img src="/img/men/other.jpg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

// export default Women
