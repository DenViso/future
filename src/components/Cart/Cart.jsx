import React, { useState, useEffect } from "react";
import "./cart.css";

export const Cart = ({ setShowCart, t }) => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div>
      <div className="cart">
        {/* <p>{t("cart.text")}</p> */}
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                {item.media_files && item.media_files.length > 0 && (
                  <img
                    src={item.media_files[0].photo}
                    alt={item.sku}
                    className="cart-item-image"
                  />
                )}
                <div className="cart-text">
                <h2>Арт. продукту:<br /> {item.sku}</h2> 
              {item.gold_assay && <p>Проба :<br /> {item.gold_assay}</p>} 
              {item.gold_color && <p>Колір :<br /> {item.gold_color}</p>} 
              {item.size && <p>Розмір :<br /> {item.size}</p>} 
              {item.stone_characteristics && <p>Характеристики каміння :<br /> {item.stone_characteristics}</p>} 
              {item.weight && <p>Вага виробу :<br /> {item.weight}</p>} 
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <img src="/img/img/logo/del.png" alt="" />
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
      </div>
    </div>
  );
};
