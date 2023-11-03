import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { fetchAllProduct } from "../productAPI/productAPI";

let initialValue={
    login:false,
    products:null,
    brands:[],
    category:[]
}

export const productSlice=createSlice({
    name:'products',
    initialState:initialValue,
    reducers:{
        setAllProducts:(state,action)=>{
            // console.log('redux',action.payload)    
            state.products=action.payload
        }, 
        setCategory:(state,action)=>{
            // console.log('category',action.payload)    
            state.category=action.payload
        }, 
        setBrands:(state,action)=>{
            // console.log('redux_brands',action.payload)    
            state.brands=action.payload
        }, 
        handleFilterProduct:(state)=>{
            async function filter_product()
            {
                // await fetch(`https://dummyjson.com/products?limit=100`)
            }
        }   
    }
})

export const {setAllProducts,setCategory,setBrands}=productSlice.actions;
export default productSlice.reducer