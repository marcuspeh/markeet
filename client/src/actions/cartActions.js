import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/types";

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  const localStorageCart = JSON.parse(localStorage.getItem("cartItems"));

  if (localStorageCart) {
    getState().cart.cartItems = localStorageCart;
  }
  dispatch({
    type: CART_ADD_ITEM,
    payload: product,
    //   id: product._id,
    //   title: product.title,
    //   price: product.price,
    //   quantity: quantity,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart =
  (product, quantity) => async (dispatch, getState) => {
    // this function should only be available if there are items in the cart so no need to check if localStorage cart contains anything

    const localStorageCart = JSON.parse(localStorage.getItem("cartItems"));

    if (localStorageCart) {
      getState().cart.cartItems = localStorageCart;
    }
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: product,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
