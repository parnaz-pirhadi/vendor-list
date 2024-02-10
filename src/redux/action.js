import {  createAsyncThunk } from '@reduxjs/toolkit';

export const fetchVendorsData = createAsyncThunk(
    'vendors/fetchVendorsData',
    async (query, thunkAPI) => {
        try {
            const response = await fetch(`https://snappfood.ir/mobile/v3/restaurant/vendors-list${query}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
