import React from "react";
import { useAuth } from "../contexts/authContext";

const Information = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-y-4">
      <h4 className="text-lg font-medium text-neutral-800">
        Personal information
      </h4>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-neutral-500">Full Name</p>
          <p className="text-neutral-800">{user?.fullname}</p>
        </div>
        <div>
          <p className="text-neutral-500">Email</p>
          <p className="text-neutral-800">{user?.email}</p>
        </div>
        <div>
          <p className="text-neutral-500">Username</p>
          <p className="text-neutral-800">{user?.username}</p>
        </div>
        <div>
          <p className="text-neutral-500">Password</p>
          <p className="text-neutral-800">*********</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
