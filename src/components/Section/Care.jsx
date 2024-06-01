import React from "react";
// import "sectionStyling.css";
import { Link } from "react-router-dom";
export const Care = ({ t }) => {
  return (
    <div className="care">
      <Link className="back" to="/">{t("back.toMain")}</Link>
      <h1> {t("care.title")}</h1>
      <p>
        {t("care.text")}
      </p>

      <h2> {t("care.title2")}</h2>
      <ul>
        <h2 className="colorRockTitle">{t("care.title2.1")}</h2>
        <li>
          <span className="colorRockNum"> 1)</span>{" "}
          <span className="colorRock">{t("care.stone")},</span>,{" "}
          <span className="colorRock">{t("care.stone1")},</span> 
          <span className="colorRock">{t("care.stone2")}</span><p className="colorRock-text">{t("care.text1")}</p>
        </li>
        <li>
          <span className="colorRockNum">2)</span>
          <span className="colorRock">{t("care.stone3")}</span><p className="colorRock-text">{t("care.text3")}</p>
        </li>

        <li>
          <span className="colorRockNum">3)</span>{" "}
          <span className="colorRock">{t("care.stone4")}</span><p className="colorRock-text">{t("care.text4")}</p>
        </li>
        <li>
          <span className="colorRockNum">4)</span>{" "}
          <span className="colorRock">{t("care.stone5")}</span><p className="colorRock-text">{t("care.text5")}</p>
        </li>
      </ul>
    </div>
  );
};
