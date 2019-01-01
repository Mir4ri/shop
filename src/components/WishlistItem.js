import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function WishlistItem({ product, remove }) {
  return (
    <div className="wishlist">
      <Link to={`/products/${product.id}`}>
        {product.name}
        <img src={product.image} alt={`product`} />
      </Link>
      <button onClick={remove}>Remove</button>
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
