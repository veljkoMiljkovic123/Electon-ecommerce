import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[]
    },
    reducers:{
        saveAllProductsAction:(state,action)=>{
            console.log(action.payload);
            state.allProducts=action.payload
        }
    }
})

export const {saveAllProductsAction} = ProductSlice.actions
export default ProductSlice.reducer