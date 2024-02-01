import { createSlice } from "@reduxjs/toolkit";


let Productslice=createSlice({
    name:"Productslice",
    initialState: {
        productlist:[],
        categorylist:[],
        cart:[],

    },
    reducers:{
        saveproduct:(state,action)=>{
            
            state.productlist=action.payload;
        },
        savecategories:(state,action)=>{
            
            state.categorylist=action.payload;
        },
        savetocart:(state,action)=>{
            
            state.cart.push(action.payload);
        },
    },
} );
export default Productslice.reducer;
export const{saveproduct,savecategories, savetocart}=Productslice.actions;