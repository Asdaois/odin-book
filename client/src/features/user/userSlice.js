import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../firebase/googleAuth.utils";
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
    updateUser: (state, action) => {
      console.log(action.payload);
      state.current = action.payload;
      state.status = "success"
    },
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
