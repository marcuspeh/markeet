import { SET_INVENTORY } from "../actions/types";

const initialState = {
};

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case SET_INVENTORY:
            return {
            ...state,
            inventory: action.payload.data.product
            };
        default:
            return state;
    }
}