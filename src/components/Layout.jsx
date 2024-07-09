import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MenuDrop } from "./DropWindow/MenuDrop";
import { SearchDrop } from "./DropWindow/SearchDrop";
import { Cart } from "./Cart/Cart";
import LazyLoad from "react-lazyload";

export const Layout = ({ t, cat1, changeLanguage, i18n }) => {
  const [activeMenu, setActiveMenu] = useState(null); // "menu", "search", or null
  const [showCart, setShowCart] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 700);

  const location = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setActiveMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseLeave = () => {
    mousePosition > { x: 0, y: 0 } && setActiveMenu(null);
  };

  const handlePhoneClick = () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };

  const handleClick = () => {
    setShowCart(true);
  };

  const handleSearch = () => {
    setActiveMenu(null); // Закриття пошукового меню після натискання кнопки пошуку
    // Логіка пошуку
  };

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const currentLanguage = i18n.language;
  console.log(currentLanguage);
  return (
    <>
      {/*HEADER*/}
      <header className="header">
        <div className="menu">
          <LazyLoad >
            <img 
              loading="lazy"
              className="iconSize"
              src="/img/headerIcon/menu.png"
              alt="Menu"
              onMouseEnter={() => handleMouseEnter("menu")}
            />
          </LazyLoad>
          {activeMenu === "menu" && (
            <MenuDrop hideDropMenu={() => setActiveMenu(null)} t={t} />
          )}
          <LazyLoad>
            <img
              loading="lazy"
              className="iconSize"
              src="/img/headerIcon/search.png"
              alt="Search"
              onMouseEnter={() => handleMouseEnter("search")}
              onMouseLeave={() => handleMouseLeave(null)}
            />
          </LazyLoad>
          {activeMenu === "search" && (
            <SearchDrop
              className="search-menu"
              handleSearch={handleSearch}
              t={t}
              cat1={cat1}
            />
          )}
        </div>
        <div className="logo1">
          <Link to="/">
            <LazyLoad>
              
              <img className="logoHeader" loading="lazy" src="/img/logo/logo150.png" alt="Logo" />
            </LazyLoad>
          </Link>
        </div>

        <div className="contact">
          {!isMobileView && (
            <div className="lng">
              <button
                className={
                  currentLanguage == "uk" ? "lngBtn  activeLng" : "lngBtn"
                }
                onClick={() => changeLanguage("uk")}
              >
                Укр
              </button>
              <button
                className={
                  currentLanguage == "en" ? "lngBtn  activeLng" : "lngBtn"
                }
                onClick={() => changeLanguage("en")}
              >
                Eng
              </button>
            </div>
          )}
          <div className="lng">
            <a href="tel:+380936918998" onClick={handlePhoneClick}>
              <LazyLoad>
                {" "}
                <img
                  loading="lazy"
                  className="iconSize"
                  src="/img/headerIcon/contact2.png"
                  alt="Menu"
                />
              </LazyLoad>
            </a>
            <div className="">
              <LazyLoad>
                <img
                  loading="lazy"
                  className="iconSize"
                  src="/img/h.svg"
                  alt="Cart"
                  onClick={handleClick}
                />
              </LazyLoad>
              {showCart && <Cart setShowCart={setShowCart} t={t} />}
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <Outlet />

      {/* FOOTER */}
      <footer>
        <div className="footerLeft">
          <Link to="/">
            <LazyLoad>
              <img className="footerLogo"  src="/img/logo/logo.png" alt="Logo" />
            </LazyLoad>
          </Link>
          <div className="footerText">
            <a href="tel:+380936918998" onClick={handlePhoneClick}>
              +38 (093) 691-89-98
            </a>
            <br />
            <a href="future.com.ua@gmail.com">future.com.ua@gmail.com</a>
          </div>
        </div>
        <div className="footerMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.629673157392!2d30.369922776553917!3d50.39210167158106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbf08b9b7cf7%3A0xc2d82165c5b686a3!2z0K7QstC10LvQuNGA0L3Ri9C5INCx0YDQtdC90LQgIkZ1dHVyZSI!5e0!3m2!1suk!2sua!4v1710944818529!5m2!1suk!2sua"></iframe>
        </div>
        <div className="footerAdrress">
          <address>
            <p>{t("adresses.strict")}</p>
            <p>{t("adresses.adress")}, </p>
            <p>{t("adresses.ofice")}</p>
            <p>{t("adresses.time")}</p>
            <p>{t("adresses.time2")}</p>
            <p>{t("adresses.time3")}</p>
          </address>
          {isMobileView && (
            <div
              className="lng"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <button
                className={
                  currentLanguage == "uk" ? "lngBtn  activeLng" : "lngBtn"
                }
                style={{ color: "white", border: "none" }}
                onClick={() => changeLanguage("uk")}
              >
                Укр
              </button>
              <button
                className={
                  currentLanguage == "en" ? " lngBtn  activeLng" : "lngBtn"
                }
                style={{ color: "white", border: "none" }}
                onClick={() => changeLanguage("en")}
              >
                Eng
              </button>
            </div>
          )}
        </div>
      </footer>
      <div
        className="copyright"
        style={{
          backgroundColor: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p className="copyright" >
          Copyright © 2021. All Rights Reserved.
          <Link to="/CreatedBy">
            {/* <LazyLoad> */}
              <img className="goto"
                // loading="lazy"
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "15px",
                  textAlign: "center",
                }}
                src="/img/createdBy/chick.png"
                alt=""
              />
            {/* </LazyLoad> */}
          </Link>
        </p>
      </div>
    </>
  );
};
