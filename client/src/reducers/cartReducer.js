import { CART_ADD_ITEM, GET_SALES } from "../actions/types";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload.product;

      // search state.cartItems array for item

      const itemExists = state.cartItems.find(
        (product) => product._id === item._id
      );

      // if already present then just increase quantity
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product._id === item._id
              ? { ...product, cartQuantity: product.cartQuantity + 1 }
              : product
          ),
        };
      } else {
        // else spread cartItems with new item inside the array
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, cartQuantity: 1 }],
        };
      }
      
    case GET_SALES:
      return {
        sales: action.payload
      };

    default:
      return state;
  }
};

export default cartReducer;
