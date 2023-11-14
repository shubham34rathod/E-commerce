import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { fetchAllProduct } from "../productAPI/productAPI";

let initialValue={
    login:false,
    userData:null,
    products:null,
    resetUserId:'',
    totalCartItems:0,
    brands:[],
    category:[],
    currentOrder:null
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
        setUser:(state,action)=>{
            // console.log(action.payload);
            state.userData=action.payload
            state.login=true
            // console.log(state.user);
        },
        logOutUser:(state)=>{
            state.login=false
            state.userData=null
            console.log(state.login);
        },
        setCartCount:(state,action)=>{
            state.totalCartItems=action.payload
        },
        setResetPassEmail:(state,action)=>{
            state.resetUserId=action.payload
        },
        setCurrentOrder:(state,action)=>{
            state.currentOrder=action.payload
        },
        handleFilterProduct:(state)=>{
            async function filter_product()
            {
                // await fetch(`https://dummyjson.com/products?limit=100`)
            }
        }   
    }
})

export const {setAllProducts,setCategory,setBrands,setUser,logOutUser,setCartCount,setResetPassEmail,setCurrentOrder}=productSlice.actions;
export default productSlice.reducer