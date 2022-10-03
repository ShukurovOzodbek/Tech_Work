import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
    'heroes/fetchData',
    async () => {
        const { data } = await axios.get('http://localhost:3001/heroes')

        return data
    }
)

export const deleteData = createAsyncThunk(
    'heroes/deleteData',
    async (id) => {
        const { data } = await axios.delete(`http://localhost:3001/heroes/${id}`)

        return data
    }
)

export const postData = createAsyncThunk(
    'heroes/postData',
    async (obj) => {
        const { data } = await axios.post(`http://localhost:3001/heroes/`, obj)

        return data
    }
)