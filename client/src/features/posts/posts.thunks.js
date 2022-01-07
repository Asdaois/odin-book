import { createAsyncThunk } from '@reduxjs/toolkit';

import { postApi } from '../../api/postApi';

export const getLastPosts = createAsyncThunk('posts/getLasts', async () => {
  const posts = await postApi.getLasts();
  return posts;
});

export const addCommentToPost = createAsyncThunk('post/addComment', async () => {});

export const postLiked = createAsyncThunk('post/liked', async ({ postID, userID }) => {
  const response = await postApi.like(postID, userID);
  return response;
});

export const addReplyComment = createAsyncThunk('post/replyComment', async () => {});
