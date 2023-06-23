import React from "react";
import { useAuth } from "../contexts/authContext";
import hi from "../assets/icons/hi.svg";
import { getRandomColor } from "../helpers/getRandomColor";
const ProfileImage = () => {
  const { user } = useAuth();
  const randomColor = getRandomColor();
  return (
    <div className="flex items-center gap-x-4">
      <div
        className={`flex items-center justify-center h-20 sm:h-24 w-20 sm:w-24 bg-${randomColor} text-3xl sm:text-5xl text-neutral-800`}
      >
        {user?.fullname.slice(0, 1)}
      </div>
      <div className="text-neutral-800">
        <p className="flex items-center gap-x-1 text-sm sm:text-base">
          Hi!
          <img src={hi} />
        </p>
        <h3 className="flex flex-wrap font-semibold text-2xl sm:text-4xl">
          {user?.fullname}
        </h3>
      </div>
    </div>
  );
};

export default ProfileImage;
