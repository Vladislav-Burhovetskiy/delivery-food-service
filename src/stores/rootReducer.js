import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import productReducer from "./menu/productsSlice";
import userInfoReducer from "./userInfo/userInfoSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;
