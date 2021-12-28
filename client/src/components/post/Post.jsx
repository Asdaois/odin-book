import React from "react";
import ProfilePicture from "../user/profile_picture/ProfilePicture";
import { Comment, Like } from "../icons";
import TimeAgo from "timeago-react";

const Post = ({ post }) => {
  console.log(post);
  const createAT = post.createdAt
  const date = new Date(createAT)

  return (
    <div className="w-full bg-slate-200 mt-4 rounded-xl">
      <div className="flex items-center p-4 pb-0">
        <ProfilePicture pictureLink={post.userID?.avatar} />
        <div className="flex flex-col ml-2">
          <span>{post.userID.displayName}</span>
          <span className="text-xs">
            <TimeAgo datetime={date} datatype='' />
          </span>
        </div>
      </div>
      <div className="">
        <p className="p-4">{post.content?.text}</p>
      </div>
      <div class="relative">
        <div class="w-[90%] m-auto border-t border-gray-300"></div>
      </div>
      <div className="flex justify-evenly my-2 w-4/5 mx-auto">
        <button className="button w-2/3 flex justify-center gap-2">
          <Comment />
          Comment
        </button>
        <button className="button w-1/3 flex justify-center gap-2">
          <Like />
          Like
        </button>
      </div>
      <div class="relative ">
        <div class="w-[90%] m-auto border-t border-gray-300"></div>
      </div>
      <div className="h-1"></div>
    </div>
  );
};

export default Post;
