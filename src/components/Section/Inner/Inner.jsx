// ----варіант 1 ісходнік
// import React, { useState, useEffect } from "react";
// import "../inner.css";
// import { Loader } from "../SubSection/Loader";
// import { useParams, Link, useNavigate, useLocation } from "react-router-dom";

// export const Inner = ({ t, cat1 }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { paramValue } = useParams();

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [likedProducts, setLikedProducts] = useState([]);
//   const [isLiked, setIsLiked] = useState(false);
//   const [usdRate, setUsdRate] = useState(null);

//   // Отримання курсу USD з API НБУ
//   useEffect(() => {
//     fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json")
//       .then(response => response.json())
//       .then(data => {
//         if (data.length > 0) {
//           setUsdRate(data[0].rate * 1.01); // Додаємо 2% до курсу
//         }
//       })
//       .catch(error => console.error("Помилка отримання курсу валют:", error));
//   }, []);

// console.log(usdRate);


//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const idFromUrl = searchParams.get("id");

//     if (idFromUrl && Array.isArray(cat1) && cat1.length > 0) {
//       const matchingProduct = cat1.find(
//         (product) => product.id === parseInt(idFromUrl, 10)
//       );

//       if (matchingProduct) {
//         setSelectedProduct(matchingProduct);
//       }
//     }
//   }, [location.search, cat1]);

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(delay);
//   }, []);

//   useEffect(() => {
//     const storedLikes = localStorage.getItem("likedProducts");
//     if (storedLikes) {
//       setLikedProducts(JSON.parse(storedLikes));
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedProduct) {
//       const isProductLiked = likedProducts.some(
//         (product) => product.id == selectedProduct.id
//       );
//       setIsLiked(isProductLiked);
//     }
//   }, [selectedProduct, likedProducts]);

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     navigate(`${location.pathname}?id=${product.id}`, { replace: true });
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     navigate(location.pathname, { replace: true });
//   };

//   const handleLike = (product) => {
//     let updatedLikes;
//     if (isLiked) {
//       updatedLikes = likedProducts.filter((item) => item.id != product.id);
//     } else {
//       updatedLikes = [...likedProducts, product];
//     }
//     setLikedProducts(updatedLikes);
//     localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
//     setIsLiked(!isLiked);
//   };

//   if (loading) {
//     return <Loader />;
//   }

//   if (!cat1 || cat1.length === 0) {
//     return <div>{t("noProductsFound")}</div>;
//   }

//   return (
//     <div className="subInner-container">
//       <Link className="back" to="/Ring">
//         {t("back.toJewelry")}
//       </Link>

//       <div className={selectedProduct == null ? "subInner" : "no-background"}>
//         {cat1.map((product) =>
//           product.category == paramValue ? (
//             <div
//               className="subInner-section"
//               key={product.id}
//               onClick={() => openModal(product)}
//             >
//               <div className="subInner-section-img">
//                 {product.media_files && product.media_files.length > 0 ? (
//                   <img
//                     loading="lazy"
//                     src={product.media_files[0].photo || "/img/noImg.png"}
//                     alt={product.sku}
//                   />
//                 ) : (
//                   <img loading="lazy" src="/img/noImg.png" alt="No Image" />
//                 )}
//                 <div className="subInner-info-text">
//                   <p className="text-sku">
//                     <span>Арт:</span> {product.sku}
//                   </p>
//                   <p className="text-price">
//                     {product.price && <span>Ціна: $ {product.price}</span>}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : null
//         )}
//       </div>

//       {selectedProduct && (
//         <div className="modal">
//           <div className="modal-content" style={{ height: "auto" }}>
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             <div className="modal-info">
//               <h2>
//                 Арт. продукту:
//                 <br /> {selectedProduct.sku}
//               </h2>
//               {selectedProduct.gold_assay && <p>Проба: {selectedProduct.gold_assay}</p>}
//               {selectedProduct.gold_color && <p>Колір: {selectedProduct.gold_color}</p>}
//               {selectedProduct.size && <p>Розмір: {selectedProduct.size}</p>}
//               {selectedProduct.weight && <p>Вага: {selectedProduct.weight}</p>}
//               {selectedProduct.price && <p>Ціна: $ {selectedProduct.price}</p>}
//               {/* перевірити ціну на гривні */}
//               {/* отримати формулу на розрахунок курсу валют */}
//               {usdRate && selectedProduct.price && (
//                 <p>Ціна в грн: {(
//                   // 1*
//                    selectedProduct.price 
//                    * usdRate).toFixed(2)} грн</p>
//                )} 

//               {selectedProduct.stone_characteristics && (
//                 <p>Характеристики каміння: {selectedProduct.stone_characteristics}</p>
//               )}
//             </div>
//             <div className="modal-img">
//               {selectedProduct.media_files?.map((item) =>
//                 item.photo ? <img key={item.id} src={item.photo} alt="Product" /> : null
//               )}
//             </div>
//             <div className="modal-video">
//               {selectedProduct.media_files?.map((item) =>
//                 item.video ? (
//                   <video key={item.id} src={item.video} autoPlay controls />
//                 ) : null
//               )}
//             </div>
//             <div className="heart" onClick={() => handleLike(selectedProduct)}>
//               {!isLiked ? (
//                 <img
//                   loading="lazy"
//                   src="/img/wh.svg"
//                   alt="Like"
//                   style={{ width: "40px", height: "40px" }}
//                 />
//               ) : (
//                 <img
//                   loading="lazy"
//                   src="/img/rh.svg"
//                   alt="Unlike"
//                   style={{ width: "40px", height: "40px" }}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// ----варіант 2 з виправлиним позіонуванням але не працює скрол в модалці

// import React, { useState, useEffect } from "react";
// import "../inner.css";
// import { Loader } from "../SubSection/Loader";
// import { useParams, Link, useNavigate, useLocation } from "react-router-dom";

// export const Inner = ({ t, cat1 }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { paramValue } = useParams();

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [likedProducts, setLikedProducts] = useState([]);
//   const [isLiked, setIsLiked] = useState(false);
//   const [usdRate, setUsdRate] = useState(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json")
//       .then(response => response.json())
//       .then(data => {
//         if (data.length > 0) {
//           setUsdRate(data[0].rate * 1.01);
//         }
//       })
//       .catch(error => console.error("Помилка отримання курсу валют:", error));
//   }, []);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const idFromUrl = searchParams.get("id");

//     if (idFromUrl && Array.isArray(cat1) && cat1.length > 0) {
//       const matchingProduct = cat1.find(
//         (product) => product.id === parseInt(idFromUrl, 10)
//       );
//       if (matchingProduct) {
//         setSelectedProduct(matchingProduct);
//       }
//     }
//   }, [location.search, cat1]);

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(delay);
//   }, []);

//   useEffect(() => {
//     const storedLikes = localStorage.getItem("likedProducts");
//     if (storedLikes) {
//       setLikedProducts(JSON.parse(storedLikes));
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedProduct) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [selectedProduct]);

