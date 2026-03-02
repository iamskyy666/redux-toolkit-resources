import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // all reducers here, based on slice(s)/features
    counter: counterReducer,
    user: userReducer,
  },
});

// 04
