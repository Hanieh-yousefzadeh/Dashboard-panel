import { createSlice , type PayloadAction } from "@reduxjs/toolkit";
import type { AuthUser } from "@/types/auth";


type Auth = {
    user : AuthUser | null
}

const initialState : Auth = {
    user : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    logout : (state) =>{
        state.user = null
    }

    }
})

export const {login , logout} = authSlice.actions
export default authSlice.reducer