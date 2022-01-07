import React, { useState } from 'react';

import moment from 'moment';

import ProfilePicture from '../user/profile_picture';
import { CommentInput } from './';

const CommentContent = ({ comment, isReply }) => {
  const [isReplying, setIsReplying] = useState(false);
  const { content, userID: user, comments, postType } = comment;

  return (
    <div className="">
      <div className="flex gap-2">
        <ProfilePicture medium={isReply} />

        <div className="text-sm flex flex-col ">
          <div className="rounded-3xl bg-slate-400 p-2">
            <p className="font-bold capitalize">{user?.displayName}</p>
            <p className="first-letter:capitalize">{content?.text}</p>
          </div>

          <div className="text-xs px-2">
            <span className="hover:cursor-pointer">Like</span>
            &nbsp;·&nbsp;
            <span className="hover:cursor-pointer" onClick={()=>setIsReplying(true)}>Reply</span>
            &nbsp;·&nbsp;
            <span>{moment(new Date(comment.createdAt)).fromNow()}</span>
          </div>
        </div>
      </div>

      {postType === 'Comment' && (
        <div className="ml-12 mt-2">
          {comments?.map((comment) => (
            <CommentContent comment={comment} isReply={true} key={comment._id} />
          ))}
          {postType === 'Comment' && (
            <div className={`${isReplying ? 'block' : 'hidden'}`}>
              <CommentInput postID={comment._id} postType={'SubComment'} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentContent;
