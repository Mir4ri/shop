import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function WishlistItem({ product, quantity, addOne, removeOne, remove }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      <button onClick={removeOne}>-1</button>
      {quantity}
      <button onClick={addOne}>+1</button> <button onClick={remove}>x</button>
    </div>
  );
}

const mapDispatch = ({ wishlist }, { quantity, product }) => ({
  addOne: () => wishlist.setQuantity(product.id, quantity + 1),
  removeOne: () => wishlist.setQuantity(product.id, quantity - 1),
  remove: () => wishlist.removeProduct(product.id)
});

export default connect(
  null,
  mapDispatch
)(WishlistItem);
