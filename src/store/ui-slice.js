import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "uiSlice",
    initialState: { isCartVisiable: false },
    reducers: {
        toggle(state) {
            state.isCartVisiable = !state.isCartVisiable;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;