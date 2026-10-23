import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice"
import customersReducer from "@/redux/customersSlice"
import vendorReducer from "@/redux/vendorSlice"

export const Store = configureStore({
   reducer : {
     auth : authReducer,
     customers : customersReducer,
     vendors : vendorReducer
   }
})

export type stateType = ReturnType< typeof Store.getState>
export type dispatchType = typeof Store.dispatch