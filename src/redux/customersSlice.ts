import { createSlice , type PayloadAction } from "@reduxjs/toolkit";
import { mockCustomers , type Customer } from "@/data/mock-customers";

type customerState = {
   customers : Customer[] 
}


const initialState :customerState = {
    customers : mockCustomers
}

const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers : {
        addCustomer : (state , action : PayloadAction<Customer>) =>{
            state.customers.push(action.payload)
        },
        editeCustomer : (state , action : PayloadAction<Customer>) => {
            const customer = state.customers.find((customer) => customer.id === action.payload.id)

            if(customer){
                customer.name = action.payload.name
                customer.email = action.payload.email
            }
        },
        deletecustomer : (state , action :PayloadAction<number> )=>{
            state.customers = state.customers.filter((customer) => customer.id !== action.payload)
        }
    }
})

export const { addCustomer , editeCustomer , deletecustomer} = customersSlice.actions
export default customersSlice.reducer


  