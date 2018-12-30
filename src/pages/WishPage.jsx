import React from "react";
import { connect } from "react-redux";
import WishlistItem from "./../components/WishlistItem";

import numberOfProductsInWishlistSelector from "../selectors/numberOfProductsInWishlist";
import totalPriceSelector from "../selectors/totalPrice";

class WishlistPage extends React.Component {
  render() {
    const { wishlistItems, productsQuantity } = this.props;
    return (
      <div>
        <h1>Wishlist</h1>

        {wishlistItems.map(item => (
          <WishlistItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
        <br />
        <div>У списку бажаного {productsQuantity} продуктів</div>
      </div>
    );
  }
}

const mapState = ({ wishlist }) => ({
  wishlistItems: wishlist.items,
  productsQuantity: numberOfProductsInWishlistSelector(wishlist),
  totalPrice: totalPriceSelector(wishlist)
});

export default connect(mapState)(WishlistPage);
