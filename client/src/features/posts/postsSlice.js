import { createSlice } from '@reduxjs/toolkit';

import { addCommentToPost, addReplyComment, getLastPosts, postLiked } from './posts.thunks';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: { lasts: [] },
  reducers: {},
  extraReducers: {
    [getLastPosts.fulfilled]: (state, action) => {
      state.lasts = action.payload;
    },
    [addCommentToPost.fulfilled]: (state, action) => {},
    [addReplyComment.fulfilled]: (state, action) => {},
    [postLiked.fulfilled]: (state, action) => {},
  },
});

export default postsSlice.reducer;
