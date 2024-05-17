import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import { MainePage } from "./components/MainPage/MainePage";

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
import { CreatedBy } from "./components/MainPage/CreatedBy";
import { Layout } from "./components/Layout";
import { Inner } from "./components/Section/Inner/Inner";
import { WomenInner} from "./components/Section/Inner/WomenInner";
import { ManOtherInner } from "./components/Section/Inner/ManOtherInner";
// import { EngagemrntInner } from "./components/Section/Inner/EngagemrntInner";

const App = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [cat1, setCat1] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://api.future.in.ua/api/v1/products/');
        setProducts(response.data);
      } catch (error) {
        console.error("Помилка отримання даних про продукти:", error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const categoryMan = async () => {
      try {
        const cat1 = await axios.get('https://api.future.in.ua/api/v1/products/');
        
        setCat1(cat1.data);
      } catch (error) {
        console.error("Помилка отримання даних про продукти:", error);
      }
    };

    categoryMan();
  }, []);
 
// const productsMan = (cat1.map((product) => product));

  window.addEventListener("beforeunload", function (e) {
    // Скасувати подію перезавантаження
    e.preventDefault();
    // Встановити повідомлення для користувача
    e.returnValue = "";
  });
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Перевірка, чи відбувається перезавантаження сторінки
      if (e.currentTarget.performance.navigation.type === 1) {
        // Перенаправлення на головну сторінку
        window.location.href = "/";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout t={t} i18n={i18n} changeLanguage={changeLanguage} />}
      >
        <Route index element={<MainePage t={t} />} />
        <Route path="Ring" element={<Ring t={t} />} />
        <Route path="Diamond" element={<Diamond t={t} />} />
        <Route path="Services" element={<Services t={t} />} />
        <Route path="Care" element={<Care t={t} />} />
        <Route path="Reviews" element={<Reviwes t={t} />} />
        <Route path="About" element={<About t={t} />} />

        <Route path="Engagement" element={<Engagement t={t} products={products}/>} />
        <Route path="Engagement/Inner/:paramValue" element={<Inner t={t} cat1={cat1} />} />
         <Route path="Puset" element={<Puset t={t} products={products} />} />
        <Route path="Puset/Inner/:paramValue" element={<Inner t={t} cat1={cat1} />} />
        <Route path="WeddingRings" element={<WeddingRings t={t} cat1={cat1} />} />

        <Route path="Women" element={<Women t={t}  cat1={cat1}/>} />
        <Route path="Women/WomenInner/:paramValue" element={<WomenInner cat1={cat1} />} />
        <Route path="Men" element={<Men t={t}  cat1={cat1}/>} />
        <Route path="Men/ManOtherInner/:paramValue" element={<ManOtherInner cat1={cat1} />} />
       
       
        <Route path="CreatedBy" element={<CreatedBy t={t} />} />

        
      
        
      </Route>
    </Routes>
  );
};

export default App;
