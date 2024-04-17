import React from "react";
import { Link } from "react-router-dom";
export const Services = ({ t }) => {
  return (
    <div className="services">
      <Link to="/future/">{t("back.toMain")}</Link>
      <h1>{t("services.title")}</h1>
      <ul>
        <li>{t("services.text1")}</li>
        <li>
          {t("services.text2")}
          <br />
          {t("services.text2.1")}
          <br />
          {t("services.text2.2")}
          <br />
          {t("services.text2.3")}
          <br />
          {t("services.text2.4")}
          <br />
          {t("services.text2.5")}
          <br />
          {t("services.text2.6")}
          <br />
          {t("services.text2.7")}
          <br />
          {t("services.text2.8")}
        </li>
        <li>
          <h2 className="importAnim">{t("services.title1")}</h2>
          {t("services.text3")}
          <br />
          <h2>{t("services.title2")}</h2>

          {t("services.text3.1")}
        </li>
      </ul>
    </div>
  );
};
