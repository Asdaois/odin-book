import React from 'react';

import { useSelector } from 'react-redux';

import { postApi } from '../../api/postApi';
import { Like } from '../icons';

const ButtonLike = ({ postID }) => {
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    postApi.like(postID, user.current._id);
  };

  return (
    <button
      className="button w-1/3 flex justify-center gap-2"
      onClick={handleClick}
    >
      <Like />
      Like
    </button>
  );
};

export default ButtonLike;
