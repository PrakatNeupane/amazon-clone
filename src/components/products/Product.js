import React from "react";

export const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>

        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>

      <img
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184l/10127019._SY475_.jpg"
        alt=""
      />

      <button>Add to Basket</button>
    </div>
  );
};
