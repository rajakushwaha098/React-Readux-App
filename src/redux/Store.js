
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
// import addToCartSlice from './addToCartSlice';
export const store = configureStore({
    reducer:{
        cart:  CartSlice,
        // forAddTocart:addToCartSlice
        
   
    }
});

