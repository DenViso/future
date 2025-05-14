

import React, { useState, useEffect } from "react";
import "../inner.css";
import { Loader } from "../SubSection/Loader";
import { useParams, Link, useNavigate } from "react-router-dom";

export const Inner = ({ t, cat1, usdRate }) => {
  const navigate = useNavigate();
  const { paramValue } = useParams();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, [paramValue]);

  useEffect(() => {
    // Відновлення позиції після завершення рендеру
    setTimeout(() => {
      const savedScrollPosition = sessionStorage.getItem("scrollPosition");
      if (savedScrollPosition) {
        window.scrollTo(50, parseInt(savedScrollPosition, 10));
      }
    }, 0); // Чекаємо, поки контент буде завантажено
  }, [paramValue,loading]); // Викликається при зміні параметрів (поверненні)

  const handleNavigation = (url) => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(url);
  };

  if (loading) {
    return <Loader />;
  }

  if (!cat1 || cat1.length === 0) {
    return <div>{t("noProductsFound")}</div>;
  }

  return (
    <div className="subInner-container">
      <Link
        className="back"
        to="/Ring"
        onClick={() => sessionStorage.setItem("scrollPosition", "0")}
      >
        {t("back.toJewelry")}
      </Link>

      <div className="subInner">
        {cat1.map((product) =>
          product.category == paramValue ? (
            <div
              className="subInner-section"
              key={product.id}
              onClick={() => handleNavigation(`/product/${product.id}`)}
            >
              <div className="subInner-section-img">
                {product.media_files && product.media_files.length > 0 ? (
                  <img
                    loading="lazy"
                    src={product.media_files[0].photo || "/img/noImg.png"}
                    alt={product.sku}
                  />
                ) : (
                  <img loading="lazy" src="/img/noImg.png" alt="No Image" />
                )}
                <div className="subInner-info-text">
                  <p className="text-sku">
                    <span>Арт:</span> {product.sku}
                  </p>
                  <p
                    className="text-price"
                    
                  >
                    {product.price &&
                      "Ціна: " + (product.price * usdRate).toFixed(2) + " грн"}
                  </p>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
