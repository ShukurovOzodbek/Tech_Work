import { createSlice } from "@reduxjs/toolkit";
import { fetchAll } from "./allThunk";


export const allSlice = createSlice({
    name: 'all',
    initialState: {
        data: [],
        status: 'idle'
    },
    extraReducers(builder){
        builder
            .addCase(fetchAll.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAll.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(fetchAll.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export default allSlice.reducer