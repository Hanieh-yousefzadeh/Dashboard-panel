import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice"
import customersReducer from "@/redux/customersSlice"
import vendorReducer from "@/redux/vendorSlice"
import productReducer from "@/redux/productSlice"
import categoryReducer from "@/redux/categorySlice"


export const Store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customersReducer,
    vendors: vendorReducer,
    products: productReducer,
    categories : categoryReducer
  }
})

export type stateType = ReturnType<typeof Store.getState>
export type dispatchType = typeof Store.dispatch