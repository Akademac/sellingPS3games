import { combineReducers } from "redux";
import miniNavR from "./miniNav";
import gettingAllDataR from "./getAllData";
import addToCartR from "./addToCart";


export const reducers = combineReducers({
  miniNavR,
  gettingAllDataR,
  addToCartR
})