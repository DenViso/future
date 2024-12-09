import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import useFetchDataWithRetry from "./hooks/useFetchDataWithRetry"; // Підключаємо хук
import { MainePage } from "./components/MainPage/MainePage";
import { Ring } from "./components/Section/Ring";
import { Diamond } from "./components/Section/Diamond";
import { Services } from "./components/Section/Services";
import { Care } from "./components/Section/Care";
import { Reviwes } from "./components/Section/Reviwes";
import { About } from "./components/Section/About";
import { Engagement } from "./components/Section/SubSection/Engagement";
import { Women } from "./components/Section/SubSection/Women";
import { Men } from "./components/Section/SubSection/Men";
import { Puset } from "./components/Section/SubSection/Puset";
import { CreatedBy } from "./components/MainPage/CreatedBy";
import { Layout } from "./components/Layout";
import { Inner } from "./components/Section/Inner/Inner";
import { Err } from "./components/Err";
import { ApiErr } from "./components/ApiErr";

const App = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { data: cat1, error } = useFetchDataWithRetry("https://api.future.in.ua/api/v1/products/"); // Використовуємо хук

  useEffect(() => {
    // Прокрутка до верху при зміні шляху
    if (location.pathname === "/"){
      window.scrollTo(0, 0);}
      else{
       !window.scrollTo(0, 0);
      }    
  }, [ 
    location.pathname
  ]);

// console.log(location.pathname);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    localStorage.setItem("languageSelected", "true");
  };

  return (
    <>
      {error ? (
        <ApiErr />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                t={t}
                cat1={cat1}
                changeLanguage={changeLanguage}
                i18n={i18n}
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
            <Route path="Engagement" element={<Engagement t={t} cat1={cat1} />} />
            <Route
              path="Engagement/Inner/:paramValue"
              element={<Inner t={t} cat1={cat1} />}
            />
            <Route path="Puset" element={<Puset t={t} cat1={cat1} />} />
            <Route
              path="Puset/Inner/:paramValue"
              element={<Inner t={t} cat1={cat1} />}
            />
            <Route
              path="Inner/:paramValue"
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
            <Route path="*" element={<Err t={t} />} /> {/* Додавання маршруту для 404 */}
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
