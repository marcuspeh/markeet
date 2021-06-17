import { CART_ADD_ITEM } from "../actions/types";

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  const localStorageCart = JSON.parse(localStorage.getItem("cartItems"));
  if (localStorage) {
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
