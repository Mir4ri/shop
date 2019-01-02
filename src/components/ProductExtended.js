import React from "react";

export default function({ product }) {
  return (
    <div className="product_description">
      <span>
        <h1>{product.name}</h1>
      </span>
      <span>
        <img src={product.image} alt={`product`} />
      </span>
      <span>{product.price}$ </span>
      <span>{product.description}</span>
    </div>
  );
}
