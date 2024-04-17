import React, { useEffect, useState, useTrans } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

import { MainePage } from "./components/MainPage/MainePage";
import { MenuDrop } from "./components/DropWindow/MenuDrop";
import { SearchDrop } from "./components/DropWindow/SearchDrop";
import { Cart } from "./components/Cart/Cart";
import { Ring } from "./components/Section/Ring";
import { Diamond } from "./components/Section/Diamond";
import { Services } from "./components/Section/Services";
import { Care } from "./components/Section/Care";
import { Reviwes } from "./components/Section/Reviwes";
import { About } from "./components/Section/About";
import { Engagement } from "./components/Section/SubSection/Engagement";
import { WeddingRings } from "./components/Section/SubSection/WeddingRings";
import { Women } from "./components/Section/SubSection/Women";
import { Men } from "./components/Section/SubSection/Men";
import { Puset } from "./components/Section/SubSection/Puset";

const App = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleClick = () => {
    setShowCart(true);
  };
  const handleMenuHover = () => {
    setShowMenu(true);
    setShowSearch(false);
  };

  const handleSearchHover = () => {
    setShowSearch(true);
    setShowMenu(false);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
    setShowSearch(false);
  };

  return (
    <div className="wrapper">
      {/* header */}

      <header className="header">
        <div className="menu">
          
          <img
            className="iconSize"
            src="./img/headerIcon/menu.png"
            alt="Menu"
            onMouseEnter={handleMenuHover}
          />
          {showMenu && <MenuDrop hideDropMenu={handleMouseLeave} t={t} />}
          <img
            className="iconSize"
            src="./img/headerIcon/search.png"
            alt="Search"
            onMouseEnter={handleSearchHover}
          />
          {showSearch && (
            <SearchDrop hidenSearchMenu={handleMouseLeave} t={t} />
          )}
        </div>
        <div className="logo1">
          <Link to="/future/">
            <img src="./img/logo/logo1.png" alt="Logo" />
          </Link>
        </div>
        <div className="contact">
          <a href="tel:+380936918998">
            <img
              className="iconSize"
              src="./img/headerIcon/contact2.png"
              alt="Menu"
            />
          </a>
          <div className="">
            <img
              className="iconSize"
              src="./img/headerIcon/cart.png"
              alt="Cart"
              onClick={handleClick}
            />
            {showCart && <Cart setShowCart={setShowCart} t={t} />}
          </div>
           <div className="langButton">
            <button className={i18n.language === "en"? "activeLangButton langButtonMain":"langButtonMain"} onClick={() => changeLanguage("en")}>En</button>
            <button className={i18n.language === "uk"? "activeLangButton langButtonMain":"langButtonMain"} onClick={() => changeLanguage("uk")}>Укр</button>
          </div>
        </div>
       
      </header>

      {/* main */}
      <Routes>
        <Route path="*" element={<MainePage t={t} />} />
        <Route path="/future/Ring" element={<Ring t={t} />} />
        <Route path="/future/Diamond" element={<Diamond t={t} />} />
        <Route path="/future/Services" element={<Services t={t} />} />
        <Route path="/future/Care" element={<Care t={t} />} />
        <Route path="/future/Reviews" element={<Reviwes t={t} />} />
        <Route path="/future/About" element={<About t={t} />} />
        <Route path="/future/Engagement" element={<Engagement t={t} />} />
        <Route path="/future/WeddingRings" element={<WeddingRings t={t} />} />
        <Route path="/future/Women" element={<Women t={t} />} />
        <Route path="/future/Men" element={<Men t={t} />} />
        <Route path="/future/Puset" element={<Puset t={t} />} />
      </Routes>

      {/* footer */}

      <footer>
        <div className="footerLeft">
          <Link to="/future/">
            <img src="./img/logo/logo.png" alt="Logo" />
          </Link>
          <div className="footerText">
            <a href="tel:+380936918998">+38 (093) 691-89-98</a> <br />
            <a href="mailto:3sTnE@example.com">yourEmail@example.com</a>
          </div>
        </div>
        <div className="footerMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.629673157392!2d30.369922776553917!3d50.39210167158106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbf08b9b7cf7%3A0xc2d82165c5b686a3!2z0K7QstC10LvQuNGA0L3Ri9C5INCx0YDQtdC90LQgIkZ1dHVyZSI!5e0!3m2!1suk!2sua!4v1710944818529!5m2!1suk!2sua"></iframe>
        </div>
        <div className="footerAdrress">
          <address>
            <p>{t("adresses.strict")}</p>
            <p>{t("adresses.adress")}, </p>
            <p> {t("adresses.ofice")}</p>
            <p>{t("adresses.time")},</p>
            <p>{t("adresses.time2")},</p>
            <p>{t("adresses.time3")}</p>
          </address>
        </div>
      </footer>
      <div
        className="copyright"
        style={{ backgroundColor: "white", width: "100%", textAlign: "center" }}
      >
        <p style={{ color: "black" }}>Copyright © 2021. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default App;
