import React from "react";
import { Link, Router } from "react-router-dom";

export const Section = ({ t }) => {
  return (
    <>
      <div className="section">
        <ul className="sectionList">
          <li className="sectionPart">
            <Link to="/Ring">
              <h2>{t("dropMenu.sec1")}</h2>
              <img src="/img/logo/section/ring.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/Diamond">
              <h2>{t("dropMenu.sec2")}</h2>
              <img src="/img/logo/section/diamond.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/Services">
              <h2>{t("dropMenu.sec3")}</h2>
              <img src="/img/logo/section/Services.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/Care">
              <h2>{t("dropMenu.sec4")}</h2>
              <img src="/img/logo/section/care.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/Reviews">
              <h2>{t("dropMenu.sec5")}</h2>
              <img src="/img/logo/section/reviews.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <Link to="/About">
              <h2>{t("dropMenu.sec6")}</h2>
              <img src="/img/logo/section/team.png" alt="" />
            </Link>
          </li>
          <li className="sectionPart">
            <a href="https://www.instagram.com/future.jewelry/?igsh=MXUyNGZlZHc3cDUxMg%3D%3D">
              <h2>{t("dropMenu.sec8")}</h2>
              <img src="/img/soc.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
