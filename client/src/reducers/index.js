import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import inventoryReducer from "./inventoryReducers";

export default combineReducers({
    auth: authReducer,
    inventory: inventoryReducer,
    errors: errorReducer
});