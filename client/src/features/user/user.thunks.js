import { createAsyncThunk } from "@reduxjs/toolkit"
import { signUpEmail } from "../../firebase/emailAuth.utils"

export const signUpUser = createAsyncThunk(
  'user/signup',
  /**
   * @param {{email, password, displayName}} newUser 
   */
  async (newUser) => {
    const user = await signUpEmail(newUser);
    return user;
  }
)