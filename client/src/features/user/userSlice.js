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
  reducers: {
    updateUser: authenticationSuccess
  },
  extraReducers: {
    [signUpUser.fulfilled]: authenticationSuccess,
    [signUpUser.rejected]: authenticationFailure,
    [signInUser.fulfilled]: authenticationSuccess,
    [signInUser.rejected]: authenticationFailure,
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
