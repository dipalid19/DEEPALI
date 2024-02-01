import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product.slice";

const reducer=combineReducers({
    product:productReducer,
    
});
export default reducer;