import { GET_PROFILE, UPDATE_PROFILE } from "../actions/types";

const initialState = {};

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.payload.user,
                updated: action.payload.updated
            };
        default:
            return state;
    }
}