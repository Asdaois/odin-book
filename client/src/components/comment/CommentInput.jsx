import React from 'react';

import { useSelector } from 'react-redux';

import ProfilePicture from '../user/profile_picture';

const CommentInput = ({ postID }) => {
  const user = useSelector((state) => state.user);
  /**
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.elements);
  };

  return (
    <div className="flex justify-between items-center w-full gap-2">
      <ProfilePicture />
      <form
        action={"" /*TODO: Here the path to the server*/}
        method="post"
        className="w-full flex items-center"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="userID" value={user.current?._id} />
        <div className="rounded-3xl bg-slate-400 px-4 w-full h-10 flex items-center">
          <input
            type="text"
            name="content-text"
            className="bg-transparent outline-none w-full placeholder-slate-700"
            placeholder="Write a comment..."
          />
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
