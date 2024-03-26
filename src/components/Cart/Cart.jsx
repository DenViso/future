import React, { useState } from "react";
import "./cart.css";
export const Cart = ({ setShowCart }) => {
  //   const [isCartVisible, setIsCartVisible] = useState(false);

  //   const toggleCartVisibility = () => {
  //       setIsCartVisible(!isCartVisible);
  //   };

  return (
    <div>
      <div className="cart">
        <p>You`r Cart is empty</p>
        <button className="close-btn" onClick={() => setShowCart(false)}>
          close 
        </button>
      </div>
    </div>
  );
};
// export default Cart
