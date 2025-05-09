import React from "react";
import "./dropStyle.css";
import { Link } from "react-router-dom";

export const MenuDrop = ({ hideDropMenu, t }) => {
  return (
    <div className="menuDrop" onMouseLeave={hideDropMenu}>
      <ul className="menuDropList">
        <li className="menuDropPart" onClick={hideDropMenu}>
          <Link to="/Ring">
            <p>{t("dropMenu.sec1")}</p>
            <img loading="lazy" src="/img/logo/section/ring.png" alt="" />
          </Link>
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
          <Link to="/Diamond">
            <p>{t("dropMenu.sec2")}</p>
            <img loading="lazy" src="/img/logo/section/diamond.png" alt="" />
          </Link>
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
          <Link to="/Services">
            <p>{t("dropMenu.sec3")}</p>
            <img loading="lazy" src="/img/logo/section/Services.png" alt="" />
          </Link>
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
          <Link to="/Care">
            <p>{t("dropMenu.sec4")}</p>
            <img loading="lazy" src="/img/logo/section/reviews.png" alt="" />
          </Link>
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
          <Link to="/Reviews">
            <p>{t("dropMenu.sec5")}</p>
            <img loading="lazy" src="/img/logo/section/care.png" alt="" />
          </Link>
        </li>
        <li className="menuDropPart" onClick={hideDropMenu}>
          <Link to="/About">
            <p>{t("dropMenu.sec6")}</p>
            <img loading="lazy" src="/img/logo/section/team.png" alt="" />
          </Link>
        </li>
        <li className="menuDropPart">
          <a href="https://www.instagram.com/future.jewelry/?igsh=MXUyNGZlZHc3cDUxMg%3D%3D">
            <p>{t("dropMenu.sec8")}</p>
            <img loading="lazy" src="/img/soc.svg" alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};
