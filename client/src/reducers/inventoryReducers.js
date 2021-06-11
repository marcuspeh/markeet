import { SET_INVENTORY, SET_PRODUCT } from "../actions/types";

const initialState = {};

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case SET_INVENTORY:
            return {
                ...state,
                inventory: action.payload
            };
        case SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}