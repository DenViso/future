import React from "react";
import { Link } from "react-router-dom";
export const Women = ({t}) => {
  return (
    <div className="ring">
      <Link to="/Ring">{t("back.toJewelry")}</Link>
      <h2>{t("section.section3")}</h2>
      <ul className="ringList">
        <li>
          {/* каблучки */}
          <Link to="Inner/39">
            {t("section.section10")}
            <img src="/img/women/wr.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* доріжки */}
          <Link to="Inner/30"> 
            {t("section.section11")}
            <img src="/img/women/wt.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* пусет 38 */}
          <Link to="/Puset">
            {t("section.section12")}
            <img src="/img/women/p.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* сережки */}
          <Link to="Inner/28">
            {" "}
            {t("section.section13")}
            <img src="/img/women/e.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* хрестик жін */}
          <Link to="Inner/31">
            {t("section.section14")}
            <img src="/img/women/c.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* підв.жін. */}
          <Link to="Inner/29">
            {t("section.section15")}
            <img src="/img/women/susp.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* ланц.жін. */}
          <Link to="Inner/27">
            {t("section.section16")}
            <img src="/img/women/chain.jpg" alt="" />
          </Link>
        </li>
        <li>
          {/* брасл.жін. */}
          <Link to="Inner/26">
            {" "}
            {t("section.section17")}
            <img src="/img/women/bracel.jpg" alt="" />
          </Link>
        </li>
        {/* <li> */}
          {/* інші */}
          {/* <Link to="Inner/3"> */}
            {/* {t("section.section18")} */}
            {/* <img src="/img/men/other.jpg" alt="" /> */}
          {/* </Link> */}
        {/* </li> */}
      </ul>
    </div>
  );
};

// export default Women
