import {
  SET_INVENTORY,
  SET_PRODUCT,
  GET_INVENTORY_REQUEST,
  GET_INVENTORY_SUCCESS,
  GET_INVENTORY_FAIL,
} from "../actions/types";

const initialState = {};
export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INVENTORY_REQUEST: {
      return {
        ...state,
        inventoryLoading: true,
      };
    }

    case GET_INVENTORY_SUCCESS:
      return {
        ...state,
        inventoryLoading: false,
        inventorySuccess: true,
        inventory: action.payload,
        error: null,
      };

    case GET_INVENTORY_FAIL:
      return {
        ...state,
        inventoryLoading: false,
        inventorySuccess: false,
        error: action.payload,
      };

    case SET_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
      };
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}
