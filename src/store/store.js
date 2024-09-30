import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

const store = configureStore({
    reducer:{
        productsStore:productsSlice
    }
})

export default store