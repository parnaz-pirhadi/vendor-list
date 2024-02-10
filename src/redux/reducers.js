import {createSlice} from '@reduxjs/toolkit';
import {fetchVendorsData} from "./action";

const vendorsSlice = createSlice({
    name: 'vendors',
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchVendorsData.pending, (state, action) => {
                state.loading = false;
                state.data = null;
            })
            .addCase(fetchVendorsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchVendorsData.rejected, (state, action) => {
                state.loading = false;
               state.error = action.payload;
            });
    },
});

export const vendors = vendorsSlice.reducer;
