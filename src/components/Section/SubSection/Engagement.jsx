import React from 'react'
import { Link } from "react-router-dom";

export const Engagement = ({t}) => {
  return (

    <div className="ring">
     <Link to="/future/Ring">{t("back.toJewelry")}</Link>
      <h1>{t("section.section1")}</h1>
      <ul className="ringList">
        <li>
          <Link to="">
          {t("section.section5")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
          {t("section.section6")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
          {t("section.section7")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
          {t("section.section8")}
            <img src="" alt="" />
          </Link>
        </li>
        <li>
          <Link to="">
          {t("section.section9")}
            <img src="" alt="" />
          </Link>
        </li>
      </ul>
    </div>

  )
}

// export default Engagement