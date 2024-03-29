import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const rtkQueryErrorLogger = (next) => (action) => {
    if (isRejectedWithValue(action)) {
        toast(action.payload);
    }
    return next(action);
};

export default rtkQueryErrorLogger;
