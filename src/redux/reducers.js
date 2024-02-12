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
            .addCase(fetchVendorsData.pending, (state) => {
                state.loading = true;
                state.data = null;
            })
            .addCase(fetchVendorsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data.finalResult.filter(vendor=>vendor.type==="VENDOR");
            })
            .addCase(fetchVendorsData.rejected, (state) => {
                state.loading = false;
                state.error = 'An error occurred';
            });
    },
});

export const vendors = vendorsSlice.reducer;
