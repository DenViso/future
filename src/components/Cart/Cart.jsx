import React, { useState } from "react";
import "./cart.css";
export const Cart = ({ setShowCart, t }) => {
  //   const [isCartVisible, setIsCartVisible] = useState(false);

  //   const toggleCartVisibility = () => {
  //       setIsCartVisible(!isCartVisible);
  //   };

  return (
    <div>
      <div className="cart">
        <p>{t("cart.text")}</p>
        <button className="close-btn" onClick={() => setShowCart(false)}>
          {t("cart.button")}
        </button>
      </div>
    </div>
  );
};
// export default Cart
