import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
export const WeddingRings = ({ t, cat1 }) => {
  // const { paramValue } = useParams();
  // console.log(paramValue);
  return (
    <div className="ring">
      <Link to="/Ring">{t("back.toJewelry")}</Link>
      <div className="">
        {cat1 !== null && cat1.length > 0 ? (
          cat1.map(
            (product) =>
              // Перевіряємо, чи категорія продукту співпадає з paramValue
              product.category == 21 && (
                <div className="inner-section" key={product.id}>
                  <div
                    className="inner-section-img"
                    style={{ display: "flex", width: "100%", height: "100%" }}
                  >
                    {/* Відображення фото */}
                    {product.media_files.length > 0 &&
                      product.media_files[0].photo && (
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={product.media_files[0].photo}
                          alt=""
                        />
                      )}

                    {/* Відображення відео, якщо фото відсутнє */}
                    {(!product.media_files[0].photo ||
                      product.media_files.length === 0) &&
                      product.media_files[0].video && (
                        <video
                          style={{ width: "100px", height: "100px" }}
                          src={product.media_files[0].video}
                          alt=""
                        ></video>
                      )}
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

// export default WeddingRings
