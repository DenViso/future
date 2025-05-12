// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "../inner.css";

// export const ProductPage = ({ cat1, usdRate, t }) => {
//   const { productId } = useParams();
//   const navigate = useNavigate();
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isLiked, setIsLiked] = useState(false);
//   const [likedProducts, setLikedProducts] = useState([]);

//   console.log(usdRate);

//   useEffect(() => {
//   if (Array.isArray(cat1)) {
//     const product = cat1.find((p) => p.id === parseInt(productId, 10));
//     if (product) {
//       setSelectedProduct(product);
//     }
//   }
// }, [productId, cat1]);


//   useEffect(() => {
//     const storedLikes = localStorage.getItem("likedProducts");
//     if (storedLikes) {
//       setLikedProducts(JSON.parse(storedLikes));
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedProduct) {
//       setIsLiked(likedProducts.some((p) => p.id === selectedProduct.id));
//     }
//   }, [selectedProduct, likedProducts]);

//   const handleLike = () => {
//     let updatedLikes;
//     if (isLiked) {
//       updatedLikes = likedProducts.filter(
//         (item) => item.id !== selectedProduct.id
//       );
//     } else {
//       updatedLikes = [...likedProducts, selectedProduct];
//     }
//     setLikedProducts(updatedLikes);
//     localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
//     setIsLiked(!isLiked);
//   };

//   if (!selectedProduct) return <div>{t("noProductsFound")}</div>;
//   console.log(selectedProduct);

//   return (
//     <div className="product-page">
//       <button onClick={() => navigate(-1)} className="back">
//         {t("back.toJewelry")}
//       </button>

//       <div className="modal-content">
//         <h2 className="modal-title">
//           <span>{t("product.title")}</span> {selectedProduct.sku}
//         </h2>
//         <div className="modal-info">
//           {selectedProduct.gold_assay && (
//             <p>
//               <span>{t("product.p1")}</span> {selectedProduct.gold_assay}
//             </p>
//           )}
//           {selectedProduct.gold_color && (
//             <p>
//               <span>{t("product.p2")}</span> {selectedProduct.gold_color}
//             </p>
//           )}
//           {selectedProduct.size && (
//             <p>
//               <span>{t("product.p3")}</span> {selectedProduct.size}
//             </p>
//           )}
//           {selectedProduct.weight && (
//             <p>
//               <span>{t("product.p4")}</span> {selectedProduct.weight}
//             </p>
//           )}

//           {selectedProduct.stone_characteristics && (
//             <p>
//               <span>{t("product.p5")}</span>{" "}
//               {selectedProduct.stone_characteristics}
//             </p>
//           )}
//           {/*  */}
//           { selectedProduct.certificate &&(
//             <p><span>{t("product.p8")}</span> : {selectedProduct.certificate}</p>
//           )}
//           {usdRate && selectedProduct.price && (
//             <p>
//               <span>{t("product.p6")}</span>{" "}
//               {(selectedProduct.price * usdRate).toFixed(2)} {t("product.p7")}
//             </p>
//           )}
//         </div>

//         <div className="modal-img">
//           {selectedProduct.media_files?.map((item) =>
//             item.photo ? (
//               <img key={item.id} src={item.photo} alt="Product" />
//             ) : null
//           )}
//         </div>
//         <div className="modal-video">
//           {selectedProduct.media_files?.map((item) =>
//             item.video ? (
//               <video key={item.id} src={item.video} autoPlay controls />
//             ) : null
//           )}
//         </div>

//         <div className="heart" onClick={handleLike}>
//           <img
//             loading="lazy"
//             src={isLiked ? "/img/rh.svg" : "/img/wh.svg"}
//             alt={isLiked ? "Unlike" : "Like"}
//             style={{ width: "40px", height: "40px" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../inner.css";

export const ProductPage = ({ cat1, usdRate, t }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]);

  // Завантаження продукту з перевіркою масиву
  useEffect(() => {
    if (!Array.isArray(cat1)) return;

    const product = cat1.find(p => p.id === Number(productId));
    setSelectedProduct(product || null);
  }, [productId, cat1]);

  // Завантаження лайків з localStorage
  useEffect(() => {
    const stored = localStorage.getItem("likedProducts");
    if (stored) {
      try {
        setLikedProducts(JSON.parse(stored));
      } catch {
        setLikedProducts([]);
      }
    }
  }, []);

  // Перевірка чи товар лайкнутий
  useEffect(() => {
    if (selectedProduct) {
      setIsLiked(likedProducts.some(p => p.id === selectedProduct.id));
    }
  }, [selectedProduct, likedProducts]);

  // Обробка лайків
  const handleLike = () => {
    if (!selectedProduct) return;

    const updated = isLiked
      ? likedProducts.filter(item => item.id !== selectedProduct.id)
      : [...likedProducts, selectedProduct];

    setLikedProducts(updated);
    localStorage.setItem("likedProducts", JSON.stringify(updated));
    setIsLiked(!isLiked);
  };

  if (!selectedProduct) return <div>{t("noProductsFound")}</div>;

  return (
    <div className="product-page">
      <button onClick={() => navigate(-1)} className="back">
        {t("back.toJewelry")}
      </button>

      <div className="modal-content">
        <h2 className="modal-title">
          <span>{t("product.title")}</span> {selectedProduct.sku}
        </h2>

        <div className="modal-info">
          {selectedProduct.gold_assay && (
            <p><span>{t("product.p1")}</span> {selectedProduct.gold_assay}</p>
          )}
          {selectedProduct.gold_color && (
            <p><span>{t("product.p2")}</span> {selectedProduct.gold_color}</p>
          )}
          {selectedProduct.size && (
            <p><span>{t("product.p3")}</span> {selectedProduct.size}</p>
          )}
          {selectedProduct.weight && (
            <p><span>{t("product.p4")}</span> {selectedProduct.weight}</p>
          )}
          {selectedProduct.stone_characteristics && (
            <p><span>{t("product.p5")}</span> {selectedProduct.stone_characteristics}</p>
          )}
          {selectedProduct.certificate && (
            <p><span>{t("product.p8")}</span> {selectedProduct.certificate}</p>
          )}
          {usdRate && selectedProduct.price && (
            <p>
              <span>{t("product.p6")}</span>{" "}
              {(selectedProduct.price * usdRate).toFixed(2)} {t("product.p7")}
            </p>
          )}
        </div>

        <div className="modal-img">
          {selectedProduct.media_files?.map(item =>
            item.photo ? (
              <img key={item.id || item.photo} src={item.photo} alt="Product" />
            ) : null
          )}
        </div>

        <div className="modal-video">
          {selectedProduct.media_files?.map(item =>
            item.video ? (
              <video
                key={item.id || item.video}
                src={item.video}
                autoPlay
                controls
                muted
                playsInline
                preload="metadata"
              />
            ) : null
          )}
        </div>

        <div className="heart" onClick={handleLike}>
          <img
            loading="lazy"
            src={isLiked ? "/img/rh.svg" : "/img/wh.svg"}
            alt={isLiked ? "Unlike" : "Like"}
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};
