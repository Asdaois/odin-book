import React from "react";
import ProfilePicture from "../user/profile_picture/ProfilePicture";
import { Comment, Like } from "../icons";
import TimeAgo from 'timeago-react'

const Post = ({ post }) => {
  return (
    <div className="w-full bg-slate-200 mt-4 rounded-xl">
      <div className="flex items-center p-4 pb-0">
        <ProfilePicture pictureLink={"http://placeimg.com/640/480 "} />
        <div className="flex flex-col ml-2">
          <span>{/* TODO: Here the displayName */ "Display Name"}</span>
          <span className="text-xs">
            <TimeAgo
              datetime={/* TODO: Here the creation time*/ 1640633896401}
            />
          </span>
        </div>
      </div>
      <div className="">
        <p className="p-4">
          {
            /* TODO: Here the content */ "Et nesciunt cupiditate corporis et numquam. Nostrum voluptas neque voluptates. Sit autem et quas. Sit qui necessitatibus officiis magni. Occaecati alias voluptatem voluptas et sequi repudiandae voluptates. Exercitationem enim sint natus rerum vitae molestias et."
          }
        </p>
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
