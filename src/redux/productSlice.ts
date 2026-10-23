
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockProducts, type Product } from "@/data/mock-products";

type ProductState = {
    products: Product[]
}

const initialState: ProductState = {
    products: mockProducts
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
       editProduct: (state, action: PayloadAction<Product>) => {
            const product = state.products.find((product) => product.id === action.payload.id)
            if (product) {
                product.name = action.payload.name
                product.image = action.payload.image
                product.categoryId = action.payload.categoryId
                product.price = action.payload.price
                product.stock = action.payload.stock
            }
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((product) => product.id !== action.payload)
        },
       setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    }
})

export const  {addProduct ,  editProduct , deleteProduct ,setProducts} = productSlice.actions
export default productSlice.reducer