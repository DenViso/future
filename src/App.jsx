import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Routes, Route } from "react-router-dom";
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

const App = () => {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);
  const [cat1, setCat1] = useState([]);
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://api.future.in.ua/api/v1/products/"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const categoryMan = async () => {
      try {
        const cat1 = await axios.get(
          "https://api.future.in.ua/api/v1/products/"
        );

        setCat1(cat1.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    categoryMan();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      setShowLanguageModal(true);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setShowLanguageModal(false);
  };

  return (
    <>
      {showLanguageModal ? (
        <div className="language-modal">
          <img src="/img/logo/logo.png" alt="" />
          <h2>Виберіть мову</h2>
          <button onClick={() => changeLanguage("uk")}>Українська</button>
          <h2>Choose language</h2>
          <button onClick={() => changeLanguage("en")}>English</button>
        </div>
      ):(
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              t={t}
              // i18n={i18n}
              // changeLanguage={changeLanguage}
              cat1={cat1}
              products={products}
            />
          }
        >
          <Route index element={<MainePage t={t} />} />
          <Route path="Ring" element={<Ring t={t} />} />
          <Route path="Diamond" element={<Diamond t={t} />} />
          <Route path="Services" element={<Services t={t} />} />
          <Route path="Care" element={<Care t={t} />} />
          <Route path="Reviews" element={<Reviwes t={t} />} />
          <Route path="About" element={<About t={t} />} />

          <Route
            path="Engagement"
            element={<Engagement t={t} products={products} />}
          />
          <Route
            path="Engagement/Inner/:paramValue"
            element={<Inner t={t} cat1={cat1} />}
          />
          <Route path="Puset" element={<Puset t={t} products={products} />} />
          <Route
            path="Puset/Inner/:paramValue"
            element={<Inner t={t} cat1={cat1} />}
          />
          <Route
            path="WeddingRings"
            element={<WeddingRings t={t} products={products} cat1={cat1}/>}
          />
          <Route
            path="WeddingRings/Inner/:paramValue"
            element={<Inner t={t} cat1={cat1} />}
          />

          <Route path="Women" element={<Women t={t} cat1={cat1} />} />
          <Route
            path="Women/Inner/:paramValue"
            element={<Inner cat1={cat1} t={t} />}
          />
          <Route path="Men" element={<Men t={t} cat1={cat1} />} />
          <Route
            path="Men/Inner/:paramValue"
            element={<Inner cat1={cat1} t={t} />}
          />

          <Route path="CreatedBy" element={<CreatedBy t={t} />} />
        </Route>
      </Routes>)}
    </>
  );
};

export default App;
