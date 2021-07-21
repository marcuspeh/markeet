import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHECKOUT_SUCCESS,
  CART_CHECKOUT_FAIL,
  CART_CHECKOUT_REQUEST,
  GET_SALES,
  UPDATE_CART_ITEMS,
} from "../actions/types";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload.product;
      const quantityToAdd = action.quantity.quantityToAdd;

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
              ? {
                  ...product,
                  id: product._id,
                  cartQuantity: product.cartQuantity + quantityToAdd,
                }
              : product
          ),
        };
      } else {
        // else spread cartItems with new item inside the array
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              ...item,
              id: item._id,
              cartQuantity: quantityToAdd,
            },
          ],
        };
      }

    case CART_REMOVE_ITEM:
      const itemToRemove = action.payload.product;
      const quantityToRemove = action.quantity.quantityToRemove;
      // search state.cartItems array for item
      const itemToRemoveExists = state.cartItems.find(
        (product) => product._id === itemToRemove._id
      );

      //if item exists then decreare quantity, if 0 quantity then remove
      if (
        itemToRemoveExists &&
        itemToRemove.cartQuantity - quantityToRemove >= 1
      ) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product._id === itemToRemove._id
              ? {
                  ...product,
                  cartQuantity: product.cartQuantity - quantityToRemove,
                }
              : product
          ),
        };
      } else if (
        itemToRemoveExists &&
        itemToRemove.cartQuantity - quantityToRemove < 1
      ) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (prod) => prod._id !== itemToRemove._id
          ),
        };
      } else {
        return {
          ...state,
        };
      }
    case UPDATE_CART_ITEMS:
      // const itemToUpdate = action.payload;
      // const itemToUpdateExists = state.cartItems.find(
      //   (product) => product._id === itemToUpdate._id
      // );
      // if (itemToUpdateExists) {
      //   return {
      //     ...state,
      //     cartItems: state.cartItems.map((product) =>
      //       product._id === itemToUpdate._id
      //         ? {
      //             ...product,
      //             quantity: itemToUpdate.quantity,
      //           }
      //         : product
      //     ),
      //   };
      // } else {
      //   return { ...state };
      // }
      return { ...state };
    case CART_CHECKOUT_REQUEST:
      return {
        ...state,
        checkoutLoading: true,
        checkoutSuccess: false,
      };

    case CART_CHECKOUT_SUCCESS:
      return {
        ...state,
        checkoutLoading: false,
        checkoutSuccess: true,
        cartItems: [],
        error: null,
      };

    case CART_CHECKOUT_FAIL:
      return {
        ...state,
        checkoutLoading: false,
        error: action.payload,
      };

    case GET_SALES:
      return {
        sales: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
