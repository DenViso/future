import React from "react";
import "./cart.css";

export const Modal = ({ product, onClose }) => {
  return (
    <div className="modal-cart">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-info">
          <h2>Арт. продукту:<br /> {product.sku}</h2> 
          {product.gold_assay && <p>Проба :<br /> {product.gold_assay}</p>} 
          {product.gold_color && <p>Колір :<br /> {product.gold_color}</p>} 
          {product.size && <p>Розмір :<br /> {product.size}</p>} 
          {product.stone_characteristics && <p>Характеристики каміння :<br /> {product.stone_characteristics}</p>} 
          {product.weight && <p>Вага виробу :<br /> {product.weight}</p>} 
        </div>
        <div className="modal-img">
          {product.media_files && product.media_files.length > 0 && product.media_files.map((item) => (
            <img key={item.id} src={item.photo} alt="" />
          ))}
        </div>
        <div className="modal-video">
          {product.media_files && product.media_files.length > 0 && product.media_files.map(
            (item) =>
              item.video && (
                <video key={item.id} src={item.video} autoPlay controls />
              )
          )}
        </div>
      </div>
    </div>
  );
};
