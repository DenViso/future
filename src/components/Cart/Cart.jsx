// import React, { useState, useEffect } from "react";
// import "./cart.css";
// import { Modal } from "./Modal"; // Додамо компонент модального вікна

// export const Cart = ({ setShowCart, t }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const storedItems = localStorage.getItem("likedProducts");
//     if (storedItems) {
//       setCartItems(JSON.parse(storedItems));
//     }
//   }, []);

//   const removeFromCart = (productId) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== productId);
//     setCartItems(updatedCartItems);
//     localStorage.setItem("likedProducts", JSON.stringify(updatedCartItems));
//   };

//   const openModal = (product) => {
//     setShowModal(true);
//     setSelectedProduct(product);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };
//   console.log(selectedProduct);
//   return (
//     <>
//       <div className="cart">
//         {cartItems.length > 0 ? (
//           <div className={showModal ? "no-bacground" : "cart-conteiner"}>
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="cart-item"
//                 onClick={() => openModal(item)}
//               >
//                 {item.media_files && item.media_files.length > 0 && (
//                   <img
//                     src={item.media_files[0].photo}
//                     alt={item.sku}
//                     className="cart-item-image"
//                   />
//                 )}
//                 <div className="cart-text">
//                   <h2>
//                     Арт. продукту:
//                     <br /> {item.sku}
//                   </h2>
//                   {item.gold_assay && (
//                     <p>
//                       Проба :<br /> {item.gold_assay}
//                     </p>
//                   )}
//                   {item.gold_color && (
//                     <p>
//                       Колір :<br /> {item.gold_color}
//                     </p>
//                   )}
//                   {item.size && (
//                     <p>
//                       Розмір :<br /> {item.size}
//                     </p>
//                   )}
//                   {item.stone_characteristics && (
//                     <p>
//                       Характеристики каміння :<br />{" "}
//                       {item.stone_characteristics}
//                     </p>
//                   )}
//                   {item.weight && (
//                     <p>
//                       Вага виробу :<br /> {item.weight}
//                     </p>
//                   )}
//                   {item.price && (
//                     <p>
//                       Ціна :<br /> {item.price}
//                     </p>
//                   )}
//                 </div>
//                 <button
//                   className="remove-btn"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     removeFromCart(item.id);
//                   }}
//                 >
//                   <img src="/img/img/logo/del.png" alt="" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>{t("cart.empty")}</p>
//         )}
//         <button className="close-btn" onClick={() => setShowCart(false)}>
//           {t("cart.button")}
//         </button>
//         {showModal && <Modal product={selectedProduct} onClose={closeModal} />}
//       </div>
//     </>
//   );
// };


import React, { useState, useEffect } from "react";
import "./cart.css";
import { Modal } from "./Modal";

export const Cart = ({ setShowCart, t }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // правильна ініціалізація
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedItems = localStorage.getItem("likedProducts");
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem("likedProducts", JSON.stringify(updatedCartItems));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="cart">
        {cartItems.length > 0 ? (
          <div className={showModal ? "no-background" : "cart-container"}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item"
                onClick={() => openModal(item)}
              >
                {item.media_files?.length > 0 && (
                  <img
                    src={item.media_files[0].photo}
                    alt={item.sku}
                    className="cart-item-image"
                  />
                )}
                <div className="cart-text">
                  <h2>Арт. продукту:<br />{item.sku}</h2>
                  {item.gold_assay && <p>Проба:<br />{item.gold_assay}</p>}
                  {item.gold_color && <p>Колір:<br />{item.gold_color}</p>}
                  {item.size && <p>Розмір:<br />{item.size}</p>}
                  {item.stone_characteristics && (
                    <p>Характеристики каміння:<br />{item.stone_characteristics}</p>
                  )}
                  {item.weight && <p>Вага виробу:<br />{item.weight}</p>}
                  {item.price && <p>Ціна:<br />{item.price}</p>}
                </div>
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(item.id);
                  }}
                >
                  <img src="/img/img/logo/del.png" alt="Видалити" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>{t("cart.empty")}</p>
        )}
        <button className="close-btn" onClick={() => setShowCart(false)}>
          {t("cart.button")}
        </button>
        {showModal && selectedProduct && (
          <Modal product={selectedProduct} onClose={closeModal} />
        )}
      </div>
    </>
  );
};
