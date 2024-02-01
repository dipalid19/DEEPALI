import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combine.reducer";

const Store=configureStore({
    reducer,
});
export default Store;