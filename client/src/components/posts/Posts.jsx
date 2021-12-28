import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLastPosts } from "../../features/posts/posts.thunks";
import { Post } from "../post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastPosts());
  }, []);

  useEffect(() => {
    console.log(posts.lasts)
  }, [posts])

  return (
    <div>
      {posts.lasts?.map((post)=> <Post post={post}/>)}
    </div>
  );
};

export default Posts;
