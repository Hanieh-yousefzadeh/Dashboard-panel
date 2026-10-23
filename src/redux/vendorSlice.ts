
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockVendors, type Vendor } from "@/data/mock-vendors";

type vendorState = {
    vendors: Vendor[]
}

const initialState: vendorState = {
    vendors: mockVendors
}

const vendorSlice = createSlice({
    name: "vendors",
    initialState,
    reducers: {
        addVendor: (state, action: PayloadAction<Vendor>) => {
            state.vendors.push(action.payload)
        },
        editeVendor: (state, action: PayloadAction<Vendor>) => {
            const vendor = state.vendors.find((vendor) => vendor.id === action.payload.id)
            if (vendor) {
                vendor.name = action.payload.name
                vendor.email = action.payload.email
                vendor.address = action.payload.address
            }
        },
        deleteVendor: (state, action: PayloadAction<number>) => {
            state.vendors = state.vendors.filter((vendor) => vendor.id !== action.payload)
        },
        setVendors: (state, action: PayloadAction<Vendor[]>) => {
            state.vendors = action.payload
        }
    }
})

export const {addVendor ,editeVendor , deleteVendor , setVendors} = vendorSlice.actions
export default vendorSlice.reducer