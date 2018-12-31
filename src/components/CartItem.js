import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function CartItem({ product, quantity, addOne, removeOne, remove }) {
  return (
    <div className="cart-item">
      <Link to={`/products/${product.id}`}>{product.name}</Link>{" "}
      <span>
        <img src={product.image} alt={`product`} />
      </span>
      <span>
        <button onClick={removeOne}>-1</button>
        {quantity}
        <button onClick={addOne}>+1</button>
      </span>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

const mapDispatch = ({ cart }, { quantity, product }) => ({
  addOne: () => cart.setQuantity(product.id, quantity + 1),
  removeOne: () => cart.setQuantity(product.id, quantity - 1),
  remove: () => cart.removeProduct(product.id)
});

export default connect(
  null,
  mapDispatch
)(CartItem);
