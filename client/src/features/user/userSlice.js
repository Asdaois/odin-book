import { createSlice } from "@reduxjs/toolkit";
import {
  authenticationFailure,
  authenticationSuccess,
  signInUser,
  signUpUser,
} from "./user.thunks";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current: null,
    status: "pending",
  },
  extraReducers: {
    [signUpUser.fulfilled]: authenticationSuccess,
    [signUpUser.rejected]: authenticationFailure,
    [signInUser.fulfilled]: authenticationSuccess,
    [signInUser.rejected]: authenticationFailure,
  },
});

export default userSlice.reducer;
