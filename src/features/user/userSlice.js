import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// mw
export const addUser = createAsyncThunk("user/addUser", async (userData) => {
  const resp = await axios.post("http://localhost:3000/users", userData);
  return resp.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    status: "idle",
    error: null,
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.name = "";
        state.email = "";
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateName, updateEmail } = userSlice.actions;
export default userSlice.reducer;
