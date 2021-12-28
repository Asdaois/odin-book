import { createSlice } from "@reduxjs/toolkit";
import { getLastPosts } from "./posts.thunks";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { lasts: [] },
  reducers: {},
  extraReducers: {
    [getLastPosts.fulfilled]: (state, action) => {
      state.lasts = action.payload;
    },
  },
});

export default postsSlice.reducer;