//   useEffect(() => {
//     if (selectedProduct) {
//       const isProductLiked = likedProducts.some(
//         (product) => product.id == selectedProduct.id
//       );
//       setIsLiked(isProductLiked);
//     }
//   }, [selectedProduct, likedProducts]);

//   const openModal = (product) => {
//     setScrollPosition(window.scrollY);
//     setSelectedProduct(product);
//     navigate(`${location.pathname}?id=${product.id}`, { replace: true });
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     navigate(location.pathname, { replace: true });
//     setTimeout(() => {
//       window.scrollTo(0, scrollPosition);
//     }, 0);
//   };

//   const handleLike = (product) => {
//     let updatedLikes;
//     if (isLiked) {
//       updatedLikes = likedProducts.filter((item) => item.id != product.id);
//     } else {
//       updatedLikes = [...likedProducts, product];
//     }
//     setLikedProducts(updatedLikes);
//     localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
//     setIsLiked(!isLiked);
//   };

//   if (loading) {
//     return <Loader />;
//   }

//   if (!cat1 || cat1.length === 0) {
//     return <div>{t("noProductsFound")}</div>;
//   }

//   return (
//     <div className="subInner-container">
//       <Link className="back" to="/Ring">
//         {t("back.toJewelry")}
//       </Link>

//       <div className={selectedProduct == null ? "subInner" : "no-background"}>
//         {cat1.map((product) =>
//           product.category == paramValue ? (
//             <div
//               className="subInner-section"
//               key={product.id}
//               onClick={() => openModal(product)}
//             >
//               <div className="subInner-section-img">
//                 {product.media_files && product.media_files.length > 0 ? (
//                   <img
//                     loading="lazy"
//                     src={product.media_files[0].photo || "/img/noImg.png"}
//                     alt={product.sku}
//                   />
//                 ) : (
//                   <img loading="lazy" src="/img/noImg.png" alt="No Image" />
//                 )}
//                 <div className="subInner-info-text">
//                   <p className="text-sku">
//                     <span>Арт:</span> {product.sku}
//                   </p>
//                   <p className="text-price">
//                     {product.price && <span>Ціна: $ {product.price}</span>}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : null
//         )}
//       </div>

//       {selectedProduct && (
//         <div className="modal">
//           <div className="modal-content" style={{ height: "auto", maxHeight: "90vh"
//             // , overflowY: "auto" 
//             }}>
//             <span className="close" onClick={closeModal}>&times;</span>
//             <div className="modal-info">
//               <h2>
//                 Арт. продукту:
//                 <br /> {selectedProduct.sku}
//               </h2>
//               {selectedProduct.gold_assay && <p>Проба: {selectedProduct.gold_assay}</p>}
//               {selectedProduct.gold_color && <p>Колір: {selectedProduct.gold_color}</p>}
//               {selectedProduct.size && <p>Розмір: {selectedProduct.size}</p>}
//               {selectedProduct.weight && <p>Вага: {selectedProduct.weight}</p>}
//               {selectedProduct.price && <p>Ціна: $ {selectedProduct.price}</p>}
//               {/* перевірити ціну на гривні */}
//               {/* отримати формулу на розрахунок курсу валют */}
//               {usdRate && selectedProduct.price && (
//                 <p>Ціна в грн: {(
//                   // 1*
//                    selectedProduct.price 
//                    * usdRate).toFixed(2)} грн</p>
//                )} 

//               {selectedProduct.stone_characteristics && (
//                 <p>Характеристики каміння: {selectedProduct.stone_characteristics}</p>
//               )}
//             </div>
//             <div className="modal-img">
//               {selectedProduct.media_files?.map((item) =>
//                 item.photo ? <img key={item.id} src={item.photo} alt="Product" /> : null
//               )}
//             </div>
//             <div className="modal-video">
//               {selectedProduct.media_files?.map((item) =>
//                 item.video ? (
//                   <video key={item.id} src={item.video} autoPlay controls />
//                 ) : null
//               )}
//             </div>
//             <div className="heart" onClick={() => handleLike(selectedProduct)}>
//               <img
//                 loading="lazy"
//                 src={isLiked ? "/img/rh.svg" : "/img/wh.svg"}
//                 alt={isLiked ? "Unlike" : "Like"}
//                 style={{ width: "40px", height: "40px" }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// ---вар 3 з окремою модалкою

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
