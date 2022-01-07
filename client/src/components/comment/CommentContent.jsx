import React from 'react';

import ProfilePicture from '../user/profile_picture';

const CommentContent = ({ comment }) => {
  const { content } = comment;

  return (
    <div className="flex gap-2">
      <ProfilePicture />

      <div className="text-sm flex flex-col ">
        <div className="rounded-3xl bg-slate-400 p-2">
          <p className="font-bold">{'Here the display name'}</p>
          <p className="">{content.text}</p>
        </div>

        <div className="text-xs px-2">
          <span>Like</span>
          &nbsp;·&nbsp;
          <span>Reply</span>
        </div>
      </div>
    </div>
  );
};

export default CommentContent;
