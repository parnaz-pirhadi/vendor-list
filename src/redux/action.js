import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchVendorsData = createAsyncThunk(
    'vendors/`',
    async (query, thunkAPI) => {
        try {
            const response = await axios.get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${query}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
