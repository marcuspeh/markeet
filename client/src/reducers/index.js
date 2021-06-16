import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import inventoryReducer from "./inventoryReducers";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  inventory: inventoryReducer,
  profile: profileReducer,
  errors: errorReducer,
});
