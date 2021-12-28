import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../api/usersApi";
import { signInEmail, signUpEmail } from "../../firebase/emailAuth.utils";

export const signUpUser = createAsyncThunk(
  "user/signup",
  /**
   * @param {{email, password, displayName}} newUser
   */
  async (newUser) => {
    const user = await signUpEmail(newUser);
    if (user.error) throw new Error(user.error);

    user.dateOfBirth = newUser.dateOfBirth;
    user.gender = newUser.gender;
    return user;
  }
);

export const signInUser = createAsyncThunk(
  "user/signin",
  async (email, password) => {
    const user = await signInEmail(email, password);
    if (user.error) throw new Error(user.error);
    return user;
  }
);

export const authenticationSuccess = (state, action) => {
  userApi.create(action.payload);
  state.current = action.payload;
  state.status = "success";
};

export const authenticationFailure = (state) => {
  state.status = "failed";
};
