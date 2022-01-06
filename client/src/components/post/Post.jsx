import React, { useState } from "react";

import moment from "moment";

import { CommentInput } from "../comment";
import { CommentIcon, Like } from "../icons";
import ProfilePicture from "../user/profile_picture/ProfilePicture";

const Post = ({ post }) => {
  const [showInputComment, setShowInputComment] = useState(false);
  const createAT = post.createdAt;
  const date = new Date(createAT);

  return (
    <div className="w-full bg-slate-200 mt-4 rounded-xl p-4">
      <div className="flex items-center  pb-0">
        <ProfilePicture pictureLink={post.userID?.avatar} />
        <div className="flex flex-col ml-2">
          <span>{post.userID?.displayName}</span>
          <span className="text-xs">
            {/* <TimeAgo datetime={date} locale="en" /> */}
            <div className="">{moment(date).fromNow()}</div>
          </span>
        </div>
      </div>

      <div className="">
        <p className="">{post.content?.text}</p>
      </div>

      <div className="relative">
        <div className="w-[90%] m-auto border-t border-gray-300"></div>
      </div>

      <div className="flex gap-2 justify-evenly my-2 w-4/5 mx-auto">
        <button
          className="button w-2/3 flex justify-center gap-2"
          onClick={() => setShowInputComment(true)}
        >
          <CommentIcon />
          Comment
        </button>
        <button className="button w-1/3 flex justify-center gap-2">
          <Like />
          Like
        </button>
      </div>

      <div className="relative ">
        <div className="w-[90%] m-auto border-t border-gray-300"></div>
      </div>
      <div className="h-1"></div>

      <div className={`${showInputComment ? "block" : "hidden"}`}>
        <CommentInput postID={post._id} />
      </div>
    </div>
  );
};

export default Post;
