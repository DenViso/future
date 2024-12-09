import React from "react";
import "../inner.css";
import { Loader } from "../SubSection/Loader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const WomenInner = ({ t, cat1 }) => {
  // Деструктуризуємо об'єкт match, щоб отримати paramValue
  const { paramValue } = useParams();

  return (
    <div className="subInner-conteiner">
      <Link className="subBack" to="/Ring">
        {t("back.toJewelry")}
      </Link>
      <div className="subInner">
        {cat1 !== null && cat1.length > 0 ? (
          cat1.map(
            (product) =>
              // Перевіряємо, чи категорія продукту співпадає з paramValue
              product.category == paramValue && (
                <div className="subInner-section" key={product.id}>
                  <div className="subInner-section-img">
                    {/* Відображення фото */}
                    {product.media_files.length > 0 &&
                      product.media_files[0].photo && (
                        <img 
                          loading="lazy"
                          src={product.media_files[0].photo}
                          alt=""
                        />
                      )}

                    {/* Відображення відео, якщо фото відсутнє */}
                    {(!product.media_files[0].photo ||
                      product.media_files.length === 0) &&
                      product.media_files[0].video && (
                        <video
                          src={product.media_files[0].video}
                          autoPlay
                          alt=""
                        ></video>
                      )}
                    <p className="text-scu">
                      <span>Арт:</span>
                      {product.sku}
                    </p>
                  </div>
                </div>
              )
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
