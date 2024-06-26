import React, { useState, useEffect } from "react";
import "../inner.css";
import { Loader } from "../SubSection/Loader";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Inner = ({ t, cat1 }) => {
  const { paramValue } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likedProducts, setLikedProducts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      scrollPosition && window.scrollTo(0, scrollPosition);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedProducts");
    if (storedLikes) {
      setLikedProducts(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const isProductLiked = likedProducts.some(
        (product) => product.id === selectedProduct.id
      );
      setIsLiked(isProductLiked);
    }
  }, [selectedProduct, likedProducts]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setScrollPosition(window.scrollY);
    document.body.style.top = `-${window.scrollY}px`;
    document.body.classList.add("modal-open");
  };

  const closeModal = (e) => {
    setSelectedProduct(null);
    document.body.classList.remove("modal-open");
    // const scrollY = document.body.style.top;
    // document.cart.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    e.preventDefault();
  };

  const handleLike = (product) => {
    let updatedLikes;
    if (isLiked) {
      updatedLikes = likedProducts.filter((item) => item.id !== product.id);
    } else {
      updatedLikes = [...likedProducts, product];
    }
    setLikedProducts(updatedLikes);
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
    setIsLiked(!isLiked);

    refreshProducts();
  };

  const refreshProducts = () => {
    const storedLikes = localStorage.getItem("likedProducts");
    if (storedLikes) {
      setLikedProducts(JSON.parse(storedLikes));
    } else {
      setLikedProducts([]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="subInner-container">
      {!scroll ? (
        <Link className={selectedProduct ? "" : "back"} to="/Ring">
          {t("back.toJewelry")}
        </Link>
      ) : (
        <Link className="scroll" to="/Ring">
          &#8593;
        </Link>
      )}
      {!loading ? (
        !selectedProduct && (
          <div className={!openModal ? "no-bacground" : "subInner"}>
            {cat1 &&
              cat1.length > 0 &&
              cat1.map((product) =>
                product.category == paramValue ? (
                  <div
                    className="subInner-section"
                    key={product.id}
                    onClick={() => openModal(product)}
                  >
                    <div className="subInner-section-img">
                      {product.media_files && product.media_files.length > 0 && product.media_files[0].photo ? (
                        <img src={product.media_files[0].photo} alt="" />
                      ) : (
                        <img src="/img/noImg.png" alt="" />
                      )}
                      <div className="subInner-info-text">
                      <p className="text-scu">
                        <span>Арт:</span>
                        {product.sku}
                      </p>
                     
                        <p className="text-scu"> {(product.price && <span>Ціна: $ {product.price}</span>
                        )}</p>
                     
                      </div>
                    
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
              <h2>
                Арт. продукту:<br /> {selectedProduct.sku}
              </h2>
              {selectedProduct.gold_assay && (
                <p>
                  Проба :<br /> {selectedProduct.gold_assay}
                </p>
              )}
              {selectedProduct.gold_color && (
                <p>
                  Колір :<br /> {selectedProduct.gold_color}
                </p>
              )}
              {selectedProduct.size && (
                <p>
                  Розмір :<br /> {selectedProduct.size}
                </p>
              )}
              {selectedProduct.stone_characteristics && (
                <p>
                  Характеристики каміння :<br /> {selectedProduct.stone_characteristics}
                </p>
              )}
              {selectedProduct.weight && (
                <p>
                  Вага виробу :<br /> {selectedProduct.weight}
                </p>
              )}
              {selectedProduct.price && (
                <p>
                  Ціна :<br /> {selectedProduct.price}
                </p>
              )}
            </div>
            <div className="modal-img">
              {selectedProduct.media_files && selectedProduct.media_files.length > 0 &&
                selectedProduct.media_files.map((item) => (
                  item.photo && <img key={item.id} src={item.photo} alt="" />
                ))}
            </div>
            <div className="modal-video">
              {selectedProduct.media_files &&
                selectedProduct.media_files.length > 0 &&
                selectedProduct.media_files.map(
                  (item) =>
                    item.video && (
                      <video
                        key={item.id}
                        src={item.video}
                        autoPlay
                        controls
                      />
                    )
                )}
            </div>
            <div
              className="heart"
              onClick={() => handleLike(selectedProduct)}
              
            >{!isLiked ? <img style={{width:"40px",height:"40px"}} src="/img/wh.svg" alt="heart" />: <img style={{width:"40px",height:"40px"}} src="/img/rh.svg" alt="heart" />}</div>
          </div>
        </div>
      )}
    </div>
  );
};
