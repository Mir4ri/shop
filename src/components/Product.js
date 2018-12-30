import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export function Product({
  product,
  category,
  addProductToCart,
  addProductToWishlist
}) {
  return (
    <div className="products">
      <span>
        <Link to={`/products/${product.id}`}>
          {product.name} ({category ? category.name : "без категорії"})
        </Link>
      </span>
      <button onClick={addProductToWishlist}>В список бажаного</button>
      <button onClick={addProductToCart}>В кошик</button>
      <span />
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProductToCart: () => dispatch.cart.addProduct(ownProps.product),
  addProductToWishlist: () => dispatch.wishlist.addProduct(ownProps.product)
});
export default connect(
  null,
  mapDispatchToProps
)(Product);
