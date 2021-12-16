import { createSlice } from "@reduxjs/toolkit";
import { signInUser, signUpUser } from "./user.thunks";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current: null,
    status: "pending",
  },
  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => {
      state.current = action.payload;
      state.status = "success";
      console.log(action);
    },
    [signUpUser.rejected]: (state) => {
      state.status = "failed";
    },
    [signInUser.fulfilled]: (state, action) => {
      state.current = action.payload;
      state.status = "success";
    },
    [signInUser.rejected]: (state, action) => {
      // TODO: Dar un bonito mensaje indicando que paso
      state.status = "failed";
    },
  },
});

export default userSlice.reducer;
