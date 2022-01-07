import React from 'react';

import ProfilePicture from '../user/profile_picture';

const CommentContent = ({ comment, isReply }) => {
  const { content, userID: user, comments, postType } = comment;

  return (
    <div className="">
      <div className="flex gap-2">
        <ProfilePicture medium={isReply} />

        <div className="text-sm flex flex-col ">
          <div className="rounded-3xl bg-slate-400 p-2">
            <p className="font-bold">{user.displayName}</p>
            <p className="">{content.text}</p>
          </div>

          <div className="text-xs px-2">
            <span>Like</span>
            &nbsp;·&nbsp;
            <span>Reply</span>
          </div>
        </div>
      </div>

      {postType === 'Comment' && (
        <div className="ml-12 mt-2">
          {comments?.map((comment) => (
            <CommentContent comment={comment} isReply={true} key={comment._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentContent;
