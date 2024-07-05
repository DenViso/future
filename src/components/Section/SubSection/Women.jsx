import React from "react";
import { Link } from "react-router-dom";
export const Women = ({t}) => {
  return (
    <div className="ring">
      <Link className="back" to="/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section3")}</h2>
      <ul className="ringList">
        <li>
          {/* каблучки */}
          <Link to="Inner/39">
            {t("section.section10")}
            <img loading="lazy" src="/img/sect/jew/3wom/1.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* доріжки */}
          <Link to="Inner/30"> 
            {t("section.section11")}
            <img loading="lazy" src="/img/sect/jew/3wom/2.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* пусет 38 */}
          <Link to="/Puset">
            {t("section.section12")}
            <img loading="lazy" src="/img/sect/jew/3wom/3.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* сережки */}
          <Link to="Inner/28">
            {" "}
            {t("section.section13")}
            <img loading="lazy" src="/img/sect/jew/3wom/4.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* хрестик жін */}
          <Link to="Inner/31">
            {t("section.section14")}
            <img loading="lazy" src="/img/sect/jew/3wom/5.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* підв.жін. */}
          <Link to="Inner/29">
            {t("section.section15")}
            <img loading="lazy" src="/img/sect/jew/3wom/6.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* ланц.жін. */}
          <Link to="Inner/27">
            {t("section.section16")}
            <img loading="lazy" src="/img/sect/jew/3wom/7.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* брасл.жін. */}
          <Link to="Inner/26">
            {" "}
            {t("section.section17")}
            <img loading="lazy" src="/img/sect/jew/3wom/8.jpg" alt="" />
          </Link>
        </li>
        {/* <li> */}
          {/* інші */}
          {/* <Link to="Inner/3"> */}
            {/* {t("section.section18")} */}
            {/* <img loading="lazy" src="/img/men/other.jpg" alt="" /> */}
          {/* </Link> */}
        {/* </li> */}
      </ul>
    </div>
  );
};

// export default Women
