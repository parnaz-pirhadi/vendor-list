import {  createAsyncThunk } from '@reduxjs/toolkit';

export const fetchVendorsData = createAsyncThunk(
    'vendors/fetchVendorsData',
    async (query, thunkAPI) => {
        let input={
            "page-size":10,
            page:query,
            "lat":"35.754",
            "long":"51.328"
        }
        try {
            const response = await fetch(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?page-size=30&lat=35.754&long=51.328&page=${query}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
