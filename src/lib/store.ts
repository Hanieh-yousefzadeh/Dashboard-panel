import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice"

export const Store = configureStore({
   reducer : {
     auth : authReducer
   }
})

export type stateType = ReturnType< typeof Store.getState>
export type dispatchType = typeof Store.dispatch