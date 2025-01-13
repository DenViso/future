import React, { useState, useEffect } from "react";
import "../inner.css";
import { Loader } from "../SubSection/Loader";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";

export const Inner = ({ t, cat1 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { paramValue } = useParams();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likedProducts, setLikedProducts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // const location = useLocation(); // Отримуємо інформацію про URL
  // const [selectedProduct, setSelectedProduct] = useState(null);

 
  

  useEffect(() => {
    // Парсимо параметр "id" із URL
    const searchParams = new URLSearchParams(location.search);
    const idFromUrl = searchParams.get("id");

    if (idFromUrl && Array.isArray(cat1) && cat1.length > 0) {
      // Шукаємо продукт у cat1 за id
      const matchingProduct = cat1.find(
        (product) => product.id === parseInt(idFromUrl, 10)
      );

      if (matchingProduct) {
        console.log("Product found:", matchingProduct); // Лог для підтвердження
        setSelectedProduct(matchingProduct); // Встановлюємо знайдений продукт
      } else {
        console.warn(`No product matches id: ${idFromUrl}`); // Лог для відсутнього продукту
      }
    }
  }, [location.search, cat1]); // Хук оновлюється при зміні URL або масиву cat1

  // Імітація завантаження
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  // Ініціалізація лайків із LocalStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem("likedProducts");
    if (storedLikes) {
      setLikedProducts(JSON.parse(storedLikes));
    }
  }, []);

  // Перевірка, чи продукт улюблений
  useEffect(() => {
    if (selectedProduct) {
      const isProductLiked = likedProducts.some(
        (product) => product.id == selectedProduct.id
      );
      setIsLiked(isProductLiked);
    }
  }, [selectedProduct, likedProducts]);

  // Відкриття модального вікна
  const openModal = (product) => {
    setSelectedProduct(product);
  
    // Збереження поточної позиції скролу
    const currentScrollY = window.scrollY;
    setScrollPosition(currentScrollY);
  
    // Блокування прокрутки
    document.body.style.position = "";
    document.body.style.top = `-${currentScrollY}px`;
  
    // Додаємо параметр `id` до URL
    navigate(`${location.pathname}?id=${product.id}`, { replace: true });

    
  console.log("Scroll position saved:", scrollPosition);
  console.log("Scroll position restored:", scrollY);
  };
  
  


  // Закриття модального вікна
  const closeModal = () => {
    setSelectedProduct(null);
  
    // Відновлення прокрутки
    const scrollY = parseInt(document.body.style.top || "0", 10) * -1;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollY);
  
    // Видалення параметра `id` з URL
    navigate(location.pathname, { replace: true });


    
  console.log("Scroll position saved:", scrollPosition);
  console.log("Scroll position restored:", scrollY);
  };
  
  


  // Обробка лайків
  const handleLike = (product) => {
    let updatedLikes;
    if (isLiked) {
      updatedLikes = likedProducts.filter((item) => item.id != product.id);
    } else {
      updatedLikes = [...likedProducts, product];
    }
    setLikedProducts(updatedLikes);
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
    setIsLiked(!isLiked);
  };

  if (loading) {
    return <Loader />;
  }

  if (!cat1 || cat1.length == 0) {
    return <div>{t("noProductsFound")}</div>;
  }
// console.log(selectedProduct);
// console.log(openModal);

console.log(selectedProduct);

  return (
    <div className="subInner-container">
      <Link className="back" to="/Ring">
        {t("back.toJewelry")}
      </Link>

      <div className={selectedProduct === null ? "subInner" : "no-background"}>
        {cat1.map((product) =>
          product.category == paramValue ? (
            <div
              className="subInner-section"
              key={product.id}
              onClick={() => openModal(product)}
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
                  <p className="text-price">
                    {product.price && <span>Ціна: $ {product.price}</span>}
                  </p>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-info">
              <h2>
                Арт. продукту:
                <br /> {selectedProduct.sku}
              </h2>
              {selectedProduct.gold_assay && <p>Проба: {selectedProduct.gold_assay}</p>}
              {selectedProduct.gold_color && <p>Колір: {selectedProduct.gold_color}</p>}
              {selectedProduct.size && <p>Розмір: {selectedProduct.size}</p>}
              {selectedProduct.weight && <p>Вага: {selectedProduct.weight}</p>}
              {selectedProduct.price && <p>Ціна: {selectedProduct.price}</p>}
              {selectedProduct.
stone_characteristics && <p>Характеристики каміння: {selectedProduct.
  stone_characteristics}</p>}
              
              
            </div>
            <div className="modal-img">
              {selectedProduct.media_files?.map((item) =>
                item.photo ? <img key={item.id} src={item.photo} alt="Product" /> : null
              )}
            </div>
            <div className="modal-video">
              {selectedProduct.media_files?.map((item) =>
                item.video ? (
                  <video key={item.id} src={item.video} autoPlay controls />
                ) : null
              )}
            </div>
            <div className="heart" onClick={() => handleLike(selectedProduct)}>
              {!isLiked ? (
                <img
                  loading="lazy"
                  src="/img/wh.svg"
                  alt="Like"
                  style={{ width: "40px", height: "40px" }}
                />
              ) : (
                <img
                  loading="lazy"
                  src="/img/rh.svg"
                  alt="Unlike"
                  style={{ width: "40px", height: "40px" }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
