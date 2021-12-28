import { createAsyncThunk} from '@reduxjs/toolkit'
import { postApi } from '../../api/postApi';

export const getLastPosts = createAsyncThunk('posts/getLasts' , async () => {
  const posts = await postApi.getLasts()
  return posts
});