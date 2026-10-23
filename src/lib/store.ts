import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice"
import customersReducer from "@/redux/customersSlice"

export const Store = configureStore({
   reducer : {
     auth : authReducer,
     customers : customersReducer
   }
})

export type stateType = ReturnType< typeof Store.getState>
export type dispatchType = typeof Store.dispatch