import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { mockOrders, type Order, type OrderStatus } from "@/data/mock-order"

type OrderState = {
    orders: Order[]
}

const initialState: OrderState = {
    orders: mockOrders
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        updateOrderStatus: (state, action: PayloadAction<{
            id: number,
            status: OrderStatus
        }>) => {
            const order = state.orders.find((item) => item.id === action.payload.id)

            if (order) {
                order.status = action.payload.status
            }
        },
    },
})

export const { updateOrderStatus } = orderSlice.actions
export default orderSlice.reducer