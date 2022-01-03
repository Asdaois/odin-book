import React, { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getLastPosts } from '../../features/posts/posts.thunks';
import { Post } from '../post';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastPosts());
  }, [dispatch]);

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <div>
      {posts.lasts?.map((post)=> <Post post={post} key={posts._id}/>)}
    </div>
  );
};

export default Posts;
