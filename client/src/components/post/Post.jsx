import React from "react";
import ProfilePicture from "../user/profile_picture/ProfilePicture";
import TimeAgo from "timeago-react";

const Post = ({ post }) => {
  return (
    <div className="w-full bg-slate-200 mt-4 rounded-xl">
      <div className="flex items-center p-4 pb-0">
        <ProfilePicture pictureLink={"http://placeimg.com/640/480 "} />
        <div className="flex flex-col ml-2">
          <span>Display Name</span>
          <span className="text-xs">
            <TimeAgo datetime={1640633896401} />
          </span>
        </div>
      </div>
      <div className="">
        <p className="p-4">
          Eos natus ut. Laboriosam veritatis non recusandae. Aut alias sint. Nam
          quas tempora tempora quos doloribus illo nostrum incidunt. Nam eaque
          dolor facilis. Libero cum voluptatem distinctio et nulla. Animi nobis
          eveniet impedit eligendi. Temporibus modi ipsum accusantium voluptas
          nemo et tempore cumque. Illum et harum magnam et accusantium rem neque
          maxime. Maiores odio aspernatur vel expedita vero qui. Debitis error
          alias minima similique consequatur pariatur ipsa earum. Itaque
          quisquam omnis et assumenda nisi repudiandae accusamus a iusto. Ipsum
          unde consequatur eligendi autem quod sint et veritatis.
        </p>
      </div>
      <div class="relative">
        <div class="w-[90%] m-auto border-t border-gray-300"></div>
      </div>
      <div className="flex justify-evenly my-2 w-4/5 mx-auto">
        <button className="button w-2/3">Comment</button>
        <button className="button w-1/3">Like</button>
      </div>
      <div class="relative ">
        <div class="w-[90%] m-auto border-t border-gray-300"></div>
      </div>
      <div className="h-1"></div>
    </div>
  );
};

export default Post;
