import React from "react";
import { useSelector } from "react-redux";
import { postApi } from "../../api/postApi";
import { userApi } from "../../api/usersApi";
import AutoSizeTextArea from "../custom_inputs/AutoSizeTextArea";
import { NameWithPicture } from "../user";

const PostForm = ({ onExit }) => {
  const user = useSelector((state) => state.user);

  /** Handle Post submit
   * @param {React.FormEvent<HTMLFormElement>} e 
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userID = user.current._id

    if (!userID) {
      const dbUser = await userApi.getByUid(user.current.uid);
      userID = dbUser._id;
    }

    const post = {
      userID,
      content: {
        text: e.target.children['contentText'].value
      }
    }
    
    postApi.create(post);
  };

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
      <form onSubmit={handleSubmit}>
        <AutoSizeTextArea name={"contentText"} />
        {/* TODO: When there are not data on teh textarea block the bottom */}
        <button
          className="w-full rounded-3xl text-center bg-blue-400 hover:bg-blue-300 "
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
