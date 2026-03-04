import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/users/usersSlice";
import userReducer from "../features/user/userSlice";
import { apiSlice } from "../features/api/apiSlice";

// logger MW if we don't wanna use the React/Redux Devtools
// const loggerMiddleware = (storeAPI) => (next) => (action) => {
//   console.log(`Dispatching action:`, action);
//   const result = next(action);
//   console.log(`Next state:`, storeAPI.getState());
//   return result;
// };

export const store = configureStore({
  reducer: {
    // all reducers here, based on slice(s)/features
    counter: counterReducer,
    auth: authReducer,
    users: usersReducer,
    user: userReducer,
    // for rtk-query
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(loggerMiddleware),
    getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools:false
});
