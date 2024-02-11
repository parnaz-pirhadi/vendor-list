import { configureStore } from "@reduxjs/toolkit";
import { vendors } from "./reducers";
// import rtkQueryErrorLogger from "./rtkQueryErrorLogger";
// const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkQueryErrorLogger);
const middleware = (getDefaultMiddleware) => getDefaultMiddleware();

const store = configureStore({
    reducer: { vendors: vendors },
    middleware
});

export default store;
