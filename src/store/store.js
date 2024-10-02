import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        productsStore:productsSlice,
        cartStore:cartSlice
    }
})

export default store