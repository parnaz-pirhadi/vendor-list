import { configureStore } from "@reduxjs/toolkit";
import { vendors } from "./reducers";

const store = configureStore({
    reducer: { vendors: vendors },
});

export default store;
