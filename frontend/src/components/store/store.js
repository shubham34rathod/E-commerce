import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice.js'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let persistConfig={
    key:'iws',
    storage
}

let persistedReducer=persistReducer(persistConfig,productReducer)

export const store=configureStore({
    reducer:{
        products:persistedReducer
    }
})

export let persistedStore=persistStore(store)