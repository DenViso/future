import React, { useState, useEffect } from "react";
import "../inner.css";
import { Loader } from "../SubSection/Loader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Inner = ({ t, cat1 }) => {
  const { paramValue } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProduct]);
  
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="subInner-conteiner">
      <Link to="/Ring">{t("back.toJewelry")}</Link>
      {!loading ? (
        !selectedProduct && (
          <div className="subInner">
            {cat1 !== null &&
              cat1.length > 0 &&
              cat1.map((product) =>
                product.category == paramValue ? (
                  <div
                    className="subInner-section"
                    key={product.id}
                    onClick={() => openModal(product)}
                  >
                    <div className="subInner-section-img">
                      {product.media_files.length > 0 &&
                        product.media_files[0].photo && (
                          <img
                            src={product.media_files[0].photo}
                            alt=""
                          />
                        )}
                      <p className="text-scu">
                        <span>Арт:</span>
                        {product.sku}
                      </p>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        )
      ) : (
        <Loader />
      )}

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-info">
              <h2>Арт. продукту:<br /> {selectedProduct.sku}</h2> 
              {selectedProduct.gold_assay && <p>Проба :<br /> {selectedProduct.gold_assay}</p>} 
              {selectedProduct.gold_color && <p>Колір :<br /> {selectedProduct.gold_color}</p>} 
              {selectedProduct.size && <p>Розмір :<br /> {selectedProduct.size}</p>} 
              {selectedProduct.stone_characteristics && <p>Характеристики каміння :<br /> {selectedProduct.stone_characteristics}</p>} 
              {selectedProduct.weight && <p>Вага виробу :<br /> {selectedProduct.weight}</p>} 
            </div>
            <div className="modal-img">
              {selectedProduct.media_files &&
                selectedProduct.media_files.length > 0 &&
                selectedProduct.media_files.map((item) => (
                  <img key={item.id} src={item.photo} alt="" />
                ))}
            </div>
            <div className="modal-video">
              {selectedProduct.media_files &&
                selectedProduct.media_files.length > 0 &&
                selectedProduct.media_files.map((item) => (
                  item.video && (
                    <video
                      key={item.id}
                      src={item.video}
                      alt=""
                      autoPlay
                      controls
                      onFocus={() => setSelectedProduct(item)}
                      onBlur={() => setSelectedProduct(null)}
                    />
                  )
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
