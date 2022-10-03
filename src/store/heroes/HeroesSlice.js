import { createSlice } from "@reduxjs/toolkit";
import { deleteData, fetchData, postData } from "./heroesThunk";

const initialState = {
    data: [],
    status: 'idle',
    filters: []
}

export const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
        },
        filterHero: (state, action) => {
            if(action.payload === 'all'){
                state.filters = state.data
            }else{
                state.filters = state.data.filter(item => item.element === action.payload)
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = 'error'
            })
        builder
            .addCase(deleteData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(deleteData.rejected, (state) => {
                state.status = 'error'
            })
        builder
            .addCase(postData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(postData.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload
            })
            .addCase(postData.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export const { deleteProduct, filterHero } = heroesSlice.actions
export default heroesSlice.reducer