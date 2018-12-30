export default function numberOfProductsInWishlist(wishlist) {
  return wishlist.items.reduce((prev, item) => prev + item.quantity, 0);
}
