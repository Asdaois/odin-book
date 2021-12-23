import React from "react";
import AutoSizeTextArea from "../custom_inputs/AutoSizeTextArea";
import { NameWithPicture } from "../user";

const PostForm = ({ onExit }) => {
  return (
    <div className="w-full">
      <div className="w-full text-center flex justify-between items-center">
        <div className="w-40">
          <NameWithPicture />
        </div>
        <span className="text-xl">Create Post</span>
        <div className="cursor-pointer w-40" onClick={onExit}>
          Exit
        </div>
      </div>
      <hr className="w-full mt-2" />
      <form action="">
      <AutoSizeTextArea />
      {/* TODO: When there are not data on teh textarea block the bottom */}
      <button
        className="w-full rounded-3xl text-center bg-blue-400 hover:bg-blue-300 "
      >
        Post
      </button>
      </form>
    </div>
  );
};

export default PostForm;
