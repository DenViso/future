import React from "react";
import { Link } from "react-router-dom";

 export const Men = ({ t }) => {

  return (
    <div className="ring">
      <Link to="/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section4")}</h2>
      <ul className="ringList">
        <li>
          <Link to="ManOtherInner/1">
            {t("section.section19")}
            <img src="/img/men/ring.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="ManOtherInner/4">
            {t("section.section16")}
            <img src="/img/men/chain.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="ManOtherInner/5">
            {" "}
            {t("section.section20")}
            <img src="/img/men/bracel.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="ManOtherInner/5">
            {" "}
            {t("section.section21")}
            <img src="/img/men/cross.jpg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="ManOtherInner/3">
            {" "}
            {t("section.section18")}
            <img src="/img/men/other.jpg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

// export default Men
