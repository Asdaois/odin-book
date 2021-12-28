import React from "react";
import emptyProfile from "./emptyProfile.png";

const ProfilePicture = ({pictureLink}) => {
  return (
    <div>
      <img
        src={pictureLink || emptyProfile}
        alt="profile"
        className="rounded-full h-10 w-10 aspect-auto"
      />
    </div>
  );
};

export default ProfilePicture;
