const wishlist = {
  state: {
    items: []
  },
  reducers: {
    addProduct(state, product) {
      const item = state.items.find(item => item.product.id === product.id);

      if (item) {
        item.quantity = 1;
      } else {
        state.items.push({
          product: product,
          quantity: 1
        });
      }
    },
    removeProduct(state, productId) {
      state.items = state.items.filter(item => item.product.id !== productId);
    },
    setQuantity(state, productId, quantity) {
      const item = state.items.find(item => item.product.id === productId);
      if (quantity === 0) {
        state.items = state.items.filter(item => item.product.id !== productId);
      } else {
        item.quantity = quantity;
      }
    }
  }
};

export default wishlist;

const STORAGE_KEY = "wishlist";

export function loadStateFromLocalStorageWishlist() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(storageData) || wishlist.state;
}

export function saveStateToLocalStorageWishlist(store) {
  const wishlistState = store.getState().wishlist;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistState));
}
