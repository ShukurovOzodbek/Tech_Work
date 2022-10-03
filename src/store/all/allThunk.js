import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAll = createAsyncThunk(
    'all/fetchAll',
    async () => {
        const { data } = await axios.get('http://localhost:3001/filters')

        return data
    } 
)