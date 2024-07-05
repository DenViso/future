import React from "react";
import { Link } from "react-router-dom";

 export const Men = ({ t }) => {

  return (
    <div className="ring">
      <Link className="back" to="/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section4")}</h2>
      <ul className="ringList">
        <li>
          {/* чолов перст */}
          <Link to="Inner/41">
            {t("section.section19")}
            <img loading="lazy" src="/img/sect/jew/4man/1.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* ланцюг */}
          <Link to="Inner/43">
            {t("section.section16")}
            <img loading="lazy" src="/img/sect/jew/4man/2.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* браслет чоловічий */}
          <Link to="Inner/44">
            {" "}
            {t("section.section20")}
            <img loading="lazy" src="/img/sect/jew/4man/3.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* хрест */}
          <Link to="Inner/45">
            {" "}
            {t("section.section21")}
            <img loading="lazy" src="/img/sect/jew/4man/4.JPG" alt="" />
          </Link>
        </li>
        <li>
          {/* інше */}
          <Link to="Inner/42">
            {" "}
            {t("section.section18")}
            <img loading="lazy" src="/img/sect/jew/4man/5.jpg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

// export default Men
