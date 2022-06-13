import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import { placeOrderReducer, getUserOrdersReducer } from "./orderReducer";

const rootReducer = combineReducers({
  bookReducer,
  placeOrderReducer,
  getUserOrdersReducer,
});

export default rootReducer;
