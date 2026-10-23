
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockCategories, type Category } from "@/data/mock-categoris";

type CategoryState = {
    categories: Category[]
}

const initialState: CategoryState = {
    categories: mockCategories
}

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<Category>) => {
            state.categories.push(action.payload)
        },
        editCategory: (state, action: PayloadAction<Category>) => {
            const category = state.categories.find((category) => category.id === action.payload.id)
            if (category) {
                category.name = action.payload.name
            }
        },
        deleteCategory: (state, action: PayloadAction<number>) => {
            state.categories = state.categories.filter((category) => category.id !== action.payload)
        },
        setCategory: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload
        }
    }
})

export const { addCategory, editCategory, deleteCategory, setCategory } = categorySlice.actions
export default categorySlice.reducer
