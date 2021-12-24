import React from "react";
import { useSelector } from "react-redux";
import { userApi } from "../../api/usersApi";

export const FriendRequestButton = ({ friendID }) => {
  const user = useSelector((state) => state.user);

  const sendRequest = () => {
    userApi.sentFriendRequest(user.current._id, friendID);
  };

  return <button onClick={sendRequest}>Send Friend</button>;
};
