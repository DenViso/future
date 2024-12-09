import React from "react";
import { Link } from "react-router-dom";
export const Services = ({ t }) => {
  return (
    <div className="services">
      <Link className="back" to="/">
        {t("back.toMain")}
      </Link>
      <h1>{t("services.title")}</h1>
      <ul>
        <li>
          <p>{t("services.text1")}</p>
        </li>
        <li>
          <p>{t("services.text2")}</p>
          <br />
          <p>{t("services.text2.1")}</p>
          <br />
          <p>{t("services.text2.2")}</p>
          <br />
          <p>{t("services.text2.3")}</p>
          <br />
          <p>{t("services.text2.4")}</p>
          <br />
          <p>{t("services.text2.5")}</p>
          <br />
          <p>{t("services.text2.6")}</p>
          <br />
          <p>{t("services.text2.7")}</p>
          <br />
          <p>{t("services.text2.8")}</p>
        </li>
        <li>
          <h2 className="importAnim">{t("services.title1")}</h2>
          <p>{t("services.text3")}</p>
          <br />
          <h2>{t("services.title2")}</h2>

          <p>{t("services.text3.1")}</p>
        </li>
      </ul>
    </div>
  );
};
