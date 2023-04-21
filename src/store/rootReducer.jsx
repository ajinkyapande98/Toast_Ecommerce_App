import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./Reducer/cartSlice";
import PreviousOrderReducer from "./Reducer/PreviousOrder";

const rootReducer = combineReducers({
  cart: cartReducer,
  PreviousOrder: PreviousOrderReducer,
});

export default rootReducer;
