import { combineReducers } from "redux";
import Products from "./products";
import Cart from "./cart";

const appReducers = combineReducers({
  Products,
  Cart
});
export default appReducers;
