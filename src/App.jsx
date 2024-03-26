import React, { useState } from "react";

import "./App.css";
import { SimpleSlider } from "./components/SimpleSlider/SimpleSlider";
import { Section } from "./components/Section/Section";
import { MenuDrop } from "./components/DropWindow/MenuDrop";
import { SearchDrop } from "./components/DropWindow/SearchDrop";
import { Cart } from "./components/Cart/Cart";
// import {Cart } from "./components/Cart/Cart";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  

  const handleClick = () => {
    setShowCart(true);
  };
  const handleMenuHover = () => {
    setShowMenu(true);
    setShowSearch(false); // При наведенні на меню приховати пошук
  };

  const handleSearchHover = () => {
    setShowSearch(true);
    setShowMenu(false); // При наведенні на пошук приховати меню
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
    setShowSearch(false);
  };

  // const showDropMenu = () => {
  //   const menuDrop = document.querySelector(".menuDrop");
  //   menuDrop.classList.add("drop-active");
  // }
  // const hideDropMenu = () => {
  //   const menuDrop = document.querySelector(".menuDrop");
  //   menuDrop.classList.remove("drop-active");
  // }
  // const showDropSearch = () => {
  //   const dropSearch = document.querySelector(".searchDrop");
  //   dropSearch.classList.add("search-active");
  // }
  // const hidenSearchDrop = () => {
  //   const searchDrop = document.querySelector(".searchDrop");
  //   searchDrop.classList.remove("search-active");
  // }

  return (
    <div className="wrapper">
      {/* header */}
      <header className="header">
        {/* <div className="menu">
          <img className='iconSize' src="../../public/img/headerIcon/menu.png" alt="Menu" onMouseEnter={showDropMenu || hidenSearchDrop} />
          <MenuDrop hideDropMenu={hideDropMenu}/>
          <img className='iconSize' src="../../public/img/headerIcon/search.png" alt="Search" onMouseEnter={MenuDrop || !SearchDrop ? hideDropMenu : showDropSearch}/>
          <SearchDrop hidenSearchDrop={hidenSearchDrop}/>
        </div> */}
        <div className="menu">
          <img
            className="iconSize"
            src="../../public/img/headerIcon/menu.png"
            alt="Menu"
            onMouseEnter={handleMenuHover}
          />
          {showMenu && <MenuDrop hideDropMenu={handleMouseLeave} />}
          <img
            className="iconSize"
            src="../../public/img/headerIcon/search.png"
            alt="Search"
            onMouseEnter={handleSearchHover}
          />
          {showSearch && <SearchDrop hidenSearchMenu={handleMouseLeave} />}
        </div>

        <div className="contact">
          <a href="tel:380999999999">
            <img
              className="iconSize"
              src="../../public/img/headerIcon/contact2.png"
              alt="Menu"
            />
          </a>

          {/* <a href={<Cart/>}> */}
          <div className="">
            <img
              className="iconSize"
              src="../../public/img/headerIcon/cart.png"
              alt="Cart"
              onClick={handleClick}
            />
            {showCart && <Cart setShowCart={setShowCart} />}
          </div>
          {/* </a> */}
        </div>
      </header>
      {/* main */}
      <main>
        <section>
          <div className="mainVideo">
            <video
              width={"100%"}
              height={"800px"}
              src={"../../public/video/intro.mp4"}
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                objectFit: "cover",
                maxHeight: "600px",
                overflow: "hidden",
              }}
            />
            <div className="mainText">
              <div className="logo">
                <img src="../../public/img/logo/logo.png" alt="Logo" />
              </div>
              <h1>Look to the future, become more beautiful... </h1>
              <span></span>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "white" }}>
          <SimpleSlider />
        </section>
        <section>
          <Section />
        </section>
      </main>
      {/* footer */}
      <footer>
        <div className="footerLeft">
          <img src="../../public/img/logo/logo.png" alt="Logo" />
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
            <p>Київська обл.</p>
            <p>м. Вишневе, вул. Європейська15, </p>
            <p> Буд. Побуту, 3 поверх, на ліво дзвінок</p>
            <p>Пн-Пт 10.00-19.00</p>
            <p>Сб. 11.00-18.00</p>
            <p>Нд. Вихідний</p>
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
}

export default App;
