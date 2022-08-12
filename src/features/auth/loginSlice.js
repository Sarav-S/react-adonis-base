import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: {}
}

export const loginSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user  = action.payload.data.user
        },
    },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions
export default loginSlice.reducer
