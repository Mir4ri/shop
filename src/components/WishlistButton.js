import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import numberOfProductsInWishlistSelector from "../selectors/numberOfProductsInWishlist";

export function WishlistButton({ productsQuantity }) {
  return <Link to="wishlist">Список бажаного ({productsQuantity})</Link>;
}

const mapState = state => ({
  productsQuantity: numberOfProductsInWishlistSelector(state.wishlist)
});

export default connect(mapState)(WishlistButton);
