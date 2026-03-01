import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // all reducers here, based on slice(s)
    counter: counterReducer,
  },
});

// 04
