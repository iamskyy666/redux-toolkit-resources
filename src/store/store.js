import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    // all reducers here, based on slice(s)/features
    counter: counterReducer,
    auth: authReducer,
  },
});

