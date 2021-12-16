import { createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./user.thunks";

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
  },
});

export default userSlice.reducer;
